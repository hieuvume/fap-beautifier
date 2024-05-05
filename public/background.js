/* eslint-disable no-undef */

const supportedPaths = [
  '/',
  '/Default.aspx*',
  '/Thongbao.aspx*',
  '/Student.aspx*',
  '/User/UserDetail.aspx*',
  '/Report/ScheduleOfWeek.aspx*',
]

const getMatches = () => {
  return supportedPaths.map(path => `*://fap.fpt.edu.vn${path}`);
}

chrome.runtime.onInstalled.addListener(async () => {
  const manifest = await fetch(chrome.runtime.getURL('/asset-manifest.json'));
  const assets = await manifest.json();
  const js = assets.entrypoints.filter((entry) => entry.endsWith('.js'));
  const css = assets.entrypoints.filter((entry) => entry.endsWith('.css'));

  await chrome.scripting.registerContentScripts([{
    id: 'reactjs',
    js: js,
    css: css,
    matches: getMatches(),
    runAt: 'document_end',
  }]);
});

chrome.runtime.onInstalled.addListener(async () => {
  await chrome.scripting.registerContentScripts([{
    id: 'content',
    js: ['contentScript.js'],
    matches: getMatches(),
    runAt: 'document_start',
  }]);
});