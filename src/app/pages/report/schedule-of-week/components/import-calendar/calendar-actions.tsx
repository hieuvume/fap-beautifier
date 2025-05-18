import { Button } from '@/app/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert";
import { ExternalLink, Info, Loader2 } from 'lucide-react';

interface CalendarActionsProps {
  isGenerating: boolean;
  selectedShifts: number[];
  calendarUrls: {
    all: string;
    individual: string[];
  };
  onGenerateLinks: () => void;
  onDownloadICS: () => void;
}

const CalendarActions = ({
  isGenerating,
  selectedShifts,
  calendarUrls,
  onGenerateLinks,
  onDownloadICS
}: CalendarActionsProps) => {
  return (
    <>
      {calendarUrls.all ? (
        <div className="mt-4 space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Multiple event import</AlertTitle>
            <AlertDescription className="text-xs">
              Google Calendar doesn't support importing multiple events in one click.
              You can download an .ics file to import all selected events at once.
            </AlertDescription>
          </Alert>
          
          <div className="flex flex-col gap-4">
            <Button 
              onClick={onDownloadICS}
              variant="primary" 
              className="w-full gap-2"
            >
              Download .ics File ({selectedShifts.length} events)
            </Button>
            
            <div className="text-xs text-center text-muted-foreground">
              After downloading, import the .ics file to Google Calendar
            </div>
            
            <Button 
              asChild 
              variant="outline" 
              className="w-full gap-2"
            >
              <a 
                href="https://calendar.google.com/calendar/u/0/r/settings/export" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Open Google Calendar Import
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </Button>
          </div>
          
          {selectedShifts.length === 1 && calendarUrls.individual.length === 1 && (
            <div className="mt-4 pt-4 border-t">
              <Button 
                asChild 
                variant="outline" 
                className="w-full gap-2"
              >
                <a 
                  href={calendarUrls.individual[0]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Add Single Event to Google Calendar
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </div>
          )}
        </div>
      ) : (
        <Button
          onClick={onGenerateLinks}
          disabled={selectedShifts.length === 0 || isGenerating}
          className="w-full mt-4"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            'Generate Calendar Links'
          )}
        </Button>
      )}
    </>
  );
};

export { CalendarActions }; 