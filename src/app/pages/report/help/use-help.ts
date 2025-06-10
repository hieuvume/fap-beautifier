import { useEffect, useState } from "react";
import { useFapData } from "@/app/providers/fap-data-provider";
import { useIntl } from 'react-intl';
import { HelpAnswers, HelpQuestion } from "./types";

export const useHelp = () => {
  const intl = useIntl();
  const [questions, setQuestions] = useState<HelpQuestion[]>([]);
  const [answers, setAnswers] = useState<HelpAnswers>({});
  const { getData, loading } = useFapData();

  // Extract questions from FAP document - moved to useEffect
  useEffect(() => {
    const extractQuestions = (): HelpQuestion[] => {
      const fapDocument = getData();
      if (!fapDocument) return [];
      
      try {
        const table = fapDocument.querySelectorAll("table")[2] as HTMLTableElement;
        if (!table) return [];
        
        const rows = table.querySelectorAll("tr");
        const questions: HelpQuestion[] = [];
        
        for (let i = 2; i < rows.length; i++) {
          const row = rows[i];
          const cells = row.querySelectorAll("td");
          
          if (cells.length >= 3) {
            const question = cells[0].textContent?.trim() || "";
            const answerLink = cells[2].querySelector("a")?.getAttribute("href") || "";
            const id = answerLink.split("=")[1];
            
            if (question && id) {
              questions.push({ question, id });
            }
          }
        }
        
        return questions;
      } catch (error) {
        console.error("Error extracting help questions:", error);
        return [];
      }
    };

    setQuestions(extractQuestions());
  }, [getData]);

  // Fetch the answer for a specific question
  const fetchAnswer = async (id: string) => {
    if (answers[id]) return;
    
    try {
      const res = await fetch(`?Id=${id}`);
      const text = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");
      
      const answerElement = doc.querySelector("#ctl00_mainContent_lblContent");
      if (!answerElement) {
        setAnswers(prev => ({ ...prev, [id]: "" }));
        return;
      }
      
      let answerText = answerElement.innerHTML || "";
      // Clean up common HTML formatting issues
      answerText = answerText.replace(/&nbsp;/g, " ");
      answerText = answerText.replace(/style="[^"]*"/g, "");
      
      // Sanitize HTML content
      const sanitizedText = sanitizeHtml(answerText);
      setAnswers(prev => ({ ...prev, [id]: sanitizedText }));
    } catch (error) {
      console.error(`Error fetching answer for question ${id}:`, error);
      setAnswers(prev => ({ ...prev, [id]: intl.formatMessage({ id: 'HELP.ERROR.LOADING_CONTENT' }) }));
    }
  };

  // More robust HTML sanitizer
  const sanitizeHtml = (html: string): string => {
    if (!html || typeof html !== 'string') return "";
    
    try {
      // Create a new DOMParser to safely parse HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Remove potentially dangerous elements
      const dangerousElements = doc.querySelectorAll('script, iframe, object, embed, form, style');
      dangerousElements.forEach(el => el.remove());
      
      // Remove on* attributes from all elements
      const allElements = doc.querySelectorAll('*');
      allElements.forEach(el => {
        const attrs = el.attributes;
        for (let i = attrs.length - 1; i >= 0; i--) {
          const attrName = attrs[i].name;
          if (attrName.startsWith('on') || attrName === 'href' && attrs[i].value.startsWith('javascript:')) {
            el.removeAttribute(attrName);
          }
        }
      });
      
      // Get the sanitized content
      return doc.body.innerHTML;
    } catch (error) {
      console.error("Error sanitizing HTML:", error);
      return "";
    }
  };

  // Get the answer for a specific question
  const getAnswer = (id: string): string => {
    const answer = answers[id];
    return answer !== undefined ? answer : "";
  };
  
  // Track if an answer is loading
  const isAnswerLoading = (id: string): boolean => {
    return !answers[id];
  };

  return {
    questions,
    answers,
    fetchAnswer,
    getAnswer,
    isAnswerLoading,
    loading
  };
}; 