import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardToolbar,
} from '@/app/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';
import { GPAGroup } from '../types';
import { TranscriptStatusBadge } from './transcript-status-badge';
import { useIntl } from 'react-intl';

interface TranscriptTableProps {
  gpaList: GPAGroup[];
}

export function TranscriptTable({ gpaList }: TranscriptTableProps) {
  const intl = useIntl();
  
  if (!gpaList.length) {
    return (
      <div className="p-8 text-center text-muted">
        {intl.formatMessage({ id: 'TRANSCRIPT.EMPTY' })}
      </div>
    );
  }
  return (
    <div className="space-y-8">
      {gpaList.map((gpa, idx) => (
        <Card key={idx}>
          <CardHeader>
            {/* <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="font-bold text-base text-primary">Term {gpa.term} - {gpa.semester.session} {gpa.semester.year}</div>
              <div className="flex gap-6 text-xs md:text-sm">
                <span>GPA: <span className="font-bold text-green-700">{gpa.gpa.toFixed(2)}</span></span>
                <span>Total Credits: <span className="font-bold text-primary">{gpa.totalCredit}</span></span>
                <span>Courses: <span className="font-bold">{gpa.courses.length}</span></span>
              </div>
            </div> */}
            <CardTitle className="font-semibold text-base text-primary">
              {intl.formatMessage({ id: 'TRANSCRIPT.TERM' })} {gpa.term} - {intl.formatMessage({ id: 'TRANSCRIPT.SESSION' }, { session: gpa.semester.session, year: gpa.semester.year })}
            </CardTitle>
            <CardToolbar>
              <div className="flex gap-6 text-xs md:text-sm">
                <span>
                  {intl.formatMessage({ id: 'TRANSCRIPT.STATS.AVG' })}{' '}
                  <span className="font-bold text-green-700">
                    {gpa.gpa.toFixed(2)}
                  </span>
                </span>
                <span>
                  {intl.formatMessage({ id: 'TRANSCRIPT.STATS.TOTAL_CREDITS' })}{' '}
                  <span className="font-bold text-primary">
                    {gpa.totalCredit}
                  </span>
                </span>
                <span>
                  {intl.formatMessage({ id: 'TRANSCRIPT.STATS.COURSES' })}{' '}
                  <span className="font-bold">{gpa.courses.length}</span>
                </span>
              </div>
            </CardToolbar>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-accent/60">
                    <TableHead className="w-14 h-10">{intl.formatMessage({ id: 'TRANSCRIPT.TABLE.NO' })}</TableHead>
                    <TableHead className="min-w-28 h-10">{intl.formatMessage({ id: 'TRANSCRIPT.TABLE.CODE' })}</TableHead>
                    <TableHead className="min-w-40 h-10">{intl.formatMessage({ id: 'TRANSCRIPT.TABLE.NAME' })}</TableHead>
                    <TableHead className="min-w-16 h-10 text-center">
                      {intl.formatMessage({ id: 'TRANSCRIPT.TABLE.CREDIT' })}
                    </TableHead>
                    <TableHead className="min-w-16 h-10 text-center">
                      {intl.formatMessage({ id: 'TRANSCRIPT.TABLE.GRADE' })}
                    </TableHead>
                    <TableHead className="min-w-28 h-10 text-center">
                      {intl.formatMessage({ id: 'TRANSCRIPT.TABLE.STATUS' })}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {gpa.courses.map((course, cidx) => (
                    <TableRow key={cidx}>
                      <TableCell className="py-2 text-sm text-foreground font-normal">
                        {cidx + 1}
                      </TableCell>
                      <TableCell className="py-2 text-sm font-mono text-primary font-semibold">
                        {course.subjectCode}
                      </TableCell>
                      <TableCell className="py-2 text-sm text-foreground">
                        {course.subjectName}
                        {(course.prerequisite || course.replacedSubject) && (
                          <div className="text-xs text-muted-foreground italic">
                            {course.prerequisite && (
                              <span>{intl.formatMessage({ id: 'TRANSCRIPT.DETAILS.PREREQ' })} {course.prerequisite} </span>
                            )}
                            {course.replacedSubject && (
                              <span>{intl.formatMessage({ id: 'TRANSCRIPT.DETAILS.REPLACED' })} {course.replacedSubject}</span>
                            )}
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="py-2 text-sm text-center">
                        {course.credit}
                      </TableCell>
                      <TableCell className="py-2 text-sm text-center">
                        {course.grade > 0 ? course.grade.toFixed(1) : '-'}
                      </TableCell>
                      <TableCell className="py-2 text-sm text-center">
                        <TranscriptStatusBadge status={course.status} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
