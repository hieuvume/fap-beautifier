import { useEffect, useState } from "react";

export default function useFetch<T extends { [key: string]: string | ((element: Element | undefined) => any) }>(url: string, selector: T) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState<{ [K in keyof T]: ReturnType<Extract<T[K], Function>> } | undefined>(undefined);

  const fetchData = async () => {
    setLoading(true);
    fetch(url ?? window.location.href, { redirect: "manual" })
      .then((response) => {
        if (response.status === 302 || !response.ok) {
          window.location.href = "/Default.aspx";
        }
        return response.text();
      })
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        if (doc) {
          const container = doc.querySelector(".container");
          if (container) {
            const result: any = {};
            Object.keys(selector).forEach((key) => {
              const selectorValue = selector[key];
              const dataElement = container;
              if (typeof selectorValue === 'string') {
                const selectedElement = dataElement?.querySelector(selectorValue);
                result[key] = selectedElement instanceof HTMLElement ? selectedElement.innerText.trim() : "";
              } else if (typeof selectorValue === 'function') {
                result[key] = selectorValue(dataElement) ?? undefined;
              }
            });
            setData(result);
          }
        }
      })
      .catch((error) => {
        setError(error);
      }).finally(() => {
        setLoading(false);
      })
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return { data, loading, error, refresh: fetchData };
};
