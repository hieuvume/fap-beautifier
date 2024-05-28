import { FC, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {
  activityId?: number;
  activityState?: number
  show?: boolean;
  onHide: () => void;
};

type ShiftDetail = {
  date?: string;
  slot?: string;
  studentGroup: {
    name?: string;
    link?: string;
  };
  instructor: {
    name?: string;
    link?: string;
  };
  meetURL: string;
  course?: string;
  campus?: string;
  attendance?: string;
  recordTime?: string;
};

const ShiftModal: FC<Props> = ({ activityId, activityState, show, onHide }) => {
  const [data, setData] = useState<ShiftDetail | undefined>(undefined);
  useEffect(() => {
    if (activityId) {
      fetch(`/Schedule/ActivityDetail.aspx?id=${activityId}`)
        .then((res) => res.text())
        .then((html) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          if (doc) {
            const table = doc.querySelector("#ctl00_mainContent_divContent");
            if (table) {
              const rows = table.querySelectorAll("tr");

              setData({
                date:
                  rows[0]?.querySelector("td:nth-child(2)")?.textContent ?? "",
                slot:
                  rows[1]?.querySelector("td:nth-child(2)")?.textContent ?? "",
                studentGroup: {
                  name:
                    rows[2]?.querySelector("td:nth-child(2)")?.textContent ??
                    "",
                  link:
                    rows[2]
                      ?.querySelector("td:nth-child(2)")
                      ?.querySelector("a")
                      ?.getAttribute("href") ?? "",
                },
                instructor: {
                  name:
                    rows[3]
                      ?.querySelector("td:nth-child(2)")
                      ?.querySelector("a")?.textContent ?? "",
                  link:
                    rows[3]
                      ?.querySelector("td:nth-child(2)")
                      ?.querySelector("a")
                      ?.getAttribute("href") ?? "",
                },
                meetURL:
                  rows[3]
                    ?.querySelector("td:nth-child(2)")
                    ?.querySelector("a:nth-child(2)")
                    ?.getAttribute("href") ?? "",
                course:
                  rows[4]?.querySelector("td:nth-child(2)")?.textContent ?? "",
                campus:
                  rows[8]?.querySelector("td:nth-child(2)")?.textContent ?? "",
                attendance:
                  rows[9]?.querySelector("td:nth-child(2)")?.textContent ?? "",
                recordTime:
                  rows[11]?.querySelector("td:nth-child(2)")?.textContent ?? "",
              } as ShiftDetail);
            }
          }
        });
    }
  }, [activityId]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Activity Detail #{activityId}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0">
        <div className="table-responsive">
          <table className="table table-row-dashed table-row-gray-300 gy-5">
            <tbody>
              <tr>
                <th className="fw-semibold">Date</th>
                <td>{data?.date}</td>
              </tr>
              <tr>
                <th className="fw-semibold">Slot</th>
                <td>Slot {data?.slot}</td>
              </tr>
              <tr>
                <th className="fw-semibold">Student group</th>
                <td>
                  <a
                    href={data?.studentGroup?.link ?? ""}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="badge badge-light-primary">
                      {data?.studentGroup?.name}
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <th className="fw-semibold">Instructor</th>
                <td>
                  <span className="badge badge-light-primary">
                    {data?.instructor?.name?.toUpperCase()}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="fw-semibold">Course</th>
                <td>{data?.course}</td>
              </tr>
              <tr>
                <th className="fw-semibold">Meet URL</th>
                <td>
                  <a
                    href={data?.meetURL ?? ""}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="badge badge-light-success">
                      Google Meet
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <th className="fw-semibold">Attendance</th>
                <td>
                  <span
                    className={`fw-semibold text-${
                      activityState === 0
                        ? "info"
                        : activityState === 2
                        ? "danger"
                        : "success"
                    }`}
                  >
                    {activityState === 0 ? 'NOT YET' : (activityState === 1 ? 'ATTENDED' : 'ABSENT')}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="fw-semibold">Record time</th>
                <td>{data?.recordTime}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onHide}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default ShiftModal;
