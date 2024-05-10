import { usePageDataCustom } from "../../_metronic/layout/core";

export const useUpdateProfile = () => {
  return usePageDataCustom({
    formHtml: (original) => {
      const panelBody = original?.querySelector(".panel-body") as HTMLElement;
      const row = panelBody?.querySelector(".row") as HTMLElement;
      const col = row?.querySelector(".col-md-9") as HTMLElement;
      col?.classList.replace("col-md-9", "col-md-12");
      const formGroup = row?.querySelectorAll(
        ".form-group"
      ) as NodeListOf<HTMLElement>;
      formGroup?.forEach((el, index) => {
        el.classList.add("mb-3");
        if (index === 6) {
          const controlLabel = el.querySelector(
            ".control-label"
          ) as HTMLElement;
          controlLabel.classList.replace("col-md-2", "col-md-3");
          const colMd12 = el.querySelector(".col-md-12") as HTMLElement;
          colMd12.classList.replace("col-md-12", "col-md-9");
        }
      });
      const controlLabels = row?.querySelectorAll(
        ".control-label"
      ) as NodeListOf<HTMLElement>;
      controlLabels?.forEach((el) => {
        el.classList.add("fw-bold");
      });
      return panelBody?.innerHTML;
    },
    viewStateValue: (original) => {
      const viewState = original?.querySelector(
        "#__VIEWSTATE"
      ) as HTMLInputElement;
      return viewState ? viewState.value : "";
    },
    viewStateGeneratorValue: (original) => {
      const viewStateGenerator = original?.querySelector(
        "#__VIEWSTATEGENERATOR"
      ) as HTMLInputElement;
      return viewStateGenerator ? viewStateGenerator.value : "";
    },
    eventValidationValue: (original) => {
      const eventValidation = original?.querySelector(
        "#__EVENTVALIDATION"
      ) as HTMLInputElement;
      return eventValidation ? eventValidation.value : "";
    },
  });
};
