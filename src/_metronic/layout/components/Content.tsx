import { FC, useEffect } from "react";
import { useLocation } from "react-router";
import { DrawerComponent } from "../../assets/ts/components";
import { WithChildren } from "../../helpers";
import { usePageData } from "../core";

const Content: FC<WithChildren> = ({ children }) => {
  const { loading } = usePageData();

  const location = useLocation();

  useEffect(() => {
    DrawerComponent.hideAll();
  }, [location]);

  if (
    loading &&
    !(
      (location.pathname.includes("ViewAttendstudent") ||
        location.pathname.includes("StudentGrade")) &&
      location.search.length > 0
    )
  )
    return <></>;

  return <div id="kt_content_container">{children}</div>;
};

export { Content };
