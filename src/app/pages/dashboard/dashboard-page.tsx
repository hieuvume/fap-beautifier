import { Container } from '@/app/components/common/container';
import { ApplicationDeadline } from './components/ApplicationDeadline';
import { MainMenu } from './components/MainMenu';


const DashboardPage = () => {

  return (
    <Container>
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
    </Container>
  )
};

export { DashboardPage };
