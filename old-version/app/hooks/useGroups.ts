import { usePageDataCustom } from "../../_metronic/layout/core";
import { GroupMember } from "../models/Group";

export const useGroups = () => {
  return usePageDataCustom({
    groupName: (original) => {
      return original?.querySelector("#ctl00_mainContent_divGroup")?.querySelector('b')?.textContent ?? ''
    },
    courseName: (original) => {
      return original?.querySelector("#ctl00_mainContent_divCourse")?.querySelector('b')?.textContent ?? ''
    },
    members: (original) => {
      const table = original?.querySelector("#ctl00_mainContent_divStudents table") as HTMLTableElement;
      const members: GroupMember[] = [];
      if (table) {
        for (let i = 1; i < table.rows.length; i++) {
          const row = table.rows[i];
          members.push({
            rollNumber: row.cells[2].textContent ?? '',
            code: '',
            surname: row.cells[3].textContent ?? '',
            middleName: row.cells[4].textContent ?? '',
            givenName: row.cells[5].textContent ?? ''
          });
        }
      }
      return members;
    },
    currentRollNumber: (original) => {
      return original?.querySelector("#ctl00_lblLogIn")?.textContent ?? ''
    }
  });
};
