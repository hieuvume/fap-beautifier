import React from 'react';
import { createRoot } from 'react-dom/client';
import Popup from './components/Popup';
import './styles/popup.css';

/**
 * Entry point của popup extension
 * - Khởi tạo ứng dụng React
 * - Render component Popup vào DOM
 */
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('Root element not found in popup');
    return;
  }

  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Popup />
    </React.StrictMode>
  );
}); 