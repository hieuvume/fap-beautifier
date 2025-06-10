import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { Building } from "lucide-react";
import { useIntl } from 'react-intl';

const BuildingGuide = () => {
  const intl = useIntl();

  return (
    <div className="mt-4 mb-6">
      <Accordion type="single" collapsible defaultValue="room-info">
        <AccordionItem value="room-info" className="border-none">
          <AccordionTrigger className="py-0">
            <h3 className="text-sm font-medium flex items-center">
              <Building className="h-4 w-4 mr-1.5" />
              {intl.formatMessage({ id: 'SCHEDULE.BUILDING_GUIDE.TITLE' })}
            </h3>
          </AccordionTrigger>
          <AccordionContent className="text-xs pt-1 text-muted-foreground">
            <div dangerouslySetInnerHTML={{ 
              __html: intl.formatMessage({ id: 'SCHEDULE.BUILDING_GUIDE.CONTENT' }) 
            }} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export { BuildingGuide }; 