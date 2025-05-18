import { Container } from '@/app/components/common/container';
import { Card, CardContent, CardFooter, CardHeader, CardTable, CardTitle, CardToolbar } from '@/app/components/ui/card';
import { cn } from '@/app/lib/utils';
import { useFapData } from '@/app/providers/fap-data-provider';
import { BookOpenCheck, CalendarDays, CheckCircle, Clock, Code, GraduationCap, Loader2, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { TermSelector } from '../view-attend-student/components';
import { useStudentGrade } from './use-student-grade';
import { ScrollBar } from '@/app/components/ui/scroll-area';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Link } from 'react-router';

const StudentGradePage = () => {
  const {
    gradeData,
    activeTerm,
    activeCourse,
    result
  } = useStudentGrade();

  useEffect(() => {
    console.log(gradeData);
  }, [gradeData]);

  const { loading } = useFapData();

  return (
    <Container>
      {/* Term Selector */}
      <div className="mb-5">
        <TermSelector
          terms={gradeData.terms}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-7 lg:grid-cols-3">
        {/* Left Column - Course Selection */}
        <div className="space-y-7">
          {/* Course Selection */}
          <Card className="relative">
            <CardHeader className="py-2">
              <CardTitle>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span className="text-base font-semibold">
                      Select course
                    </span>
                  </div>
                  <span className="text-muted-foreground text-sm font-normal">
                    {activeTerm}
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-2 relative">
              {loading && (
                <div className="absolute inset-0 bg-background/70 flex items-center justify-center z-10 rounded-b-xl">
                  <Loader2 className="h-6 w-6 text-primary animate-spin" />
                </div>
              )}
              <div>
                {!loading && gradeData.courses.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <GraduationCap className="h-10 w-10 text-muted-foreground mb-4 opacity-50" />
                    <h3 className="text-lg font-medium text-foreground mb-1">No courses found</h3>
                    <p className="text-sm text-muted-foreground">
                      {`No courses found for this term.`}
                    </p>
                  </div>
                )}
                <div className="grid gap-3">
                  {gradeData.courses.map((course, index) => (
                    <Link
                      key={index}
                      to={course.link || '#'}
                      onClick={(e) => {
                        if (!course.link) {
                          e.preventDefault();
                        }
                      }}
                      className="block"
                    >
                      <div 
                        className={cn(
                          "relative rounded-lg overflow-hidden border transition-all duration-200",
                          course.active 
                            ? "border-primary bg-primary/5" 
                            : "border-border hover:border-primary/30 hover:bg-muted/40"
                        )}
                      >
                        {/* Left color bar indicator */}
                        <div 
                          className={cn(
                            "absolute left-0 top-0 h-full w-1",
                            course.active ? "bg-primary" : "bg-border"
                          )}
                        />
                        
                        {/* Course content */}
                        <div className="pl-4 pr-3 py-2.5">
                          {/* Top row with course code and status */}
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <Code className="h-3.5 w-3.5 text-primary" />
                              <span className="text-xs font-semibold text-primary">
                                {course.code}
                              </span>
                            </div>
                            {course.active && (
                              <span className="inline-flex items-center text-xs font-medium text-green-600">
                                <CheckCircle className="h-3 w-3 mr-0.5" />
                                Showing
                              </span>
                            )}
                          </div>
                          
                          {/* Course name */}
                          <h4 className="text-sm font-medium leading-tight mb-2 line-clamp-1">
                            {course.name}
                          </h4>
                          
                          {/* Bottom row with metadata */}
                          <div className="flex items-center text-xs text-muted-foreground gap-3">
                            <span className="inline-flex items-center">
                              <Users className="h-3 w-3 mr-1 flex-shrink-0" />
                              <span className="truncate">{course.group}</span>
                            </span>
                            <span className="inline-flex items-center">
                              <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
                              <span className="truncate">
                                {course.date}
                                {course.endDate && ` - ${course.endDate}`}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Grade Report */}
        <div className="lg:col-span-2">
          <Card className="relative">
            <CardHeader className="py-2">
              <CardTitle>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <BookOpenCheck className="h-4 w-4 text-primary" />
                    <span className="text-base font-semibold">
                      Grade Report
                    </span>
                  </div>
                  <span className="text-muted-foreground text-sm font-normal">
                    {activeCourse}
                  </span>
                </div>
              </CardTitle>
              <CardToolbar>
                {result && (
                  <div className={cn(
                    "text-2sm font-medium px-2 py-1 rounded-full",
                    result === "Passed" ? "bg-green-100 text-green-700" :
                    result === "Not Passed" ? "bg-red-100 text-red-700" :
                    result === "Attendance Fail" ? "bg-red-100 text-red-700" :
                    result === "Is Suspended" ? "bg-amber-100 text-amber-700" :
                    "bg-gray-100 text-gray-700"
                  )}>
                    {result}
                  </div>
                )}
              </CardToolbar>
            </CardHeader>
            <CardTable className="relative">
              {loading && (
                <div className="absolute inset-0 bg-background/70 flex items-center justify-center z-10 rounded-b-xl">
                  <Loader2 className="h-6 w-6 text-primary animate-spin" />
                </div>
              )}
              <ScrollArea>
                <div dangerouslySetInnerHTML={{ __html: gradeData.markTable }} />
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </CardTable>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export { StudentGradePage }; 