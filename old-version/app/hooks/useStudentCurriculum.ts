import { usePageDataCustom } from "../../_metronic/layout/core";

export const useStudentCurriculum = () => {
  return usePageDataCustom({
    title: (original) => {
      const titleElement = original?.querySelector(
        "#ctl00_mainContent_lblCurriculum"
      ) as HTMLElement;
      return titleElement?.textContent?.trim() || "";
    },
    curiculumTable: (original) => {
      const tableElement = original?.querySelectorAll("table")[2];
      tableElement?.querySelector("caption")?.remove();
      tableElement?.classList?.remove('table-hover')
      tableElement?.classList?.add("table-striped", "table-rounded", "table-striped", "border", "gs-7");
      tableElement?.querySelector("tr")?.classList?.add("fw-semibold", "fs-6", "text-gray-800", "border-bottom", "border-gray-200");
      tableElement?.querySelectorAll("td:nth-child(2)")?.forEach((el) => {
        el.classList.add("text-primary", "fw-bold");
      });
      tableElement?.querySelectorAll("td:nth-child(4)")?.forEach((el) => {
        const span = document.createElement("span");
        span.classList.add("badge", "badge-square", "badge-primary");
        span.innerHTML = el.innerHTML;
        el.innerHTML = span.outerHTML;
      });
      return tableElement?.outerHTML || "";
    },
    prequisiteTable: (original) => {
      const tableElement = original?.querySelectorAll("table")[3];
      tableElement?.classList?.remove('table-hover')
      tableElement?.classList?.add("table-striped", "table-rounded", "table-striped", "border", "gs-7");
      tableElement?.querySelector("tr")?.classList?.add("fw-semibold", "fs-6", "text-gray-800", "border-bottom", "border-gray-200");
      tableElement?.querySelectorAll(".label-primary")?.forEach((el) => {
        el.classList.remove("label", "label-primary");
        el.classList.add("text-primary", "fw-bold");
      })
      tableElement?.querySelectorAll(".label-warning")?.forEach((el) => {
        el.classList.remove("label", "label-warning");
        el.classList.add("badge", "badge-warning", "fw-semibold");
      })
      tableElement?.querySelectorAll(".label-danger")?.forEach((el) => {
        el.classList.remove("label", "label-danger");
        el.classList.add("badge", "badge-danger", "fw-semibold");
      })
      tableElement?.querySelectorAll(".label-success")?.forEach((el) => {
        el.classList.remove("label", "label-success");
        el.classList.add("fw-semibold", "text-danger");
      })
      return tableElement?.outerHTML || "";
    }
  });
};
