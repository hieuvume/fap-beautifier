import { useState } from 'react';
import { useFapData, useFapDataCustom } from '@/app/providers/fap-data-provider';

// Define the Shift type
export interface Shift {
  activityId: number;
  courseName: string;
  room: string;
  time: string;
  dateTime: {
    start: string;
    end: string;
  };
  meetingURL?: string;
  materialURL?: string;
  status: number;
  online?: boolean;
}

// Function to convert HTML data to structured data
function convertToScheduler(original: Element): (Shift | undefined)[][] {
  const table = original?.querySelectorAll('table')[2] as HTMLTableElement;
  if (!table) return [];

  const shifts = Array.from({ length: table.rows.length - 2 }, () =>
    Array.from(
      { length: table.rows[0].cells.length - 1 },
      (): Shift | undefined => undefined
    )
  );

  const dates = Array.from(table.rows[1].cells).map(
    (cell) => cell.textContent?.trim() || ''
  );

  const yearElement = original?.querySelector(
    '#ctl00_mainContent_drpYear'
  ) as HTMLSelectElement;

  const currentYear = Array.from(yearElement.options).find(
    (option) => option.selected
  )?.value;

  for (let i = 2; i < table.rows.length; i++) {
    for (let j = 1; j < table.rows[i].cells.length; j++) {
      const cell = table.rows[i].cells[j];
      if (!cell || cell.textContent?.trim() === '-') {
        continue;
      }

      try {
        const activityLink = cell.querySelector(
          'a[href*="ActivityDetail.aspx?id"]'
        );
        const activityId = activityLink?.getAttribute('href')?.split('id=')[1];
        const courseName = activityLink?.textContent?.trim().replace('-', '');
        const cellContent = cell.textContent;
        const room =
          (cell?.textContent?.match(/\(/g) || [])?.length > 2
            ? cellContent?.split(' at ')[1]?.split('(')[0]
            : cellContent?.split(' at ')[1]?.split(' ')[0];

        const statusText = cell.textContent
          ?.match(/(Not yet|attended|absent)/i)?.[0]
          .toLowerCase();

        let status = 0;
        switch (statusText) {
          case 'not yet':
            status = 0;
            break;
          case 'attended':
            status = 1;
            break;
          case 'absent':
            status = 2;
            break;
        }

        // Extract time
        const time = cell
          .querySelector('span.label.label-success')
          ?.textContent?.trim()?.replace(/[()]/g, '');

        // Extract syllabusURL
        const syllabusLink = cell.querySelector('a.label.label-warning');
        const syllabusURL = syllabusLink?.getAttribute('href');

        // Extract meetURL
        const meetLink = cell.querySelector('a.label.label-default');
        const meetURL = meetLink?.getAttribute('href');

        // Check if online class
        const onlineText = cell.querySelector('.online-text');

        const date = dates[j - 1]; // dd/mm
        const [day, month] = date.split('/');
        const [startHour, startMinute, endHour, endMinute] =
          time?.replace(/[()]/g, '').split(/[-:]/) || [];

        const startTime = new Date(
          parseInt(currentYear || '0'),
          parseInt(month) - 1,
          parseInt(day),
          parseInt(startHour),
          parseInt(startMinute)
        );

        const endTime = new Date(
          parseInt(currentYear || '0'),
          parseInt(month) - 1,
          parseInt(day),
          parseInt(endHour),
          parseInt(endMinute)
        );

        shifts[i - 2][j - 1] = {
          activityId: parseInt(activityId || '0'),
          courseName: courseName || '',
          room: room || '',
          time: time || '',
          dateTime: {
            start: startTime.toISOString(),
            end: endTime.toISOString(),
          },
          materialURL: syllabusURL || '',
          meetingURL: meetURL || '',
          status: status,
          online: onlineText ? true : false,
        };
      } catch (error) {
        console.error('Error processing cell:', error);
      }
    }
  }
  return shifts;
}

// Option type for select elements
export interface SelectOption {
  value: string;
  label: string;
  selected: boolean;
}

export const useScheduleOfWeek = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setData } = useFapData();

  const {
    shifts,
    days,
    yearOptions,
    weekOptions,
    viewStateValue,
    viewStateGeneratorValue,
    eventValidationValue,
    currentWeekValue,
  } = useFapDataCustom({
    shifts: (original) => {
      if (!original) return [];
      return convertToScheduler(original);
    },
    days: (original) => {
      if (!original) return [];
      const table = original?.querySelectorAll('table')[2] as HTMLTableElement;
      return Array.from(table.rows[1].cells)
        .slice(0) // Skip the first cell which is "SLOT"
        .map((cell) => cell.textContent?.trim() || '');
    },
    yearOptions: (original) => {
      if (!original) return [];
      const year = original?.querySelector(
        '#ctl00_mainContent_drpYear'
      ) as HTMLSelectElement;
      if (!year) return [];
      return Array.from(year.options).map((option) => ({
        value: option.value,
        label: option.text?.trim(),
        selected: option.selected,
      }));
    },
    weekOptions: (original) => {
      if (!original) return [];
      const week = original?.querySelector(
        '#ctl00_mainContent_drpSelectWeek'
      ) as HTMLSelectElement;
      if (!week) return [];
      return Array.from(week.options).map((option) => ({
        value: option.value,
        label: option.text?.trim()?.replace('To', '-'),
        selected: option.selected,
      }));
    },
    currentWeekValue: (original) => {
      if (!original) return '0';
      const week = original?.querySelector(
        '#ctl00_mainContent_drpSelectWeek'
      ) as HTMLSelectElement;
      if (!week) return '0';
      const currentWeekValue = Array.from(week.options).find(
        (option) => option.selected
      )?.value;
      return currentWeekValue ? currentWeekValue : '1';
    },
    viewStateValue: (original) => {
      const viewState = original?.querySelector(
        '#__VIEWSTATE'
      ) as HTMLInputElement;
      return viewState ? viewState.value : '';
    },
    viewStateGeneratorValue: (original) => {
      const viewStateGenerator = original?.querySelector(
        '#__VIEWSTATEGENERATOR'
      ) as HTMLInputElement;
      return viewStateGenerator ? viewStateGenerator.value : '';
    },
    eventValidationValue: (original) => {
      const eventValidation = original?.querySelector(
        '#__EVENTVALIDATION'
      ) as HTMLInputElement;
      return eventValidation ? eventValidation.value : '';
    },
  });

  const fetchScheduleData = async (year: string, week: string) => {
    if (!year || !week) return;

    setIsLoading(true);
    try {
      const response = await fetch('/Report/ScheduleOfWeek.aspx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          __EVENTTARGET: 'ctl00$mainContent$drpSelectWeek',
          __EVENTARGUMENT: '',
          __LASTFOCUS: '',
          __VIEWSTATE: viewStateValue,
          __VIEWSTATEGENERATOR: viewStateGeneratorValue,
          __EVENTVALIDATION: eventValidationValue,
          'ctl00$mainContent$drpYear': year,
          'ctl00$mainContent$drpSelectWeek': week,
        }).toString(),
      });

      const data = await response.text();
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(data, 'text/html');
      const container = htmlDoc.querySelector('.container') as Element;

      if (container) {
        setData(container);
      }
    } catch (error) {
      console.error('Error fetching schedule:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Extract future shifts for calendar import
  const futureShifts = shifts
    ?.flat()
    .filter((shift) => shift && new Date(shift.dateTime.start) > new Date())
    .map((shift) => shift as Shift);

  return {
    shifts,
    futureShifts,
    days,
    yearOptions,
    weekOptions,
    isLoading,
    fetchScheduleData,
    currentWeekValue,
  };
}; 