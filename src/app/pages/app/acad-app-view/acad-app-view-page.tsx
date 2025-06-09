import { useAcadApplications } from './use-acad-applications';
import { ApplicationTable } from './components/application-table';
import { ApplicationDetailDialog } from './components/application-detail-dialog';
import { useState } from 'react';
import { Container } from '@/app/components/common/container';

const AcadAppViewPage = () => {
  const { applications, isLoading } = useAcadApplications();
  const [selectedAppId, setSelectedAppId] = useState<string | undefined>();

  const selectedApp = applications.find(app => app.id === selectedAppId);

  return (
    <Container>
      <ApplicationTable
        applications={applications}
        isLoading={isLoading}
        onSelect={setSelectedAppId}
      />
      <ApplicationDetailDialog
        application={selectedApp}
        isOpen={!!selectedApp}
        onClose={() => setSelectedAppId(undefined)}
      />
    </Container>
  );
};

export { AcadAppViewPage }; 