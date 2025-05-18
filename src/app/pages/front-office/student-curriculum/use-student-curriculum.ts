import { useFapDataCustom } from '@/app/providers/fap-data-provider';
import { useState } from 'react';
import { CurriculumSubject, PrerequisiteSubject } from './types';

export const useStudentCurriculum = () => {
  const [selectedTerm, setSelectedTerm] = useState<string>('');

  const curriculumData = useFapDataCustom({
    studentInfo: (original: Element | undefined) => {
      if (!original) return { name: '', rollNumber: '', curriculum: '' };
      
      const rollNumberElement = original.querySelector('#ctl00_mainContent_lblRollnumber');
      const curriculumElement = original.querySelector('#ctl00_mainContent_lblCurriculum');
      
      let name = '';
      let rollNumber = '';
      
      // Extract name and roll number from text like "Student VŨ TRUNG HIẾU(HE163586)"
      if (rollNumberElement) {
        const text = rollNumberElement.textContent || '';
        const match = text.match(/Student\s+(.+?)\((.+?)\)/);
        if (match) {
          name = match[1].trim();
          rollNumber = match[2].trim();
        }
      }
      
      return {
        name,
        rollNumber,
        curriculum: curriculumElement?.textContent?.trim() || '',
      };
    },
    
    subjects: (original: Element | undefined) => {
      if (!original) return [];
      
      const subjectsTable = original?.querySelectorAll('table')[2];
      if (!subjectsTable) return [];
      
      const subjects: CurriculumSubject[] = [];
      const rows = subjectsTable.querySelectorAll('tbody tr');
      
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        console.log(cells.length);
        if (cells.length >= 4) {
          subjects.push({
            id: parseInt(cells[0].textContent?.trim() || '0'),
            code: cells[1].textContent?.trim() || '',
            name: cells[2].textContent?.trim() || '',
            termNo: cells[3].textContent?.trim() || '',
          });
        }
      });

      console.log(subjects);
      
      return subjects;
    },
    
    prerequisites: (original: Element | undefined) => {
      if (!original) return [];
      
      const prerequisitesTable = original?.querySelectorAll('table')[3];
      if (!prerequisitesTable) return [];
      
      const prerequisites: PrerequisiteSubject[] = [];
      const rows = prerequisitesTable.querySelectorAll('tbody tr');
      
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 5) {
          prerequisites.push({
            id: parseInt(cells[0].textContent?.trim() || '0'),
            subjectCode: cells[1].textContent?.trim() || '',
            prerequisiteCode: cells[2].textContent?.trim() || '',
            alternativeCode: cells[3].textContent?.trim() || '',
            condition: cells[4].textContent?.trim() || '',
          });
        }
      });
      
      return prerequisites;
    },
    
    terms: (original: Element | undefined) => {
      if (!original) return [];
      
      const termsSelect = original?.querySelector('#ctl00_mainContent_ddlTerms') as HTMLSelectElement;
      if (!termsSelect) return [];
      
      const terms: string[] = [];
      Array.from(termsSelect.options).forEach(option => {
        terms.push(option.value);
      });
      
      return terms;
    },
    
    selectedTerm: (original: Element | undefined) => {
      if (!original) return '';
      
      const termsSelect = original?.querySelector('#ctl00_mainContent_ddlTerms') as HTMLSelectElement;
      if (!termsSelect) return '';
      
      return termsSelect.value;
    }
  });
  
  // Initialize the selected term from the data
  if (selectedTerm === '' && curriculumData.selectedTerm) {
    setSelectedTerm(curriculumData.selectedTerm);
  }
  
  const handleTermChange = (term: string) => {
    setSelectedTerm(term);
    // Here you would typically make a fetch call to get new data for the selected term
    // For now, we'll just update the state
  };
  
  return {
    ...curriculumData,
    selectedTerm: selectedTerm || curriculumData.selectedTerm,
    setSelectedTerm: handleTermChange
  };
}; 