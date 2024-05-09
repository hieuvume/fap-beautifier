import { usePageDataCustom, usePageDataSelector } from "../../_metronic/layout/core";

export const useLogin = () => {
  const { message } = usePageDataSelector({
    message: '#ctl00_mainContent_lblMessage'
  })

  const { viewStateValue, viewStateGeneratorValue, eventValidationValue } = usePageDataCustom({
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
  })

  return {
    message,
    viewStateValue,
    viewStateGeneratorValue,
    eventValidationValue
  }

}