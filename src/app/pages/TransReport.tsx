import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import { useTransReport } from "../hooks/useTransReport";

const TransReport = () => {
  const {
    loading,
    transReportTable,
    setFromDate,
    setToDate,
    onView,
    onExport,
  } = useTransReport();

  return (
    <>
      <Toolbar title={"Student Transaction"} breadcrum="Transaction" />
      <div className="app-content flex-column-fluid">
        <div className="app-container container-fluid ">
          <div className="card">
            <div className="card-body">
              <div className="mb-10">
                <div className="row">
                  <div className="col-md-4">
                    <label>From Date</label>
                    <input
                      type="date"
                      
                      className="form-control form-control-solid"
                      defaultValue={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label>To Date</label>
                    <input
                      type="date"
                      className="form-control form-control-solid"
                      defaultValue={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 d-flex align-items-end">
                    <button className="btn btn-primary me-3" onClick={onView}>
                      View
                    </button>
                    <button className="btn btn-success" onClick={onExport}>
                      Export
                    </button>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                {loading ? (
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <span className="text-muted fs-6 fw-semibold mt-5">
                      Loading...
                    </span>
                  </div>
                ) : (
                  <>
                    {!transReportTable && (
                      <div className="text-center">
                        <h5>Choose date range to view transaction report</h5>
                      </div>
                    )}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: transReportTable,
                      }}
                    ></div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransReport;
