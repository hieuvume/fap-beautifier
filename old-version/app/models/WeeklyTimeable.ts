export type Shift = {
  activityId: number
  courseName: string
  room: string
  time: string
  dateTime: {
    start: string
    end: string
  }
  meetingURL?: string
  materialURL?: string
  status: number
  online?: boolean
}