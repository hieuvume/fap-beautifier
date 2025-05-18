import {
  ArrowRight,
  Award,
  Badge,
  Bell,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  CalendarDays,
  ClipboardCheck,
  ClipboardList,
  Clock,
  CreditCard,
  Download,
  Eye,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  HelpCircle,
  Home,
  Info,
  LayoutGrid,
  List,
  MessageSquare,
  Newspaper,
  PauseCircle,
  QrCode,
  Receipt,
  RefreshCw,
  ScrollText,
  Search,
  Send,
  Shield,
  ShoppingCart,
  Star,
  TrendingUp,
  Upload,
  UserCheck,
  UserCircle,
  UserCog,
  Users,
  XCircle,
  Zap
} from 'lucide-react';
import { type MenuConfig } from './types';

export const MENU_SIDEBAR: MenuConfig = [
  {
    title: 'Academic Portal',
    icon: LayoutGrid,
    children: [
      { title: 'Trang chủ', path: '/' },
      { title: 'Trang chủ', path: '/Student.aspx' },
      { title: 'Tin tức', path: '/CmsFAP/News.aspx' },
    ],
  },
  { heading: 'Menu chính' },
  {
    title: 'Thủ tục / đơn từ',
    icon: FileText,
    children: [
      {
        title: 'Đăng ký học',
        children: [
          { title: 'Đăng ký học môn học tại nước ngoài', path: '/FrontOffice/RegisterCourse.aspx?code=R14' },
          { title: 'Đăng ký môn học đi chậm kỳ', path: '/FrontOffice/RegisterCourse.aspx?code=R3' },
          { title: 'Đăng ký học cải thiện điểm', path: '/FrontOffice/RegisterCourse.aspx?code=R4' },
          { title: 'Đăng ký học lại', path: '/FrontOffice/RegisterCourse.aspx?code=R5' },
          { title: 'Đăng ký môn tự chọn', path: '/FrontOffice/RegisterElective.aspx' },
          { title: 'Đăng ký học vượt kỳ', path: '/FrontOffice/RegisterCourseFast.aspx' },
          { title: 'Đăng ký học phụ đạo', path: '/FrontOffice/RegisterMore.aspx' },
          { title: 'Hủy đăng ký học', path: '/FrontOffice/RegisteredCourses.aspx' },
          { title: 'Danh sách môn học chờ lớp', path: '/FrontOffice/WishList.aspx' },
          { title: 'Đăng ký danh sách chờ', path: '/FrontOffice/RegisterWishlish.aspx' },
          { title: 'Yêu cầu đổi chéo lớp', path: '/App/CourseChange.aspx' },
          { title: 'Xin chuyển lớp', path: '/FrontOffice/Courses.aspx' },
        ],
      },
      {
        title: 'Tạm hoãn & Xác nhận',
        children: [
          { title: 'Tạm hoãn một học kỳ để học lại', path: '/FrontOffice/AddApplication.aspx?code=R1' },
          { title: 'Xin tạm nghỉ một học kỳ', path: '/FrontOffice/AddApplication.aspx?code=R2' },
          { title: 'Xin xác nhận sinh viên', path: '/App/AddApp.aspx' },
          { title: 'Gửi đơn', path: '/App/SendAcad.aspx' },
          { title: 'Xem đơn', path: '/App/AcadAppView.aspx' },
        ],
      },
      {
        title: 'Khác',
        children: [
          { title: 'Đăng ký bảo hiểm y tế', path: '/BHYT/Register.aspx' },
          { title: 'Đề nghị hỗ trợ kinh phí khởi nghiệp', path: '/SBA/Add.aspx' },
          { title: 'Xem đề nghị hỗ trợ', path: '/SBA/StudentSBA.aspx' },
          { title: 'Điểm danh bằng mã', path: '/Schedule/AttendanceByRoll.aspx' },
          { title: 'Lựa chọn các khoản nộp', path: '/FrontOffice/ShoppingCart.aspx' },
          { title: 'Thanh toán', path: '/FrontOffice/CheckOut.aspx' },
          { title: 'Định hướng cho sinh viên', path: 'https://fap.fpt.edu.vn/temp/Regulations/Slide_OR_student.rar' },
          { title: 'Nâng cấp SEB', path: 'https://drive.google.com/drive/u/2/folders/1RmjeKAvef6BXg_qlAl6JnZx2ZkY3qj_3' },
        ],
      },
    ],
  },
  {
    title: 'Tra cứu',
    icon: Search,
    children: [
      {
        title: 'Lịch học & Thi',
        children: [
          { title: 'Lịch học', path: '/Course/Courses.aspx' },
          { title: 'Thời khóa biểu từng tuần', path: '/Report/ScheduleOfWeek.aspx' },
          { title: 'Xem lịch thi', path: '/Exam/ScheduleExams.aspx' },
          { title: 'Đặt phòng học', path: '/Schedule/ActivityStudent.aspx' },
        ],
      },
      {
        title: 'Học phí & Đề cương',
        children: [
          { title: 'Biểu học phí', path: '/FrontOffice/SubjectFees.aspx' },
          { title: 'Xem đề cương môn học', path: 'http://flm.fpt.edu.vn' },
          { title: 'Hướng dẫn EduNext', path: 'https://fap.fpt.edu.vn/temp/Regulations/Huong_dan_KTXH_tren_EduNext_Sp23_Sinh_Vien.pdf' },
        ],
      },
    ],
  },
  {
    title: 'Báo cáo',
    icon: FileText,
    children: [
      {
        title: 'Báo cáo học tập',
        children: [
          { title: 'Báo cáo điểm danh', path: '/Report/ViewAttendstudent.aspx' },
          { title: 'Báo cáo điểm', path: '/Grade/StudentGrade.aspx' },
          { title: 'Bảng điểm', path: '/Grade/StudentTranscript.aspx' },
        ],
      },
      {
        title: 'Ý kiến',
        children: [
          { title: 'Ý kiến về việc giảng dạy', path: '/Feedback/StudentFeedBack.aspx' },
        ],
      },
    ],
  },
  {
    title: 'Thông tin',
    icon: Info,
    children: [
      {
        title: 'Thông tin cá nhân',
        children: [
          { title: 'Hồ sơ sinh viên', path: '/User/Profile.aspx' },
          { title: 'Cập nhật hồ sơ', path: '/User/verProfile.aspx' },
          { title: 'Thông tin học kỳ', path: '/Course/Terms.aspx' },
          { title: 'Thông tin phòng học', path: '/Campus/Rooms.aspx' },
        ],
      },
      {
        title: 'Quy định',
        children: [
          { title: 'Quy định chung', path: '/User/Regulations.aspx' },
          { title: 'Nội quy KTX Hà Nội', path: 'https://fap.fpt.edu.vn/temp/Regulations/QD 272_new.pdf' },
          { title: 'Nội quy KTX Cần Thơ', path: 'https://fap.fpt.edu.vn/temp/Regulations/KTXCT.pdf' },
          { title: 'Thông tin KTX Hòa Lạc', path: 'https://ocd.fpt.edu.vn/' },
        ],
      },
    ],
  },
  {
    title: 'Coursera',
    icon: GraduationCap,
    children: [
      {
        title: 'Thông tin & Hướng dẫn',
        children: [
          { title: 'Thông báo', path: 'https://fap.fpt.edu.vn/temp/Regulations/FPTU-Coursera.pdf' },
          { title: 'Hướng dẫn nộp chứng chỉ', path: 'https://fap.fpt.edu.vn/temp/Regulations/Coursera_certificates_submission_guidelines.pdf' },
          { title: 'Hướng dẫn truy cập Wiley eBook', path: 'https://fap.fpt.edu.vn/temp/Regulations/How-to-access-Wiley-eBook-on-Vitalsource-platform_13_Jan_2025.pdf' },
        ],
      },
      {
        title: 'Hỗ trợ học tập',
        children: [
          { title: 'Hỏi đáp với mentor', path: '/SRS/AddQA.aspx' },
          { title: 'Xem câu trả lời', path: '/SRS/ViewQAS.aspx' },
          { title: 'Nộp chứng chỉ', path: 'https://insideuni.fpt.edu.vn/13' },
          { title: 'Tải EOSClient', path: 'https://fap.fpt.edu.vn/temp/template/EOS_Client_Sinhvien.rar' },
        ],
      },
    ],
  },
];

