import { FC, useEffect } from "react";
import { useLocation } from "react-router";
import { DrawerComponent } from "../../assets/ts/components";
import { WithChildren } from "../../helpers";
import { useLayout } from "../core";

const Content: FC<WithChildren> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    DrawerComponent.hideAll();
  }, [location]);

  return <div id="kt_content_container">{children}</div>;
};

export { Content };
