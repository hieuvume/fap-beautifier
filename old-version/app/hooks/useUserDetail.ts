import { usePageDataCustom } from "../../_metronic/layout/core";

export const useUserDetail = () => {
  const generateTableData = (table: HTMLTableElement) => {
    const data = Array.from(table?.querySelectorAll("tr") ?? []).reduce(
      (acc, cur) => {
        const key = cur?.querySelector("td")?.textContent?.trim() ?? "";
        const value =
          cur?.querySelector("td:last-child")?.textContent?.trim() ?? "";
        return { ...acc, [key]: value };
      },
      {}
    );
    return data;
  };

  return usePageDataCustom({
    image: (original) => {
      const image = original?.querySelector(
        "#ctl00_mainContent_studentImage"
      ) as HTMLImageElement;
      return image?.src || "";
    },
    fullName: (original) => {
      const fullName = original?.querySelector(
        "#ctl00_mainContent_lblFullname"
      ) as HTMLElement;
      return fullName?.textContent?.trim() || "";
    },
    rollNumber: (original) => {
      const rollNumber = original?.querySelector(
        "#ctl00_mainContent_lblRollNumber"
      ) as HTMLElement;
      return rollNumber?.textContent?.trim() || "";
    },
    email: (original) => {
      const email = original?.querySelector(
        "#ctl00_mainContent_lblEmail"
      ) as HTMLElement;
      return email?.textContent?.trim() || "";
    },
    phone: (original) => {
      const phone = original?.querySelector(
        "#ctl00_mainContent_lblPhoneNumber"
      ) as HTMLElement;
      const text = phone?.textContent?.trim() || "";
      if (text.includes(",")) {
        return text.split(",")[0].trim();
      }
      return text;
    },
    balance: (original) => {
      const balance = original?.querySelector(
        "#ctl00_mainContent_lblAccBlance"
      ) as HTMLElement;
      const b = balance?.querySelector("b") as HTMLElement;
      return b?.textContent?.trim() || "";
    },
    profileData: (original) => {
      const table = original?.querySelectorAll("table");
      return generateTableData(table?.[3] as HTMLTableElement);
    },
    academicData: (original) => {
      const table = original?.querySelectorAll("table");
      return generateTableData(table?.[5] as HTMLTableElement);
    },
    parentData: (original) => {
      const table = original?.querySelectorAll("table");
      return generateTableData(table?.[4] as HTMLTableElement);
    },
    otherData: (original) => {
      const table = original?.querySelectorAll("table");
      return generateTableData(table?.[7] as HTMLTableElement);
    },
  });
};