export const MENU_SIDEBAR_CUSTOM: MenuConfig = [
  {
    title: 'Thủ tục / đơn từ',
    icon: FileText,
    children: [
      {
        title: 'Đăng ký học',
        children: [
          { title: 'Đăng ký học môn học tại nước ngoài', path: '/FrontOffice/RegisterCourse.aspx?code=R14' },
          { title: 'Đăng ký môn học đi chậm kỳ', path: '/FrontOffice/RegisterCourse.aspx?code=R3' },
          { title: 'Đăng ký học cải thiện điểm', path: '/FrontOffice/RegisterCourse.aspx?code=R4' },
          { title: 'Đăng ký học lại', path: '/FrontOffice/RegisterCourse.aspx?code=R5' },
          { title: 'Đăng ký môn tự chọn', path: '/FrontOffice/RegisterElective.aspx' },
          { title: 'Đăng ký học vượt kỳ', path: '/FrontOffice/RegisterCourseFast.aspx' },
          { title: 'Đăng ký học phụ đạo', path: '/FrontOffice/RegisterMore.aspx' },
        ],
      },
      {
        title: 'Tạm hoãn & Xác nhận',
        children: [
          { title: 'Tạm hoãn một học kỳ để học lại', path: '/FrontOffice/AddApplication.aspx?code=R1' },
          { title: 'Xin tạm nghỉ một học kỳ', path: '/FrontOffice/AddApplication.aspx?code=R2' },
          { title: 'Xin xác nhận sinh viên', path: '/App/AddApp.aspx' },
        ],
      },
    ],
  },
];

