import { usePageDataCustom } from "../../_metronic/layout/core";

export const usePortalDashboard = () => {
  return usePageDataCustom({
    isRequireFeedback: (original) => {
      const feedbackElement = original?.querySelector(
        'a[href="Feedback/StudentFeedBack.aspx"]'
      );
      return false;
    },
  });
};
