type MenuModel = {
  title: string;
  to: string;
  icon: string;
  color: string;
  reload?: boolean;
};

type MasterMenuModel = {
  name: string;
  menu: MenuModel[];
  quickAccess: MenuModel[];
};

export const masterMenu: MasterMenuModel[] = [
  {
    name: "Information Access",
    menu: [
      {
        title: "Portal Dashboard",
        to: "/Student.aspx",
        icon: "ki-abstract-41",
        color: "primary",
      },
      {
        title: "Weekly timetable",
        to: "/Report/ScheduleOfWeek.aspx",
        icon: "ki-calendar",
        color: "success",
      },
      {
        title: "Exam schedule",
        to: "/Exam/ScheduleExams.aspx",
        icon: "ki-calendar-tick",
        color: "danger",
      },
      {
        title: "Tuition fee per course",
        to: "/FrontOffice/SubjectFees.aspx",
        icon: "ki-wallet",
        color: "info",
      },
      {
        title: "BLOC Schedules",
        to: "/Schedule/FunixSchedule.aspx",
        icon: "ki-calendar-search",
        color: "success",
        reload: true,
      },
      {
        title: "View Syllabuses",
        to: "https://flm.fpt.edu.vn/DefaultSignin",
        icon: "ki-external-drive",
        color: "danger",
        reload: true,
      },
      {
        title: "EduNext guideline",
        to: "https://fap.fpt.edu.vn/temp/Regulations/Huong_dan_KTXH_tren_EduNext_Sp23_Sinh_Vien.pdf",
        icon: "ki-teacher",
        color: "success",
        reload: true,
      },
      {
        title: "Help/Hỗ trợ",
        to: "/Report/Help.aspx",
        icon: "ki-bookmark",
        color: "info",
      },
    ],
    quickAccess: [
      {
        title: "Weekly timetable",
        to: "/Report/ScheduleOfWeek.aspx",
        icon: "ki-calendar",
        color: "success",
      },
      {
        title: "Exam schedule",
        to: "/Exam/ScheduleExams.aspx",
        icon: "ki-calendar-tick",
        color: "danger",
      },
      {
        title: "View Syllabuses",
        to: "https://flm.fpt.edu.vn/DefaultSignin",
        icon: "ki-external-drive",
        color: "danger",
        reload: true,
      },
    ],
  },
  {
    name: "Registration/Application",
    menu: [
      {
        title: "Portal Dashboard",
        to: "/Student.aspx",
        icon: "ki-abstract-41",
        color: "primary",
      },
      {
        title: "Suspend to take repeated course",
        to: "/FrontOffice/AddApplication.aspx?code=R1",
        icon: "ki-note-2",
        color: "danger",
        reload: true,
      },
      {
        title: "Cancel suspend",
        to: "/FrontOffice/RemoveApplication.aspx?code=R1",
        icon: "ki-note-2",
        color: "danger",
        reload: true,
      },
      {
        title: "Suspend one semester",
        to: "/FrontOffice/AddApplication.aspx?code=R2",
        icon: "ki-note",
        color: "danger",
        reload: true,
      },
      {
        title: "Cancel suspend one semester",
        to: "/FrontOffice/RemoveApplication.aspx?code=R2",
        icon: "ki-note-2",
        color: "danger",
        reload: true,
      },
      {
        title: "Move out class",
        to: "/FrontOffice/Courses.aspx",
        icon: "ki-exit-left",
        color: "danger",
        reload: true,
      },
      {
        title: "Register extra courses",
        to: "/FrontOffice/RegisterCourse.aspx?code=R3",
        icon: "ki-calendar-add",
        color: "info",
        reload: true,
      },
      {
        title: "Register to improve mark",
        to: "/FrontOffice/RegisterCourse.aspx?code=R4",
        icon: "ki-up-square",
        color: "danger",
        reload: true,
      },
      {
        title: "Register to repeat a course",
        to: "/FrontOffice/RegisterCourse.aspx?code=R5",
        icon: "ki-arrow-circle-left",
        color: "success",
        reload: true,
      },
      {
        title: "Cancel registration",
        to: "/FrontOffice/RegisteredCourses.aspx",
        icon: "ki-cross-square",
        color: "danger",
        reload: true,
      },
      {
        title: "Register free elective courses",
        to: "/FrontOffice/RegisterElective.aspx",
        icon: "ki-calendar-add",
        color: "info",
        reload: true,
      },
      {
        title: "Send application",
        to: "/App/SendAcad.aspx",
        icon: "ki-message-add",
        color: "success",
        reload: true,
      },
      {
        title: "View application",
        to: "/App/AcadAppView.aspx",
        icon: "ki-message-text",
        color: "info",
        reload: true,
      },
      {
        title: "Xin xác nhận sinh viên",
        to: "/App/AddApp.aspx",
        icon: "ki-verify",
        color: "success",
        reload: true,
      },
      {
        title: "Choose paid items",
        to: "/FrontOffice/ShoppingCart.aspx",
        icon: "ki-two-credit-cart",
        color: "warning",
        reload: true,
      },
      {
        title: "Checkout",
        to: "/FrontOffice/CheckOut.aspx",
        icon: "ki-handcart",
        color: "success",
        reload: true,
      },
      {
        title: "Yêu cầu đổi chéo lớp",
        to: "/App/CourseChange.aspx",
        icon: "ki-arrows-loop",
        color: "info",
        reload: true,
      },
      {
        title: "Điểm danh bằng mã được cấp",
        to: "/Schedule/AttendanceByRoll.aspx",
        icon: "ki-send",
        color: "success",
        reload: true,
      },
      {
        title: "Wishlist course",
        to: "/FrontOffice/WishList.aspx",
        icon: "ki-like-folder",
        color: "danger",
        reload: true,
      },
      {
        title: "Wishlist register",
        to: "/FrontOffice/RegisterWishlish.aspx",
        icon: "ki-add-folder",
        color: "warning",
        reload: true,
      },
      {
        title: "Đăng ký học vượt kỳ",
        to: "/FrontOffice/RegisterCourseFast.aspx",
        icon: "ki-courier-express",
        color: "success",
        reload: true,
      },
      {
        title: "Đăng ký học phụ đạo",
        to: "/FrontOffice/RegisterMore.aspx",
        icon: "ki-calendar-add",
        color: "info",
        reload: true,
      },
    ],
    quickAccess: [
      {
        title: "Send application",
        to: "/App/SendAcad.aspx",
        icon: "ki-message-add",
        color: "success",
        reload: true,
      },
      {
        title: "View application",
        to: "/App/AcadAppView.aspx",
        icon: "ki-message-text",
        color: "info",
        reload: true,
      },
      {
        title: "Choose paid items",
        to: "/FrontOffice/ShoppingCart.aspx",
        icon: "ki-two-credit-cart",
        color: "warning",
        reload: true,
      },
      {
        title: "Checkout",
        to: "/FrontOffice/CheckOut.aspx",
        icon: "ki-handcart",
        color: "success",
        reload: true,
      },
    ],
  },
  {
    name: "Reports",
    menu: [
      {
        title: "Portal Dashboard",
        to: "/Student.aspx",
        icon: "ki-abstract-41",
        color: "primary",
      },
      {
        title: "Attendance report",
        to: "/Report/ViewAttendstudent.aspx",
        icon: "ki-chart",
        color: "success",
      },
      {
        title: "Mark Report",
        to: "/Grade/StudentGrade.aspx",
        icon: "ki-chart-line-up-2",
        color: "danger",
      },
      {
        title: "GPA Overview",
        to: "/Grade/StudentTranscript.aspx",
        icon: "ki-notepad",
        color: "info",
      },
      {
        title: "Curriculum",
        to: "/FrontOffice/StudentCurriculum.aspx",
        icon: "ki-file-sheet",
        color: "success",
      },
      {
        title: "Student Fee",
        to: "/Report/StudentFees.aspx",
        icon: "ki-two-credit-cart",
        color: "danger",
      },
      {
        title: "Transaction history",
        to: "/Finance/TransReport.aspx",
        icon: "ki-devices",
        color: "success",
      },
    ],
    quickAccess: [
      {
        title: "Attendance report",
        to: "/Report/ViewAttendstudent.aspx",
        icon: "ki-chart",
        color: "success",
      },
      {
        title: "Mark Report",
        to: "/Grade/StudentGrade.aspx",
        icon: "ki-chart-line-up-2",
        color: "danger",
      }
    ],
  },
  {
    name: "Others",
    menu: [
      {
        title: "Portal Dashboard",
        to: "/Student.aspx",
        icon: "ki-abstract-41",
        color: "primary",
      },
    ],
    quickAccess: [],
  },
];

export const dayOfWeeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];