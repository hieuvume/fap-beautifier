import { FC } from "react";
import { AttendanceReportShift } from "../models/Attendance";

type Props = {
  shift: AttendanceReportShift;
};
const AttendanceShift: FC<Props> = ({ shift }) => {
  const getStatusColor = (status: string, colorWeight?: number) => {
    switch (status) {
      case "Future":
        return `gray-${colorWeight ?? 500}`;
      case "Present":
        return "success";
      case "Absent":
        return "danger";
      default:
        return `gray-${colorWeight ?? 500}`;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Present":
        return "check";
      case "Absent":
        return "cross";
      default:
        return "right";
    }
  };

  return (
    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
      <div
        className={`border border-${getStatusColor(
          shift.status,
          300
        )} border-dashed rounded py-2 px-4`}
      >
        <div className="fs-6 text-gray-700 fw-bold mb-1">
          {shift.day} - {shift.date}
        </div>
        <div className="d-flex flex-wrap">
          <div className="d-flex flex-column flex-shrink-0 me-4">
            <span className="d-flex align-items-center fs-7 fw-bold text-gray-500 mb-1">
              <i className="ki-outline ki-user-square fs-6 text-gray-600 me-1" />{" "}
              {shift.lecturer}
            </span>
            <span className="d-flex align-items-center text-gray-500 fw-bold fs-7">
              <i className="ki-outline ki-book-square fs-6 text-gray-600 me-1" />{" "}
              {shift.room}
            </span>
          </div>
          <div className="d-flex flex-column flex-shrink-0">
            <span className="d-flex align-items-center fs-7 fw-bold text-gray-500 mb-1">
              <i className="ki-outline ki-right-square fs-6 text-gray-600 me-1" />{" "}
              {shift.time}
            </span>
            <span
              className={`d-flex align-items-center text-${getStatusColor(
                shift.status
              )} fw-bold fs-7`}
            >
              <i
                className={`ki-outline ki-${getStatusIcon(
                  shift.status
                )}-square fs-6 me-1`}
              />{" "}
              {shift.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceShift;
