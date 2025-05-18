import { Container } from '@/app/components/common/container';
import { Badge } from '@/app/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardToolbar } from '@/app/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { cn } from '@/app/lib/utils';
import { useFapData } from '@/app/providers/fap-data-provider';
import { BarChart2, Calendar, CheckCircle2, ClockIcon, Filter, Loader2, XCircle } from 'lucide-react';
import { useState } from 'react';
import {
  AttendanceShift,
  CourseSelector,
  TermSelector
} from './components';
import { useAttendanceReport } from './use-attendance-report';

const ViewAttendStudentPage = () => {
  const {
    attendanceData,
    activeTerm,
    activeCourse,
    presentedCount
  } = useAttendanceReport();
  const { loading } = useFapData();

  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState<'all' | 'present' | 'absent' | 'future'>('all');

  // Calculate statistics
  const absentCount = attendanceData.shifts.filter(shift => shift.status === 'Absent').length;
  const futureCount = attendanceData.shifts.filter(shift => shift.status === 'Future').length;
  const totalClasses = attendanceData.shifts.length;

  // Filter shifts based on selection
  const filteredShifts = attendanceData.shifts.filter(shift => {
    if (filter === 'all') return true;
    return shift.status.toLowerCase() === filter;
  });

  return (
    <Container>
      {/* Term Selector */}
      <div className="mb-5">
        <TermSelector
          terms={attendanceData.terms}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-7 lg:grid-cols-3">
        {/* Left Column - Course Selection */}
        <div className="space-y-7">
          {/* Course Selection */}
          <div className="relative">
            <CourseSelector
              courses={attendanceData.courses}
              activeTerm={activeTerm}
            />
          </div>
        </div>

        {/* Right Column - Attendance Report */}
        <div className="lg:col-span-2 relative">
          <Card className="h-full">
            <CardHeader className="py-2">
              <CardTitle>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-base font-semibold">
                      Attendance Report
                    </span>
                  </div>
                  <span className="text-muted-foreground text-sm font-normal">
                    {activeCourse}
                  </span>
                </div>
              </CardTitle>
              <CardToolbar>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Select
                    value={filter}
                    onValueChange={(value) => setFilter(value as any)}
                  >
                    <SelectTrigger className="h-8 text-xs w-full sm:w-[150px]">
                      <Filter className="h-3.5 w-3.5 mr-1" />
                      <SelectValue placeholder="Filter status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All classes</SelectItem>
                      <SelectItem value="present">Present only</SelectItem>
                      <SelectItem value="absent">Absent only</SelectItem>
                      <SelectItem value="future">Upcoming only</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="hidden sm:block">
                    <Tabs
                      value={view}
                      onValueChange={(v) => setView(v as 'grid' | 'list')}
                      className="w-auto"
                    >
                      <TabsList className="h-8">
                        <TabsTrigger value="grid" className="h-7 px-2">
                          <div className="grid grid-cols-2 gap-0.5 h-3 w-3">
                            <div className="bg-current rounded-sm"></div>
                            <div className="bg-current rounded-sm"></div>
                            <div className="bg-current rounded-sm"></div>
                            <div className="bg-current rounded-sm"></div>
                          </div>
                        </TabsTrigger>
                        <TabsTrigger value="list" className="h-7 px-2">
                          <div className="flex flex-col gap-0.5 h-3 w-3">
                            <div className="bg-current rounded-sm h-0.5 w-full"></div>
                            <div className="bg-current rounded-sm h-0.5 w-full"></div>
                            <div className="bg-current rounded-sm h-0.5 w-full"></div>
                          </div>
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>
              </CardToolbar>
            </CardHeader>
            <CardContent className="pt-0">
              {loading && (
                <div className="absolute inset-0 bg-background/70 flex items-center justify-center z-10 rounded-xl">
                  <Loader2 className="h-6 w-6 text-primary animate-spin" />
                </div>
              )}
              {filteredShifts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <Calendar className="h-10 w-10 text-muted-foreground mb-4 opacity-50" />
                  <h3 className="text-lg font-medium text-foreground mb-1">No classes found</h3>
                  <p className="text-sm text-muted-foreground">
                    {filter !== 'all'
                      ? `No ${filter} classes found. Try changing the filter.`
                      : 'There are no classes for this course.'}
                  </p>
                </div>
              ) : (
                <div className="sm:hidden mb-4">
                  <Tabs value={view} onValueChange={(v) => setView(v as 'grid' | 'list')}>
                    <TabsList className="w-full">
                      <TabsTrigger value="grid" className="flex-1">Grid View</TabsTrigger>
                      <TabsTrigger value="list" className="flex-1">List View</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              )}

              <Tabs value={view} onValueChange={(v) => setView(v as 'grid' | 'list')}>
                <TabsContent value="grid">
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {filteredShifts.map((shift, index) => (
                      <AttendanceShift key={index} shift={shift} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="list">
                  {filteredShifts.length > 0 && (
                    <div className="rounded-md border">
                      <table className="min-w-full divide-y divide-border">
                        <thead>
                          <tr className="bg-muted/50">
                            <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Date</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Time</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Room</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Lecturer</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border bg-card">
                          {filteredShifts.map((shift, index) => {
                            const getStatusConfig = (status: string) => {
                              switch (status) {
                                case 'Present': return { variant: 'success' as const, appearance: 'outline' as const };
                                case 'Absent': return { variant: 'destructive' as const, appearance: 'outline' as const };
                                default: return { variant: 'secondary' as const, appearance: 'stroke' as const };
                              }
                            };

                            const { variant, appearance } = getStatusConfig(shift.status);

                            return (
                              <tr key={index} className={cn(
                                index % 2 === 0 ? 'bg-card' : 'bg-muted/20',
                                'hover:bg-muted/40 transition-colors'
                              )}>
                                <td className="px-4 py-2 text-sm">{shift.day} - {shift.date}</td>
                                <td className="px-4 py-2 text-sm">Slot {shift.slot}: {shift.time}</td>
                                <td className="px-4 py-2 text-sm">{shift.room}</td>
                                <td className="px-4 py-2 text-sm">{shift.lecturer}</td>
                                <td className="px-4 py-2 text-sm">
                                  <Badge variant={variant} appearance={appearance} size="sm">
                                    {shift.status}
                                  </Badge>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </TabsContent>
              </Tabs>

              {/* Attendance Statistics - Moved to bottom of attendance report */}
              <div className="mt-7 border-t pt-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <BarChart2 className="h-4 w-4 text-primary" />
                    <h3 className="text-base font-semibold">Attendance Statistics</h3>
                  </div>
                </div>

                {/* Stats Grid - Redesigned to be smaller */}
                <div className="grid grid-cols-3 gap-3">
                  <StatsCard
                    title="Present"
                    count={presentedCount}
                    total={totalClasses}
                    icon={<CheckCircle2 className="h-3 w-3 text-green-600" />}
                    variant="success"
                  />
                  <StatsCard
                    title="Absent"
                    count={absentCount}
                    total={totalClasses}
                    icon={<XCircle className="h-3 w-3 text-red-600" />}
                    variant="destructive"
                  />
                  <StatsCard
                    title="Upcoming"
                    count={futureCount}
                    total={totalClasses}
                    icon={<ClockIcon className="h-3 w-3 text-gray-600" />}
                    variant="secondary"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
};

// Stats Card Component
interface StatsCardProps {
  title: string;
  count: number;
  total: number;
  icon: React.ReactNode;
  variant: 'success' | 'destructive' | 'secondary' | 'primary';
}

const StatsCard = ({ title, count, total, icon, variant }: StatsCardProps) => {
  const percentage = total > 0 ? Math.round((count / total) * 100) : 0;

  const getVariantClasses = () => {
    switch (variant) {
      case 'success':
        return {
          card: 'border-green-200 bg-green-50/50',
          icon: 'bg-green-100',
          badge: 'bg-green-100 text-green-700'
        };
      case 'destructive':
        return {
          card: 'border-red-200 bg-red-50/50',
          icon: 'bg-red-100',
          badge: 'bg-red-100 text-red-700'
        };
      case 'secondary':
        return {
          card: 'border-gray-200 bg-gray-50/50',
          icon: 'bg-gray-200',
          badge: 'bg-gray-100 text-gray-700'
        };
      case 'primary':
      default:
        return {
          card: 'border-blue-200 bg-blue-50/50',
          icon: 'bg-blue-100',
          badge: 'bg-blue-100 text-blue-700'
        };
    }
  };

  const { card, icon: iconBg, badge } = getVariantClasses();

  return (
    <div className={cn(
      "rounded-md border px-2.5 py-2 flex items-center justify-between",
      card
    )}>
      <div className="flex items-center gap-2">
        <div className={cn(
          "rounded-full p-1.5 flex-shrink-0",
          iconBg
        )}>
          {icon}
        </div>
        <div>
          <div className="text-xs font-medium text-muted-foreground mb-0.5">{title}</div>
          <div className="flex items-baseline">
            <span className="text-base font-semibold leading-none">{count}</span>
            <span className="text-xs text-muted-foreground ml-1">/{total}</span>
          </div>
        </div>
      </div>
      <div className={cn(
        "text-xs font-medium rounded-full px-1.5 py-0.5",
        badge
      )}>
        {percentage}%
      </div>
    </div>
  );
};

export { ViewAttendStudentPage };
