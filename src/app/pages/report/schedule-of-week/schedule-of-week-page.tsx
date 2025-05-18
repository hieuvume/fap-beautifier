import { Container } from '@/app/components/common/container';
import { WeeklySchedule } from './components/weekly-schedule';
import { useFapData } from '@/app/providers/fap-data-provider';

/**
 * Schedule of Week Page
 * 
 * This page displays a weekly schedule of classes and activities
 */
const ScheduleOfWeekPage = () => {
  const { loading } = useFapData();

  return (
    <Container>
      <div className="grid gap-5 lg:gap-7.5">
        <div className="grid lg:grid-cols-1 gap-y-5 lg:gap-7.5">
          <WeeklySchedule isLoading={loading} />
        </div>
      </div>
    </Container>
  );
};

export { ScheduleOfWeekPage }; 