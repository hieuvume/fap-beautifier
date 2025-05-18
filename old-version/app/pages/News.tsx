import { Link } from "react-router-dom";
import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import { useNews } from "../hooks/useNews";
import OverlayLoading from "../../_metronic/partials/layout/OverlayLoading";

const News = () => {
  const { news, pagination, loading, onChangePage } = useNews();

  return (
    <>
      <Toolbar title="News" breadcrum="News" />
      <div className="app-content flex-column-fluid">
        <div className="app-container container-fluid">
          <div className={`card ${loading ? "overlay" : ""}`}>
            <div
              className={`card-body ${
                loading ? "overlay-block overlay-wrapper" : ""
              }`}
            >
              {news.map((item, index) => (
                <div className="mb-5" key={index}>
                  <Link
                    to={`/CmsFAP/NewsDetail.aspx?id=${item.id}`}
                    className="fs-5 fw-semibold text-info text-hover-primary"
                  >
                    {item.title}
                  </Link>
                  <div className="d-flex align-items-center fs-6">
                    <div className="text-muted fs-7">
                      Posted at {item.dateTime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="card-footer">
              <ul className="pagination">
                {pagination.map((item, index) => (
                  <li
                    key={index}
                    className={`page-item ${item.active ? "active" : ""} ${
                      item.disabled ? "disabled" : ""
                    }`}
                  >
                    <span
                      onClick={() => {
                        if (!item.disabled && !loading) onChangePage(item.page);
                      }}
                      className="page-link cursor-pointer"
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
              <OverlayLoading show={loading} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
