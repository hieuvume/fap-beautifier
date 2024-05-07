import { FC } from "react";

type Props = {
  presented: number;
  total: number;
};

const AttendanceProgress: FC<Props> = ({ presented, total }) => {
  const getPercentage = () => {
    const percentage = Math.floor((presented / total) * 100);
    return isNaN(percentage) ? 0 : percentage;
  };

  return (
    <div className="vis-group">
      <div className="vis-item vis-range vis-readonly w-150px">
        <div className="vis-item-overflow">
          <div className="vis-item-content">
            <div className="rounded-pill bg-light-primary d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">
              <div
                className="position-absolute rounded-pill d-block bg-primary start-0 top-0 h-100 z-index-1"
                style={{ width: `${getPercentage()}%` }}
              />
              <div className="d-flex align-items-center position-relative z-index-2 ms-3">
                <span className="fw-bold text-dark text-hover-dark">
                  {presented} Present
                </span>
              </div>
              <div className="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">
                {getPercentage()}%
              </div>
            </div>
          </div>
        </div>
        <div className="vis-item-visible-frame" />
      </div>
    </div>
  );
};

export default AttendanceProgress;
