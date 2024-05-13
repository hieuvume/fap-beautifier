/* eslint-disable no-undef */

chrome.storage.local.get('enabled', (data) => {
  if (data['enabled'] === undefined || data['enabled'] === true) {
    document.addEventListener('DOMContentLoaded', () => {
      const container = document.querySelector('.container');
      window._data = container;
      document.body.innerHTML = '<div id="root"></div>';
      document.head.innerHTML = '<title>FPT University Academic Portal</title>'
      document.head.innerHTML += '<meta http-equiv="X-UA-Compatible" content="IE=Edge">'
      document.head.innerHTML += '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">'
    });
  }
});

// on message to reload the page
chrome.runtime.onMessage.addListener((message) => {
  console.log(message);
  if (message.reload) {
    window.location.reload();
  }
});