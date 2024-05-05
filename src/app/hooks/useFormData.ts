import useData from "./useData";

const useFormData = () => {
  return useData({
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
}

export default useFormData