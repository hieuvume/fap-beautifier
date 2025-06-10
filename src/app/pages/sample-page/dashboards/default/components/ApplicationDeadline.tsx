import { Card, CardContent } from '@/app/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/app/components/ui/table';

interface DeadlineGroup {
    deadline: string;
    procedures: string[];
}

const ApplicationDeadline = () => {
    const deadlineData: DeadlineGroup[] = [
        {
            deadline: '4 tuần trước học kỳ mới',
            procedures: ['Chuyển ngành', 'Chuyển cơ sở']
        },
        {
            deadline: '10 ngày trước học kỳ mới',
            procedures: ['Nhập học trở lại']
        },
        {
            deadline: '1 tuần trước học kỳ mới',
            procedures: [
                'Bảo lưu học kỳ',
                'Tạm ngưng tiến độ 1 học kỳ để học lại',
                'Tạm ngừng môn',
                'Đăng ký học lại',
                'Đăng ký học đi chậm kỳ',
                'Đăng ký học cải thiện',
                'Chuyển lớp',
                'Thôi học tự nguyện'
            ]
        },
        {
            deadline: '12h trước lịch thi lại',
            procedures: ['Thi cải thiện']
        },
        {
            deadline: '3 ngày sau ngày công bố kết quả',
            procedures: ['Phúc tra']
        },
        {
            deadline: 'Trước khi học kỳ bắt đầu',
            procedures: ['Miễn điểm danh']
        },
        {
            deadline: '5 ngày trước học kỳ mới (không tính T7, CN)',
            procedures: ['Nộp học phí chuyên ngành']
        },
        {
            deadline: '3 ngày trước khi bắt đầu khóa học (không tính T7, CN)',
            procedures: ['Nộp học phí Tiếng Anh dự bị']
        },
        {
            deadline: '12h Thứ 6 tuần thứ 9 của học kỳ',
            procedures: ['Đăng ký thi thẩm định các môn online']
        }
    ];

    return (
        <Card>
            <CardContent className="p-0">
                <div className="table-fixed overflow-hidden text-sm rounded-md">
                    <Table className="w-full text-sm text-secondary-foreground">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-center font-semibold bg-accent/50 border-r">
                                    Loại thủ tục
                                </TableHead>
                                <TableHead className="text-center font-semibold bg-accent/50">
                                    Hạn nộp đơn
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {deadlineData.map((group, groupIndex) => (
                                group.procedures.map((procedure, procIndex) => (
                                    <TableRow key={`${groupIndex}-${procIndex}`}>
                                        <TableCell className='border-r font-medium py-2.5'>
                                            {procedure}
                                        </TableCell>
                                        {procIndex === 0 ? (
                                            <TableCell
                                                className="text-primary py-2.5"
                                                rowSpan={group.procedures.length}
                                            >
                                                {group.deadline}
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
