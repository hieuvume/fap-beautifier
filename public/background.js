/* eslint-disable no-undef */

const supportedPaths = [
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
]

const getMatches = async () => {
  return supportedPaths.map(path => `*://fap.fpt.edu.vn${path}`);
}

chrome.runtime.onInstalled.addListener(async () => {
  const manifest = await fetch(chrome.runtime.getURL('/asset-manifest.json'));
  const assets = await manifest.json();
  const matches = await getMatches();
  const js = assets.entrypoints.filter((entry) => entry.endsWith('.js'));
  const css = assets.entrypoints.filter((entry) => entry.endsWith('.css'));
  await chrome.scripting.registerContentScripts([{
    id: 'reactjs',
    js: js,
    css: css,
    matches: matches,
    runAt: 'document_end',
  }]);
});

chrome.runtime.onInstalled.addListener(async () => {
  const matches = await getMatches();
  await chrome.scripting.registerContentScripts([{
    id: 'content',
    js: ['contentScript.js'],
    matches: matches,
    runAt: 'document_start',
  }]);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'SIGN_IN') {
    chrome.identity.getAuthToken({ interactive: true }, function (token) {
      sendResponse({ token: token });
    });
    return true;
  }
});