import axios from "axios";

const API_URL = "https://www.googleapis.com/calendar/v3/calendars";

const addEvent = async (
  accessToken: string,
  calendarID: string,
  event: any
) => {
  const url = `${API_URL}/${calendarID}/events`;
  return axios.post(url, event, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const getUpcomingEvents = (accessToken: string, calendarID: string) => {
  const url = `${API_URL}/${calendarID}/events`;
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const getAllEvents = (
  accessToken: string,
  calendarID: string,
  queryOptions: any
) => {
  const url = `${API_URL}/${calendarID}/events`;
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: queryOptions,
  });
};

const getCurrentWeekEvents = (accessToken: string, calendarID: string) => {
  const now = new Date();
  const today = new Date();
  const endOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + 6));

  const queryOptions = {
    timeMin: today.toISOString(),
    timeMax: endOfWeek.toISOString(),
  };

  return getAllEvents(accessToken, calendarID, queryOptions);
};

export { addEvent, getUpcomingEvents, getCurrentWeekEvents };
