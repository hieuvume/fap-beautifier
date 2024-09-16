import { useState } from "react";
import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import { useDoFeedback } from "../hooks/useDoFeedback";
import { Link } from "react-router-dom";

const DoFeedback = () => {
  const {
    viewStateValue,
    viewStateGeneratorValue,
    eventValidationValue,
    className,
    month,
    subjectName,
    teacherName,
  } = useDoFeedback();
  const [punctuality, setPunctuality] = useState(4);
  const [teachingSkills, setTeachingSkills] = useState(4);
  const [coverage, setCoverage] = useState(4);
  const [support, setSupport] = useState(4);
  const [response, setResponse] = useState(4);
  const [reviews, setReviews] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    setLoading(true);
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        __EVENTARGUMENT: "",
        __LASTFOCUS: "",
        __VIEWSTATE: viewStateValue,
        __VIEWSTATEGENERATOR: viewStateGeneratorValue,
        __EVENTVALIDATION: eventValidationValue,
        ctl00$mainContent$reload$ctl00$chkList: `${punctuality}`,
        ctl00$mainContent$reload$ctl01$chkList: `${teachingSkills}`,
        ctl00$mainContent$reload$ctl02$chkList: `${coverage}`,
        ctl00$mainContent$reload$ctl03$chkList: `${support}`,
        ctl00$mainContent$reload$ctl04$chkList: `${response}`,
        ctl00$mainContent$txtComment: reviews,
        ctl00$mainContent$btSendFeedback: "Send Feedback",
      }).toString(),
    })
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, "text/html");
        const message = htmlDoc.querySelector("#ctl00_mainContent_lblMege");
        if (message) {
          setMessage(message.textContent ?? "Has error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Has error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Toolbar title="Feedback for teacher" breadcrum="Do feedback" />
      <div className="app-content flex-column-fluid">
        <div className="app-container container-fluid">
          <Link
            to="/Feedback/StudentFeedback.aspx"
            className="btn btn-sm btn-primary mb-5"
          >
            Back to feedback list
          </Link>
          <div className="card mb-5">
            <div className="card-body">
              <h4 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-gray-900">
                  Feedback for teacher
                </span>
              </h4>
              <div className="d-flex flex-wrap py-2">
                <div className="me-5">
                  <span className="text-gray-500 fw-bold fs-7">Class:</span>
                  <span className="text-gray-900 fw-bold fs-7 ms-1">
                    {className}
                  </span>
                </div>
                <div className="me-5">
                  <span className="text-gray-500 fw-bold fs-7">Month:</span>
                  <span className="text-gray-900 fw-bold fs-7 ms-1">
                    {month}
                  </span>
                </div>
                <div className="me-5">
                  <span className="text-gray-500 fw-bold fs-7">Subject:</span>
                  <span className="text-gray-900 fw-bold fs-7 ms-1">
                    {subjectName}
                  </span>
                </div>
                <div className="me-5">
                  <span className="text-gray-500 fw-bold fs-7">Teacher:</span>
                  <span className="text-gray-900 fw-bold fs-7 ms-1">
                    {teacherName}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-flush h-xl-100 mb-5">
            <div className="card-header pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-gray-900">
                  Regarding the teacher's punctuality
                </span>
                <span className="text-gray-500 mt-1 fw-semibold fs-7">
                  (Sự đúng giờ của giảng viên trong giờ học)
                </span>
              </h3>
            </div>
            <div className="card-body pt-3">
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="punctuality"
                  id="punctuality1"
                  defaultValue={4}
                  defaultChecked
                  onChange={(e) => setPunctuality(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="punctuality1">
                  Always punctual (Luôn đúng giờ)
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="punctuality"
                  id="punctuality2"
                  defaultValue={3}
                  onChange={(e) => setPunctuality(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="punctuality2">
                  Mostly punctual (Phần lớn đúng giờ)
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="punctuality"
                  id="punctuality3"
                  defaultValue={2}
                  onChange={(e) => setPunctuality(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="punctuality3">
                  Rarely punctual (Ít khi đúng giờ)
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="punctuality"
                  id="punctuality4"
                  defaultValue={1}
                  onChange={(e) => setPunctuality(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="punctuality4">
                  Not at all punctual (Không bao giờ đúng giờ)
                </label>
              </div>
            </div>
          </div>
          <div className="card card-flush h-xl-100 mb-5">
            <div className="card-header pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-gray-900">
                  Teaching skills of teacher
                </span>
                <span className="text-gray-500 mt-1 fw-semibold fs-7">
                  (Kỹ năng sư phạm của giảng viên)
                </span>
              </h3>
            </div>
            <div className="card-body pt-3">
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="teaching_skills"
                  id="teaching_skills1"
                  defaultValue={4}
                  defaultChecked
                  onChange={(e) => setTeachingSkills(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="teaching_skills1">
                  Very Good (Tốt)
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="teaching_skills"
                  id="teaching_skills2"
                  defaultValue={3}
                  onChange={(e) => setTeachingSkills(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="teaching_skills2">
                  Good (Khá)
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="teaching_skills"
                  id="teaching_skills3"
                  defaultValue={2}
                  onChange={(e) => setTeachingSkills(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="teaching_skills3">
                  Average (Trung bình)
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="teaching_skills"
                  id="teaching_skills4"
                  defaultValue={1}
                  onChange={(e) => setTeachingSkills(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="teaching_skills4">
                  Poor (Kém)
                </label>
              </div>
            </div>
          </div>
          <div className="card card-flush h-xl-100 mb-5">
            <div className="card-header pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-gray-900">
                  The teacher adequately covers the topics required by the
                  syllabus
                </span>
                <span className="text-gray-500 mt-1 fw-semibold fs-7">
                  (Đảm bảo khối lượng môn học theo chương trình)
                </span>
              </h3>
            </div>
            <div className="card-body pt-3">
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="coverage"
                  id="coverage1"
                  defaultValue={4}
                  defaultChecked
                  onChange={(e) => setCoverage(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="coverage1">
                  Fully covered (Đảm bảo hoàn toàn)
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="coverage"
                  id="coverage2"
                  defaultValue={3}
                  onChange={(e) => setCoverage(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="coverage2">
                  Mostly covered (Đảm bảo phần lớn)
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="coverage"
                  id="coverage3"
                  defaultValue={2}
                  onChange={(e) => setCoverage(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="coverage3">
                  Partially covered (Chỉ đảm bảo một phần)
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="coverage"
                  id="coverage4"
                  defaultValue={1}
                  onChange={(e) => setCoverage(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="coverage4">
                  Not at all covered (Không đảm bảo)
                </label>
              </div>
            </div>
          </div>
          <div className="card card-flush h-xl-100 mb-5">
            <div className="card-header pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-gray-900">
                  Support from the teacher - guidance for practical exercises,
                  answering questions outside of class
                </span>
                <span className="text-gray-500 mt-1 fw-semibold fs-7">
                  (Hỗ trợ của giảng viên trong và ngoài giờ - trả lời Email,
                  hướng dẫn thực hành, giải đáp thắc mắc…)
                </span>
              </h3>
            </div>
            <div className="card-body pt-3">
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="support"
                  id="support1"
                  defaultValue={4}
                  defaultChecked
                  onChange={(e) => setSupport(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="support1">
                  Very Good (Tốt)
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="support"
                  id="support2"
                  defaultValue={3}
                  onChange={(e) => setSupport(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="support2">
                  Good (Khá)
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="support"
                  id="support3"
                  defaultValue={2}
                  onChange={(e) => setSupport(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="support3">
                  Average (Trung bình)
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="support"
                  id="support4"
                  defaultValue={1}
                  onChange={(e) => setSupport(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="support4">
                  Poor (Kém)
                </label>
              </div>
            </div>
          </div>
          <div className="card card-flush h-xl-100 mb-5">
            <div className="card-header pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-gray-900">
                  Teacher's response to student's questions in class
                </span>
                <span className="text-gray-500 mt-1 fw-semibold fs-7">
                  (Đáp ứng của giảng viên về những thắc mắc của học viên trong
                  giờ học)
                </span>
              </h3>
            </div>
            <div className="card-body pt-3">
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="response"
                  id="response1"
                  defaultValue={4}
                  defaultChecked
                  onChange={(e) => setResponse(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="response1">
                  Answered immediately or just after the session (Trả lời ngay
                  hoặc trả lời vào cuối buổi học)
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="response"
                  id="response2"
                  defaultValue={3}
                  onChange={(e) => setResponse(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="response2">
                  Answered in the next session (Trả lời vào buổi học sau)
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="response"
                  id="response3"
                  defaultValue={2}
                  onChange={(e) => setResponse(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="response3">
                  Some queries left unanswered (Một số câu hỏi không được trả
                  lời)
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="response"
                  id="response4"
                  defaultValue={1}
                  onChange={(e) => setResponse(Number(e.target.value))}
                />
                <label className="form-check-label" htmlFor="response4">
                  Most queries left unanswered (Phần lớn câu hỏi không được trả
                  lời)
                </label>
              </div>
            </div>
          </div>

          <div className="card card-flush h-xl-100 mb-5">
            <div className="card-header pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-gray-900">
                  Your reviews
                </span>
                <span className="text-gray-500 mt-1 fw-semibold fs-7">
                  Ý kiến riêng của bạn về giáo viên
                </span>
              </h3>
            </div>
            <div className="card-body pt-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="Please enter your reviews here"
                defaultValue={""}
                onChange={(e) => setReviews(e.target.value)}
              />
            </div>
          </div>
          {message && <div className="alert alert-danger">{message}</div>}
          <button
            type="button"
            className="btn btn-primary"
            disabled={loading}
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default DoFeedback;
