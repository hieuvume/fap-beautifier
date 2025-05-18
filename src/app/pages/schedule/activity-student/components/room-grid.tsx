import { Skeleton } from '@/app/components/ui/skeleton';
import { InfoIcon, Plus } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/ui/tooltip';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';
import { Button } from '@/app/components/ui/button';
import { cn } from '@/app/lib/utils';

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

interface RoomGridProps {
  date: string;
  rooms: Room[];
  slots: Slot[];
  isLoading: boolean;
  onBookRoom: (booking: {
    day: string;
    slot: string;
    room: string;
    roomNote: string;
    area: string;
  }) => void;
}

export function RoomGrid({ date, rooms, slots, isLoading, onBookRoom }: RoomGridProps) {
  // Helper to get the color for a room type
  const getRoomTypeColor = (type: Room['type']) => {
    switch (type) {
      case 'theatre':
        return 'text-[#0000ee]';
      case 'meeting':
        return 'text-[#ef923c]';
      case 'classroom':
        return 'text-green-600';
      case 'computer':
        return 'text-black';
      case 'guest':
        return 'text-[#737350]';
      default:
        return 'text-green-600';
    }
  };
  
  // Skeleton for loading state
  if (isLoading) {
    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">
                <Skeleton className="h-4 w-[160px]" />
              </TableHead>
              {Array.from({ length: 8 }).map((_, i) => (
                <TableHead key={i}>
                  <Skeleton className="h-4 w-full" />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Skeleton className="h-4 w-[160px]" />
                </TableCell>
                {Array.from({ length: 8 }).map((_, j) => (
                  <TableCell key={j} className="text-center">
                    <Skeleton className="h-8 w-8 rounded-md mx-auto" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

  // Generate booking grid
  const getAvailabilityForRoomAndSlot = (roomId: string, slotId: string) => {
    // In a real app, check if the room is available for the slot
    // For demo, all slots are available
    return true;
  };

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px] font-medium">
              Room <span className="text-xs">(capacity)</span>
            </TableHead>
            {slots.map((slot) => (
              <TableHead key={slot.id} className="text-center font-medium">
                Slot {slot.id}
                <br />
                <span className="text-xs">({slot.time})</span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rooms.map((room) => (
            <TableRow key={room.id}>
              <TableCell className="font-medium">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className={cn(
                        "font-semibold", 
                        getRoomTypeColor(room.type)
                      )}>
                        {room.name}({room.capacity})
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="p-1">
                        <p className="font-semibold">{room.name}</p>
                        <p className="text-sm">{room.note}</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>

              {slots.map((slot) => {
                const isAvailable = getAvailabilityForRoomAndSlot(room.id, slot.id);
                
                // For demo, showing slots 7 and 8 as unavailable to match business rules
                const slotNumber = parseInt(slot.id);
                const isWeekend = new Date(date.split('/').reverse().join('-')).getDay() % 6 === 0;
                
                const isBookable = (
                  (isWeekend && slotNumber <= 6) || // Slots 1-6 on weekends
                  (!isWeekend && slotNumber >= 7)   // Slots 7-8 on weekdays
                );

                return (
                  <TableCell key={slot.id} className="text-center p-2">
                    {isAvailable ? (
                      isBookable ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 rounded-md hover:bg-primary/10"
                          onClick={() => onBookRoom({
                            day: date,
                            slot: slot.id,
                            room: room.name,
                            roomNote: room.note,
                            area: "12" // Default for demo
                          })}
                        >
                          <Plus className="h-5 w-5" />
                        </Button>
                      ) : (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="h-8 w-8 mx-auto flex items-center justify-center">
                                <InfoIcon className="h-5 w-5 text-muted-foreground/50" />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-sm">Not available for booking at this time</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )
                    ) : (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="h-8 w-8 mx-auto flex items-center justify-center">
                              <InfoIcon className="h-5 w-5 text-muted-foreground/50" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-sm">Room already booked</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
} 