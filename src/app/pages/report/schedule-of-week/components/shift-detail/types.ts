export interface ShiftDetailProps {
  activityId?: number;
  activityStatus: number;
  shiftTime?: string;
  isOpen: boolean;
  onClose: () => void;
}

export interface ShiftDetail {
  id: number;
  date?: string;
  slot?: string;
  time?: string;
  studentGroup?: {
    name?: string;
    link?: string;
  };
  instructor?: {
    name?: string;
    link?: string;
  };
  meetURL?: string;
  course?: string;
  campus?: string;
  attendance?: string;
  recordTime?: string;
}

export interface StatusInfo {
  bg: string;
  text: string;
  icon: React.ReactNode;
}

export interface CourseInfoProps {
  shiftDetail: ShiftDetail;
}

export interface PeopleInfoProps {
  shiftDetail: ShiftDetail;
}

export interface ResourceLinksProps {
  shiftDetail: ShiftDetail;
}

export interface StatusBannerProps {
  statusClasses: StatusInfo;
  statusText: string;
  recordTime?: string;
} 