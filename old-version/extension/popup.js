/* eslint-disable no-undef */
const switchButton = document.getElementById('switch-btn');

chrome.storage.local.get('enabled', (data) => {
  if (data['enabled'] === undefined || data['enabled'] === true) {
    handleChange(true)
  } else {
    handleChange(false)
  }
});

switchButton.addEventListener('click', () => {
  chrome.storage.local.get(['enabled'], (data) => {
    if (data['enabled'] === undefined || data['enabled'] === true) {
      chrome.storage.local.set({ enabled: false })
      handleChange(false)
    } else {
      chrome.storage.local.set({ enabled: true })
      handleChange(true)
    }
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { reload: true });
    });
  });
})

function handleChange(isEnabled) {
  switchButton.classList.toggle('btn-danger', isEnabled)
  switchButton.classList.toggle('btn-success', !isEnabled)
  switchButton.textContent = isEnabled ? 'Disable FAP Beautifier' : 'Enable FAP Beautifier'
}