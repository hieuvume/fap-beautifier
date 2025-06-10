import { useFapDataCustom, useFapDataSelector } from "@/app/providers/fap-data-provider";

export const useLogin = () => {
    const { message } = useFapDataSelector({
        message: '#ctl00_mainContent_lblMessage'
    })

    const { viewStateValue, viewStateGeneratorValue, eventValidationValue, alertContent } = useFapDataCustom({
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
        alertContent: (original) => {
            const alertContent = original?.querySelector('#ctl00_mainContent_alert') as HTMLDivElement;
            const alertDiv = alertContent?.querySelector('div') as HTMLDivElement;
            if (alertDiv) {
                const aElements = alertDiv.querySelectorAll('a');
                aElements.forEach(a => {
                    a.classList.add('text-primary');
                });
                return alertDiv.innerHTML;
            }
            return '';
        }
    })

    return {
        message,
        viewStateValue,
        viewStateGeneratorValue,
        eventValidationValue,
        alertContent
    }

}