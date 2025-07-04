import { Fragment } from 'react';
import { Container } from '@/app/components/common/container';
import { useUserProfile } from './use-user-profile';
import { ProfileTab } from './types';
import { ProfileCard } from './components';
import { ProfileSkeleton } from './components/profile-skeleton';
import { Button } from '@/app/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { UserHero } from '@/app/partials/common/user-hero';
import { Navbar, NavbarActions } from '@/app/partials/navbar/navbar';
import { Avatar } from '@/app/components/ui/avatar';
import { Download, Edit, Mail, Phone, User } from 'lucide-react';
import { Link } from 'react-router';
import { useIntl } from 'react-intl';

const UserProfilePage = () => {
  const { profileData, loading, activeTab, setActiveTab } = useUserProfile();
  const intl = useIntl();

  if (loading || !profileData) {
    return (
      <Container>
        <ProfileSkeleton />
      </Container>
    );
  }

  const handleTabChange = (tab: ProfileTab) => {
    setActiveTab(tab);
  };

  // Create user hero info array
  const userInfo = [
    { label: profileData.rollNumber, icon: User },
    ...(profileData.phone ? [{ label: profileData.phone, icon: Phone }] : []),
    ...(profileData.email ? [{ label: profileData.email, icon: Mail }] : []),
  ];

  // Create user avatar component
  const userAvatar = (
    profileData.image ? (
      <img
        src={profileData.image}
        alt={profileData.fullName || intl.formatMessage({ id: 'PROFILE.IMAGE.ALT' })}
        className="rounded-full border-3 border-primary size-[100px] shrink-0 object-cover"
      />
    ) : (
      <Avatar className="h-[100px] w-[100px] border-3 border-primary">
        <User className="h-10 w-10 text-muted-foreground" />
      </Avatar>
    )
  );

  return (
    <Fragment>
      {/* User Hero Section */}
      <UserHero
        name={profileData.fullName}
        image={userAvatar}
        info={userInfo}
      />

      {/* Navigation & Actions Bar */}
      <Container>
        <Navbar>
          <Tabs value={activeTab} onValueChange={(value) => handleTabChange(value as ProfileTab)}>
            <TabsList variant="line" className="w-full justify-start border-none">
              <TabsTrigger value="profile">{intl.formatMessage({ id: 'PROFILE.TABS.PROFILE' })}</TabsTrigger>
              <TabsTrigger value="academic">{intl.formatMessage({ id: 'PROFILE.TABS.ACADEMIC' })}</TabsTrigger>
              <TabsTrigger value="parent">{intl.formatMessage({ id: 'PROFILE.TABS.PARENT' })}</TabsTrigger>
              <TabsTrigger value="other">{intl.formatMessage({ id: 'PROFILE.TABS.OTHER' })}</TabsTrigger>
            </TabsList>
          </Tabs>

          <NavbarActions>
            <Button asChild className="w-full" variant="outline">
              <Link
                to={'/User/verProfile.aspx'}
              >
                <Edit className="h-4 w-4 mr-2" /> {intl.formatMessage({ id: 'PROFILE.ACTIONS.EDIT_PROFILE' })}
              </Link>
            </Button>
          </NavbarActions>
        </Navbar>
      </Container>

      {/* Content Section */}
      <Container>
        <div className="mb-8">
          {activeTab === 'profile' && (
            <ProfileCard
              title={intl.formatMessage({ id: 'PROFILE.INFO.PROFILE' })}
              data={profileData.profileData}
              show={true}
            />
          )}

          {activeTab === 'academic' && (
            <ProfileCard
              title={intl.formatMessage({ id: 'PROFILE.INFO.ACADEMIC' })}
              data={profileData.academicData}
              show={true}
            />
          )}

          {activeTab === 'parent' && (
            <ProfileCard
              title={intl.formatMessage({ id: 'PROFILE.INFO.PARENT' })}
              data={profileData.parentData}
              show={true}
            />
          )}

          {activeTab === 'other' && (
            <ProfileCard
              title={intl.formatMessage({ id: 'PROFILE.INFO.OTHER' })}
              data={profileData.otherData}
              show={true}
            />
          )}
        </div>
      </Container>
    </Fragment>
  );
};

export { UserProfilePage }; 