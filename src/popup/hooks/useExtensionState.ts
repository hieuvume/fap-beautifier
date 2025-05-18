import { useState, useEffect } from 'react';

/**
 * Hook để quản lý trạng thái bật/tắt của extension và phiên bản
 * @returns {Object} Đối tượng chứa trạng thái và các hàm điều khiển
 */
export const useExtensionState = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [version, setVersion] = useState<string>('2.0.0');

  // Tải trạng thái ban đầu và phiên bản khi component mount
  useEffect(() => {
    // Lấy trạng thái từ storage
    chrome.storage.local.get('enabled', (data) => {
      const storageEnabled = data['enabled'] === undefined ? true : data['enabled'];
      setIsEnabled(storageEnabled);
    });
    
    // Lấy phiên bản từ manifest
    try {
      const manifest = chrome.runtime.getManifest();
      setVersion(manifest.version);
    } catch (error) {
      console.error('Error getting extension version:', error);
    }
  }, []);

  // Hàm xử lý khi chuyển đổi trạng thái
  const toggleExtension = (newState: boolean) => {
    setIsEnabled(newState);
    
    // Cập nhật storage
    chrome.storage.local.set({ enabled: newState }, () => {
      if (chrome.runtime.lastError) {
        console.error('Error updating storage:', chrome.runtime.lastError);
        return;
      }
      
      // Gửi tin nhắn để tải lại tab đang hoạt động nếu đó là trang FAP
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab?.id && activeTab.url?.includes('fap.fpt.edu.vn')) {
          chrome.tabs.sendMessage(activeTab.id, { reload: true });
        }
      });
    });
  };

  return {
    isEnabled,
    version,
    toggleExtension
  };
};

export default useExtensionState; 