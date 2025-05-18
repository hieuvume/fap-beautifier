import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/app/components/ui/dialog';
import { Shift } from '../use-schedule-of-week';
import { ShiftSelector, CalendarActions } from './import-calendar';

interface ImportCalendarDialogProps {
  shifts: Shift[];
  isOpen: boolean;
  onClose: () => void;
}

const ImportCalendarDialog = ({ shifts, isOpen, onClose }: ImportCalendarDialogProps) => {
  const [selectedShifts, setSelectedShifts] = useState<number[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [calendarUrls, setCalendarUrls] = useState<{all: string, individual: string[]}>({ all: '', individual: [] });
  const [copied, setCopied] = useState(false);

  const handleSelectAll = () => {
    if (selectedShifts.length === shifts.length) {
      setSelectedShifts([]);
    } else {
      setSelectedShifts(shifts.map((shift) => shift.activityId));
    }
  };

  const handleShiftToggle = (id: number) => {
    if (selectedShifts.includes(id)) {
      setSelectedShifts(selectedShifts.filter((shiftId) => shiftId !== id));
    } else {
      setSelectedShifts([...selectedShifts, id]);
    }
  };

  const handleGenerateLinks = () => {
    setIsGenerating(true);
    
    // Generate individual links for each event
    const individualLinks = selectedShifts
      .map((id) => {
        const shift = shifts.find((s) => s.activityId === id);
        if (!shift) return null;
        
        const start = new Date(shift.dateTime.start);
        const end = new Date(shift.dateTime.end);
        
        const eventParams = 
          `dates=${start.toISOString().replace(/[-:]/g, '').replace(/\.\d+/g, '')}/` +
          `${end.toISOString().replace(/[-:]/g, '').replace(/\.\d+/g, '')}` +
          `&text=${encodeURIComponent(shift.courseName)}` +
          `&location=${encodeURIComponent(shift.room)}` +
          `&details=${encodeURIComponent(`Class at room ${shift.room}${shift.online ? ' (Online)' : ''}`)}`;
          
        return `https://calendar.google.com/calendar/render?action=TEMPLATE&${eventParams}`;
      })
      .filter(Boolean) as string[];
      
    // Generate a CSV file containing all events
    const generateICS = () => {
      let icsContent = 
        'BEGIN:VCALENDAR\n' +
        'VERSION:2.0\n' +
        'PRODID:-//FPT University//Schedule Export//EN\n' +
        'CALSCALE:GREGORIAN\n' +
        'METHOD:PUBLISH\n';
        
      selectedShifts.forEach(id => {
        const shift = shifts.find((s) => s.activityId === id);
        if (!shift) return;
        
        const start = new Date(shift.dateTime.start);
        const end = new Date(shift.dateTime.end);
        
        const startFormatted = start.toISOString().replace(/[-:]/g, '').replace(/\.\d+/g, '');
        const endFormatted = end.toISOString().replace(/[-:]/g, '').replace(/\.\d+/g, '');
        
        icsContent += 
          'BEGIN:VEVENT\n' +
          `DTSTART:${startFormatted}\n` +
          `DTEND:${endFormatted}\n` +
          `SUMMARY:${shift.courseName}\n` +
          `LOCATION:${shift.room}\n` +
          `DESCRIPTION:Class at room ${shift.room}${shift.online ? ' (Online)' : ''}\n` +
          'END:VEVENT\n';
      });
      
      icsContent += 'END:VCALENDAR';
      
      // Create a Blob and generate a URL
      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
      return URL.createObjectURL(blob);
    };
    
    // Create a downloadable ICS file
    const icsFileUrl = generateICS();
    
    // Set both URLs
    setCalendarUrls({
      all: icsFileUrl,
      individual: individualLinks
    });
    
    setIsGenerating(false);
  };

  const handleDownloadICS = () => {
    if (calendarUrls.all) {
      const link = document.createElement('a');
      link.href = calendarUrls.all;
      link.setAttribute('download', 'fpt_schedule.ics');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleDialogClose = () => {
    setSelectedShifts([]);
    setCalendarUrls({ all: '', individual: [] });
    setIsGenerating(false);
    setCopied(false);
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleDialogClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Import to Calendar</DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          {shifts.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">
              No upcoming classes available to import
            </div>
          ) : (
            <>
              {/* Shift selection component */}
              <ShiftSelector 
                shifts={shifts}
                selectedShifts={selectedShifts}
                onSelectAll={handleSelectAll}
                onShiftToggle={handleShiftToggle}
              />
              
              {/* Calendar actions component */}
              <CalendarActions 
                isGenerating={isGenerating}
                selectedShifts={selectedShifts}
                calendarUrls={calendarUrls}
                onGenerateLinks={handleGenerateLinks}
                onDownloadICS={handleDownloadICS}
              />
            </>
          )}
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={handleDialogClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { ImportCalendarDialog }; 