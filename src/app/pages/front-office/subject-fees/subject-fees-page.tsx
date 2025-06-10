import { Container } from '@/app/components/common/container';
import { useFapData } from '@/app/providers/fap-data-provider';
import { SubjectFeesTable } from './components';
import { useSubjectFees } from './use-subject-fees';

const SubjectFeesPage = () => {
  const { fees, filterText, setFilterText } = useSubjectFees();
  const { loading } = useFapData();

  return (
    <Container>
      <SubjectFeesTable 
        fees={fees}
        filterText={filterText}
        setFilterText={setFilterText}
        loading={loading}
      />
    </Container>
  );
};

export { SubjectFeesPage };
