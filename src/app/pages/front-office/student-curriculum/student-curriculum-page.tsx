import { Container } from '@/app/components/common/container';
import { Badge } from '@/app/components/ui/badge';
import { Skeleton } from '@/app/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/app/components/ui/table';
import { Navbar } from '@/app/partials/navbar/navbar';
import { useFapData } from '@/app/providers/fap-data-provider';
import { Book, BookOpen, Calendar, Hash } from 'lucide-react';
import { Fragment } from 'react';
import { useIntl } from 'react-intl';
import { useStudentCurriculum } from './use-student-curriculum';
import { cn } from '@/app/lib/utils';

// Skeleton loader for the curriculum page
const StudentCurriculumSkeleton = () => {
  return (
    <Container>
      {/* Navbar Skeleton */}
      <div className="h-14 flex items-center mb-6">
        <Skeleton className="h-9 w-[120px]" />
      </div>

      {/* Student Info Skeleton */}
      <div className="mb-8">
        <div className="flex flex-col gap-1">
          <Skeleton className="h-7 w-[300px] mb-2" />
          <Skeleton className="h-5 w-[200px]" />
        </div>
      </div>

      {/* Curriculum Table Skeleton */}
      <div className="mb-8">
        <div className="mb-5">
          <Skeleton className="h-7 w-[180px]" />
        </div>
        <Skeleton className="h-64 w-full" />
      </div>

      {/* Prerequisite Table Skeleton */}
      <div className="mb-8">
        <div className="mb-5">
          <Skeleton className="h-7 w-[180px]" />
        </div>
        <Skeleton className="h-48 w-full" />
      </div>
    </Container>
  );
};

// Custom table cell component with reduced vertical padding
const CompactTableCell = ({ className, ...props }: any) => (
  <TableCell className={cn("py-1.5", className)} {...props} />
);

const StudentCurriculumPage = () => {
  const intl = useIntl();
  const { loading } = useFapData();
  const { studentInfo, subjects, prerequisites } = useStudentCurriculum();

  if (loading || !subjects) {
    return <StudentCurriculumSkeleton />;
  }

  return (
    <Fragment>
      {/* Student Info */}
      <Container>
        <div className="flex flex-col gap-1 mb-5">
          <h2 className="text-xl font-bold">
            {studentInfo.name} <span className="text-primary">({studentInfo.rollNumber})</span>
          </h2>
          <div className="flex items-center">
            <span className="text-sm font-medium text-muted-foreground">{intl.formatMessage({ id: 'CURRICULUM.INFO.LABEL' })}</span>
            <span className="ml-2 text-sm font-semibold text-primary">{studentInfo.curriculum}</span>
          </div>
        </div>

        {/* Curriculum Table */}
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <BookOpen className="h-5 w-5 mr-2 text-primary" />
            <h2 className="text-lg font-semibold">{intl.formatMessage({ id: 'CURRICULUM.SUBJECTS.TITLE' })}</h2>
          </div>

          <div className="bg-card rounded-lg border shadow-sm">
            <div className="kt-scrollable-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-accent/60">
                    <TableHead className="min-w-16 h-8">
                      <div className="flex items-center">
                        <Hash className="h-3.5 w-3.5 mr-1.5" />
                        {intl.formatMessage({ id: 'CURRICULUM.TABLE.NO' })}
                      </div>
                    </TableHead>
                    <TableHead className="min-w-28 h-8">{intl.formatMessage({ id: 'CURRICULUM.TABLE.SUBJECT_CODE' })}</TableHead>
                    <TableHead className="min-w-72 h-8">{intl.formatMessage({ id: 'CURRICULUM.TABLE.SUBJECT_NAME' })}</TableHead>
                    <TableHead className="min-w-20 h-8">
                      <div className="flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-1.5" />
                        {intl.formatMessage({ id: 'CURRICULUM.TABLE.TERM' })}
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subjects.map((subject) => (
                    <TableRow key={subject.id} className="hover:bg-accent/50">
                      <CompactTableCell className="text-sm text-foreground font-normal">
                        {subject.id}
                      </CompactTableCell>
                      <CompactTableCell className="text-sm text-primary font-semibold">
                        {subject.code}
                      </CompactTableCell>
                      <CompactTableCell className="text-sm text-foreground font-normal">
                        {subject.name}
                      </CompactTableCell>
                      <CompactTableCell>
                        <Badge className="bg-primary/10 text-primary border-primary/30">
                          {subject.termNo}
                        </Badge>
                      </CompactTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* Prerequisite Table */}
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <Book className="h-5 w-5 mr-2 text-primary" />
            <h2 className="text-lg font-semibold">{intl.formatMessage({ id: 'CURRICULUM.PREREQUISITES.TITLE' })}</h2>
          </div>

          <div className="bg-card rounded-lg border shadow-sm">
            <div className="kt-scrollable-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-accent/60">
                    <TableHead className="min-w-16 h-8">
                      <div className="flex items-center">
                        <Hash className="h-3.5 w-3.5 mr-1.5" />
                        {intl.formatMessage({ id: 'CURRICULUM.TABLE.NO' })}
                      </div>
                    </TableHead>
                    <TableHead className="min-w-28 h-8">{intl.formatMessage({ id: 'CURRICULUM.TABLE.SUBJECT_CODE' })}</TableHead>
                    <TableHead className="min-w-28 h-8">{intl.formatMessage({ id: 'CURRICULUM.TABLE.PREREQUISITE' })}</TableHead>
                    <TableHead className="min-w-28 h-8">{intl.formatMessage({ id: 'CURRICULUM.TABLE.ALTERNATIVE' })}</TableHead>
                    <TableHead className="min-w-40 h-8">{intl.formatMessage({ id: 'CURRICULUM.TABLE.CONDITION' })}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {prerequisites.map((prereq) => (
                    <TableRow key={prereq.id} className="hover:bg-accent/50">
                      <CompactTableCell className="text-sm text-foreground font-normal">
                        {prereq.id}
                      </CompactTableCell>
                      <CompactTableCell className="text-sm text-primary font-semibold">
                        {prereq.subjectCode}
                      </CompactTableCell>
                      <CompactTableCell>
                        {prereq.prerequisiteCode && (
                          <Badge variant="warning">
                            {prereq.prerequisiteCode}
                          </Badge>
                        )}
                      </CompactTableCell>
                      <CompactTableCell>
                        {prereq.alternativeCode && (
                          <Badge variant="destructive">
                            {prereq.alternativeCode}
                          </Badge>
                        )}
                      </CompactTableCell>
                      <CompactTableCell className="text-sm text-destructive font-medium">
                        {prereq.condition}
                      </CompactTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export { StudentCurriculumPage };