export const MENU_SIDEBAR_COMPACT: MenuConfig = [
  {
    title: 'Trang chủ',
    icon: LayoutGrid,
    path: '/',
  },
  {
    title: 'Tin tức',
    icon: Newspaper,
    path: '/CmsFAP/News.aspx',
  },
  {
    title: 'Thủ tục / đơn từ',
    icon: FileText,
    children: [
      {
        title: 'Đăng ký học',
        children: [
          { title: 'Đăng ký học môn học tại nước ngoài', path: '/FrontOffice/RegisterCourse.aspx?code=R14' },
          { title: 'Đăng ký môn học đi chậm kỳ', path: '/FrontOffice/RegisterCourse.aspx?code=R3' },
          { title: 'Đăng ký học cải thiện điểm', path: '/FrontOffice/RegisterCourse.aspx?code=R4' },
          { title: 'Đăng ký học lại', path: '/FrontOffice/RegisterCourse.aspx?code=R5' },
          { title: 'Đăng ký môn tự chọn', path: '/FrontOffice/RegisterElective.aspx' },
        ],
      },
      {
        title: 'Tạm hoãn & Xác nhận',
        children: [
          { title: 'Tạm hoãn một học kỳ để học lại', path: '/FrontOffice/AddApplication.aspx?code=R1' },
          { title: 'Xin tạm nghỉ một học kỳ', path: '/FrontOffice/AddApplication.aspx?code=R2' },
          { title: 'Xin xác nhận sinh viên', path: '/App/AddApp.aspx' },
        ],
      },
    ],
  },
  {
    title: 'Tra cứu',
    icon: Search,
    children: [
      {
        title: 'Lịch học & Thi',
        children: [
          { title: 'Lịch học', path: '/Course/Courses.aspx' },
          { title: 'Thời khóa biểu từng tuần', path: '/Report/ScheduleOfWeek.aspx' },
          { title: 'Xem lịch thi', path: '/Exam/ScheduleExams.aspx' },
        ],
      },
    ],
  },
  {
    title: 'Báo cáo',
    icon: FileText,
    children: [
      {
        title: 'Báo cáo học tập',
        children: [
          { title: 'Báo cáo điểm danh', path: '/Report/ViewAttendstudent.aspx' },
          { title: 'Báo cáo điểm', path: '/Grade/StudentGrade.aspx' },
          { title: 'Bảng điểm', path: '/Grade/StudentTranscript.aspx' },
        ],
      },
    ],
  },
];

