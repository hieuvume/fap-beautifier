import { Button } from '@/app/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { SelectOption } from '../../use-schedule-of-week';
import { useIntl } from 'react-intl';

interface ScheduleControlsProps {
  yearOptions?: SelectOption[];
  weekOptions?: SelectOption[];
  selectedYear: string;
  selectedWeek: string;
  isLoading: boolean;
  onYearChange: (value: string) => void;
  onWeekChange: (value: string) => void;
  onPrevWeek: () => void;
  onNextWeek: () => void;
  onOpenImportDialog: () => void;
  hasFutureShifts: boolean;
}

const ScheduleControls = ({
  yearOptions,
  weekOptions,
  selectedYear,
  selectedWeek,
  isLoading,
  onYearChange,
  onWeekChange,
  onPrevWeek,
  onNextWeek,
  onOpenImportDialog,
  hasFutureShifts
}: ScheduleControlsProps) => {
  const intl = useIntl();

  return (
    <div className="flex justify-between items-center gap-4">
      <Select
        onValueChange={onYearChange}
        value={selectedYear}
        disabled={isLoading}
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder={intl.formatMessage({ id: 'SCHEDULE.CONTROLS.SELECT_YEAR' })} />
        </SelectTrigger>
        <SelectContent>
          {yearOptions?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="p-0 h-9 w-9"
          disabled={isLoading || !weekOptions?.length || weekOptions.findIndex(o => o.value === selectedWeek) <= 0}
          onClick={onPrevWeek}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>

        <Select
          onValueChange={onWeekChange}
          value={selectedWeek}
          disabled={isLoading}
        >
          <SelectTrigger className="w-[200px] md:w-[250px]">
            <SelectValue placeholder={intl.formatMessage({ id: 'SCHEDULE.CONTROLS.SELECT_WEEK' })} />
          </SelectTrigger>
          <SelectContent>
            {weekOptions?.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          size="sm"
          className="p-0 h-9 w-9"
          disabled={isLoading || !weekOptions?.length || weekOptions.findIndex(o => o.value === selectedWeek) >= weekOptions.length - 1}
          onClick={onNextWeek}
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <Button
        variant="outline"
        className="gap-2"
        onClick={onOpenImportDialog}
        disabled={!hasFutureShifts || isLoading}
      >
        <Calendar className="h-4 w-4" />
        {intl.formatMessage({ id: 'SCHEDULE.CONTROLS.IMPORT_TO_CALENDAR' })}
      </Button>
    </div>
  );
};

export { ScheduleControls }; 