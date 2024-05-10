import { usePageDataCustom } from "../../_metronic/layout/core";

export const useAnnounce = () => {
  return usePageDataCustom({
    title: (original) => {
      const titleElement = original?.querySelector(
        ".article-title"
      ) as HTMLElement;
      return titleElement?.textContent?.trim() || "";
    },
    content: (original) => {
      const contentElement = original?.querySelector(
        "table tbody tr:first-child td div span:nth-child(2)"
      ) as HTMLElement;
      return contentElement?.innerHTML;
    },
  });
}