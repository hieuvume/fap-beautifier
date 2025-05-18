import { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  code: string;
  group: string;
  date: string;
  endDate?: string;
  active: boolean;
  link: string;
  onClick: () => void;
};
const CourseTab: FC<Props> = ({
  name,
  code,
  group,
  date,
  endDate,
  link,
  active,
  onClick,
}) => {
  const getColorByChar = () => {
    const colors = ["info", "success", "danger", "primary", "warning"];
    const char = code.charAt(0).toLowerCase();
    const index = char.charCodeAt(0) % colors.length;
    return colors[index] ?? "primary";
  };

  return (
    <div className="d-flex flex-stack">
      <div className="symbol symbol-40px me-4">
        <div
          className={`symbol-label fs-2 fw-semibold bg-${getColorByChar()} text-inverse-${getColorByChar()}`}
        >
          {code.charAt(0)}
        </div>
      </div>
      <div className="d-flex align-items-center flex-row-fluid flex-wrap">
        <Link
          to={link}
          onClick={(e) => {
            if (!link) {
              e.preventDefault();
            }
          }}
          className="flex-grow-1 me-2"
        >
          <span
            className={`${
              active ? "text-primary" : "text-gray-800"
            } text-hover-primary fs-6 fw-bold cursor-pointer `}
          >
            {name} ({code})
          </span>
          <span className="text-muted fw-semibold d-block fs-7">
            {endDate ? (
              <>
                {group} ({date} - {endDate})
              </>
            ) : (
              <>
                {group} - {date}
              </>
            )}
          </span>
        </Link>
        {/* <button
          type="button"
          onClick={onClick}
          className={`btn btn-sm btn-icon btn-bg-light ${
            active ? "btn-color-primary" : "btn-active-color-primary"
          } w-30px h-30px`}
        >
          <i className="ki-outline ki-arrow-right fs-2" />{" "}
        </button> */}
      </div>
    </div>
  );
};

export default CourseTab;
