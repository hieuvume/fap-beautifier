import { CalendarDays, Clock, GraduationCap, Hash } from "lucide-react";
import { CourseInfoProps } from "./types";

const CourseInformation = ({ shiftDetail }: CourseInfoProps) => {
  return (
    <div className="space-y-2 h-full">
      <h3 className="text-sm font-medium flex items-center text-blue-500">
        <GraduationCap className="h-5 w-5 mr-1.5" />
        Course Information
      </h3>
      
      <div className="rounded-lg border bg-white p-5 h-[calc(100%-28px)]">
        <div className="mb-5 text-center">
          <div className="bg-blue-50 rounded-md px-3 py-2">
            <span className="text-blue-600 font-medium text-sm">{shiftDetail.course}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-[24px_1fr] gap-y-4 text-sm">
          <div className="text-slate-400 flex items-center">
            <CalendarDays className="h-[18px] w-[18px]" />
          </div>
          <div className="text-slate-700 font-medium">
            <span className="text-slate-500 mr-2">Date:</span>{shiftDetail.date}
          </div>
          
          <div className="text-slate-400 flex items-center">
            <Hash className="h-[18px] w-[18px]" />
          </div>
          <div className="text-slate-700 font-medium">
            <span className="text-slate-500 mr-2">Slot:</span>Slot {shiftDetail.slot}
          </div>
          
          <div className="text-slate-400 flex items-center">
            <Clock className="h-[18px] w-[18px]" />
          </div>
          <div className="text-slate-700 font-medium">
            <span className="text-slate-500 mr-2">Time:</span>{shiftDetail.time || "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
};

export { CourseInformation }; 