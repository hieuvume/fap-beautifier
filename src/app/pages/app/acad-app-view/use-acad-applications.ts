import { useFapDataCustom } from '@/app/providers/fap-data-provider';
import { Application, ApplicationStatus } from './types';

function parseStatus(raw: string): ApplicationStatus {
  if (/approve/i.test(raw)) return 'Approved';
  if (/process/i.test(raw)) return 'Processing';
  if (/reject/i.test(raw)) return 'Rejected';
  return 'Other';
}

function parseApplications(element: Element | undefined): Application[] {
  if (!element) return [];
  const table = element.querySelector('#ctl00_mainContent_content table');
  if (!table) return [];
  const rows = Array.from(table.querySelectorAll('tbody tr')).slice(1);
  return rows.map((tr, idx) => {
    const tds = tr.querySelectorAll('td');
    const type = tds[0]?.textContent?.trim() || '';
    const purpose = tds[1]?.textContent?.trim() || '';
    const createDate = tds[2]?.textContent?.trim() || '';
    const processNote = tds[3]?.textContent?.trim() || '';
    let fileUrl: string | undefined = undefined;
    if (tds[4]) {
      const a = tds[4].querySelector('a');
      if (a) fileUrl = a.getAttribute('href') || undefined;
    }
    let statusRaw = tds[5]?.textContent?.trim() || '';
    let status: ApplicationStatus = parseStatus(statusRaw);
    let processedAt = tds[6]?.textContent?.trim() || undefined;
    const id = `${type}-${purpose}-${createDate}-${idx}`;
    return {
      id,
      type,
      purpose,
      createDate,
      processNote,
      fileUrl,
      status,
      statusRaw,
      processedAt,
    };
  });
}

export function useAcadApplications() {
  const { applications } = useFapDataCustom({
    applications: parseApplications,
  });
  // TODO: Nếu muốn loading state, có thể lấy từ useFapData
  return { applications, isLoading: false };
}
