import { Container } from '@/app/components/common/container';
import { Badge } from '@/app/components/ui/badge';
import { Card, CardContent } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { CalendarDays, ClipboardList } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ExamCard } from './components';
import { useExamSchedule } from './use-exam-schedule';
import { useIntl } from 'react-intl';

// Skeleton component for loading state
const ExamCardSkeleton = () => (
  <Card className="h-full animate-pulse overflow-hidden">
    <div className="p-4 pb-0 flex flex-row justify-between items-start">
      <div className="flex flex-col gap-1.5">
        <div className="bg-muted/60 h-5 w-24 rounded"></div>
        <div className="flex gap-1.5 mt-1">
          <div className="bg-muted/60 h-5 w-16 rounded"></div>
          <div className="bg-muted/60 h-5 w-16 rounded"></div>
        </div>
      </div>
      <div className="flex-shrink-0 text-right">
        <div className="bg-muted/60 h-6 w-20 rounded mb-1"></div>
        <div className="bg-muted/60 h-4 w-16 rounded float-right"></div>
      </div>
    </div>
    <div className="p-4 pt-3">
      <div className="bg-muted/60 h-5 w-full rounded mb-4"></div>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="bg-muted/60 h-4 w-4 rounded-full"></div>
          <div className="bg-muted/60 h-4 w-32 rounded"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-muted/60 h-4 w-4 rounded-full"></div>
          <div className="bg-muted/60 h-4 w-24 rounded"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-muted/60 h-4 w-4 rounded-full"></div>
          <div className="bg-muted/60 h-4 w-28 rounded"></div>
        </div>
      </div>
    </div>
  </Card>
);

const ExamSchedulePage = () => {
  const intl = useIntl();
  const { exams, groupedExams, loading } = useExamSchedule();
  const [activeTab, setActiveTab] = useState<string>('all');
  const [displayedExams, setDisplayedExams] = useState(exams);
  
  useEffect(() => {
    // Update displayed exams based on active tab
    if (activeTab === 'all') {
      setDisplayedExams(exams);
    } else if (activeTab === 'upcoming') {
      setDisplayedExams(groupedExams.upcoming);
    } else {
      setDisplayedExams(groupedExams.completed);
    }
  }, [activeTab, exams, groupedExams]);

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  
  return (
    <Container>
      {/* Compact stats section */}
      <div className="flex flex-wrap gap-4 mb-6">
        <Card className="bg-muted/30">
          <CardContent className="p-3 flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">{intl.formatMessage({ id: 'EXAM.STATS.TOTAL' })} <strong>{exams.length}</strong></span>
          </CardContent>
        </Card>
        
        <Card className="bg-blue-500/5">
          <CardContent className="p-3 flex items-center gap-2">
            <Badge className="bg-blue-500/10 text-blue-500 border-none h-5 w-5 p-0 flex items-center justify-center">
              {groupedExams.upcoming.length}
            </Badge>
            <span className="text-sm font-medium text-blue-600">{intl.formatMessage({ id: 'EXAM.STATS.UPCOMING' })}</span>
            {groupedExams.upcoming.length > 0 && (
              <span className="text-xs text-blue-500 font-medium">
                · {intl.formatMessage({ id: 'EXAM.STATS.NEXT' })} {groupedExams.upcoming[0].date}
              </span>
            )}
          </CardContent>
        </Card>
        
        <Card className="bg-gray-500/5">
          <CardContent className="p-3 flex items-center gap-2">
            <Badge className="bg-gray-500/10 text-gray-500 border-none h-5 w-5 p-0 flex items-center justify-center">
              {groupedExams.completed.length}
            </Badge>
            <span className="text-sm font-medium text-gray-600">{intl.formatMessage({ id: 'EXAM.STATS.COMPLETED' })}</span>
            {exams.length > 0 && groupedExams.completed.length > 0 && (
              <span className="text-xs text-gray-500 font-medium">
                · {((groupedExams.completed.length / exams.length) * 100).toFixed(0)}{intl.formatMessage({ id: 'EXAM.STATS.COMPLETE_PERCENTAGE' })}
              </span>
            )}
          </CardContent>
        </Card>
      </div>
      
      <Tabs 
        value={activeTab} 
        onValueChange={handleTabChange} 
        className="mb-8"
      >
        <TabsList className="mb-6">
          <TabsTrigger value="all">
            {intl.formatMessage({ id: 'EXAM.TABS.ALL_EXAMS' })}
            <Badge className="ml-2 bg-primary/10 text-primary border-none">
              {exams.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="upcoming">
            {intl.formatMessage({ id: 'EXAM.STATS.UPCOMING' })}
            <Badge className="ml-2 bg-blue-500/10 text-blue-500 border-none">
              {groupedExams.upcoming.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="completed">
            {intl.formatMessage({ id: 'EXAM.STATS.COMPLETED' })}
            <Badge className="ml-2 bg-gray-500/10 text-gray-500 border-none">
              {groupedExams.completed.length}
            </Badge>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="m-0">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, index) => (
                <ExamCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <>
              {exams.length === 0 ? (
                <div className="text-center py-12">
                  <ClipboardList className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
                  <p className="text-lg font-medium mb-1">{intl.formatMessage({ id: 'EXAM.EMPTY.NO_EXAMS_TITLE' })}</p>
                  <p className="text-muted-foreground">
                    {intl.formatMessage({ id: 'EXAM.EMPTY.NO_EXAMS_MESSAGE' })}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {exams.map((exam) => (
                    <ExamCard key={exam.id} exam={exam} />
                  ))}
                </div>
              )}
            </>
          )}
        </TabsContent>
        
        <TabsContent value="upcoming" className="m-0">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(2)].map((_, index) => (
                <ExamCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <>
              {groupedExams.upcoming.length === 0 ? (
                <div className="text-center py-12">
                  <CalendarDays className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
                  <p className="text-lg font-medium mb-1">{intl.formatMessage({ id: 'EXAM.EMPTY.NO_UPCOMING_TITLE' })}</p>
                  <p className="text-muted-foreground">
                    {intl.formatMessage({ id: 'EXAM.EMPTY.NO_UPCOMING_MESSAGE' })}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedExams.upcoming.map((exam) => (
                    <ExamCard key={exam.id} exam={exam} />
                  ))}
                </div>
              )}
            </>
          )}
        </TabsContent>
        
        <TabsContent value="completed" className="m-0">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(2)].map((_, index) => (
                <ExamCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <>
              {groupedExams.completed.length === 0 ? (
                <div className="text-center py-12">
                  <ClipboardList className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
                  <p className="text-lg font-medium mb-1">{intl.formatMessage({ id: 'EXAM.EMPTY.NO_COMPLETED_TITLE' })}</p>
                  <p className="text-muted-foreground">
                    {intl.formatMessage({ id: 'EXAM.EMPTY.NO_COMPLETED_MESSAGE' })}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedExams.completed.map((exam) => (
                    <ExamCard key={exam.id} exam={exam} />
                  ))}
                </div>
              )}
            </>
          )}
        </TabsContent>
      </Tabs>
    </Container>
  );
};

export { ExamSchedulePage };
