/// <reference types="vite/client" />

declare global {
  interface Window {
    _data: {
        element: Element;
        timestamp: number;
        title: string;
        url?: string
    }
    _fapDataReady: boolean;
  }
}

export {};