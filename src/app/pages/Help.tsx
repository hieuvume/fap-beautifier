import { useState } from "react"
import { usePageDataCustom } from "../../_metronic/layout/core"
import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar"

const Help = () => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})

  const { questions } = usePageDataCustom({
    questions: (original) => {
      if (!original) return []
      const table = original?.querySelectorAll("table")[2] as HTMLTableElement;
      const rows = table?.querySelectorAll("tr");
      const questions: { id: string, question: string }[] = []
      for (let i = 2; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.querySelectorAll("td");
        const question = cells[0].textContent?.trim() || "";
        const answerLink = cells[2].querySelector("a")?.getAttribute("href") || "";
        const id = answerLink.split("=")[1]
        questions.push({ question, id })
      }
      return questions
    }
  })

  const getAnswer = async (id: string) => {
    if (answers[id]) return
    const res = await fetch(`?Id=${id}`)
    const text = await res.text()
    const parser = new DOMParser()
    const doc = parser.parseFromString(text, "text/html")
    const answer = doc.querySelector("#ctl00_mainContent_lblContent")?.innerHTML
    const answerText = answer?.replace(/&nbsp;/g, "")
    const answerText2 = answerText?.replace(/style="margin-left:36pt; margin-right:0cm"/g, "")
    setAnswers(prev => ({ ...prev, [id]: answerText2 } as { [key: string]: string }))
  }

  return (
    <>
      <Toolbar title="FAQ - Help" breadcrum="FAQ" />
      <div className="app-content flex-column-fluid">
        <div className="app-container container-fluid">
          <div className="card">
            <div className="card-body">
              <div className="col-md-6 pe-md-10 mb-10 mb-md-0">
                <h2 className="text-gray-800 fw-bold mb-4">Frequesntly Asked Questions</h2>
                {questions?.map((q, i) => (
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
                        {answers[q.id] ? <div dangerouslySetInnerHTML={{ __html: answers[q.id] }} /> : (
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