import { useEffect, useState } from 'react';
import { useScheduleOfWeek } from '../use-schedule-of-week';
import { ImportCalendarDialog } from './import-calendar-dialog';
import { ShiftDetailDialog } from './shift-detail/shift-detail-dialog';
import { BuildingGuide } from './weekly-schedule/building-guide';
import { ScheduleControls } from './weekly-schedule/schedule-controls';
import { ScheduleStats } from './weekly-schedule/schedule-stats';
import { ScheduleTable } from './weekly-schedule/schedule-table';

interface WeeklyScheduleProps {
  isLoading: boolean;
}

const WeeklySchedule = ({ isLoading: parentLoading }: WeeklyScheduleProps) => {
  const {
    shifts,
    futureShifts,
    days,
    yearOptions,
    weekOptions,
    fetchScheduleData
  } = useScheduleOfWeek();

  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedWeek, setSelectedWeek] = useState<string>('');
  const [localLoading, setLocalLoading] = useState(false);

  // Update selected values when options load
  useEffect(() => {
    if (yearOptions?.length > 0) {
      const defaultYear = yearOptions.find(o => o.selected)?.value || yearOptions[0].value;
      setSelectedYear(defaultYear);
    }

    if (weekOptions?.length > 0) {
      const defaultWeek = weekOptions.find(o => o.selected)?.value || weekOptions[0].value;
      setSelectedWeek(defaultWeek);
    }
  }, [yearOptions, weekOptions]);

  const [selectedActivityId, setSelectedActivityId] = useState<number | undefined>();
  const [selectedActivityStatus, setSelectedActivityStatus] = useState<number>(0);
  const [selectedShiftTime, setSelectedShiftTime] = useState<string>('');
  const [isImportDialogOpen, setIsImportDialogOpen] = useState(false);

  const handleShiftClick = (activityId: number, status: number, time: string) => {
    setSelectedActivityId(activityId);
    setSelectedActivityStatus(status);
    setSelectedShiftTime(time);
  };

  const handleYearChange = (value: string) => {
    setSelectedYear(value);
    fetchSchedule(value, selectedWeek);
  };

  const handleWeekChange = (value: string) => {
    setSelectedWeek(value);
    fetchSchedule(selectedYear, value);
  };

  const changeWeek = (direction: 'prev' | 'next') => {
    setLocalLoading(true);
    if (!weekOptions?.length) {
      setLocalLoading(false);
      return;
    }

    const currentIndex = weekOptions.findIndex(option => option.value === selectedWeek);
    if (currentIndex === -1) {
      setLocalLoading(false);
      return;
    }

    let newIndex = currentIndex;
    if (direction === 'prev' && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (direction === 'next' && currentIndex < weekOptions.length - 1) {
      newIndex = currentIndex + 1;
    }

    if (newIndex !== currentIndex) {
      const newWeek = weekOptions[newIndex].value;
      setSelectedWeek(newWeek);
      fetchSchedule(selectedYear, newWeek);
    } else {
      setLocalLoading(false);
    }
  };

  const fetchSchedule = async (year: string, week: string) => {
    if (!year || !week) return;

    setLocalLoading(true);
    try {
      await fetchScheduleData(year, week);
    } finally {
      setLocalLoading(false);
    }
  };

  const effectiveLoading = parentLoading || localLoading;

  return (
    <div className="space-y-2">
      {/* Controls section */}
      <ScheduleControls
        yearOptions={yearOptions}
        weekOptions={weekOptions}
        selectedYear={selectedYear}
        selectedWeek={selectedWeek}
        isLoading={effectiveLoading}
        onYearChange={handleYearChange}
        onWeekChange={handleWeekChange}
        onPrevWeek={() => changeWeek('prev')}
        onNextWeek={() => changeWeek('next')}
        onOpenImportDialog={() => setIsImportDialogOpen(true)}
        hasFutureShifts={Boolean(futureShifts?.length)}
      />

      {/* Table section */}
      <ScheduleTable
        isLoading={effectiveLoading}
        shifts={shifts}
        days={days}
        onShiftClick={handleShiftClick}
      />

      {/* Stats section */}
      <ScheduleStats shifts={shifts} />

      {/* Building guide */}
      <BuildingGuide />

      {/* Dialog components */}
      <ShiftDetailDialog
        activityId={selectedActivityId}
        activityStatus={selectedActivityStatus}
        shiftTime={selectedShiftTime}
        isOpen={selectedActivityId !== undefined}
        onClose={() => setSelectedActivityId(undefined)}
      />

      <ImportCalendarDialog
        shifts={futureShifts || []}
        isOpen={isImportDialogOpen}
        onClose={() => setIsImportDialogOpen(false)}
      />
    </div>
  );
};

export { WeeklySchedule }; 