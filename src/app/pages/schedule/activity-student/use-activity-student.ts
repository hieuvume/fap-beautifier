import { useState } from 'react';
import {
  useFapData,
  useFapDataCustom,
} from '@/app/providers/fap-data-provider';

interface Option {
  value: string;
  label: string;
}

interface Room {
  id: string;
  name: string;
  capacity: number;
  type: 'theatre' | 'meeting' | 'classroom' | 'computer' | 'guest';
  note: string;
  availability: Record<string, boolean>; // Map of slotId -> availability status
}

interface Slot {
  id: string;
  time: string;
}

// Helper to extract room type from room name or note
const getRoomType = (roomName: string, roomNote: string): Room['type'] => {
  const normalizedName = roomName.toLowerCase();
  const normalizedNote = roomNote.toLowerCase();

  if (
    normalizedNote.includes('theoretical') ||
    normalizedNote.includes('theatre')
  ) {
    return 'theatre';
  } else if (normalizedNote.includes('meeting')) {
    return 'meeting';
  } else if (
    normalizedNote.includes('computer') ||
    normalizedNote.includes('lab')
  ) {
    return 'computer';
  } else if (normalizedNote.includes('guest')) {
    return 'guest';
  }
  
  // Default to classroom
  return 'classroom';
};

export const useActivityStudent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setData } = useFapData();
  
  // Fetch data from FAP
  const {
    campusData,
    areaData,
    roomsData,
    slotsData,
    viewStateValue,
    viewStateGeneratorValue,
    eventValidationValue,
  } = useFapDataCustom({
    campusData: (original) => {
      // Extract campus options from the HTML
      const selectElement = original?.querySelector(
        '#ctl00_mainContent_ddlCampus',
      );
      if (!selectElement) return [];
      
      const options: Option[] = [];
      const optionElements = selectElement.querySelectorAll('option');
      
      optionElements.forEach((option) => {
        options.push({
          value: option.getAttribute('value') || '',
          label: option.textContent || '',
        });
      });
      
      return options;
    },
    
    areaData: (original) => {
      // Extract area options from the HTML
      const selectElement = original?.querySelector(
        '#ctl00_mainContent_ddlArea',
      );
      if (!selectElement) return [];
      
      const options: Option[] = [];
      const optionElements = selectElement.querySelectorAll('option');
      
      optionElements.forEach((option) => {
        options.push({
          value: option.getAttribute('value') || '',
          label: option.textContent || '',
        });
      });
      
      return options;
    },
    
    roomsData: (original) => {
      // Extract room data from the table
      if (!original) return [];
      
      const roomData: Room[] = [];
      
      // Try multiple selectors to find room cells
      let roomCells = original.querySelectorAll('.first_column a');
      
      // If not found, try alternative selectors
      if (!roomCells || roomCells.length === 0) {
        roomCells = original.querySelectorAll('tr td:first-child a');
      }
      
      if (!roomCells || roomCells.length === 0) {
        roomCells = original.querySelectorAll('table tr td:first-child a');
      }
      
      console.log('Found room cells:', roomCells.length);
      
      roomCells.forEach((roomCell, index) => {
        console.log(`Room cell ${index + 1} HTML:`, roomCell.outerHTML);
        
        try {
          // Try to extract from font > b structure
          let roomElement =
            roomCell.querySelector('font b') ||
            roomCell.querySelector('font') ||
            roomCell;
          let roomText = roomElement.textContent || '';
          console.log(`Room text for cell ${index + 1}:`, roomText);
          
          // Try different regex patterns to extract room name and capacity
          let match = roomText.match(/([^(]+)\((\d+)\)/);
          if (!match) {
            // Try without the capacity in case it's 0 or missing
            match = [roomText, roomText.replace(/\(\d*\)$/, '').trim(), '0'];
          }
          
          if (match) {
            const roomName = match[1].trim();
            const capacity = parseInt(match[2], 10) || 0;
            
            // Extract room note from the tooltip span
            const tooltipSpan = roomCell.querySelector('span.custom');
            let roomNote = `${roomName} - Class`;
            
            if (tooltipSpan) {
              const emElement = tooltipSpan.querySelector('em');
              const noteTexts = Array.from(tooltipSpan.childNodes)
                .filter((node) => node.nodeType === 3) // Text nodes
                .map((node) => node.textContent?.trim())
                .filter(Boolean);
                
              if (emElement && emElement.textContent) {
                roomNote = `${emElement.textContent.trim()} - ${noteTexts.pop() || 'Class'}`;
              }
            }
            
            // Determine room type from color or content
            let roomType: Room['type'] = 'classroom';
            
            // Get the parent font element for color
            const fontParent = roomCell.querySelector('font');
            if (fontParent) {
              const color =
                fontParent.getAttribute('color')?.toLowerCase() || '';
              
              if (color.includes('00ee') || color === 'blue')
                roomType = 'theatre';
              else if (color.includes('ef92') || color === 'orange')
                roomType = 'meeting';
              else if (color === 'green') roomType = 'classroom';
              else if (color === 'black') roomType = 'computer';
              else if (color.includes('7373')) roomType = 'guest';
              else roomType = getRoomType(roomName, roomNote);
            }
            
            // Extract room availability for each slot
            const parentRow = roomCell.closest('tr');
            const availability: Record<string, boolean> = {};
            
            if (parentRow) {
              // Get all slot cells (excluding the first one which is the room cell)
              const slotCells = parentRow.querySelectorAll(
                'td.timetable_column',
              );
              
              slotCells.forEach((cell, slotIndex) => {
                // Slot IDs are 1-indexed
                const slotId = (slotIndex + 1).toString();
                
                // Room is available if it has a booking link inside
                const bookingLink = cell.querySelector('a.book_room');
                availability[slotId] = !!bookingLink;
              });
            }
            
            roomData.push({
              id: `${index + 1}`,
              name: roomName,
              capacity,
              type: roomType,
              note: roomNote,
              availability,
            });
          }
        } catch (error) {
          console.error(`Error processing room cell ${index + 1}:`, error);
        }
      });
      
      console.log('Extracted room data:', roomData);
      return roomData;
    },
    
    slotsData: (original) => {
      // Extract slot data from the table headers
      if (!original) return [];
      
      const slotData: Slot[] = [];
      
      // Try multiple selectors to find slot headers
      let slotHeaders: NodeListOf<Element> | null = null;
      
      // First try the selector for the structure shown in the example
      slotHeaders = original.querySelectorAll(
        'thead tr:nth-child(2) th:not(:first-child)',
      );
      
      // If not found, try alternative selectors
      if (!slotHeaders || slotHeaders.length === 0) {
        slotHeaders = original.querySelectorAll(
          'table tr:nth-child(2) th:not(:first-child)',
        );
      }
      
      if (!slotHeaders || slotHeaders.length === 0) {
        slotHeaders = original.querySelectorAll('th');
      }
      
      console.log('Found slot headers:', slotHeaders.length);
      
      slotHeaders.forEach((header, index) => {
        const headerText = header.innerHTML || '';
        console.log(`Header ${index + 1} text:`, headerText);
        
        // Check if this is actually a slot header (contains "Slot" text)
        if (headerText.includes('Slot')) {
          // Fix: Updated regex to handle both formats of BR tag
          const slotMatch = headerText.match(/Slot (\d+)<br[^>]*>\(([^)]+)\)/i);
          
          if (slotMatch) {
            console.log(
              `Matched slot ${slotMatch[1]} with time ${slotMatch[2]}`,
            );
            slotData.push({
              id: slotMatch[1],
              time: slotMatch[2],
            });
          } else {
            console.log('Failed to match header:', headerText);
          }
        }
      });
      
      console.log('Extracted slot data:', slotData);
      return slotData;
    },

    viewStateValue: (original) => {
      const viewState = original?.querySelector(
        '#__VIEWSTATE',
      ) as HTMLInputElement;
      return viewState ? viewState.value : '';
    },
    viewStateGeneratorValue: (original) => {
      const viewStateGenerator = original?.querySelector(
        '#__VIEWSTATEGENERATOR',
      ) as HTMLInputElement;
      return viewStateGenerator ? viewStateGenerator.value : '';
    },
    eventValidationValue: (original) => {
      const eventValidation = original?.querySelector(
        '#__EVENTVALIDATION',
      ) as HTMLInputElement;
      return eventValidation ? eventValidation.value : '';
    },
  });

  // Function to fetch room data when View button is clicked
  const fetchRoomData = async (selectedCampus: string, selectedArea: string, date: Date) => {
    if (!selectedCampus || !selectedArea) return;
    
    setIsLoading(true);
    try {
      const formattedDate = date
        .toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
        .replace(/\//g, '/');
      
      const response = await fetch('/Schedule/ActivityStudent.aspx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          __EVENTTARGET: '',
          __EVENTARGUMENT: '',
          __LASTFOCUS: '',
          __VIEWSTATE: viewStateValue,
          __VIEWSTATEGENERATOR: viewStateGeneratorValue,
          __EVENTVALIDATION: eventValidationValue,
          ctl00$mainContent$ddlCampus: selectedCampus,
          ctl00$mainContent$ddlArea: selectedArea,
          ctl00$mainContent$txtDateTime: formattedDate,
          ctl00$mainContent$btnView: 'View',
        }).toString(),
      });

      const data = await response.text();
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(data, 'text/html');

      // Update the data in fapDataProvider
      // Get the container element instead of the whole document
      const container = htmlDoc.querySelector('.container');
      if (container instanceof Element) {
        setData(container);
      } else {
        console.error('Failed to find container element in response');
      }
      
    } catch (error) {
      console.error('Error fetching room data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fetchRoomData,
    isLoading,
    extractedData: {
      campusData,
      areaData,
      roomsData,
      slotsData,
    },
  };
};
