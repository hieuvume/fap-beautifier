import { ErrorRouting } from '@/app/errors/error-routing';
import { Demo7Layout } from '@/app/layouts/demo7/layout';
import { AnnouncePage } from '@/app/pages/announce/announce-page';
import { DashboardPage } from '@/app/pages/dashboard/dashboard-page';
import { TransReportPage } from '@/app/pages/finance/trans-report';
import { StudentCurriculumPage } from '@/app/pages/front-office/student-curriculum';
import { SubjectFeesPage } from '@/app/pages/front-office/subject-fees/subject-fees-page';
import { ScheduleOfWeekPage } from '@/app/pages/report/schedule-of-week/schedule-of-week-page';
import { StudentGradePage } from '@/app/pages/report/student-grade/student-grade-page';
import { ViewAttendStudentPage } from '@/app/pages/report/view-attend-student/view-attend-student-page';
import { Route, Routes } from 'react-router';
import { NewsDetailPage, NewsPage } from '../pages/cms-fap/news';
import { CourseGroupsPage } from '../pages/course/groups/course-groups-page';
import { ExamSchedulePage } from '../pages/exam/schedule-exams/exam-schedule-page';
import { BrandedLayout } from '../pages/login/components/branded';
import { LoginPage } from '../pages/login/login-page';
import { HelpPage } from '../pages/report/help';
import { UpdateProfilePage, UserProfilePage } from '../pages/user/profile';
import NoSupportedRoute from './no-supported-route';
import { ActivityStudentPage } from '../pages/schedule/activity-student/activity-student-page';
import { AcadAppViewPage } from '../pages/app/acad-app-view/acad-app-view-page';
import StudentTranscriptPage from '../pages/grade/student-transcript';

export function AppRoutingSetup() {
  return (
    <Routes>
      <Route element={<Demo7Layout />}>
        <Route path="/Student.aspx" element={<DashboardPage />} />
        <Route path="/Report/ScheduleOfWeek.aspx" element={<ScheduleOfWeekPage />} />
        <Route path="/Report/ViewAttendstudent.aspx" element={<ViewAttendStudentPage />} />
        <Route path="/Report/Help.aspx" element={<HelpPage />} />
        <Route path="/Grade/StudentGrade.aspx" element={<StudentGradePage />} />
        <Route path="/Thongbao.aspx" element={<AnnouncePage />} />
        <Route path="/FrontOffice/SubjectFees.aspx" element={<SubjectFeesPage />} />
        <Route path="/FrontOffice/StudentCurriculum.aspx" element={<StudentCurriculumPage />} />
        <Route path="/Finance/TransReport.aspx" element={<TransReportPage />} />
        <Route path="/Exam/ScheduleExams.aspx" element={<ExamSchedulePage />} />
        <Route path="/User/Profile.aspx" element={<UserProfilePage />} />
        <Route path="/User/verProfile.aspx" element={<UpdateProfilePage />} />
        <Route path="/Course/Groups.aspx" element={<CourseGroupsPage />} />
        <Route path="/Schedule/ActivityStudent.aspx" element={<ActivityStudentPage />} />
        <Route path="/CmsFAP/News.aspx" element={<NewsPage />} />
        <Route path="/CmsFAP/PlusNews.aspx" element={<NewsPage />} />
        <Route path="/CmsFAP/NewsDetail.aspx" element={<NewsDetailPage />} />
        <Route path="/App/AcadAppView.aspx" element={<AcadAppViewPage />} />
        <Route path="/Grade/StudentTranscript.aspx" element={<StudentTranscriptPage />} />
      </Route>

      <Route element={<BrandedLayout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Default.aspx" element={<LoginPage />} />
      </Route>
      <Route path="error/*" element={<ErrorRouting />} />
      <Route element={<Demo7Layout />}>
        <Route path="*" element={<NoSupportedRoute />} />
      </Route>
    </Routes>
  );
}
