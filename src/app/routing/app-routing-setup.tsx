import { AuthRouting } from '@/app/auth/auth-routing';
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
import {
  AccountActivityPage,
  AccountAllowedIPAddressesPage,
  AccountApiKeysPage,
  AccountAppearancePage,
  AccountBackupAndRecoveryPage,
  AccountBasicPage,
  AccountCompanyProfilePage,
  AccountCurrentSessionsPage,
  AccountDeviceManagementPage,
  AccountEnterprisePage,
  AccountGetStartedPage,
  AccountHistoryPage,
  AccountImportMembersPage,
  AccountIntegrationsPage,
  AccountInviteAFriendPage,
  AccountMembersStarterPage,
  AccountNotificationsPage,
  AccountOverviewPage,
  AccountPermissionsCheckPage,
  AccountPermissionsTogglePage,
  AccountPlansPage,
  AccountPrivacySettingsPage,
  AccountRolesPage,
  AccountSecurityGetStartedPage,
  AccountSecurityLogPage,
  AccountSettingsEnterprisePage,
  AccountSettingsModalPage,
  AccountSettingsPlainPage,
  AccountSettingsSidebarPage,
  AccountTeamInfoPage,
  AccountTeamMembersPage,
  AccountTeamsPage,
  AccountTeamsStarterPage,
  AccountUserProfilePage,
} from '@/app/pages/sample-page/account';
import {
  AuthAccountDeactivatedPage,
  AuthWelcomeMessagePage,
} from '@/app/pages/sample-page/auth';
import { Demo1DarkSidebarPage } from '@/app/pages/sample-page/dashboards';
import {
  NetworkAppRosterPage,
  NetworkAuthorPage,
  NetworkGetStartedPage,
  NetworkMarketAuthorsPage,
  NetworkMiniCardsPage,
  NetworkNFTPage,
  NetworkSaasUsersPage,
  NetworkSocialPage,
  NetworkStoreClientsPage,
  NetworkUserCardsTeamCrewPage,
  NetworkUserTableTeamCrewPage,
  NetworkVisitorsPage,
} from '@/app/pages/sample-page/network';
import {
  CampaignsCardPage,
  CampaignsListPage,
  ProfileActivityPage,
  ProfileBloggerPage,
  ProfileCompanyPage,
  ProfileCreatorPage,
  ProfileCRMPage,
  ProfileDefaultPage,
  ProfileEmptyPage,
  ProfileFeedsPage,
  ProfileGamerPage,
  ProfileModalPage,
  ProfileNetworkPage,
  ProfileNFTPage,
  ProfilePlainPage,
  ProfileTeamsPage,
  ProfileWorksPage,
  ProjectColumn2Page,
  ProjectColumn3Page,
} from '@/app/pages/sample-page/public-profile';
import { AllProductsPage } from '@/app/pages/sample-page/store-admin';
import {
  MyOrdersPage,
  OrderPlacedPage,
  OrderReceiptPage,
  OrderSummaryPage,
  PaymentMethodPage,
  ProductDetailsPage,
  SearchResultsGridPage,
  SearchResultsListPage,
  ShippingInfoPage,
  StoreClientPage,
  WishlistPage,
} from '@/app/pages/sample-page/store-client';
import { Route, Routes } from 'react-router';
import { NewsDetailPage, NewsPage } from '../pages/cms-fap/news';
import { CourseGroupsPage } from '../pages/course/groups/course-groups-page';
import { ExamSchedulePage } from '../pages/exam/schedule-exams/exam-schedule-page';
import { BrandedLayout } from '../pages/login/components/branded';
import { LoginPage } from '../pages/login/login-page';
import { HelpPage } from '../pages/report/help';
import { UpdateProfilePage, UserProfilePage } from '../pages/user/profile';
import NoSupportedRoute from './no-supported-route';

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
        <Route path="/CmsFAP/News.aspx" element={<NewsPage />} />
        <Route path="/CmsFAP/PlusNews.aspx" element={<NewsPage />} />
        <Route path="/CmsFAP/NewsDetail.aspx" element={<NewsDetailPage />} />
      </Route>

      <Route element={<BrandedLayout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Default.aspx" element={<LoginPage />} />
      </Route>
      <Route path="error/*" element={<ErrorRouting />} />
      <Route path="auth/*" element={<AuthRouting />} />
      <Route element={<Demo7Layout />}>
        <Route path="*" element={<NoSupportedRoute />} />
      </Route>
    </Routes>
  );
}
