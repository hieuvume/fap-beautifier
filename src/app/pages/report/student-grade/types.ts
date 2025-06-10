export interface Term {
  year: string;
  season: string;
  link: string;
  active: boolean;
}

export interface Course {
  name: string;
  code: string;
  group: string;
  date: string;
  endDate?: string;
  link: string;
  active: boolean;
}

export interface GradeData {
  terms: Term[];
  courses: Course[];
  markTable: string;
} 