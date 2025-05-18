import { Link } from "react-router-dom";
import { useFastNews } from "../hooks/useFastNews";
import OverlayLoading from "../../_metronic/partials/layout/OverlayLoading";

const FastNews = () => {
  const { news, loading } = useFastNews();
  return (
    <div
      className={`card card-flush h-xl-100 ${
        loading ? "overlay overlay-block overlay-wrapper" : ""
      }`}
    >
      <div className="card-header pt-7">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold text-gray-900">Fast news</span>
        </h3>
        <div className="card-toolbar">
          <Link to="/CmsFAP/PlusNews.aspx" className="btn btn-sm btn-light">
            View All
          </Link>
        </div>
      </div>
      <div className="card-body">
        {news.map((item, index) => (
          <div className="mb-5" key={index}>
            <Link
              to={`/CmsFAP/NewsDetail.aspx?id=${item.id}`}
              className="fs-5 fw-semibold text-info text-hover-primary"
            >
              {item.title}
            </Link>
            <div className="d-flex align-items-center fs-6">
              <div className="text-muted fs-7">Posted at {item.dateTime}</div>
            </div>
          </div>
        ))}
      </div>
      <OverlayLoading show={loading} />
    </div>
  );
};

export default FastNews;
