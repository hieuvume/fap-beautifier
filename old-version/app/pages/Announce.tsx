import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import { useAnnounce } from "../hooks/useAnnounce";

const Announce = () => {
  const { title, content } = useAnnounce()
  return (
    <>
      <Toolbar title={"Thông báo"} breadcrum="Announce" />
      <div className="app-content flex-column-fluid">
        <div className="app-container container-fluid ">
          <div className="card">
            <div className="card-body p-lg-17">
              <div className="text-center mb-15">
                <h3 className="fs-1 text-gray-900 mb-2">{title}</h3>
                <div
                  className="fs-6 text-muted fw-semibold"
                  dangerouslySetInnerHTML={{ __html: content ?? "" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announce;
