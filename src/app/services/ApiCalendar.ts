import ApiCalendar from "react-google-calendar-api";

const config = {
  clientId: "494607565595-rddet836behm5de7rihv6v49k2oo5cmt.apps.googleusercontent.com",
  apiKey: "AIzaSyDsocucxpvQ4v6Gvuzwr2v9tDa1AuX0rFM",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

export const calendar = new ApiCalendar(config);