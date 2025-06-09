import { useStudentTranscript } from './use-student-transcript';
import { TranscriptSummary } from './components/transcript-summary';
import { TranscriptTable } from './components/transcript-table';
import { Container } from '@/app/components/common/container';

const StudentTranscriptPage = () => {
  const { gpaList, averageGPA, totalCredit, nonGpaCodes, setNonGpaCodes } = useStudentTranscript();

  // TODO: Thêm loading state nếu cần

  return (
    <Container>
      <TranscriptSummary
        averageGPA={averageGPA}
        totalCredit={totalCredit}
        nonGpaCodes={nonGpaCodes}
        setNonGpaCodes={setNonGpaCodes}
      />
      <TranscriptTable gpaList={gpaList} />
    </Container>
  );
};

export { StudentTranscriptPage }; 