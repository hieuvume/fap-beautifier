import { useState } from "react";
import { usePageDataCustom } from "../../_metronic/layout/core";

export const useHelp = () => {
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

  const fetchAnswer = async (id: string) => {
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

  const getAnswer = (id: string) => answers[id] || "Đang tải"

  return {
    questions,
    answers,
    fetchAnswer,
    getAnswer
  }
}