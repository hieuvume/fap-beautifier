export interface CurriculumSubject {
  id: number;
  code: string;
  name: string;
  termNo: string;
}

export interface PrerequisiteSubject {
  id: number;
  subjectCode: string;
  prerequisiteCode: string;
  alternativeCode: string;
  condition: string;
}

export interface CurriculumData {
  studentInfo: {
    name: string;
    rollNumber: string;
    curriculum: string;
  };
  subjects: CurriculumSubject[];
  prerequisites: PrerequisiteSubject[];
  terms: string[];
  selectedTerm: string;
} 