import { Check, X, ChevronRight, Clock, MapPin, User } from 'lucide-react';
import { AttendanceShift as AttendanceShiftType } from '../types';
import { cn } from '@/app/lib/utils';
import { Badge } from '@/app/components/ui/badge';

interface AttendanceShiftProps {
  shift: AttendanceShiftType;
}

const AttendanceShift = ({ shift }: AttendanceShiftProps) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'Present':
        return {
          variant: 'success' as const,
          icon: <Check className="h-3.5 w-3.5" />,
          borderColor: 'border-success/40',
          bgColor: 'bg-success/5',
          textColor: 'text-success-600',
          appearance: 'outline' as const
        };
      case 'Absent':
        return {
          variant: 'destructive' as const,
          icon: <X className="h-3.5 w-3.5" />,
          borderColor: 'border-destructive/40',
          bgColor: 'bg-destructive/5',
          textColor: 'text-destructive',
          appearance: 'outline' as const
        };
      case 'Future':
      default:
        return {
          variant: 'secondary' as const,
          icon: <ChevronRight className="h-3.5 w-3.5" />,
          borderColor: 'border-border',
          bgColor: 'bg-muted/30',
          textColor: 'text-muted-foreground',
          appearance: 'stroke' as const
        };
    }
  };

  const { icon, variant, borderColor, bgColor, textColor, appearance } = getStatusConfig(shift.status);

  return (
    <div 
      className={cn(
        'border border-dashed rounded-lg p-3 h-full',
        borderColor,
        bgColor
      )}
    >
      <div className="flex flex-col h-full">
        <div className="text-sm font-medium text-foreground truncate">
          {shift.day} - {shift.date}
        </div>
        
        <div className="space-y-1 text-xs my-1.5 flex-grow">
          <div className="flex items-start">
            <Clock className="h-3 w-3 text-muted-foreground shrink-0 mt-0.5 mr-1" />
            <span className="truncate">Slot {shift.slot}: {shift.time}</span>
          </div>
          <div className="flex items-start">
            <MapPin className="h-3 w-3 text-muted-foreground shrink-0 mt-0.5 mr-1" />
            <span className="truncate">{shift.room}</span>
          </div>
          <div className="flex items-start">
            <User className="h-3 w-3 text-muted-foreground shrink-0 mt-0.5 mr-1" />
            <span className="truncate">{shift.lecturer}</span>
          </div>
        </div>
        
        <div className="mt-auto pt-1">
          <Badge 
            variant={variant} 
            appearance={appearance}
            size="sm"
            className="w-full justify-center gap-0.5"
          >
            {icon}
            <span className="ml-0.5">{shift.status}</span>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export { AttendanceShift }; 