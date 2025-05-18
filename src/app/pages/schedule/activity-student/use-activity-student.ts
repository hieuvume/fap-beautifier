import { useState, useEffect, useRef, useCallback } from 'react';
import { useFapDataCustom } from '@/app/providers/fap-data-provider';

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
}

interface Slot {
  id: string;
  time: string;
}

interface BookingData {
  id: string;
  day: string;
  slot: string;
  room: string;
  area: string;
  purpose: string;
  students: string[];
}

// Helper to extract room type from room name or note
const getRoomType = (roomName: string, roomNote: string): Room['type'] => {
  const normalizedName = roomName.toLowerCase();
  const normalizedNote = roomNote.toLowerCase();

  if (normalizedNote.includes('theoretical') || normalizedNote.includes('theatre')) {
    return 'theatre';
  } else if (normalizedNote.includes('meeting')) {
    return 'meeting';
  } else if (normalizedNote.includes('computer') || normalizedNote.includes('lab')) {
    return 'computer';
  } else if (normalizedNote.includes('guest')) {
    return 'guest';
  }
  
  // Default to classroom
  return 'classroom';
};

export const useActivityStudent = () => {
  const initialMountRef = useRef(true);
  const dataProcessedRef = useRef(false);
  
  // Date state
  const [date, setDate] = useState<Date>(new Date());
  
  // Campus and area states
  const [campusOptions, setCampusOptions] = useState<Option[]>([]);
  const [areaOptions, setAreaOptions] = useState<Option[]>([]);
  const [selectedCampus, setSelectedCampus] = useState<string>('');
  const [selectedArea, setSelectedArea] = useState<string>('');
  
  // Room and slot states
  const [rooms, setRooms] = useState<Room[]>([]);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [bookings] = useState<BookingData[]>([]);
  
  // Fetch data from FAP
  const { campusData, areaData, roomsData, slotsData } = useFapDataCustom({
    campusData: (original) => {
      // Extract campus options from the HTML
      const selectElement = original?.querySelector('#ctl00_mainContent_ddlCampus');
      if (!selectElement) return [];
      
      const options: Option[] = [];
      const optionElements = selectElement.querySelectorAll('option');
      
      optionElements.forEach((option) => {
        options.push({
          value: option.getAttribute('value') || '',
          label: option.textContent || ''
        });
      });
      
      return options;
    },
    
    areaData: (original) => {
      // Extract area options from the HTML
      const selectElement = original?.querySelector('#ctl00_mainContent_ddlArea');
      if (!selectElement) return [];
      
      const options: Option[] = [];
      const optionElements = selectElement.querySelectorAll('option');
      
      optionElements.forEach((option) => {
        options.push({
          value: option.getAttribute('value') || '',
          label: option.textContent || ''
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
      
      console.log("Found room cells:", roomCells.length);
      
      roomCells.forEach((roomCell, index) => {
        console.log(`Room cell ${index + 1} HTML:`, roomCell.outerHTML);
        
        try {
          // Try to extract from font > b structure
          let roomElement = roomCell.querySelector('font b') || roomCell.querySelector('font') || roomCell;
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
                .filter(node => node.nodeType === 3) // Text nodes
                .map(node => node.textContent?.trim())
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
              const color = fontParent.getAttribute('color')?.toLowerCase() || '';
              
              if (color.includes('00ee') || color === 'blue') roomType = 'theatre';
              else if (color.includes('ef92') || color === 'orange') roomType = 'meeting';
              else if (color === 'green') roomType = 'classroom';
              else if (color === 'black') roomType = 'computer';
              else if (color.includes('7373')) roomType = 'guest';
              else roomType = getRoomType(roomName, roomNote);
            }
            
            roomData.push({
              id: `${index + 1}`,
              name: roomName,
              capacity,
              type: roomType,
              note: roomNote
            });
          }
        } catch (error) {
          console.error(`Error processing room cell ${index + 1}:`, error);
        }
      });
      
      console.log("Extracted room data:", roomData);
      return roomData;
    },
    
    slotsData: (original) => {
      // Extract slot data from the table headers
      if (!original) return [];
      
      const slotData: Slot[] = [];
      
      // Try multiple selectors to find slot headers
      let slotHeaders: NodeListOf<Element> | null = null;
      
      // First try the selector for the structure shown in the example
      slotHeaders = original.querySelectorAll('thead tr:nth-child(2) th:not(:first-child)');
      
      // If not found, try alternative selectors
      if (!slotHeaders || slotHeaders.length === 0) {
        slotHeaders = original.querySelectorAll('table tr:nth-child(2) th:not(:first-child)');
      }
      
      if (!slotHeaders || slotHeaders.length === 0) {
        slotHeaders = original.querySelectorAll('th');
      }
      
      console.log("Found slot headers:", slotHeaders.length);
      
      slotHeaders.forEach((header, index) => {
        const headerText = header.innerHTML || '';
        console.log(`Header ${index + 1} text:`, headerText);
        
        // Check if this is actually a slot header (contains "Slot" text)
        if (headerText.includes('Slot')) {
          // Fix: Updated regex to handle both formats of BR tag
          const slotMatch = headerText.match(/Slot (\d+)<br[^>]*>\(([^)]+)\)/i);
          
          if (slotMatch) {
            console.log(`Matched slot ${slotMatch[1]} with time ${slotMatch[2]}`);
            slotData.push({
              id: slotMatch[1],
              time: slotMatch[2]
            });
          } else {
            console.log("Failed to match header:", headerText);
          }
        }
      });
      
      console.log("Extracted slot data:", slotData);
      return slotData;
    }
  });

  // Handlers for campus and area selection
  const handleCampusChange = (value: string) => {
    setSelectedCampus(value);
    // In a real app, you would fetch the areas for the selected campus
  };

  const handleAreaChange = (value: string) => {
    setSelectedArea(value);
    // In a real app, you would fetch the rooms for the selected area
  };

  // Set initial data when component mounts - now with guards against infinite updates
  useEffect(() => {
    // Skip if we've already processed this data
    if (dataProcessedRef.current) return;
    
    // Check if we have actual data to process
    const hasRealData = Boolean(
      (campusData && campusData.length > 0) || 
      (areaData && areaData.length > 0) || 
      (roomsData && roomsData.length > 0) || 
      (slotsData && slotsData.length > 0)
    );
    
    if (hasRealData) {
      // Mark that we've processed real data
      dataProcessedRef.current = true;
      
      // Process campus data if available
      if (campusData && campusData.length > 0 && campusOptions.length === 0) {
        setCampusOptions(campusData);
        const selectedOption = campusData.find(option => option.label.includes('FU-HL'));
        setSelectedCampus(selectedOption?.value || campusData[0].value);
      }
      
      // Process area data if available
      if (areaData && areaData.length > 0 && areaOptions.length === 0) {
        setAreaOptions(areaData);
        const selectedOption = areaData.find(option => option.label.includes('Sân bóng'));
        setSelectedArea(selectedOption?.value || areaData[0].value);
      }
      
      // Process room data if available
      if (roomsData && roomsData.length > 0 && rooms.length === 0) {
        setRooms(roomsData);
      }
      
      // Process slot data if available
      if (slotsData && slotsData.length > 0 && slots.length === 0) {
        setSlots(slotsData);
      }
    }
  }, [campusData, areaData, roomsData, slotsData, campusOptions.length, areaOptions.length, rooms.length, slots.length]);

  // If no data from the server, use fallback mock data
  useEffect(() => {
    // Only run once on mount
    if (initialMountRef.current) {
      initialMountRef.current = false;
      
      // Wait a bit to see if we get real data
      const timer = setTimeout(() => {
        if (!dataProcessedRef.current) {
          // Only set fallback data if we haven't processed real data
          if (campusOptions.length === 0) {
            setCampusOptions([{ value: '3', label: 'FU-HL' }]);
            setSelectedCampus('3');
          }
          
          if (areaOptions.length === 0) {
            setAreaOptions([
              { value: '9', label: 'AL&BE' },
              { value: '10', label: 'GA' },
              { value: '8', label: 'Little UK' },
              { value: '5', label: 'Physical training' },
              { value: '12', label: 'Sân bóng' },
              { value: '13', label: 'Đường' },
              { value: '14', label: 'NewSlot' }
            ]);
            setSelectedArea('12');
          }
          
          if (rooms.length === 0) {
            setRooms([
              { id: '1', name: 'EP-102', capacity: 30, type: 'classroom', note: 'EP-102 - Normal classroom' },
              { id: '2', name: 'EP-103', capacity: 30, type: 'classroom', note: 'EP-103 - Normal classroom' },
              { id: '3', name: 'EP-104', capacity: 30, type: 'classroom', note: 'EP-104 - Normal classroom' },
              { id: '4', name: 'EP-105', capacity: 30, type: 'classroom', note: 'EP-105 - Normal classroom' },
              { id: '5', name: 'EP-106', capacity: 30, type: 'classroom', note: 'EP-106 - Normal classroom' },
              { id: '6', name: 'Sân bóng-01', capacity: 0, type: 'classroom', note: 'Sân bóng-01 - Class' },
              { id: '7', name: 'Sân bóng-02', capacity: 0, type: 'classroom', note: 'Sân bóng-02 - Class' },
              { id: '8', name: 'Sân bóng-03', capacity: 0, type: 'classroom', note: 'Sân bóng-03 - Class' },
            ]);
          }
          
          if (slots.length === 0) {
            setSlots([
              { id: '1', time: '07:30-09:00' },
              { id: '2', time: '09:10-10:40' },
              { id: '3', time: '10:50-12:20' },
              { id: '4', time: '12:50-14:20' },
              { id: '5', time: '14:30-16:00' },
              { id: '6', time: '16:10-17:40' },
              { id: '7', time: '18:00-19:30' },
              { id: '8', time: '19:45-21:15' },
            ]);
          }
        }
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, []); // Empty dependency array - runs only once after mounting

  return {
    date,
    setDate,
    campusOptions,
    areaOptions,
    selectedCampus,
    selectedArea,
    handleCampusChange,
    handleAreaChange,
    rooms,
    slots,
    bookings
  };
}; 