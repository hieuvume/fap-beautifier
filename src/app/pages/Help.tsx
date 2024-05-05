import { useEffect, useState } from "react"

declare global {
  interface Window {
    _data: Element;
  }
}

const Help = () => {
  const [questions, setQuestions] = useState<{ id: string, question: string, answer?: string }[]>([])

  useEffect(() => {
    if (!window._data) return
    const table = window._data?.querySelectorAll("table")[2] as HTMLTableElement;
    const rows = table?.querySelectorAll("tr");
    for (let i = 2; i < rows.length; i++) {
      const row = rows[i];
      const cells = row.querySelectorAll("td");
      const question = cells[0].textContent?.trim() || "";
      const answerLink = cells[2].querySelector("a")?.getAttribute("href") || "";
      const id = answerLink.split("=")[1]
      setQuestions(prev => [...prev, { question, id }])
    }
  }, [])

  const getAnswer = async (id: string) => {
    if (questions.find(q => q.id == id)?.answer) return
    const res = await fetch(`?Id=${id}`)
    const text = await res.text()
    const parser = new DOMParser()
    const doc = parser.parseFromString(text, "text/html")
    const answer = doc.querySelector("#ctl00_mainContent_lblContent")?.innerHTML
    // remove all &nbsp; from the answer
    const answerText = answer?.replace(/&nbsp;/g, "")
    // remove all style="margin-left:36pt; margin-right:0cm" from the answer
    const answerText2 = answerText?.replace(/style="margin-left:36pt; margin-right:0cm"/g, "")
    setQuestions(prev => prev.map(q => q.id == id ? { ...q, answer: answerText2 } : q))
  }

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
                FAQ Help
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
                <li className="breadcrumb-item text-muted">FAQ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="app-content flex-column-fluid">
        <div className="app-container  container-fluid ">
          <div className="card">
            <div className="card-body">
              <div className="col-md-6 pe-md-10 mb-10 mb-md-0">
                <h2 className="text-gray-800 fw-bold mb-4">Frequesntly Asked Questions</h2>
                {questions.map((q, i) => (
                  <div className="m-0" key={i}>
                    <div
                      className="d-flex align-items-center collapsible py-3 toggle mb-0 collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target={`#kt_question_${i}`}
                      aria-expanded="false"
                      onClick={() => getAnswer(q.id)}
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
                        {q.answer ? <div dangerouslySetInnerHTML={{ __html: q.answer }} /> : (
                          <>
                            Đang tải
                          </>
                        )}
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