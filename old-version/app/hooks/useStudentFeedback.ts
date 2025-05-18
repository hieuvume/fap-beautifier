import { usePageDataCustom } from "../../_metronic/layout/core";

export const useStudentFeedback = () => {
  return usePageDataCustom({
    feedbackTable: (original) => {
      const table = original?.querySelectorAll("table")[2];
      if (!table) return "";
      table.classList.add("table", "table-bordered", "table-hover");
      table.style.width = "100%";
      return table.outerHTML;
    },
  });
};
