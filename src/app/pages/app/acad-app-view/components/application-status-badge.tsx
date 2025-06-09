import { ApplicationStatus } from '../types';

export function ApplicationStatusBadge({ status, statusRaw }: { status: ApplicationStatus, statusRaw: string }) {
  let color = 'bg-gray-300 text-gray-800';
  let label = statusRaw;
  if (status === 'Approved') {
    color = 'bg-green-100 text-green-700';
    label = 'Đã duyệt';
  } else if (status === 'Processing') {
    color = 'bg-yellow-100 text-yellow-800';
    label = 'Đang xử lý';
  } else if (status === 'Rejected') {
    color = 'bg-red-100 text-red-700';
    label = 'Từ chối';
  }
  return (
    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${color}`}>{label}</span>
  );
} 