import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { useLocation } from "react-router-dom";

interface WithChildren {
  children: ReactNode;
}

export interface FapDataContextModel {
  getData: () => Element | undefined;
  setData: (data: Element) => void;
  fetchData: (url?: string) => Promise<void>;
  loading: boolean;
  shouldShowFallback: boolean;
  error: Error | null;
}

interface CachedData {
  element: Element;
  timestamp: number;
}

type DataCache = {
  [path: string]: CachedData;
};

// Cache expiration time in milliseconds (1 minutes)
const CACHE_EXPIRATION = 1 * 60 * 1000;

const FapDataContext = createContext<FapDataContextModel>({
  getData: () => undefined,
  setData: () => { },
  fetchData: async () => { },
  loading: false,
  error: null,
  shouldShowFallback: false,
});

const FapDataProvider: FC<WithChildren> = ({ children }) => {
  const [dataCache, setDataCache] = useState<DataCache>({});
  const [firstMounted, setFirstMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const location = useLocation();
  const currentPath = window.location.pathname;

  const isCacheValid = (path: string): boolean => {
    const cached = dataCache[path];
    if (!cached) return false;

    const now = Date.now();
    return now - cached.timestamp < CACHE_EXPIRATION;
  };

  const getData = () => {
    const cached = dataCache[currentPath];
    return cached?.element;
  };

  const setData = (data: Element) => {
    setDataCache((prev) => ({
      ...prev,
      [currentPath]: {
        element: data,
        timestamp: Date.now(),
      },
    }));
  };

  const fetchData = async (url?: string) => {
    setError(null);

    try {
      const response = await fetch(url ?? window.location.href, { redirect: "manual" });

      if (response.status === 302 || !response.ok) {
        window.location.href = "/Default.aspx";
        return;
      }

      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      if (!doc) {
        throw new Error("Failed to parse HTML document");
      }

      const container = doc.querySelector(".container");
      if (!container) {
        throw new Error("Container element not found");
      }

      setDataCache((prev) => ({
        ...prev,
        [currentPath]: {
          element: container,
          timestamp: Date.now(),
        },
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error instanceof Error ? error : new Error(String(error)));

      // Show error message with option to retry
      // const shouldRetry = window.confirm(
      //   "Có lỗi xảy ra khi lấy dữ liệu từ máy chủ. Bạn có muốn thử lại không?"
      // );

      // if (shouldRetry) {
      //   return fetchData(url);
      // } else {
      //   setTimeout(() => (window.location.href = "/Default.aspx"), 1000);
      // }
    }
  };

  const shouldShowFallback = useMemo(() => {
    if (import.meta.env.DEV) {
      return false;
    }
    if (!isCacheValid(currentPath)) {
      return true;
    }
    if (loading && !isCacheValid(currentPath)) {
      return true;
    }
    return false;
  }, [loading, isCacheValid, currentPath]);

  const value: FapDataContextModel = {
    setData,
    getData,
    loading,
    fetchData,
    error,
    shouldShowFallback,
  };

  useLayoutEffect(() => {
    if (window._data) {
      setDataCache((prev) => ({
        ...prev,
        [currentPath]: {
          element: window._data.element,
          timestamp: Date.now(),
        },
      }));
    }
    setFirstMounted(true);
    setLoading(false);
  }, []);

  useLayoutEffect(() => {
    if (firstMounted) {
      setLoading(true);
      fetchData().finally(() => {
        setLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  return (
    <FapDataContext.Provider value={value}>
      {children}
    </FapDataContext.Provider>
  );
};

function useFapData() {
  return useContext(FapDataContext);
}

function useFapDataSelector(selector: { [key: string]: string }) {
  const { getData } = useFapData();

  const result: { [key: string]: string } = {};
  Object.keys(selector).forEach((key) => {
    const value = selector[key];
    const selectedElement = getData()?.querySelector(value);
    result[key] =
      selectedElement instanceof HTMLElement
        ? selectedElement.innerText.trim()
        : "";
  });

  return result;
}

function useFapDataCustom<
  T extends { [key: string]: (element: Element | undefined) => any }
>(selector: T): { [K in keyof T]: ReturnType<T[K]> } {
  const { getData } = useFapData();

  const result: any = {};
  Object.keys(selector).forEach((key) => {
    result[key] = selector[key](getData()) ?? undefined;
  });

  return result;
}

export {
  FapDataProvider,
  useFapData, useFapDataCustom, useFapDataSelector
};
