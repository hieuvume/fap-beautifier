import { usePageDataCustom } from "../../_metronic/layout/core";

export const usePortalDashboard = () => {
  return usePageDataCustom({
    isRequireFeedback: (original) => {
      const feedbackElement = original?.querySelector(
        "#ctl00_mainContent_divFed"
      );
      return feedbackElement && feedbackElement.innerHTML.trim() !== "";
    },
    // ctl00_mainContent_HocPhi
    tuitionContent: (original) => {
      const tuitionElement = original?.querySelector(
        "#ctl00_mainContent_HocPhi"
      );
      return tuitionElement && tuitionElement.textContent?.trim();
    },
    accountBalance: (original) => {
      const accountElement = original?.querySelector(
        "#ctl00_mainContent_lblAccount"
      );
      return accountElement && accountElement.innerHTML?.trim();
    },
    EOSClientDownloadLink: (original) => {
      const eosElement = original?.querySelector(
        "#ctl00_mainContent_lblEos a"
      );
      return eosElement && eosElement.getAttribute("href");
    },
  });
};
