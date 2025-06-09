export type TranscriptStatus = 'Passed' | 'Not passed' | 'Studying' | 'Not started' | 'Not included in GPA' | 'Attendance Fail' | 'Suspended' | 'Other';

export interface TranscriptCourse {
  term: string;
  semester: { session: string; year: string };
  subjectCode: string;
  subjectName: string;
  prerequisite: string;
  replacedSubject: string;
  credit: number;
  grade: number;
  status: TranscriptStatus;
}

export interface GPAGroup {
  term: string;
  semester: { session: string; year: string };
  gpa: number;
  totalCredit: number;
  courses: TranscriptCourse[];
}

export interface TranscriptSummary {
  averageGPA: number;
  totalCredit: number;
  gpaList: GPAGroup[];
} 