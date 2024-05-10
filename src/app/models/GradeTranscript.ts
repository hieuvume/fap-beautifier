export type GradeCourse = {
  subjectCode: string
  subjectName: string
  credit: number
  grade: number
  status: string
}

export type GradeTranscript = {
  term: string
  semester: {
    session: string
    year: string
  }
  subjectCode: string
  prerequisite: string
  replacedSubject: string
  subjectName: string
  credit: number
  grade: number
  status: string
}

export type GPA = {
  term: string
  semester: {
    session: string
    year: string
  }
  gpa: number
  totalCredit: number
  courses: GradeCourse[]
}