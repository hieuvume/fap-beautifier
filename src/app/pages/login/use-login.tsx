import { useFapDataCustom, useFapDataSelector } from "@/app/providers/fap-data-provider";

export const useLogin = () => {
    const { message } = useFapDataSelector({
        message: '#ctl00_mainContent_lblMessage'
    })

    const { viewStateValue, viewStateGeneratorValue, eventValidationValue } = useFapDataCustom({
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