import { useMemo, useState } from "react";
import { usePageDataCustom } from "../../_metronic/layout/core";
import { SubjectFee } from "../models/SubjectFee";

export const useSubjectFees = () => {
  const [filterText, setFilterText] = useState("");
  const { fees } = usePageDataCustom({
    fees: (original) => {
      if (!original) return [];
      const table = original?.querySelector(
        "#ctl00_mainContent_gvSubjects"
      ) as HTMLTableElement;
      const rows = table?.querySelectorAll("tr");
      const fees: SubjectFee[] = [];
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.querySelectorAll("td");
        fees.push({
          subjectCode: cells[0].textContent?.trim() || "",
          subjectName: cells[1].textContent?.trim() || "",
          numberCredits: cells[2].textContent?.trim() || "",
          fee: cells[3].textContent?.trim() || "",
          feeInternational: cells[4].textContent?.trim() || "",
        });
      }
      return fees;
    },
  });

  const filteredItems = useMemo(() => {
    return fees.filter(
      (item) =>
        (item.subjectCode &&
          item.subjectCode.toLowerCase().includes(filterText.toLowerCase())) ||
        (item.subjectName &&
          item.subjectName.toLowerCase().includes(filterText.toLowerCase()))
    );
  }, [fees, filterText])

  return {
    filteredItems,
    filterText,
    setFilterText
  }
}