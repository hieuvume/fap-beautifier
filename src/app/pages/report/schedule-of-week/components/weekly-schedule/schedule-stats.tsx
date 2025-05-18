import { Shift } from "../../use-schedule-of-week";

interface ScheduleStatsProps {
  shifts?: (Shift | undefined)[][];
}

const ScheduleStats = ({ shifts }: ScheduleStatsProps) => {
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
          {pendingClasses} pending slot
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-green-400 mr-1.5"></span>
          {attendedClasses} attended slot
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-red-400 mr-1.5"></span>
          {absentClasses} absent slot
        </div>
      </div>

      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-blue-400 mr-1.5"></span>
          Not Yet
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-green-400 mr-1.5"></span>
          Attended
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-red-400 mr-1.5"></span>
          Absent
        </div>
      </div>
    </div>
  );
};

export { ScheduleStats }; 