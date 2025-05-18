import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { Building } from "lucide-react";

const BuildingGuide = () => {
  return (
    <div className="mt-4 mb-6">
      <Accordion type="single" collapsible defaultValue="room-info">
        <AccordionItem value="room-info" className="border-none">
          <AccordionTrigger className="py-0">
            <h3 className="text-sm font-medium flex items-center">
              <Building className="h-4 w-4 mr-1.5" />
              Campus Building Guide
            </h3>
          </AccordionTrigger>
          <AccordionContent className="text-xs pt-1">
            <ul className="space-y-1 text-muted-foreground">
              <li>• Các phòng bắt đầu bằng <strong>AL</strong> thuộc tòa nhà Alpha. VD: AL...</li>
              <li>• Các phòng bắt đầu bằng <strong>BE</strong> thuộc tòa nhà Beta. VD: BE...</li>
              <li>• Các phòng bắt đầu bằng <strong>GA</strong> thuộc tòa nhà Gamma. VD: G201...</li>
              <li>• Các phòng bắt đầu bằng <strong>DE</strong> thuộc tòa nhà Delta. VD: DE...</li>
              <li>• Các phòng tập bắt đầu bằng <strong>R</strong> thuộc khu vực sân tập Vovinam.</li>
              <li>• Little UK (<strong>LUK</strong>) thuộc tầng 5 tòa nhà Delta</li>
              <li>• Nhà võ số 1 (<strong>VOV1</strong> - nằm cuối tòa nhà Alpha) gồm 6 sân tập: R01-VOV1 đến R06-VOV1</li>
              <li>• Nhà võ số 2 (<strong>VOV2</strong> - cạnh cổng trường) gồm 8 sân tập: R01-VOV2 đến R08-VOV2</li>
              <li>• Nhà võ số 3 (<strong>VOV3</strong> - cạnh hồ Delta) gồm 4 sân tập: R01-VOV3 đến R04-VOV3</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export { BuildingGuide }; 