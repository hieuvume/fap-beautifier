import { Container } from '@/app/components/common/container';
import { ApplicationDeadline } from './components/ApplicationDeadline';
import { MainMenu } from './components/MainMenu';
import { TuitionAlert } from './components/TuitionAlert';
import { FeedbackNotification } from './components/FeedbackNotification';
import { useDashboard } from '@/app/hooks/useDashboard';

const DashboardPage = () => {
  const { isRequireFeedback, tuitionContent, accountBalance } = useDashboard();

  return (
    <Container>
      <FeedbackNotification isVisible={!!isRequireFeedback} />
      
      {!isRequireFeedback && (
        <>
          <TuitionAlert 
            tuitionContent={tuitionContent || undefined} 
            accountBalance={accountBalance || undefined} 
          />
          
          <div className="grid gap-5 lg:gap-7.5">
            <div className="grid lg:grid-cols-3 gap-y-5 lg:gap-7.5">
              <div className="lg:col-span-1">
                <ApplicationDeadline />
              </div>
              <div className="lg:col-span-2">
                <MainMenu />
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  )
};

export { DashboardPage };
