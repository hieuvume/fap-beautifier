import { FC, useState } from "react";
import { Modal } from "react-bootstrap";
import { Shift } from "../models/WeeklyTimeable";
import { calendar } from "../services/ApiCalendar";

type Props = {
  shifts: Shift[];
  show?: boolean;
  onHide: () => void;
};

const ImportCalendarModal: FC<Props> = ({ shifts, show, onHide }) => {
  const [logged, setLogged] = useState(false);
  const [message, setMessage] = useState("");
  const handleSignin = () => {
    calendar
      .handleAuthClick()
      .then(() => {
        setLogged(true);
      })
      .catch((error) => {
        console.log(error);
        setLogged(false);
        setMessage("Error when sign in");
      });
  };

  const handleImport = () => {
    const eventData: any = {
      summary: "SDN301m",
      description:
        "Server-Side development with NodeJS, Express, and MongoDB(SDN301m)",
      location: "DE-C405",
      start: {
        dateTime: new Date().toISOString(),
        timeZone: "Asia/Ho_Chi_Minh",
      },
      end: {
        dateTime: new Date(new Date().getTime() + 60 * 60 * 1000).toISOString(),
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
    // calendar.createEvent(eventData).then((result) => {
    //   console.log('');
    // })
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Import to Google Calendar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message && <div className="alert alert-danger">{message}</div>}
        {!logged ? (
          <>
            You need to sign in to your Google Account to import the calendar.
            <div className="d-flex justify-content-center mt-5">
              <button onClick={handleSignin} className="btn btn-primary">
                Sign in with Google
              </button>
            </div>
          </>
        ) : (
          <>
            {/* check list of shifts */}
            <button className="btn btn-primary">Import now</button>
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
