export type Term = {
  year: string;
  season: string;
  link: string;
  active: boolean;
};

export type Course = {
  name: string;
  code: string;
  group: string;
  date: string;
  endDate?: string
  link: string
  active: boolean;
};

export type AttendanceReportShift = {
  day: string
  date: string
  slot: string
  time: string
  room: string
  lecturer: string
  group: string
  status: string
}