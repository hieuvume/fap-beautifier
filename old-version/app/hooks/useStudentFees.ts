import { usePageDataCustom } from "../../_metronic/layout/core";

export const useStudentFees = () => {
  return usePageDataCustom({
    studentFeeTable: (original) => {
      const tableElement = original?.querySelector('#example') as HTMLTableElement
      tableElement?.classList?.remove('dataTable','no-footer')
      tableElement?.classList?.add("table", "table-striped", "table-rounded", "table-striped", "border", "gs-7");
      tableElement?.querySelector("tr")?.classList?.add("fw-semibold", "fs-6", "text-gray-800", "border-bottom", "border-gray-200");
      tableElement?.querySelectorAll("td:nth-child(1)")?.forEach((el) => {
        el.classList.add("fw-semibold");
      });
      tableElement?.querySelectorAll("td:nth-child(2)")?.forEach((el) => {
        el.classList.add("text-primary", "fw-bold");
      });
      tableElement?.querySelectorAll("td:nth-child(5)")?.forEach((el) => {
        const span = document.createElement("span");
        span.classList.add("badge", "badge-success");
        span.innerHTML = el.innerHTML;
        el.innerHTML = span.outerHTML;
      });
      return tableElement?.outerHTML || "";
    },
  });
};
