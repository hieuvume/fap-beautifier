export type ApplicationStatus = 'Approved' | 'Processing' | 'Rejected' | 'Other';

export interface Application {
  id: string;
  type: string;
  purpose: string;
  createDate: string;
  processNote: string;
  fileUrl?: string;
  status: ApplicationStatus;
  statusRaw: string;
  processedAt?: string;
} 