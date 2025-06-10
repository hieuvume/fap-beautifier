import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Separator } from '@/app/components/ui/separator';
import { cn } from '@/app/lib/utils';
import { useFapData } from '@/app/providers/fap-data-provider';
import { Calendar, GraduationCap, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Course } from '../types';

interface CourseSelectorProps {
  courses: Course[];
  activeTerm: string;
}

const CourseSelector = ({ courses, activeTerm }: CourseSelectorProps) => {
  const intl = useIntl();
  const { loading } = useFapData();
  const getColorByChar = (code: string) => {
    const colors = ["primary"];
    const char = code.charAt(0).toLowerCase();
    const index = char.charCodeAt(0) % colors.length;
    return colors[index] || "primary";
  };

  return (
    <Card className="h-full">
      <CardHeader className="py-2">
        <CardTitle>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span className="text-base font-semibold">
                {intl.formatMessage({ id: 'ATTENDANCE.COURSE_SELECTOR.TITLE' })}
              </span>
            </div>
            <span className="text-muted-foreground text-sm font-normal">
              {activeTerm}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        {loading && (
          <div className="absolute inset-0 bg-background/70 flex items-center justify-center z-10 rounded-xl">
            <Loader2 className="h-6 w-6 text-primary animate-spin" />
          </div>
        )}
        <div className="space-y-2">
          {!loading && courses.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <GraduationCap className="h-10 w-10 text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-lg font-medium text-foreground mb-1">{intl.formatMessage({ id: 'ATTENDANCE.COURSE_SELECTOR.EMPTY_TITLE' })}</h3>
              <p className="text-sm text-muted-foreground">
                {intl.formatMessage({ id: 'ATTENDANCE.COURSE_SELECTOR.EMPTY_MESSAGE' })}
              </p>
            </div>
          )}
          {courses.map((course, index) => (
            <div key={index}>
              <div className="flex items-center py-2">
                <div className="mr-4">
                  <div
                    className={cn(
                      "w-10 h-10 flex items-center justify-center rounded-md text-white text-lg font-medium",
                      `bg-${getColorByChar(course.code)}`
                    )}
                  >
                    {course.code.charAt(0)}
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <Link
                    to={course.link}
                    onClick={(e) => {
                      if (!course.link) {
                        e.preventDefault();
                      }
                    }}
                    className="group"
                  >
                    <span
                      className={cn(
                        "text-sm font-semibold block",
                        course.active
                          ? "text-primary"
                          : "text-foreground group-hover:text-primary"
                      )}
                    >
                      {course.name} ({course.code})
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {course.endDate ? (
                        <>
                          {course.group} ({course.date} - {course.endDate})
                        </>
                      ) : (
                        <>
                          {course.group} - {course.date}
                        </>
                      )}
                    </span>
                  </Link>
                </div>
              </div>
              {index !== courses.length - 1 && <Separator className="my-2" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { CourseSelector };
