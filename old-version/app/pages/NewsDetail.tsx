import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import { useNewsDetail } from "../hooks/useNewsDetail";

const NewsDetail = () => {
  const { content } = useNewsDetail();

  return (
    <>
      <Toolbar title="News Detail" breadcrum="News Detail" />
      <div className="app-content flex-column-fluid">
        <div className="app-container container-fluid">
          <div className="card">
            <div className="card-body">
              <div dangerouslySetInnerHTML={{ __html: content ?? "" }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
