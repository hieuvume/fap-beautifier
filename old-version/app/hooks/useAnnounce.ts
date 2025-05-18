import { usePageDataCustom } from "../../_metronic/layout/core";

export const useAnnounce = () => {
  return usePageDataCustom({
    title: (original) => {
      const announceTable = original?.querySelectorAll("table")[1];
      if (announceTable) {
        return announceTable.querySelector("table span")?.innerHTML || "";
      }
      return ""
    },
    content: (original) => {
      const announceTable = original?.querySelectorAll("table")[1];
      if (announceTable) {
        announceTable.querySelectorAll("table")[0]?.remove();
        const content = announceTable.querySelector("div")?.innerHTML || "";
        if (!content) {
          return announceTable.innerHTML
        }
        return content;
      }
    },
  });
}