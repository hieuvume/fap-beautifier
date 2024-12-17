import { FC } from "react";

type Props = {
  title: string;
  breadcrum: string;
  EOSDownloadLink?: string | null;
};
const Toolbar: FC<Props> = ({ title, breadcrum, EOSDownloadLink }) => {
  return (
    <div id="kt_app_toolbar" className="app-toolbar pt-10 mb-0">
      <div
        id="kt_app_toolbar_container"
        className="app-container  container-fluid d-flex align-items-stretch "
      >
        <div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
          <div className="page-title d-flex flex-column justify-content-center gap-1 me-3">
            <h1 className="page-heading d-flex flex-column justify-content-center text-gray-900 fw-bold fs-3 m-0">
              {title}
            </h1>
            <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0">
              <li className="breadcrumb-item text-muted">
                <a
                  href="/Student.aspx"
                  className="text-muted text-hover-primary"
                >
                  Home{" "}
                </a>
              </li>
              <li className="breadcrumb-item">
                <span className="bullet bg-gray-500 w-5px h-2px" />
              </li>
              <li className="breadcrumb-item text-muted">{breadcrum}</li>
            </ul>
          </div>

          {EOSDownloadLink && (
            <div className="d-flex align-items-center gap-2 gap-lg-3">
              <a
                href={EOSDownloadLink}
                className="btn btn-sm fw-bold btn-primary"
              >
                Download EOSClient
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
