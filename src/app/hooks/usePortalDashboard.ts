import { usePageDataCustom } from "../../_metronic/layout/core";

export const usePortalDashboard = () => {
  return usePageDataCustom({
    isRequireFeedback: (original) => {
      const feedbackElement = original?.querySelector(
        '#ctl00_mainContent_divFed'
      );
      return feedbackElement && feedbackElement.innerHTML.trim() !== "";
    },
  });
};
