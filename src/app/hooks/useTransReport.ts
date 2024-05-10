import { useState } from "react";
import { usePageData, usePageDataCustom } from "../../_metronic/layout/core";
import axios from "axios";

export const useTransReport = () => {
  const { setData } = usePageData();
  const {
    transReportTable,
    viewStateValue,
    viewStateGeneratorValue,
    eventValidationValue,
  } = usePageDataCustom({
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
    transReportTable: (original) => {
      const tableElement = original?.querySelector(
        "#ctl00_mainContent_gvData"
      ) as HTMLTableElement;
      tableElement?.classList?.remove("table-hover");
      tableElement?.classList?.add(
        "table-striped",
        "table-rounded",
        "table-striped",
        "border",
        "gs-7"
      );
      tableElement
        ?.querySelector("tr")
        ?.classList?.add(
          "fw-semibold",
          "fs-6",
          "text-gray-800",
          "border-bottom",
          "border-gray-200"
        );
      // tableElement?.querySelectorAll(".label-primary")?.forEach((el) => {
      //   el.classList.remove("label", "label-primary");
      //   el.classList.add("text-primary", "fw-bold");
      // })
      // tableElement?.querySelectorAll(".label-warning")?.forEach((el) => {
      //   el.classList.remove("label", "label-warning");
      //   el.classList.add("badge", "badge-warning", "fw-semibold");
      // })
      // tableElement?.querySelectorAll(".label-danger")?.forEach((el) => {
      //   el.classList.remove("label", "label-danger");
      //   el.classList.add("badge", "badge-danger", "fw-semibold");
      // })
      // tableElement?.querySelectorAll(".label-success")?.forEach((el) => {
      //   el.classList.remove("label", "label-success");
      //   el.classList.add("fw-semibold", "text-danger");
      // })
      return tableElement?.outerHTML || "";
    },
  });

  const [loading, setLoading] = useState(false);
  const [fromDate, setFromDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);

  const onView = () => {
    setLoading(true);
    onPost(true)
      .then((res) => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(res.data, "text/html");
        const table = htmlDoc.querySelector(".container") as Element;
        setData(table);
      })
      .catch(() => {
        alert("Cannot view transaction report. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  const onExport = () => {
    onPost(false).then((res) => {
      const blob = new Blob([res.data], {
        type: "application/vnd.ms-excel",
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "TransactionReport.xls";
      a.click();
    });
  };

  const onPost = (isView: boolean) => {
    const [fromYear, fromMonth, fromDay] = fromDate.split("-");
    const [toYear, toMonth, toDay] = toDate.split("-");
    const data: any = {
      __EVENTTARGET: "",
      __EVENTARGUMENT: "",
      __VIEWSTATE: viewStateValue,
      __VIEWSTATEGENERATOR: viewStateGeneratorValue,
      __EVENTVALIDATION: eventValidationValue,
      ctl00$mainContent$ucStartDate$ddlDays: Number(fromDay),
      ctl00$mainContent$ucStartDate$ddlMonths: Number(fromMonth),
      ctl00$mainContent$ucStartDate$ddlYears: Number(fromYear),
      ctl00$mainContent$ucEndDate$ddlDays: Number(toDay),
      ctl00$mainContent$ucEndDate$ddlMonths: Number(toMonth),
      ctl00$mainContent$ucEndDate$ddlYears: Number(toYear),
      ctl00$mainContent$hfError: "",
    };

    if (isView) {
      data["ctl00$mainContent$btView"] = "View";
    } else {
      data["ctl00$mainContent$btExport"] = "Export";
    }

    return axios.post("", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  };

  return {
    transReportTable,
    viewStateValue,
    viewStateGeneratorValue,
    eventValidationValue,
    onView,
    loading,
    fromDate,
    toDate,
    setFromDate,
    setToDate,
    onExport,
  };
};
