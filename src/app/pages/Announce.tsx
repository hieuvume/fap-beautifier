import useData from "../hooks/useData";

const Announce = () => {
  const { data } = useData({
    title: (original) => {
      const titleElement = original?.querySelector(
        "table tbody tr:first-child td div center span"
      ) as HTMLElement;
      return titleElement?.textContent?.trim() || "";
    },
    content: (original) => {
      const contentElement = original?.querySelector(
        "table tbody tr:first-child td div span:nth-child(2)"
      ) as HTMLElement;
      return contentElement?.innerHTML;
    },
  });

  return (
    <>
      <div id="kt_app_toolbar" className="app-toolbar  pt-10 mb-0 ">
        {/*begin::Toolbar container*/}
        <div
          id="kt_app_toolbar_container"
          className="app-container  container-fluid d-flex align-items-stretch "
        >
          <div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
            <div className="page-title d-flex flex-column justify-content-center gap-1 me-3">
              <h1 className="page-heading d-flex flex-column justify-content-center text-gray-900 fw-bold fs-3 m-0">
                Thông báo
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
                <li className="breadcrumb-item text-muted">Thông báo </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="app-content flex-column-fluid">
        <div className="app-container  container-fluid ">
          <div className="card">
            <div className="card-body p-lg-17">
              <div className="text-center mb-15">
                <h3 className="fs-2x text-gray-900 mb-2">{data.title}</h3>
                <div
                  className="fs-5 text-muted fw-semibold"
                  dangerouslySetInnerHTML={{ __html: data.content ?? "" }}
                ></div>

                <a href="/Student.aspx" className="btn btn-primary mt-8">
                  Về trang chủ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announce;
