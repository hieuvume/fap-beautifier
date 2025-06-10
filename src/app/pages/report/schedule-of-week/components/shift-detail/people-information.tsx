import { ExternalLink, School, User, Users } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { PeopleInfoProps } from "./types";

const PeopleInformation = ({ shiftDetail }: PeopleInfoProps) => {
  return (
    <div className="space-y-2 h-full">
      <h3 className="text-sm font-medium flex items-center text-blue-500">
        <Users className="h-5 w-5 mr-1.5" />
        People
      </h3>
      
      <div className="rounded-lg border bg-white p-5 h-[calc(100%-28px)]">
        {/* Instructor */}
        <div className="mb-5">
          <div className="text-gray-400 mb-2.5">
            <User className="h-[18px] w-[18px] inline mr-1.5" />
            <span className='text-sm'>Instructor</span>
          </div>
          
          <div className="flex items-center">
            <div className="bg-slate-100 w-8 h-8 rounded-md flex items-center justify-center mr-3 text-slate-600 font-medium text-xs">
              {shiftDetail.instructor?.name?.toUpperCase().charAt(0) || '?'}
            </div>
            <div className="flex-1 font-medium text-sm">
              {shiftDetail.instructor?.name?.toUpperCase() || "Not specified"}
            </div>
            {shiftDetail.instructor?.link && (
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0 ml-0.5 opacity-70 hover:opacity-100" asChild>
                <a href={shiftDetail.instructor.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
        
        {/* Student Group */}
        <div>
          <div className="text-gray-400 mb-2.5">
            <School className="h-[18px] w-[18px] inline mr-1.5" />
            <span className='text-sm'>Student Group</span>
          </div>
          
          <div className="flex items-center">
            <div className="bg-slate-100 w-8 h-8 rounded-md flex items-center justify-center mr-3 text-slate-600 font-medium text-xs">
              {shiftDetail.studentGroup?.name?.toUpperCase().charAt(0) || '?'}
            </div>
            <div className="flex-1 font-medium text-sm">
              {shiftDetail.studentGroup?.name || "Not specified"}
            </div>
            {shiftDetail.studentGroup?.link && (
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0 ml-0.5 opacity-70 hover:opacity-100" asChild>
                <a href={shiftDetail.studentGroup.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { PeopleInformation }; 