import { useFapDataCustom } from '@/app/providers/fap-data-provider';
import { useMemo, useState } from 'react';
import { SubjectFee } from './types';

export const useSubjectFees = () => {
  const [filterText, setFilterText] = useState("");

  const { fees } = useFapDataCustom({
    fees: (original) => {
      if (!original) return [];

      const table = original?.querySelector(
        "#ctl00_mainContent_gvSubjects"
      ) as HTMLTableElement;

      if (!table) return [];

      const rows = table?.querySelectorAll("tr");
      const fees: SubjectFee[] = [];

      // Start from index 1 to skip the header row
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.querySelectorAll("td");

        if (cells.length >= 5) {
          fees.push({
            subjectCode: cells[0].textContent?.trim() || "",
            subjectName: cells[1].textContent?.trim() || "",
            numberCredits: cells[2].textContent?.trim() || "",
            fee: cells[3].textContent?.trim() || "",
            feeInternational: cells[4].textContent?.trim() || "",
          });
        }
      }

      return fees;
    },
  });

  // Memoized filtered items based on search text
  const filteredItems = useMemo(() => {
    return (fees || []).filter(
      (item) =>
        (item.subjectCode &&
          item.subjectCode.toLowerCase().includes(filterText.toLowerCase())) ||
        (item.subjectName &&
          item.subjectName.toLowerCase().includes(filterText.toLowerCase()))
    );
  }, [fees, filterText]);

  return {
    fees: fees || [],
    filteredItems,
    filterText,
    setFilterText,
  };
}; 