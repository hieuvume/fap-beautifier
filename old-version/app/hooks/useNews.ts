import { useState } from "react";
import { usePageData, usePageDataCustom } from "../../_metronic/layout/core";
import { News } from "../models/News";
import axios from "axios";
import { ScrollTopComponent } from "../../_metronic/assets/ts/components";

export const useNews = () => {
  const [loading, setLoading] = useState(false);
  const { setData } = usePageData();
  const {
    news,
    pagination,
    viewStateValue,
    viewStateGeneratorValue,
    eventValidationValue,
  } = usePageDataCustom({
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
    pagination: (original) => {
      const list: {
        text: string;
        page: number;
        active: boolean;
        disabled: boolean;
      }[] = [];
      if (!original) return list;
      const pagination = original?.querySelector(
        "#ctl00_mainContent_pg"
      ) as HTMLUListElement;
      if (pagination) {
        for (let i = 0; i < pagination.children.length; i++) {
          const item = pagination.children[i] as HTMLLIElement;
          const text = item?.innerText;
          const aTag = item?.querySelector("a") as HTMLAnchorElement;
          const href = aTag?.href;
          const match = href?.match(/'(\d+)'/);
          const page = match ? parseInt(match[1]) : 0;
          const active = item?.children[0]?.classList?.contains("active");
          const disabled =
            item?.children[0]?.attributes?.getNamedItem("disabled") !== null;
          list.push({
            text,
            page,
            active,
            disabled,
          });
        }
      }
      return list;
    },
    viewStateValue: (original) => {
      const viewState = original?.querySelector(
        "#__VIEWSTATE"
      ) as HTMLInputElement;
      return viewState ? viewState.value : "";
    },
    viewStateGeneratorValue: (original) => {
      const viewStateGenerator = original?.querySelector(
        "#__VIEWSTATEGENERATOR"
      ) as HTMLInputElement;
      return viewStateGenerator ? viewStateGenerator.value : "";
    },
    eventValidationValue: (original) => {
      const eventValidation = original?.querySelector(
        "#__EVENTVALIDATION"
      ) as HTMLInputElement;
      return eventValidation ? eventValidation.value : "";
    },
  });

  const onChangePage = (page: number) => {
    setLoading(true);
    const currentPage =
      pagination.find((item) => item.active)?.page ?? page - 1;
    const data = {
      __EVENTTARGET: "ctl00$mainContent$pg",
      __VIEWSTATE: viewStateValue,
      __VIEWSTATEGENERATOR: viewStateGeneratorValue,
      __EVENTVALIDATION: eventValidationValue,
      __EVENTARGUMENT: page,
      ctl00$mainContent$pg_input: currentPage,
    };
    return axios
      .post("", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(response.data, "text/html");
        const table = htmlDoc.querySelector(".container") as Element;
        setData(table);
        ScrollTopComponent.goTop()
      })
      .catch(() => {
        alert("Cannot view posts. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  return { news, pagination, loading, onChangePage };
};
