import { BookOpen, ExternalLink, User, Users, Video } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils";
import { ResourceLinksProps } from "./types";

const ResourceLinks = ({ shiftDetail }: ResourceLinksProps) => {
  return (
    <div className="grid gap-4">
      {/* Links grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Google Meet Link */}
        <div className={cn("rounded-lg border p-3", 
          shiftDetail.meetURL ? "bg-green-50/40" : "bg-card/50 opacity-60")}>
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-1">
              <Video className="h-4 w-4 text-green-600" />
              <span className="font-medium text-sm">Google Meet</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Join online meeting for this class
            </p>
            <div className="mt-auto">
              {shiftDetail.meetURL ? (
                <Button asChild size="sm" variant="outline" className="w-full gap-1">
                  <a href={shiftDetail.meetURL} target="_blank" rel="noopener noreferrer">
                    Join Meeting
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              ) : (
                <Button size="sm" variant="outline" className="w-full" disabled>
                  No meeting link available
                </Button>
              )}
            </div>
          </div>
        </div>
        
        {/* EduNext */}
        <div className="rounded-lg border p-3 bg-blue-50/40">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-1">
              <BookOpen className="h-4 w-4 text-blue-600" />
              <span className="font-medium text-sm">EduNext</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Access course materials and resources
            </p>
            <div className="mt-auto">
              <Button asChild size="sm" variant="outline" className="w-full gap-1">
                <a href="https://fu-edunext.fpt.edu.vn" target="_blank" rel="noopener noreferrer">
                  Open EduNext
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Student Group */}
        <div className={cn("rounded-lg border p-3", 
          shiftDetail.studentGroup?.link ? "bg-purple-50/40" : "bg-card/50 opacity-60")}>
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-1">
              <Users className="h-4 w-4 text-purple-600" />
              <span className="font-medium text-sm">Student Group</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              View student group details
            </p>
            <div className="mt-auto">
              {shiftDetail.studentGroup?.link ? (
                <Button asChild size="sm" variant="outline" className="w-full gap-1">
                  <a href={shiftDetail.studentGroup.link} target="_blank" rel="noopener noreferrer">
                    View Group
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              ) : (
                <Button size="sm" variant="outline" className="w-full" disabled>
                  No group link available
                </Button>
              )}
            </div>
          </div>
        </div>
        
        {/* Instructor Profile */}
        <div className={cn("rounded-lg border p-3", 
          shiftDetail.instructor?.link ? "bg-orange-50/40" : "bg-card/50 opacity-60")}>
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-1">
              <User className="h-4 w-4 text-orange-600" />
              <span className="font-medium text-sm">Instructor Profile</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              View instructor details and contact information
            </p>
            <div className="mt-auto">
              {shiftDetail.instructor?.link ? (
                <Button asChild size="sm" variant="outline" className="w-full gap-1">
                  <a href={shiftDetail.instructor.link} target="_blank" rel="noopener noreferrer">
                    View Profile
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              ) : (
                <Button size="sm" variant="outline" className="w-full" disabled>
                  No profile link available
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ResourceLinks }; 