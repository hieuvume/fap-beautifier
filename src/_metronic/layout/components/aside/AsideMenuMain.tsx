
import { useIntl } from 'react-intl'
import { AsideMenuItem } from './AsideMenuItem'
import { useLayout } from '../../core'

export function AsideMenuMain() {
  const intl = useIntl()
  const { menuTabIndex, setMenuTabIndex } = useLayout()

  return (
    <div
      id="kt_app_sidebar"
      className="app-sidebar"
      data-kt-drawer="true"
      data-kt-drawer-name="app-sidebar"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="225px"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
    >
      <div
        id="kt_app_sidebar_wrapper"
        className="flex-grow-1 hover-scroll-y mt-9 mb-5 px-2 mx-3 ms-lg-7 me-lg-5"
        data-kt-scroll="true"
        data-kt-scroll-activate="true"
        data-kt-scroll-height="auto"
        data-kt-scroll-dependencies="{default: false, lg: '#kt_app_header'}"
        data-kt-scroll-offset="5px"
      >
        <div className="mb-4">
          <div className="d-flex align-items-center position-relative mb-6">
            <i className="ki-outline ki-magnifier fs-4 text-gray-500 position-absolute ms-3 fw-bold" />
            <input
              type="text"
              id="kt_filter_search"
              className="form-control form-control-sm form-control-solid w-100 ps-10 border border-300 bg-light-active"
              placeholder="Find a view"
            />
            <i className="ki-solid ki-setting-4 fs-5 text-gray-500 position-absolute top-50 end-0 translate-middle-y fw-bold me-3" />
          </div>
          <div className="m-0">
            {menuTabIndex === 0 && (
              <>
                <AsideMenuItem to='/Student.aspx' icon='ki-abstract-41 text-primary' title={'Portal Dashboard'} useLink/>
                <AsideMenuItem to='/Report/ScheduleOfWeek.aspx' icon='ki-calendar text-success' title={'Weekly timeable'} useLink/>
                <AsideMenuItem to='/Exam/ScheduleExams.aspx' icon='ki-calendar-tick text-danger' title={'Exam schedule'} />
                <AsideMenuItem to='/FrontOffice/SubjectFees.aspx' icon='ki-wallet text-info' title={'Tuition fee per course'} />
                <AsideMenuItem to='/Schedule/FunixSchedule.aspx' icon='ki-calendar-search text-success' title={'BLOC Schedules'} />
                <AsideMenuItem to='https://flm.fpt.edu.vn/DefaultSignin' icon='ki-external-drive text-danger' title={'View Syllabuses'} />
                <AsideMenuItem to='https://fap.fpt.edu.vn/temp/Regulations/Huong_dan_KTXH_tren_EduNext_Sp23_Sinh_Vien.pdf' icon='ki-teacher text-success' title={'EduNext guideline'} />
                <AsideMenuItem to='/Report/Help.aspx' icon='ki-bookmark text-info' title={'Help/Hỗ trợ'} useLink />
              </>
            )}

            {menuTabIndex === 1 && (
              <>
                <AsideMenuItem to='/Student.aspx' icon='ki-abstract-41 text-primary' title={'Portal Dashboard'} useLink/>
                <AsideMenuItem to='/FrontOffice/AddApplication.aspx?code=R1' icon='ki-note-2 text-danger' title={'Suspend to take repeated course'} />
                <AsideMenuItem to='/FrontOffice/AddApplication.aspx?code=R2' icon='ki-note text-danger' title={'Suspend one semester'} />
                <AsideMenuItem to='/FrontOffice/Courses.aspx' icon='ki-exit-left text-danger' title={'Move out class'} />
                <AsideMenuItem to='/FrontOffice/AddApplication.aspx?code=R3' icon='ki-calendar-add text-info' title={'Register extra courses'} />
                <AsideMenuItem to='/FrontOffice/AddApplication.aspx?code=R4' icon='ki-up-square text-danger' title={'Register to improve mark'} />
                <AsideMenuItem to='/FrontOffice/AddApplication.aspx?code=R5' icon='ki-arrow-circle-left text-success' title={'Register to repeat a course'} />
                <AsideMenuItem to='/FrontOffice/RegisteredCourses.aspx' icon='ki-cross-square text-danger' title={'Cancel registration'} />
                <AsideMenuItem to='/FrontOffice/RegisterElective.aspx' icon='ki-calendar-add text-info' title={'Register free elective courses'} />
                <AsideMenuItem to='/App/SendAcad.aspx' icon='ki-message-add text-success' title={'Send application'} />
                <AsideMenuItem to='/App/AcadAppView.aspx' icon='ki-message-text text-info' title={'View application'} />
                <AsideMenuItem to='/App/AddApp.aspx' icon='ki-verify text-success' title={'Xin xác nhận sinh viên'} />
                <AsideMenuItem to='/FrontOffice/ShoppingCart.aspx' icon='ki-two-credit-cart text-warning' title={'Choose paid items'} />
                <AsideMenuItem to='/FrontOffice/CheckOut.aspx' icon='ki-handcart text-success' title={'Checkout'} />
                <AsideMenuItem to='/App/CourseChange.aspx' icon='ki-arrows-loop text-info' title={'Yêu cầu đổi chéo lớp'} />
                <AsideMenuItem to='/Schedule/AttendanceByRoll.aspx' icon='ki-send text-success' title={'Điểm danh bằng mã được cấp'} />
                <AsideMenuItem to='/FrontOffice/WishList.aspx' icon='ki-like-folder text-danger' title={'Wishlist course'} />
                <AsideMenuItem to='/FrontOffice/RegisterWishlish.aspx' icon='ki-add-folder text-warning' title={'Wishlist register'} />
                <AsideMenuItem to='/FrontOffice/RegisterCourseFast.aspx' icon='ki-courier-express text-success' title={'Đăng ký học vượt kỳ'} />
                <AsideMenuItem to='/FrontOffice/RegisterMore.aspx' icon='ki-calendar-add text-info' title={'Đăng ký học phụ đạo'} />
              </>
            )}

            {menuTabIndex === 2 && (
              <>
                <AsideMenuItem to='/Student.aspx' icon='ki-abstract-41 text-primary' title={'Portal Dashboard'} useLink/>
                <AsideMenuItem to='/Report/ViewAttendstudent.aspx' icon='ki-chart text-success' title={'Attendance report'} />
                <AsideMenuItem to='/Grade/StudentGrade.aspx' icon='ki-chart-line-up-2 text-danger' title={'Mark Report'} />
                <AsideMenuItem to='/Grade/StudentTranscript.aspx' icon='ki-notepad text-info' title={'Academic Transcript'} />
                <AsideMenuItem to='/FrontOffice/StudentCurriculum.aspx' icon='ki-file-sheet text-success' title={'Curriculum'} />
                <AsideMenuItem to='/Report/StudentFees.aspx' icon='ki-two-credit-cart text-danger' title={'Student Fee'} />
                <AsideMenuItem to='/Finance/TransReport.aspx' icon='ki-devices text-success' title={'Transaction history'} />
              </>
            )}

            {menuTabIndex === 3 && (
              <>
                <AsideMenuItem to='/Student.aspx' icon='ki-abstract-41 text-primary' title={'Portal Dashboard'} useLink/>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
