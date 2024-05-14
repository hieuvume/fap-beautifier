import { usePageDataCustom } from "../../_metronic/layout/core";

export const useNewsDetail = () => {
  return usePageDataCustom({
    content: (original) => {
      const content = original?.querySelector(
        "#ctl00_mainContent_divContent"
      ) as HTMLElement;
      content?.querySelector(".fon31")?.classList?.add("fs-4","fw-bold");
      return content?.innerHTML ?? "";
    },
    title: (original) => {
      return original?.querySelector(".fon31")?.textContent ?? "";
    },
  });
};
