import { usePageDataCustom } from "../../_metronic/layout/core";

export const useDoFeedback = () => {
  return usePageDataCustom({
    viewStateValue: (original) => {
      const viewState = original?.querySelector('#__VIEWSTATE') as HTMLInputElement;
      return viewState ? viewState.value : '';
    },
    viewStateGeneratorValue: (original) => {
      const viewStateGenerator = original?.querySelector('#__VIEWSTATEGENERATOR') as HTMLInputElement;
      return viewStateGenerator ? viewStateGenerator.value : '';
    },
    eventValidationValue: (original) => {
      const eventValidation = original?.querySelector('#__EVENTVALIDATION') as HTMLInputElement;
      return eventValidation ? eventValidation.value : '';
    },
    className: (original) => {
      const className = original?.querySelector('#ctl00_mainContent_lblGroup') as HTMLElement;
      return className ? className.innerText : '';
    },
    month: (original) => {
      const month = original?.querySelector('#ctl00_mainContent_lblMonth') as HTMLElement;
      return month ? month.innerText : '';
    },
    subjectName: (original) => {
      const subjectName = original?.querySelector('#ctl00_mainContent_lblSubject') as HTMLElement;
      return subjectName ? subjectName.innerText : '';
    },
    teacherName: (original) => {
      const teacherName = original?.querySelector('#ctl00_mainContent_lblTeacher') as HTMLElement;
      return teacherName ? teacherName.innerText : '';
    }
  });
};
