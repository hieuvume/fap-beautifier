import { Alert, AlertIcon, AlertTitle } from '@/app/components/ui/alert';
import { useFapDataCustom } from '@/app/providers/fap-data-provider';
import { RiCheckboxCircleFill } from '@remixicon/react';
import { toast } from 'sonner';

export const useUpdateProfile = () => {
    return useFapDataCustom({
        formHtml: (original: Element | undefined) => {
            const panelBody = original?.querySelector('.panel-body') as HTMLElement | null;
            if (!panelBody) return '';

            return enhanceFormHtml(panelBody);
        },
        viewStateValue: (original: Element | undefined) => {
            const viewState = original?.querySelector('#__VIEWSTATE') as HTMLInputElement | null;
            return viewState ? viewState.value : '';
        },
        viewStateGeneratorValue: (original: Element | undefined) => {
            const viewStateGenerator = original?.querySelector('#__VIEWSTATEGENERATOR') as HTMLInputElement | null;
            return viewStateGenerator ? viewStateGenerator.value : '';
        },
        eventValidationValue: (original: Element | undefined) => {
            const eventValidation = original?.querySelector('#__EVENTVALIDATION') as HTMLInputElement | null;
            return eventValidation ? eventValidation.value : '';
        },
    });
};

// Helper function to enhance the form HTML for better display
const enhanceFormHtml = (panelBody: HTMLElement): string => {
    // Clone the panel body to avoid modifying the original
    const clone = panelBody.cloneNode(true) as HTMLElement;

    // Find the row and container elements
    const row = clone.querySelector('.row') as HTMLElement | null;
    if (!row) return clone.innerHTML;

    // Apply general styling to the container
    row.classList.add('space-y-4');

    // Find the column that contains the form
    const col = row.querySelector('.col-md-9') as HTMLElement | null;
    if (col) {
        col.classList.remove('col-md-9');
        col.classList.add('w-full');
    }

    // Style all form groups
    const formGroups = row.querySelectorAll('.form-group') as NodeListOf<HTMLElement>;
    formGroups.forEach((formGroup) => {
        // Reset classes and apply new ones
        formGroup.className = 'form-group mb-3';
        formGroup.classList.add('grid', 'grid-cols-1', 'md:grid-cols-12', 'gap-4', 'items-center');

        // Find and style the label in each form group
        const label = formGroup.querySelector('.control-label') as HTMLElement | null;
        if (label) {
            label.classList.remove('col-md-2', 'col-md-3');
            label.classList.add('md:col-span-3', 'font-medium', 'text-foreground');
        }

        // Handle the special case for the gender radio group
        if (formGroup.querySelector('input[type="radio"]')) {
            const radioContainer = formGroup.querySelector('.col-md-9') as HTMLElement | null;
            if (radioContainer) {
                radioContainer.classList.remove('col-md-9');
                radioContainer.classList.add('md:col-span-9', 'flex', 'flex-wrap', 'gap-4');

                // Create proper radio wrappers
                const radios = radioContainer.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
                radios.forEach((radio) => {
                    // Find the label that follows this radio
                    const associatedLabel = radio.nextElementSibling as HTMLLabelElement;
                    if (associatedLabel && associatedLabel.tagName === 'LABEL') {
                        // Create a wrapper div for each radio and its label
                        const wrapper = document.createElement('div');
                        wrapper.classList.add('flex', 'items-center', 'gap-2');

                        // Make a clone of the radio to avoid modifying the original directly
                        const radioClone = radio.cloneNode(true) as HTMLInputElement;
                        radioClone.classList.add('h-4', 'w-4', 'text-primary', 'rounded-full', 'border-gray-300', 'focus:ring-primary');

                        // Clone the label too
                        const labelClone = associatedLabel.cloneNode(true) as HTMLLabelElement;
                        labelClone.classList.add('text-sm', 'text-foreground');

                        // Add both to the wrapper
                        wrapper.appendChild(radioClone);
                        wrapper.appendChild(labelClone);

                        // Replace the original with the wrapped version
                        radio.parentNode?.insertBefore(wrapper, radio);
                        radio.remove();
                        associatedLabel.remove();
                    }
                });
            }
        }

        // Handle normal inputs, selects and their containers
        formGroup.querySelectorAll('.col-md-9, .col-md-3, .col-md-4, .col-md-12').forEach((container: Element) => {
            const el = container as HTMLElement;
            // Determine span width based on original class
            let spanWidth = 9;
            if (el.classList.contains('col-md-3')) spanWidth = 3;
            if (el.classList.contains('col-md-4')) spanWidth = 4;
            if (el.classList.contains('col-md-12')) spanWidth = 9;

            // Reset classes and apply new ones
            el.className = '';
            el.classList.add(`md:col-span-${spanWidth}`);

            // Style inputs inside this container
            const inputs = el.querySelectorAll('input, select') as NodeListOf<HTMLElement>;
            inputs.forEach((input) => {
                if (input.getAttribute('type') !== 'radio' && input.getAttribute('type') !== 'checkbox') {
                    input.classList.add('w-full', 'px-3', 'py-2', 'border', 'border-gray-300', 'rounded-md', 'shadow-sm', 'text-sm',
                        'focus:outline-none', 'focus:ring-2', 'focus:ring-primary', 'focus:border-primary', 'transition-colors');
                }
            });

            // Style read-only spans (like full name that can't be edited)
            const readOnlySpans = el.querySelectorAll('span[id]') as NodeListOf<HTMLElement>;
            readOnlySpans.forEach((span) => {
                span.classList.add('block', 'w-full', 'px-3', 'py-2', 'bg-muted/20', 'border', 'border-gray-200', 'rounded-md',
                    'text-sm', 'text-muted-foreground');
            });
        });
    });

    // Special styling for the multi-part address section with dropdowns
    const addressSection = row.querySelector('.form-group:nth-of-type(11)') as HTMLElement | null;
    if (addressSection) {
        const selects = addressSection.querySelectorAll('select') as NodeListOf<HTMLSelectElement>;
        selects.forEach((select) => {
            select.classList.add('w-full', 'px-3', 'py-2', 'border', 'border-gray-300', 'rounded-md', 'shadow-sm', 'text-sm',
                'focus:outline-none', 'focus:ring-2', 'focus:ring-primary', 'focus:border-primary', 'transition-colors');
        });
    }

    // Special styling for form sections with label + two inputs
    const combinedGroups = row.querySelectorAll('.form-group:has(.col-md-2 + .col-md-4)') as NodeListOf<HTMLElement>;
    combinedGroups.forEach((group) => {
        group.classList.add('grid-cols-12');
    });

    // Style the submit button container
    const submitGroup = Array.from(formGroups).pop() as HTMLElement | null;
    if (submitGroup && submitGroup.querySelector('input[type="submit"]')) {
        // Reset all classes to avoid conflicts
        submitGroup.className = 'form-group';
        submitGroup.classList.add('flex', 'justify-end', 'mt-8', 'items-center');

        // Find and reset the container div
        const buttonContainer = submitGroup.querySelector('.col-md-9') as HTMLElement | null;
        if (buttonContainer) {
            buttonContainer.className = '';
            buttonContainer.classList.add('flex', 'items-center', 'gap-3');
        }

        const submitButton = submitGroup.querySelector('input[type="submit"]') as HTMLInputElement | null;
        if (submitButton) {
            // Remove original classes and apply new ones
            submitButton.className = '';
            submitButton.classList.add('px-4', 'py-2', 'bg-primary', 'text-white', 'rounded-md', 'font-medium',
                'shadow-sm', 'hover:bg-primary-active', 'focus:outline-none', 'focus:ring-2',
                'focus:ring-offset-2', 'focus:ring-primary', 'transition-colors');
            submitButton.textContent = 'Save changes';
        }

        // Style error message if present
        const errorSpan = submitGroup.querySelector('span[id*="Error"]') as HTMLElement | null;
        if (errorSpan) {
            // Remove any existing styling including inline styles
            errorSpan.removeAttribute('style');
            errorSpan.className = '';
            errorSpan.classList.add('ml-3', 'text-sm', 'text-red-500');
            if (errorSpan.textContent && errorSpan.textContent.trim() !== '') {
                toast.custom(
                    (t) => (
                        <Alert
                            variant="mono"
                            icon="success"
                            close={false}
                            onClose={() => toast.dismiss(t)}
                        >
                            <AlertIcon>
                                <RiCheckboxCircleFill />
                            </AlertIcon>
                            <AlertTitle>{errorSpan.textContent}</AlertTitle>
                        </Alert>
                    ),
                    {
                        position: 'top-center',
                    },
                );
            }
        }
    }

    return clone.innerHTML;
}; 