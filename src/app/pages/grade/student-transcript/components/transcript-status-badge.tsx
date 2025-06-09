import { TranscriptStatus } from '../types';

export function TranscriptStatusBadge({ status }: { status: TranscriptStatus }) {
  let color = 'bg-gray-300 text-gray-800';
  let label: string = status;
  if (status === 'Passed') {
    color = 'bg-green-100 text-green-700';
    label = 'Passed';
  } else if (status === 'Not passed') {
    color = 'bg-red-100 text-red-700';
    label = 'Not passed';
  } else if (status === 'Studying') {
    color = 'bg-yellow-100 text-yellow-800';
    label = 'Studying';
  } else if (status === 'Not started') {
    color = 'bg-gray-100 text-gray-700';
    label = 'Not started';
  } else if (status === 'Not included in GPA') {
    color = 'bg-gray-800 text-white';
    label = 'Not in GPA';
  } else if (status === 'Attendance Fail' || status === 'Suspended') {
    color = 'bg-orange-200 text-orange-800';
    label = status;
  }
  return (
    <span className={`inline-block px-1.5 py-0.5 rounded text-xs font-semibold ${color}`}>{label}</span>
  );
} 