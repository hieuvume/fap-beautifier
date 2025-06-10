import { Shift } from "../../use-schedule-of-week";
import { useIntl } from 'react-intl';

interface ScheduleStatsProps {
  shifts?: (Shift | undefined)[][];
}

const ScheduleStats = ({ shifts }: ScheduleStatsProps) => {
  const intl = useIntl();

  // Calculate schedule statistics
  const totalClasses = shifts?.flat().filter(Boolean).length || 0;
  const attendedClasses = shifts?.flat().filter(shift => shift && shift.status === 1).length || 0;
  const pendingClasses = shifts?.flat().filter(shift => shift && shift.status === 0).length || 0;
  const absentClasses = shifts?.flat().filter(shift => shift && shift.status === 2).length || 0;

  return (
    <div className='flex justify-between'>
      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-blue-400 mr-1.5"></span>
          {pendingClasses} {intl.formatMessage({ id: 'SCHEDULE.STATS.PENDING_SLOT' })}
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-green-400 mr-1.5"></span>
          {attendedClasses} {intl.formatMessage({ id: 'SCHEDULE.STATS.ATTENDED_SLOT' })}
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-red-400 mr-1.5"></span>
          {absentClasses} {intl.formatMessage({ id: 'SCHEDULE.STATS.ABSENT_SLOT' })}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-blue-400 mr-1.5"></span>
          {intl.formatMessage({ id: 'SCHEDULE.STATS.NOT_YET' })}
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-green-400 mr-1.5"></span>
          {intl.formatMessage({ id: 'SCHEDULE.STATS.ATTENDED' })}
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-red-400 mr-1.5"></span>
          {intl.formatMessage({ id: 'SCHEDULE.STATS.ABSENT' })}
        </div>
      </div>
    </div>
  );
};

export { ScheduleStats }; 