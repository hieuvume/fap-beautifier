import { Clock3 } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { StatusBannerProps } from "./types";

const StatusBanner = ({ statusClasses, statusText, recordTime }: StatusBannerProps) => {
  return (
    <div className={cn("px-4 py-3 rounded-lg flex items-center justify-between mb-4", statusClasses.bg)}>
      <div className="flex items-center gap-1">
        {statusClasses.icon}
        <span className={cn("font-medium", statusClasses.text)}>
          {statusText}
        </span>
      </div>
      
      {recordTime && (
        <div className="text-xs font-medium flex items-center">
          <Clock3 className="h-3.5 w-3.5 mr-1.5 opacity-70" />
          Record time: {recordTime}
        </div>
      )}
    </div>
  );
};

export { StatusBanner }; 