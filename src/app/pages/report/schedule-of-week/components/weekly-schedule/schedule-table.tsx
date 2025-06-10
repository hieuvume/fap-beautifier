import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/app/components/ui/table';
import { cn } from '@/app/lib/utils';
import { BookOpen, CheckCircle2, Clock, Clock3, DoorOpen, Loader2, Video, XCircle } from 'lucide-react';
import { Shift } from '../../use-schedule-of-week';

interface ScheduleTableProps {
  isLoading: boolean;
  shifts?: (Shift | undefined)[][];
  days?: string[];
  onShiftClick: (activityId: number, status: number, time: string) => void;
}

const ScheduleTable = ({ isLoading, shifts, days, onShiftClick }: ScheduleTableProps) => {
  const dayHeaders = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const currentDay = new Date().getDay() - 1; // 0 is Monday in our context

  return (
    <div className="relative rounded-md border shadow">
      {isLoading && (
        <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-10">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      <div className="w-full">
        <Table className="w-full border-collapse">
          <TableHeader className="sticky top-0 z-10">
            <TableRow>
              <TableHead className="font-semibold bg-accent/50 text-center w-24 border-r">
                SLOT
              </TableHead>
              {dayHeaders.map((dayHeader, index) => (
                <TableHead
                  key={index}
                  className={cn(
                    "font-semibold bg-accent/50 text-center border-r last:border-r-0",
                    index === currentDay && "text-primary font-bold bg-accent/70"
                  )}
                >
                  {dayHeader}
                  <div className="text-xs font-medium">
                    {days && days[index] ? days[index] : ''}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 13 }).map((_, slotIndex) => (
              <TableRow key={slotIndex} className={slotIndex % 2 === 0 ? 'bg-accent/10' : ''}>
                <TableCell className="font-medium text-muted-foreground text-center w-24 bg-accent/50 border-r">
                  Slot {slotIndex}
                </TableCell>
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const shift = shifts?.[slotIndex]?.[dayIndex];
                  return (
                    <TableCell key={dayIndex} className="p-1 border-r last:border-r-0">
                      {shift && (
                        <ShiftCard 
                          shift={shift} 
                          onClick={() => onShiftClick(shift.activityId, shift.status, shift.time)} 
                        />
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

interface ShiftCardProps {
  shift: Shift;
  onClick: () => void;
}

const ShiftCard = ({ shift, onClick }: ShiftCardProps) => {
  return (
    <div
      className="cursor-pointer p-0 rounded-md transition-colors hover:shadow-md group"
      onClick={onClick}
    >
      <div className={cn(
        "flex flex-col gap-1 relative overflow-hidden rounded-md border p-2",
        "bg-card/40 hover:bg-card/60 transition-all",
        shift.status === 0 ? "border-blue-400" :
          shift.status === 1 ? "border-green-400" : "border-red-400"
      )}>
        {/* Status indicator */}
        <div className={cn(
          "absolute top-0 left-0 w-full h-1",
          shift.status === 0 ? "bg-blue-400" :
            shift.status === 1 ? "bg-green-400" : "bg-red-400"
        )} />

        {/* Course name header with status icon */}
        <div className="flex items-start justify-between gap-1 pt-1">
          <div className="font-semibold text-primary leading-tight">
            {shift.courseName}
          </div>
          <div className="flex items-center">
            {shift.online && (
              <Video className="h-3.5 w-3.5 text-green-500 mr-1" />
            )}
            {shift.status === 0 ? (
              <Clock3 className="h-4 w-4 text-blue-500" />
            ) : shift.status === 1 ? (
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            ) : (
              <XCircle className="h-4 w-4 text-red-500" />
            )}
          </div>
        </div>

        {/* Info section */}
        <div className="flex flex-col gap-1 text-xs font-medium">
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-3 w-3 mr-1.5 flex-shrink-0" />
            <span className="truncate">{shift.time}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <DoorOpen className="h-3 w-3 mr-1.5 flex-shrink-0" />
            <span className="truncate">{shift.room}</span>
          </div>
        </div>

        {/* Material link indicator */}
        {shift.materialURL && (
          <div className="absolute bottom-1 right-1">
            <BookOpen className="h-3 w-3 text-primary/60" />
          </div>
        )}
      </div>
    </div>
  );
};

export { ScheduleTable, ShiftCard }; 