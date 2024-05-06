import { useMemo } from 'react';

interface DataDefinition {
  [key: string]: string | ((element: Element | undefined) => string);
}

const useData = <T extends DataDefinition>(define: T): { data: { [K in keyof T]: string } } => {
  return useMemo(() => {
    const original = window._data;
    const data: { [K in keyof T]?: string | undefined } = {};
    const keys = Object.keys(define) as Array<keyof T>;

    keys.forEach(key => {
      const defValue = define[key];
      if (typeof defValue === 'string') {
        const selectedElement = original?.querySelector(defValue);
        data[key] = selectedElement instanceof HTMLElement ? selectedElement.innerText.trim() : undefined;
      } else if (typeof defValue === 'function') {
        data[key] = defValue(original);
      } else {
        data[key] = undefined;
      }
    });

    return { data: data as { [K in keyof T]: string } };
  }, [define]);
}

export default useData;