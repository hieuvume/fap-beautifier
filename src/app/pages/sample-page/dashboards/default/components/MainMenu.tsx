import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Badge } from '@/app/components/ui/badge';
import { ApplicationDeadline } from './ApplicationDeadline';

interface MenuLink {
    title: string;
    href: string;
    cancelHref?: string;
    isNew?: boolean;
    target?: string;
    description?: string;
}

interface MenuSection {
    title: string;
    links: MenuLink[];
}

const MainMenu = () => {
    const menuSections: Record<string, MenuSection[]> = {
        'col1': [
            {
                title: 'Registration/Application (Thủ tục/đơn từ)',
                links: [
                    {
                        title: 'Suspend one semester to take repeated course',
                        href: 'FrontOffice/AddApplication.aspx?code=R1',
                        cancelHref: 'FrontOffice/RemoveApplication.aspx?code=R1',
                        description: 'Xin tạm hoãn tiến độ một học kỳ để học lại | Hủy bỏ việc xin tạm hoãn'
                    },
                    {
                        title: 'Suspend one semester',
                        href: 'FrontOffice/AddApplication.aspx?code=R2',
                        cancelHref: 'FrontOffice/RemoveApplication.aspx?code=R2',
                        description: 'Xin tạm nghỉ một học kỳ | Hủy bỏ việc xin tạm nghỉ'
                    },
                    { title: 'Move out class', href: 'FrontOffice/Courses.aspx', description: 'Xin chuyển lớp' },
                    { title: 'Đăng ký học môn học tại nước ngoài', href: 'FrontOffice/RegisterCourse.aspx?code=R14' },
                    { title: 'Register extra courses', href: 'FrontOffice/RegisterCourse.aspx?code=R3', description: 'Đăng ký môn học đi chậm kỳ' },
                    { title: 'Register to improve mark', href: 'FrontOffice/RegisterCourse.aspx?code=R4', description: 'Đăng ký học cải thiện điểm' },
                    { title: 'Register to repeat a course', href: 'FrontOffice/RegisterCourse.aspx?code=R5', description: 'Đăng ký học lại' },
                    { title: 'Cancel registration', href: 'FrontOffice/RegisteredCourses.aspx', description: 'Hủy đăng ký học' },
                    { title: 'Register Free Elective Courses', href: 'FrontOffice/RegisterElective.aspx', description: 'Đăng ký môn tự chọn' },
                    { title: 'Send Application', href: 'App/SendAcad.aspx', description: 'Gửi đơn' },
                    { title: 'View Application', href: 'App/AcadAppView.aspx', description: 'Xem đơn' },
                    { title: 'Xin xác nhận sinh viên', href: 'App/AddApp.aspx' },
                    { title: 'Choose paid items', href: 'FrontOffice/ShoppingCart.aspx', description: 'Lựa chọn các khoản nộp' },
                    { title: 'Thanh toán', href: 'FrontOffice/CheckOut.aspx' },
                    { title: 'Yêu cầu đổi chéo lớp với sinh viên', href: 'App/CourseChange.aspx' },
                    { title: 'Sinh viên điểm danh bằng mã được cấp', href: 'Schedule/AttendanceByRoll.aspx' },
                    { title: 'Wishlist Course', href: 'FrontOffice/WishList.aspx', description: 'Danh các môn học chờ lớp' },
                    { title: 'Register wishlist', href: 'FrontOffice/RegisterWishlish.aspx', description: 'Đăng ký' },
                    { title: 'Đề nghị hỗ trợ kinh phí khởi nghiệp', href: 'SBA/Add.aspx' },
                    { title: 'View', href: 'SBA/StudentSBA.aspx' },
                    { title: 'Đăng ký học vượt kỳ', href: 'FrontOffice/RegisterCourseFast.aspx' },
                    { title: 'Đăng ký học phụ đạo', href: 'FrontOffice/RegisterMore.aspx' },
                    { title: 'Đăng ký bảo hiểm y tế', href: 'BHYT/Register.aspx' }
                ]
            },
            {
                title: 'Feedback (Ý kiến)',
                links: [
                    { title: 'Feedback about teaching', href: 'Feedback/StudentFeedBack.aspx', description: 'Ý kiến về việc giảng dạy' }
                ]
            },
            {
                title: 'Others (Khác)',
                links: [
                    { title: 'Student Profile', href: 'User/Profile.aspx' },
                    { title: 'Update Profile', href: 'User/verProfile.aspx' },
                    { title: 'View semester', href: 'Course/Terms.aspx' },
                    { title: 'View room', href: 'Campus/Rooms.aspx', description: 'Xem thông tin về học kỳ, phòng' },
                    { title: 'Các loại chứng chỉ', href: 'Report/Awa.aspx' },
                    { title: 'Report điểm phong trào', href: 'Report/PrintReportFinalS.aspx' },
                    {
                        title: 'How to access Wiley eBook on VitalSource platform',
                        href: 'https://fap.fpt.edu.vn/temp/Regulations/How-to-access-Wiley-eBook-on-Vitalsource-platform_13_Jan_2025.pdf',
                        target: '_blank'
                    }
                ]
            },
        ],
        'col2': [
            {
                title: 'Information Access (Tra cứu thông tin)',
                links: [
                    { title: 'University timetable', href: 'Course/Courses.aspx', description: 'Lịch học' },
                    { title: 'Tuition fee per course', href: 'FrontOffice/SubjectFees.aspx', description: 'Biểu học phí' },
                    { title: 'Weekly timetable', href: 'Report/ScheduleOfWeek.aspx', description: 'Thời khóa biểu từng tuần' },
                    {
                        title: 'View exam schedule',
                        href: 'Exam/ScheduleExams.aspx',
                        target: '_blank',
                        description: 'Xem lịch thi'
                    },
                    {
                        title: 'View Syllabuses',
                        href: 'http://flm.fpt.edu.vn',
                        target: '_blank',
                        description: 'Xem đề cương môn học'
                    },
                    {
                        title: 'EduNext student guideline',
                        href: 'https://fap.fpt.edu.vn/temp/Regulations/Huong_dan_KTXH_tren_EduNext_Sp23_Sinh_Vien.pdf',
                        isNew: true,
                        target: '_blank'
                    },
                    {
                        title: 'Help/Hỗ trợ',
                        href: 'Report/Help.aspx',
                        isNew: true,
                        target: '_blank'
                    },
                    {
                        title: 'Tài liệu hướng dẫn: Định hướng cho sinh viên',
                        href: 'https://fap.fpt.edu.vn/temp/Regulations/Slide_OR_student.rar',
                        isNew: true,
                        target: '_blank'
                    },
                    {
                        title: 'Student book room',
                        href: 'https://fap.fpt.edu.vn/Schedule/ActivityStudent.aspx',
                        isNew: true
                    },
                    { title: 'OJT', href: 'App/ViewOjtCas.aspx', target: '_blank' },
                    { title: 'Xét khóa luận tốt nghiệp', href: 'App/ViewXetTN.aspx', target: '_blank' },
                    {
                        title: 'Nâng cấp phần mềm SAFE EXAM BROWSER (SEB)',
                        href: 'https://drive.google.com/drive/u/2/folders/1RmjeKAvef6BXg_qlAl6JnZx2ZkY3qj_3',
                        isNew: true,
                        target: '_blank'
                    }
                ]
            },
            {
                title: 'Reports (Báo cáo)',
                links: [
                    { title: 'Attendance report', href: 'Report/ViewAttendstudent.aspx', description: 'Báo cáo điểm danh' },
                    { title: 'Mark Report', href: 'Grade/StudentGrade.aspx', description: 'Báo cáo điểm' },
                    { title: 'Academic Transcript', href: 'Grade/StudentTranscript.aspx', description: 'Báo cáo điểm' },
                    { title: 'Curriculum', href: 'FrontOffice/StudentCurriculum.aspx', description: 'Khung chương trình' },
                    { title: 'Transaction history', href: 'Finance/TransReport.aspx', description: 'Lịch sử giao dịch' }
                ]
            },
            {
                title: 'Regulations (Các quy định)',
                links: [
                    { title: 'Regulations...', href: 'User/Regulations.aspx', target: '_blank' },
                    {
                        title: 'Dormitory regulations (Nội quy KTX Hà Nội)',
                        href: 'https://fap.fpt.edu.vn/temp/Regulations/QD 272_new.pdf',
                        target: '_blank'
                    },
                    {
                        title: 'Dormitory regulations (Nội quy KTX Cần Thơ)',
                        href: 'https://fap.fpt.edu.vn/temp/Regulations/KTXCT.pdf',
                        target: '_blank'
                    }
                ]
            },
            {
                title: 'Thông tin KTX',
                links: [
                    {
                        title: 'Thông tin KTX => Hòa Lạc - On Campus Dormitory',
                        href: 'https://ocd.fpt.edu.vn/'
                    }
                ]
            },
            {
                title: 'Courses on FPTU-Coursera',
                links: [
                    {
                        title: 'Announcement',
                        href: 'https://fap.fpt.edu.vn/temp/Regulations/FPTU-Coursera.pdf',
                        target: '_blank'
                    },
                    { title: 'Ask mentor', href: 'SRS/AddQA.aspx', target: '_blank' },
                    { title: 'View answer', href: 'SRS/ViewQAS.aspx', target: '_blank' },
                    {
                        title: 'Submit certificates',
                        href: 'https://insideuni.fpt.edu.vn/13',
                        target: '_blank'
                    },
                    {
                        title: 'Certificate submission guideline',
                        href: 'https://fap.fpt.edu.vn/temp/Regulations/Coursera_certificates_submission_guidelines.pdf',
                        target: '_blank'
                    }
                ]
            }
        ]
    };

    const renderLink = (link: MenuLink) => (
        <div className="flex items-center flex-wrap">
            <a
                href={link.href}
                target={link.target}
                className="text-blue-600 hover:text-blue-800 hover:underline"
            >
                {link.title}
            </a>
            {link.cancelHref && (
                <>
                    <span className="mx-1">|</span>
                    <a
                        href={link.cancelHref}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                        Cancel
                    </a>
                </>
            )}
            {link.isNew && (
                <Badge variant="destructive" className="ml-1 py-0 h-4 bg-red-50 text-red-500 border-red-200">
                    New
                </Badge>
            )}
            {link.description && (
                <span className="text-gray-600 ml-1">({link.description})</span>
            )}
        </div>
    );

    const renderSection = (section: MenuSection) => (
        <div key={section.title} className="mb-3">
            <h3 className="font-semibold text-lg text-orange-600 mb-1">{section.title}</h3>
            <ul className="space-y-1">
                {section.links.map((link, index) => (
                    <li key={index} className="text-2sm">
                        {renderLink(link)}
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <Card className="w-full bg-white">
            <CardContent className="p-6 pb-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                        {menuSections['col1'].map(renderSection)}
                    </div>
                    <div className="space-y-6">
                        {menuSections['col2'].map(renderSection)}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export { MainMenu };