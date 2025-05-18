import { News } from "../models/News";
import useFetch from "./useFetch";

export const useFastNews = () => {
  const { data, loading } = useFetch("/CmsFAP/News.aspx", {
    news: (original) => {
      if (!original) return [];
      const list = original?.querySelector(
        "#ctl00_mainContent_divContent ul"
      ) as HTMLUListElement;
      const news: News[] = [];

      if (list) {
        for (let i = 0; i < list.children.length; i++) {
          const item = list.children[i] as HTMLLIElement;
          const aTag = item?.querySelector("a") as HTMLAnchorElement;
          const id = aTag?.href.split("=")[1];
          const rawText = aTag?.innerText;
          const [date, time, ...rest] = rawText?.split(" ");
          const title = rest.slice(1).join(" ");
          const dateTime = `${date} ${time}`;
          news.push({
            id: id,
            title,
            dateTime,
          });
        }
      }
      return news;
    },
  });

  return { news: data?.news || [], loading };
};
