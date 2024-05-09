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
    return (
      <>
        <div
          className="d-flex flex-column align-items-center justify-content-center "
          style={{ height: "78vh" }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <span className="text-muted fs-6 fw-semibold mt-5">Loading...</span>
        </div>
      </>
    );

  return <div id="kt_content_container">{children}</div>;
};

export { Content };
