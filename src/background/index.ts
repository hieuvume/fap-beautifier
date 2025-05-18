/* eslint-disable no-undef */

// FAP URLs that we want to support
export const supportedPaths = [
    '/',
    '/Default.aspx*',
    '/Thongbao.aspx*',
    '/Student.aspx*',
    '/Report/ScheduleOfWeek.aspx*',
    '/Report/Help.aspx*',
    '/Exam/ScheduleExams.aspx*',
    '/FrontOffice/SubjectFees.aspx*',
    '/Report/ViewAttendstudent.aspx*',
    '/Grade/StudentGrade.aspx*',
    '/User/Profile.aspx*',
    '/User/verProfile.aspx*',
    '/Grade/StudentTranscript.aspx*',
    '/FrontOffice/StudentCurriculum.aspx*',
    '/Report/StudentFees.aspx*',
    '/Finance/TransReport.aspx*',
    '/CmsFAP/NewsDetail.aspx*',
    '/CmsFAP/News.aspx*',
    '/CmsFAP/PlusNews.aspx*',
    '/Course/Groups.aspx*',
    // '/Feedback/StudentFeedBack.aspx*',
    // '/Feedback/StudentFeedback.aspx*',
    // '/Feedback/DoFeedback.aspx*',
    // '/Feedback/EditDoFeedback.aspx*',
    // '/Schedule/ActivityStudent.aspx*',
  ];
  
  // Lấy danh sách URL hỗ trợ
  const getMatches = async (): Promise<string[]> => {
    return supportedPaths.map(path => `*://fap.fpt.edu.vn${path}`);
  };
  
  // Kiểm tra trạng thái extension
  const checkExtensionState = async (): Promise<boolean> => {
    return new Promise((resolve) => {
      chrome.storage.local.get('enabled', (data) => {
        const isEnabled = data['enabled'] === undefined ? true : !!data['enabled'];
        resolve(isEnabled);
      });
    });
  };
  
  // Đăng ký content script - luôn cần thiết cho việc kiểm tra trạng thái
  const registerContentScript = async () => {
    try {
      // Đầu tiên, hủy đăng ký script hiện có nếu có
      try {
        await chrome.scripting.unregisterContentScripts({
          ids: ['content']
        });
      } catch (error) {
        // Bỏ qua lỗi nếu script chưa được đăng ký
      }
  
      const matches = await getMatches();
      
      // Đăng ký content script (chạy ở document_start)
      await chrome.scripting.registerContentScripts([{
        id: 'content',
        js: ['contentScript.js'],
        matches: matches,
        runAt: 'document_start',
      }]);
      
      console.log('FAP Beautifier: Content script registered');
      return true;
    } catch (error) {
      console.error('FAP Beautifier: Failed to register content script', error);
      return false;
    }
  };
  
  // Đăng ký hoặc hủy đăng ký React scripts dựa vào trạng thái
  const updateReactScripts = async (isEnabled: boolean) => {
    try {
      // Đầu tiên, hủy đăng ký React scripts hiện có nếu có
      try {
        await chrome.scripting.unregisterContentScripts({
          ids: ['reactjs']
        });
        console.log('FAP Beautifier: React scripts unregistered');
      } catch (error) {
        // Bỏ qua lỗi nếu script chưa được đăng ký
      }
      
      // Chỉ đăng ký React scripts nếu extension được bật
      if (isEnabled) {
        try {
          const matches = await getMatches();
          const manifest = await fetch(chrome.runtime.getURL('/asset-manifest.json'));
          const assets = await manifest.json();
          const js = assets.entrypoints.filter((entry: string) => entry.endsWith('.js'));
          const css = assets.entrypoints.filter((entry: string) => entry.endsWith('.css'));
          
          await chrome.scripting.registerContentScripts([{
            id: 'reactjs',
            js: js,
            css: css,
            matches: matches,
            runAt: 'document_end',
          }]);
          
          console.log('FAP Beautifier: React scripts registered');
        } catch (error) {
          console.error('FAP Beautifier: Failed to register React scripts', error);
        }
      }
      
      // Báo cho tất cả các tab FAP về thay đổi trạng thái
      chrome.tabs.query({url: '*://fap.fpt.edu.vn/*'}, (tabs) => {
        tabs.forEach(tab => {
          if (tab.id) {
            chrome.tabs.sendMessage(tab.id, { reload: true });
          }
        });
      });
      
      return true;
    } catch (error) {
      console.error('FAP Beautifier: Failed to update React scripts', error);
      return false;
    }
  };
  
  // Khởi tạo extension khi được cài đặt hoặc cập nhật
  chrome.runtime.onInstalled.addListener(async () => {
    try {
      // 1. Đăng ký content script
      await registerContentScript();
      
      // 2. Khởi tạo storage với enabled mặc định là true
      chrome.storage.local.get('enabled', async (data) => {
        const isEnabled = data['enabled'] === undefined ? true : !!data['enabled'];
        
        // Cập nhật storage nếu cần
        if (data['enabled'] === undefined) {
          chrome.storage.local.set({ enabled: true });
        }
        
        // 3. Đăng ký React scripts nếu extension được bật
        if (isEnabled) {
          await updateReactScripts(true);
        }
      });
      
      console.log('FAP Beautifier extension installed/updated successfully');
    } catch (error) {
      console.error('FAP Beautifier: Failed to initialize extension', error);
    }
  });
  
  // Theo dõi thay đổi trạng thái extension
  chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'local' && changes.enabled) {
      const isEnabled = !!changes.enabled.newValue;
      // Cập nhật React scripts khi trạng thái thay đổi
      updateReactScripts(isEnabled);
    }
  });
  
  // Khởi tạo khi browser khởi động
  chrome.runtime.onStartup.addListener(async () => {
    const isEnabled = await checkExtensionState();
    await registerContentScript();
    if (isEnabled) {
      await updateReactScripts(true);
    }
  });
  
  // Xử lý tin nhắn từ content scripts hoặc popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Wrap in try-catch to handle any potential errors
    try {
      if (request.type === 'SIGN_IN') {
        chrome.identity.getAuthToken({ interactive: true }, function (token) {
          sendResponse({ token: token, success: true });
        });
        return true; // Keep message channel open for async response
      } else if (request.type === 'GET_STATE') {
        chrome.storage.local.get('enabled', (data) => {
          const isEnabled = data['enabled'] === undefined ? true : !!data['enabled'];
          sendResponse({ enabled: isEnabled, success: true });
        });
        return true; // Keep message channel open for async response
      }
      
      // Default response for unhandled message types
      sendResponse({ success: false, message: 'Unknown message type' });
    } catch (error) {
      console.error('Error handling message:', error);
      sendResponse({ success: false, message: 'Error handling message' });
    }
    return true; // Always return true to keep message channel open
  }); 