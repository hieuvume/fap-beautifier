import { FC } from "react";
import { Exam } from "../models/Exam";

type Props = {
  exam: Exam;
};

const ExamCard: FC<Props> = ({ exam }) => {
  const calculateTimeLeft = (): string | undefined => {
    const [startTime] = exam.time.split("-");
    const [startHour, startMinute] = startTime.split("h").map(Number);
    const [day, month, year] = exam.date.split("/").map(Number);
    const examDate = new Date(year, month - 1, day, startHour, startMinute);
    const timeRemaining = examDate.getTime() - new Date().getTime();
    if (timeRemaining < 0) {
      return undefined;
    }
    if (timeRemaining > 86400000) {
      const daysLeft = Math.floor(timeRemaining / 86400000);
      return `${daysLeft} ${daysLeft > 1 ? "days" : "day"} left`;
    } else {
      const hoursLeft = Math.floor(timeRemaining / 3600000);
      return `${hoursLeft} ${hoursLeft > 1 ? "hours" : "hour"} left`;
    }
  };

  return (
    <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-4">
      <div className="card card-flush mb-5 mb-xl-10">
        {calculateTimeLeft() !== undefined ? (
          <span className="position-absolute top-0 start-50 translate-middle badge badge-primary">
            {calculateTimeLeft()}
          </span>
        ) : null}

        <div className="card-header pt-5">
          <div className="card-title d-flex flex-column">
            <div className="d-flex align-items-center">
              <span className="fs-2x fw-bold text-gray-900 me-2 lh-1 ls-n2">
                {exam.subjectCode}
              </span>
              <span className="badge badge-light-success fs-base">
                {exam.type}
              </span>
            </div>
            <span className="text-gray-500 pt-1 fw-semibold fs-6">
              {exam.form}
            </span>
          </div>
        </div>
        <div className="card-body pt-2 pb-4 d-flex flex-wrap align-items-center">
          <div className="d-flex flex-column content-justify-center flex-row-fluid">
            <div className="d-flex fw-semibold align-items-center mb-3">
              <div className="bullet w-8px h-3px rounded-2 bg-info me-3" />
              <div className="text-gray-500 flex-grow-1 me-4">Room No</div>
              <div className="fw-bolder text-primary text-xxl-end">
                {exam.room ? exam.room : "Wait for update"}
              </div>
            </div>
            <div className="d-flex fw-semibold align-items-center mb-3">
              <div className="bullet w-8px h-3px rounded-2 bg-success me-3" />
              <div className="text-gray-500 flex-grow-1 me-4">Exam Date</div>
              <div className="fw-bolder text-gray-700 text-xxl-end">
                {exam.date}
              </div>
            </div>
            <div className="d-flex fw-semibold align-items-center mb-3">
              <div className="bullet w-8px h-3px rounded-2 bg-primary me-3" />
              <div className="text-gray-500 flex-grow-1 me-4">Exam Time</div>
              <div className="fw-bolder text-gray-700 text-xxl-end">
                {exam.time.replace("-", " - ")}
              </div>
            </div>
            <div className="d-flex fw-semibold align-items-center">
              <div className="bullet w-8px h-3px rounded-2 bg-danger me-3" />
              <div className="text-gray-500 flex-grow-1 me-4">Public Date</div>
              <div className=" fw-bolder text-gray-700 text-xxl-end">
                {exam.publicDate}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
