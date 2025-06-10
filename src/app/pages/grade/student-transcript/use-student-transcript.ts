import { useFapDataCustom, useMockData } from '@/app/providers/fap-data-provider';
import { useMemo, useState, useEffect } from 'react';
import { TranscriptCourse, GPAGroup, TranscriptStatus } from './types';
import transcriptMock from './mock.txt?raw';

const DEFAULT_NON_GPA_CODES = ['OJS', 'VOV', 'GDQP', 'LAB', 'ENT', 'SSS', 'ĐNH', 'TMI', 'OJT'];
const STORAGE_KEY = 'transcript_non_gpa_codes';

function parseStatus(status: string): TranscriptStatus {
  if (/not passed/i.test(status)) return 'Not passed';
  if (/passed/i.test(status)) return 'Passed';
  if (/studying/i.test(status)) return 'Studying';
  if (/not started/i.test(status)) return 'Not started';
  if (/attendance fail/i.test(status)) return 'Attendance Fail';
  if (/suspended/i.test(status)) return 'Suspended';
  if (/not included/i.test(status)) return 'Not included in GPA';
  return 'Other';
}

function parseTranscripts(element: Element | undefined): TranscriptCourse[] {
  if (!element) return [];
  const content = element.querySelector('#ctl00_mainContent_divGrade') as HTMLElement;
  const table = content?.querySelector('table') as HTMLTableElement;
  const rows = table?.rows ?? [];
  const transcripts: TranscriptCourse[] = [];
  Array.from(rows).forEach((row, index) => {
    if (index === 0) return;
    const cells = row.cells;
    if (!cells || cells.length < 10) return;
    const term = cells[1].innerText.trim();
    const semesterText = cells[2].innerText.trim();
    const year = semesterText.slice(-4);
    const session = semesterText.slice(0, -4);
    const semester = { session, year };
    const subjectCode = cells[3].innerText.trim();
    const prerequisite = cells[4].innerText.trim();
    const replacedSubject = cells[5].innerText.trim();
    const subjectName = cells[6].innerText.trim();
    const credit = Number(cells[7].innerText.trim());
    const grade = Number(cells[8].innerText.trim());
    const status = parseStatus(cells[9].innerText.trim());
    transcripts.push({
      term,
      semester,
      subjectCode,
      prerequisite,
      replacedSubject,
      subjectName,
      credit,
      grade,
      status,
    });
  });
  return transcripts;
}

function getStoredNonGpaCodes(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return DEFAULT_NON_GPA_CODES;
}

export function useStudentTranscript() {
  const { transcripts } = useFapDataCustom({
    transcripts: parseTranscripts,
  });

  const [nonGpaCodes, setNonGpaCodesState] = useState<string[]>(getStoredNonGpaCodes());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nonGpaCodes));
  }, [nonGpaCodes]);

  const setNonGpaCodes = (codes: string[]) => {
    setNonGpaCodesState(codes);
  };

  const gpaList = useMemo(() => {
    const gpaMap: Record<string, GPAGroup> = {};
    transcripts.forEach((t) => {
      const key = t.term;
      const isExcluded = nonGpaCodes.some((code) => t.subjectCode.includes(code)) || t.credit === 0 || t.status === 'Not included in GPA';
      const realCredit = isExcluded ? 0 : t.credit;
      if (!gpaMap[key]) {
        gpaMap[key] = {
          term: t.term,
          semester: t.semester,
          gpa: 0,
          totalCredit: 0,
          courses: [],
        };
      }
      gpaMap[key].courses.push({ ...t, credit: realCredit });
    });
    Object.values(gpaMap).forEach((gpa) => {
      gpa.totalCredit = gpa.courses.reduce((acc, c) => acc + c.credit, 0);
      gpa.gpa = gpa.totalCredit > 0 ? gpa.courses.reduce((acc, c) => acc + c.credit * c.grade, 0) / gpa.totalCredit : 0;
    });
    return Object.values(gpaMap);
  }, [transcripts, nonGpaCodes]);

  const totalCredit = useMemo(() => gpaList.reduce((acc, g) => acc + g.totalCredit, 0), [gpaList]);
  const averageGPA = useMemo(() => {
    const totalGPA = gpaList.reduce((acc, g) => acc + g.gpa * g.totalCredit, 0);
    return totalCredit > 0 ? totalGPA / totalCredit : 0;
  }, [gpaList, totalCredit]);

  return { transcripts, gpaList, averageGPA, totalCredit, nonGpaCodes, setNonGpaCodes };
} 