import { Card, CardContent } from '@/app/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/app/components/ui/table';
import { useIntl } from 'react-intl';

interface DeadlineGroup {
    deadline: string;
    procedures: string[];
}

const ApplicationDeadline = () => {
    const intl = useIntl();
    const deadlineData: DeadlineGroup[] = [
        {
            deadline: 'DASHBOARD.APPLICATION_DEADLINE.DEADLINE_4_WEEKS_BEFORE_NEW_SEMESTER',
            procedures: [
                'DASHBOARD.APPLICATION_DEADLINE.PROC_CHANGING_MAJOR',
                'DASHBOARD.APPLICATION_DEADLINE.PROC_CHANGING_CAMPUS',
            ]
        },
        {
            deadline: 'DASHBOARD.APPLICATION_DEADLINE.DEADLINE_10_DAYS_BEFORE_NEW_SEMESTER',
            procedures: [
                'DASHBOARD.APPLICATION_DEADLINE.PROC_REJOIN',
            ]
        },
        {
            deadline: 'DASHBOARD.APPLICATION_DEADLINE.DEADLINE_1_WEEK_BEFORE_NEW_SEMESTER',
            procedures: [
                'DASHBOARD.APPLICATION_DEADLINE.PROC_SUSPEND_ONE_SEMESTER',
                'DASHBOARD.APPLICATION_DEADLINE.PROC_SUSPEND_ONE_SEMESTER_REPEAT',
                'DASHBOARD.APPLICATION_DEADLINE.PROC_SUSPEND_SUBJECT',
                'DASHBOARD.APPLICATION_DEADLINE.PROC_REGISTER_REPEAT_COURSE',
                'DASHBOARD.APPLICATION_DEADLINE.PROC_REGISTER_EXTRA_COURSES',
                'DASHBOARD.APPLICATION_DEADLINE.PROC_REGISTER_IMPROVE_MARK',
                'DASHBOARD.APPLICATION_DEADLINE.PROC_MOVE_OUT_CLASS',
                'DASHBOARD.APPLICATION_DEADLINE.PROC_REQUEST_DROP_OUT',
            ]
        },
        {
            deadline: 'DASHBOARD.APPLICATION_DEADLINE.DEADLINE_12H_BEFORE_FINAL_EXAM_RESIT',
            procedures: [
                'DASHBOARD.APPLICATION_DEADLINE.PROC_RETAKE_IMPROVE_MARK',
            ]
        },
        {
            deadline: 'DASHBOARD.APPLICATION_DEADLINE.DEADLINE_3_DAYS_AFTER_RESULT_PUBLIC',
            procedures: [
                'DASHBOARD.APPLICATION_DEADLINE.PROC_RE_EXAMINATION',
            ]
        },
        {
            deadline: 'DASHBOARD.APPLICATION_DEADLINE.DEADLINE_BEFORE_SEMESTER_START',
            procedures: [
                'DASHBOARD.APPLICATION_DEADLINE.PROC_FREE_OF_ATTENDANCE',
            ]
        },
        {
            deadline: 'DASHBOARD.APPLICATION_DEADLINE.DEADLINE_5_WORKING_DAYS_BEFORE_NEW_SEMESTER',
            procedures: [
                'DASHBOARD.APPLICATION_DEADLINE.PROC_PAY_SPECIALIZED_TUITION',
            ]
        },
        {
            deadline: 'DASHBOARD.APPLICATION_DEADLINE.DEADLINE_3_WORKING_DAYS_BEFORE_NEW_COURSE',
            procedures: [
                'DASHBOARD.APPLICATION_DEADLINE.PROC_PAY_PREPARATION_ENGLISH_TUITION',
            ]
        },
        {
            deadline: 'DASHBOARD.APPLICATION_DEADLINE.DEADLINE_12H_FRIDAY_WEEK9',
            procedures: [
                'DASHBOARD.APPLICATION_DEADLINE.PROC_REGISTER_FINAL_EXAM_ONLINE',
            ]
        }
    ];

    return (
        <Card>
            <CardContent className="p-0">
                <div className="table-fixed overflow-hidden text-sm rounded-md">
                    <Table className="w-full text-sm text-secondary-foreground">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-center text-dark font-semibold bg-accent/50 border-r">
                                    {intl.formatMessage({ id: 'DASHBOARD.APPLICATION_DEADLINE.PROCEDURE_TYPE' })}
                                </TableHead>
                                <TableHead className="text-center text-dark font-semibold bg-accent/50">
                                    {intl.formatMessage({ id: 'DASHBOARD.APPLICATION_DEADLINE.DEADLINE' })}
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {deadlineData.map((group, groupIndex) => (
                                group.procedures.map((procedure, procIndex) => (
                                    <TableRow key={`${groupIndex}-${procIndex}`}>
                                        <TableCell className='border-r font-medium py-2.5'>
                                            {intl.formatMessage({ id: procedure })}
                                        </TableCell>
                                        {procIndex === 0 ? (
                                            <TableCell
                                                className="text-primary dark:text-gray-300 py-2.5"
                                                rowSpan={group.procedures.length}
                                            >
                                                {intl.formatMessage({ id: group.deadline })}
                                            </TableCell>
                                        ) : null}
                                    </TableRow>
                                ))
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
};

export { ApplicationDeadline };