export const MENU_MEGA: MenuConfig = [
  { title: 'Trang chủ', path: '/Student.aspx' },
  { title: 'Tin tức', path: '/CmsFAP/News.aspx' },
  {
    title: 'Thủ tục / đơn từ',
    children: [
      {
        title: 'Đăng ký học',
        children: [
          {
            children: [
              {
                title: 'Đăng ký học môn học tại nước ngoài',
                icon: Globe,
                path: '/FrontOffice/RegisterCourse.aspx?code=R14',
              },
              {
                title: 'Đăng ký môn học đi chậm kỳ',
                icon: Clock,
                path: '/FrontOffice/RegisterCourse.aspx?code=R3',
              },
              {
                title: 'Đăng ký học cải thiện điểm',
                icon: TrendingUp,
                path: '/FrontOffice/RegisterCourse.aspx?code=R4',
              },
              {
                title: 'Đăng ký học lại',
                icon: RefreshCw,
                path: '/FrontOffice/RegisterCourse.aspx?code=R5',
              },
              {
                title: 'Đăng ký môn tự chọn',
                icon: BookOpen,
                path: '/FrontOffice/RegisterElective.aspx',
              },
              {
                title: 'Đăng ký học vượt kỳ',
                icon: Zap,
                path: '/FrontOffice/RegisterCourseFast.aspx',
              },
              {
                title: 'Đăng ký học phụ đạo',
                icon: GraduationCap,
                path: '/FrontOffice/RegisterMore.aspx',
              },
            ],
          },
          {
            children: [
              {
                title: 'Hủy đăng ký học',
                icon: XCircle,
                path: '/FrontOffice/RegisteredCourses.aspx',
              },
              {
                title: 'Danh sách môn học chờ lớp',
                icon: List,
                path: '/FrontOffice/WishList.aspx',
              },
              {
                title: 'Đăng ký danh sách chờ',
                icon: ClipboardCheck,
                path: '/FrontOffice/RegisterWishlish.aspx',
              },
              {
                title: 'Yêu cầu đổi chéo lớp',
                icon: Users,
                path: '/App/CourseChange.aspx',
              },
              {
                title: 'Xin chuyển lớp',
                icon: ArrowRight,
                path: '/FrontOffice/Courses.aspx',
              },
            ],
          },
        ],
      },
      {
        title: 'Tạm hoãn & Xác nhận',
        children: [
          {
            children: [
              {
                title: 'Tạm hoãn một học kỳ để học lại',
                icon: PauseCircle,
                path: '/FrontOffice/AddApplication.aspx?code=R1',
              },
              {
                title: 'Xin tạm nghỉ một học kỳ',
                icon: Calendar,
                path: '/FrontOffice/AddApplication.aspx?code=R2',
              },
              {
                title: 'Xin xác nhận sinh viên',
                icon: UserCheck,
                path: '/App/AddApp.aspx',
              },
              {
                title: 'Gửi đơn',
                icon: Send,
                path: '/App/SendAcad.aspx',
              },
              {
                title: 'Xem đơn',
                icon: Eye,
                path: '/App/AcadAppView.aspx',
              },
            ],
          },
        ],
      },
      {
        title: 'Khác',
        children: [
          {
            children: [
              {
                title: 'Đăng ký bảo hiểm y tế',
                icon: Heart,
                path: '/BHYT/Register.aspx',
              },
              {
                title: 'Đề nghị hỗ trợ kinh phí khởi nghiệp',
                icon: Briefcase,
                path: '/SBA/Add.aspx',
              },
              {
                title: 'Xem đề nghị hỗ trợ',
                icon: FileText,
                path: '/SBA/StudentSBA.aspx',
              },
              {
                title: 'Điểm danh bằng mã',
                icon: QrCode,
                path: '/Schedule/AttendanceByRoll.aspx',
              },
              {
                title: 'Lựa chọn các khoản nộp',
                icon: ShoppingCart,
                path: '/FrontOffice/ShoppingCart.aspx',
              },
              {
                title: 'Thanh toán',
                icon: CreditCard,
                path: '/FrontOffice/CheckOut.aspx',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Tra cứu',
    children: [
      {
        title: 'Lịch học & Thi',
        children: [
          {
            children: [
              {
                title: 'Lịch học',
                icon: Calendar,
                path: '/Course/Courses.aspx',
              },
              {
                title: 'Thời khóa biểu từng tuần',
                icon: CalendarDays,
                path: '/Report/ScheduleOfWeek.aspx',
              },
              {
                title: 'Xem lịch thi',
                icon: ClipboardList,
                path: '/Exam/ScheduleExams.aspx',
              },
              {
                title: 'Đặt phòng học',
                icon: Building2,
                path: '/Schedule/ActivityStudent.aspx',
              },
            ],
          },
        ],
      },
      {
        title: 'Học phí & Đề cương',
        children: [
          {
            children: [
              {
                title: 'Biểu học phí',
                icon: Receipt,
                path: '/FrontOffice/SubjectFees.aspx',
              },
              {
                title: 'Xem đề cương môn học',
                icon: BookOpen,
                path: 'http://flm.fpt.edu.vn',
              },
              {
                title: 'Hướng dẫn EduNext',
                icon: GraduationCap,
                path: 'https://fap.fpt.edu.vn/temp/Regulations/Huong_dan_KTXH_tren_EduNext_Sp23_Sinh_Vien.pdf',
              },
            ],
          },
        ],
      },
      {
        title: 'Kết quả & Hỗ trợ',
        children: [
          {
            children: [
              {
                title: 'Kết quả OJT',
                icon: Briefcase,
                path: '/App/ViewOjtCas.aspx',
              },
              {
                title: 'Kết quả KLTN',
                icon: Award,
                path: '/App/ViewXetTN.aspx',
              },
              {
                title: 'Hỗ trợ',
                icon: HelpCircle,
                path: '/Report/Help.aspx',
              },
              {
                title: 'Nâng cấp SEB',
                icon: Shield,
                path: 'https://drive.google.com/drive/u/2/folders/1RmjeKAvef6BXg_qlAl6JnZx2ZkY3qj_3',
              },
              {
                title: 'Định hướng cho sinh viên',
                icon: FileText,
                path: 'https://fap.fpt.edu.vn/temp/Regulations/Slide_OR_student.rar',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Báo cáo',
    children: [
      {
        title: 'Báo cáo học tập',
        children: [
          {
            children: [
              {
                title: 'Báo cáo điểm danh',
                icon: ClipboardCheck,
                path: '/Report/ViewAttendstudent.aspx',
              },
              {
                title: 'Báo cáo điểm',
                icon: Award,
                path: '/Grade/StudentGrade.aspx',
              },
              {
                title: 'Bảng điểm',
                icon: ScrollText,
                path: '/Grade/StudentTranscript.aspx',
              },
              {
                title: 'Khung chương trình',
                icon: BookOpen,
                path: '/FrontOffice/StudentCurriculum.aspx',
              },
              {
                title: 'Lịch sử giao dịch',
                icon: Receipt,
                path: '/Finance/TransReport.aspx',
              },
              {
                title: 'Các loại chứng chỉ',
                icon: Badge,
                path: '/Report/Awa.aspx',
              },
              {
                title: 'Báo cáo điểm phong trào',
                icon: Star,
                path: '/Report/PrintReportFinalS.aspx',
              },
            ],
          },
        ],
      },
      {
        title: 'Ý kiến',
        children: [
          {
            children: [
              {
                title: 'Ý kiến về việc giảng dạy',
                icon: MessageSquare,
                path: '/Feedback/StudentFeedBack.aspx',
              },
            ],
          },
        ],
      }
    ],
  },
  {
    title: 'Thông tin',
    children: [
      {
        title: 'Thông tin cá nhân',
        children: [
          {
            children: [
              {
                title: 'Hồ sơ sinh viên',
                icon: UserCircle,
                path: '/User/Profile.aspx',
              },
              {
                title: 'Cập nhật hồ sơ',
                icon: UserCog,
                path: '/User/verProfile.aspx',
              },
              {
                title: 'Thông tin học kỳ',
                icon: Calendar,
                path: '/Course/Terms.aspx',
              },
              {
                title: 'Thông tin phòng học',
                icon: Building2,
                path: '/Campus/Rooms.aspx',
              },
            ],
          },
        ],
      },
      {
        title: 'Quy định',
        children: [
          {
            children: [
              {
                title: 'Quy định chung',
                icon: FileText,
                path: '/User/Regulations.aspx',
              },
              {
                title: 'Nội quy KTX Hà Nội',
                icon: Home,
                path: 'https://fap.fpt.edu.vn/temp/Regulations/QD 272_new.pdf',
              },
              {
                title: 'Nội quy KTX Cần Thơ',
                icon: Home,
                path: 'https://fap.fpt.edu.vn/temp/Regulations/KTXCT.pdf',
              },
              {
                title: 'Thông tin KTX Hòa Lạc',
                icon: Building2,
                path: 'https://ocd.fpt.edu.vn/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Coursera',
    children: [
      {
        title: 'Thông tin & Hướng dẫn',
        children: [
          {
            children: [
              {
                title: 'Thông báo',
                icon: Bell,
                path: 'https://fap.fpt.edu.vn/temp/Regulations/FPTU-Coursera.pdf',
              },
              {
                title: 'Hướng dẫn nộp chứng chỉ',
                icon: FileText,
                path: 'https://fap.fpt.edu.vn/temp/Regulations/Coursera_certificates_submission_guidelines.pdf',
              },
              {
                title: 'Hướng dẫn truy cập Wiley eBook',
                icon: BookOpen,
                path: 'https://fap.fpt.edu.vn/temp/Regulations/How-to-access-Wiley-eBook-on-Vitalsource-platform_13_Jan_2025.pdf',
              },
            ],
          },
        ],
      },
      {
        title: 'Hỗ trợ học tập',
        children: [
          {
            children: [
              {
                title: 'Hỏi đáp với mentor',
                icon: MessageSquare,
                path: '/SRS/AddQA.aspx',
              },
              {
                title: 'Xem câu trả lời',
                icon: Eye,
                path: '/SRS/ViewQAS.aspx',
              },
              {
                title: 'Nộp chứng chỉ',
                icon: Upload,
                path: 'https://insideuni.fpt.edu.vn/13',
              },
              {
                title: 'Tải EOSClient',
                icon: Download,
                path: 'https://fap.fpt.edu.vn/temp/template/EOS_Client_Sinhvien.rar',
              },
            ],
          },
        ],
      },
    ],
  },
];

export const MENU_MEGA_MOBILE: MenuConfig = [
  { title: 'Trang chủ', path: '/Student.aspx' },
  {
    title: 'Thủ tục / đơn từ',
    children: [
      {
        title: 'Đăng ký học',
        children: [
          { title: 'Đăng ký học môn học tại nước ngoài', path: '/FrontOffice/RegisterCourse.aspx?code=R14' },
          { title: 'Đăng ký môn học đi chậm kỳ', path: '/FrontOffice/RegisterCourse.aspx?code=R3' },
          { title: 'Đăng ký học cải thiện điểm', path: '/FrontOffice/RegisterCourse.aspx?code=R4' },
          { title: 'Đăng ký học lại', path: '/FrontOffice/RegisterCourse.aspx?code=R5' },
          { title: 'Đăng ký môn tự chọn', path: '/FrontOffice/RegisterElective.aspx' },
        ],
      },
      {
        title: 'Tạm hoãn & Xác nhận',
        children: [
          { title: 'Tạm hoãn một học kỳ để học lại', path: '/FrontOffice/AddApplication.aspx?code=R1' },
          { title: 'Xin tạm nghỉ một học kỳ', path: '/FrontOffice/AddApplication.aspx?code=R2' },
          { title: 'Xin xác nhận sinh viên', path: '/App/AddApp.aspx' },
        ],
      },
    ],
  },
  {
    title: 'Tra cứu',
    children: [
      {
        title: 'Lịch học & Thi',
        children: [
          { title: 'Lịch học', path: '/Course/Courses.aspx' },
          { title: 'Thời khóa biểu từng tuần', path: '/Report/ScheduleOfWeek.aspx' },
          { title: 'Xem lịch thi', path: '/Exam/ScheduleExams.aspx' },
        ],
      },
    ],
  },
  {
    title: 'Báo cáo',
    children: [
      {
        title: 'Báo cáo học tập',
        children: [
          { title: 'Báo cáo điểm danh', path: '/Report/ViewAttendstudent.aspx' },
          { title: 'Báo cáo điểm', path: '/Grade/StudentGrade.aspx' },
          { title: 'Bảng điểm', path: '/Grade/StudentTranscript.aspx' },
        ],
      },
    ],
  },
];

export const MENU_HELP: MenuConfig = [
  {
    title: 'Hỗ trợ',
    icon: HelpCircle,
    path: '/Report/Help.aspx',
  },
  {
    title: 'Hướng dẫn EduNext',
    icon: GraduationCap,
    path: 'https://fap.fpt.edu.vn/temp/Regulations/Huong_dan_KTXH_tren_EduNext_Sp23_Sinh_Vien.pdf',
  },
  {
    title: 'Định hướng cho sinh viên',
    icon: FileText,
    path: 'https://fap.fpt.edu.vn/temp/Regulations/Slide_OR_student.rar',
  },
  {
    title: 'Nội quy KTX',
    icon: Home,
    children: [
      {
        title: 'Nội quy KTX Hà Nội',
        path: 'https://fap.fpt.edu.vn/temp/Regulations/QD 272_new.pdf',
      },
      {
        title: 'Nội quy KTX Cần Thơ',
        path: 'https://fap.fpt.edu.vn/temp/Regulations/KTXCT.pdf',
      },
    ],
  },
];

export const MENU_ROOT: MenuConfig = [
  {
    title: 'Thủ tục / đơn từ',
    icon: FileText,
    rootPath: '/FrontOffice/',
    path: '/FrontOffice/RegisterCourse.aspx?code=R14',
    childrenIndex: 1,
  },
  {
    title: 'Tra cứu',
    icon: Search,
    rootPath: '/Course/',
    path: '/Course/Courses.aspx',
    childrenIndex: 2,
  },
  {
    title: 'Báo cáo',
    icon: FileText,
    rootPath: '/Report/',
    path: '/Report/ViewAttendstudent.aspx',
    childrenIndex: 3,
  },
  {
    title: 'Thông tin',
    icon: Info,
    rootPath: '/User/',
    path: '/User/Profile.aspx',
    childrenIndex: 4,
  },
  {
    title: 'Coursera',
    icon: GraduationCap,
    rootPath: '/SRS/',
    path: '/SRS/AddQA.aspx',
    childrenIndex: 5,
  },
];
