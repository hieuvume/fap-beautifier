import { FC } from "react";
import { useLocation } from "react-router";
import { checkIsActive } from "../../../helpers";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  title: string;
  icon?: string;
  reload?: boolean;
};

const AsideMenuItem: FC<Props> = ({ to, title, icon, reload }) => {
  const { pathname } = useLocation();
  const isActive = checkIsActive(pathname, to);

  return (
    <Link
      to={to}
      reloadDocument={reload}
      replace
      className={`btn btn-sm d-flex flex-stack border ${
        isActive ? "border-300 bg-gray-100i" : "border-transparent"
      } btn-color-gray-700 btn-active-color-gray-900 px-3 mb-2`}
    >
      <span className="d-flex align-item-center">
        {icon && <i className={`ki-outline fs-4 me-1 ${icon}`} />}
        {title}
      </span>
      {isActive && (
        <i className="ki-outline ki-check fs-4 text-gray-500 me-n2" />
      )}
    </Link>
  );
};

export { AsideMenuItem };
