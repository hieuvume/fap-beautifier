export interface Exam {
  id: string;               // Unique identifier
  subjectCode: string;      // Subject code
  subjectName: string;      // Subject name
  date: string;             // Exam date
  room: string;             // Room number
  time: string;             // Exam time range
  form: string;             // Form of exam (e.g., Final, Midterm)
  type: string;             // Type of exam (e.g., Regular, Retake) 
  publicDate: string;       // Date when exam was published
  status: ExamStatus;       // Status of the exam (calculated)
  timeRemaining?: string;   // Time remaining until exam (calculated)
}

export enum ExamStatus {
  UPCOMING = 'upcoming',
  ONGOING = 'ongoing',
  COMPLETED = 'completed'
}

export interface GroupedExams {
  upcoming: Exam[];
  completed: Exam[];
} 