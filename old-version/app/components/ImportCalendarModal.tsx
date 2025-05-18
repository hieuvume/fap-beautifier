import { FC, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { toAbsoluteUrl } from "../../_metronic/helpers";
import { Shift } from "../models/WeeklyTimeable";
import { addEvent, getCurrentWeekEvents } from "../services/ApiCalendar";

type Props = {
  shifts: Shift[];
  show?: boolean;
  onHide: () => void;
};

const ImportCalendarModal: FC<Props> = ({ shifts, show, onHide }) => {
  const [logged, setLogged] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [importing, setImporting] = useState(false);
  const [message, setMessage] = useState<
    { status: boolean; message: string } | undefined
  >(undefined);
  const [exceptedShifts, setExceptedShifts] = useState<Shift[]>([]);

  useEffect(() => {}, []);

  const handleSignin = () => {
    chrome.runtime.sendMessage({ type: "SIGN_IN" }, (response) => {
      setLogged(true);
      setAccessToken(response.token);
    });
  };

  const handleImport = async () => {
    const importShifts = shifts.filter(
      (shift) => !exceptedShifts.some((s) => s.activityId === shift.activityId)
    );

    if (!accessToken) {
      setMessage({
        status: false,
        message:
          "You need to sign in to your Google Account to import the calendar.",
      });
      return;
    }

    if (importShifts.length === 0) {
      setMessage({
        status: false,
        message: "Please select at least one shift to import.",
      });
      return;
    }

    setImporting(true);

    try {
      const events = await getCurrentWeekEvents(accessToken, "primary");

      const filteredShifts = importShifts.filter((shift) => {
        return !events.data.items.some((event: any) => {
          return event.description.includes(`#${shift.activityId}`);
        });
      });

      const listEvents = filteredShifts.map((shift) => {
        return {
          summary: shift.courseName,
          description: `[#${shift.activityId}] ${shift.courseName} ${shift.time} at room ${shift.room}`,
          location: shift.room,
          start: {
            dateTime: shift.dateTime.start,
            timeZone: "Asia/Ho_Chi_Minh",
          },
          end: {
            dateTime: shift.dateTime.end,
            timeZone: "Asia/Ho_Chi_Minh",
          },
          reminders: {
            useDefault: false,
            overrides: [
              { method: "email", minutes: 24 * 60 },
              { method: "popup", minutes: 10 },
            ],
          },
        };
      });
      for (let i = 0; i < listEvents.length; i++) {
        await addEvent(accessToken, "primary", listEvents[i]);
      }
    } catch (error) {
      setMessage({
        status: false,
        message: "An error occurred while importing the calendar.",
      });
      console.error(error);
    } finally {
      setImporting(false);
      setMessage({
        status: true,
        message: "Imported successfully.",
      });
    }
  };

  const getDateFormat = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
    });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Import to Google Calendar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message && (
          <div
            className={`alert alert-${message.status ? "success" : "danger"}`}
          >
            {message.message}
          </div>
        )}
        {!logged ? (
          <>
            You need to sign in to your Google Account to import the calendar.
            <div className="d-flex justify-content-center my-5">
              <button
                onClick={handleSignin}
                className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
              >
                <img
                  alt="Logo"
                  src={toAbsoluteUrl("assets/media/svg/google-icon.svg")}
                  className="h-15px me-3"
                />
                Sign in with Google
              </button>
            </div>
          </>
        ) : (
          <>
            Choose the calendar you want to import to:
            <div>
              {shifts.map((shift, index) => (
                <div key={index} className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    defaultChecked
                    id={`shift_${shift.activityId}`}
                    onClick={(e) => {
                      if (e.currentTarget.checked) {
                        setExceptedShifts(
                          exceptedShifts.filter(
                            (s) => s.activityId !== shift.activityId
                          )
                        );
                      } else {
                        setExceptedShifts([...exceptedShifts, shift]);
                      }
                    }}
                  />
                  <label
                    className="form-check-label fw-semibold"
                    htmlFor={`shift_${shift.activityId}`}
                  >
                    {shift.courseName} {shift.time} -{" "}
                    {getDateFormat(shift.dateTime.start)} [{shift.room}]
                  </label>
                </div>
              ))}

              <div className="d-flex justify-content-center my-5">
                <button
                  disabled={importing}
                  onClick={handleImport}
                  className="btn btn-flex btn-primary flex-center text-nowrap w-100"
                >
                  {importing ? "Importing..." : "Import"}
                </button>
              </div>
            </div>
          </>
        )}
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

export default ImportCalendarModal;
