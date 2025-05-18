import { Checkbox } from '@/app/components/ui/checkbox';
import { Label } from '@/app/components/ui/label';
import { Shift } from '../../use-schedule-of-week';

interface ShiftSelectorProps {
  shifts: Shift[];
  selectedShifts: number[];
  onSelectAll: () => void;
  onShiftToggle: (id: number) => void;
}

const ShiftSelector = ({ 
  shifts, 
  selectedShifts, 
  onSelectAll, 
  onShiftToggle 
}: ShiftSelectorProps) => {
  const allSelected = selectedShifts.length === shifts.length && shifts.length > 0;

  return (
    <>
      <div className="flex items-center space-x-2 mb-4">
        <Checkbox 
          id="select-all" 
          checked={allSelected}
          onCheckedChange={onSelectAll}
        />
        <Label htmlFor="select-all" className="text-sm font-medium">
          Select All Classes ({shifts.length})
        </Label>
      </div>
      
      <div className="max-h-[300px] overflow-y-auto space-y-2">
        {shifts.map((shift) => (
          <div key={shift.activityId} className="flex items-start space-x-2 p-2 hover:bg-accent/20 rounded-md">
            <Checkbox 
              id={`shift-${shift.activityId}`}
              checked={selectedShifts.includes(shift.activityId)}
              onCheckedChange={() => onShiftToggle(shift.activityId)}
              className="mt-1"
            />
            <div className="flex-1">
              <Label 
                htmlFor={`shift-${shift.activityId}`} 
                className="font-medium text-sm cursor-pointer"
              >
                {shift.courseName}
              </Label>
              <div className="text-xs text-muted-foreground">
                {new Date(shift.dateTime.start).toLocaleDateString()}, {shift.time}
              </div>
              <div className="text-xs text-muted-foreground">
                Room: {shift.room}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { ShiftSelector }; 