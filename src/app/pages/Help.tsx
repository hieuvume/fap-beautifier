import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar"
import { useHelp } from "../hooks/useHelp"

const Help = () => {
  const { questions, fetchAnswer, getAnswer } = useHelp()

  return (
    <>
      <Toolbar title="FAQ - Help" breadcrum="FAQ" />
      <div className="app-content flex-column-fluid">
        <div className="app-container container-fluid">
          <div className="card">
            <div className="card-body">
              <div className="col-md-12 pe-md-10 mb-10 mb-md-0">
                <h2 className="text-gray-800 fw-bold mb-4">Frequesntly Asked Questions</h2>
                {questions?.map((q, i) => (
                  <div className="m-0" key={i}>
                    <div
                      className="d-flex align-items-center collapsible py-3 toggle mb-0 collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target={`#kt_question_${i}`}
                      aria-expanded="false"
                      onClick={() => fetchAnswer(q.id)}
                    >
                      <div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                        <i className="ki-outline ki-minus-square toggle-on text-primary fs-1" />
                        <i className="ki-outline ki-plus-square toggle-off fs-1" />
                      </div>
                      <h4 className="text-gray-700 fw-bold cursor-pointer mb-0">
                        {q.question}
                      </h4>
                    </div>
                    <div id={`kt_question_${i}`} className="fs-6 ms-1 collapse" style={{}}>
                      <div className="mb-4 text-gray-600 fw-semibold fs-6 ps-10">
                        <div dangerouslySetInnerHTML={{ __html: getAnswer(q.id) }} />
                      </div>
                    </div>
                    <div className="separator separator-dashed" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Help