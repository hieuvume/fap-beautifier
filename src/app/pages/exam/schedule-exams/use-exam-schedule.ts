import { useState, useEffect, useMemo } from 'react';
import { useFapData } from '@/app/providers/fap-data-provider';
import { Exam, ExamStatus, GroupedExams } from './types';

export const useExamSchedule = () => {
  const { getData, loading: fapLoading } = useFapData();
  const [exams, setExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);

  // Extract exams from FAP document
  useEffect(() => {
    const extractExams = (): Exam[] => {
      const fapDocument = getData();
      if (!fapDocument) return [];
      
      try {
        const table = fapDocument.querySelector("#ctl00_mainContent_divContent table") as HTMLTableElement;
        if (!table) return [];
        
        const rows = table.querySelectorAll("tr");
        const exams: Exam[] = [];
        
        for (let i = 1; i < rows.length; i++) {
          const row = rows[i];
          const cells = row.querySelectorAll("td");
          
          if (cells.length >= 9) {
            const subjectCode = cells[1].textContent?.trim() || "";
            const subjectName = cells[2].textContent?.trim() || "";
            const date = cells[3].textContent?.trim() || "";
            const room = cells[4].textContent?.trim() || "";
            const time = cells[5].textContent?.trim() || "";
            const form = cells[6].textContent?.trim() || "";
            const type = cells[7].textContent?.trim() || "";
            const publicDate = cells[8].textContent?.trim() || "";
            
            // Calculate exam status
            const status = calculateExamStatus(date, time);
            
            exams.push({
              id: `${subjectCode}-${date.replace(/\//g, '')}-${time.replace(/[h:-]/g, '')}`,
              subjectCode,
              subjectName,
              date,
              room,
              time,
              form,
              type,
              publicDate,
              status,
              timeRemaining: calculateTimeRemaining(date, time)
            });
          }
        }
        
        // Sort exams by date and time
        return exams.sort((a, b) => {
          // Convert date strings to Date objects for comparison
          const [dayA, monthA, yearA] = a.date.split('/').map(Number);
          const [dayB, monthB, yearB] = b.date.split('/').map(Number);
          
          const dateA = new Date(yearA, monthA - 1, dayA);
          const dateB = new Date(yearB, monthB - 1, dayB);
          
          return dateA.getTime() - dateB.getTime();
        });
      } catch (error) {
        console.error("Error extracting exam schedule:", error);
        return [];
      }
    };

    setLoading(true);
    // Use a short timeout to show loading state
    const timer = setTimeout(() => {
      setExams(extractExams());
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [getData]);

  // Calculate exam status (upcoming, ongoing, completed)
  const calculateExamStatus = (date: string, time: string): ExamStatus => {
    if (!date || !time) return ExamStatus.UPCOMING;
    
    try {
      const [day, month, year] = date.split("/").map(Number);
      const [timeRange] = time.split("-");
      const [hour, minute] = timeRange.split("h").map(Number);
      
      const examDate = new Date(year, month - 1, day, hour, minute);
      const now = new Date();
      
      // For simplicity, consider exam duration as 2 hours
      const examEndDate = new Date(examDate);
      examEndDate.setHours(examEndDate.getHours() + 2);
      
      if (now < examDate) {
        return ExamStatus.UPCOMING;
      } else if (now >= examDate && now <= examEndDate) {
        return ExamStatus.ONGOING;
      } else {
        return ExamStatus.COMPLETED;
      }
    } catch (error) {
      console.error("Error calculating exam status:", error);
      return ExamStatus.UPCOMING;
    }
  };

  // Calculate time remaining until exam
  const calculateTimeRemaining = (date: string, time: string): string | undefined => {
    if (!date || !time) return undefined;
    
    try {
      const [startTime] = time.split("-");
      const [startHour, startMinute] = startTime.split("h").map(Number);
      const [day, month, year] = date.split("/").map(Number);
      
      const examDate = new Date(year, month - 1, day, startHour, startMinute);
      const timeRemaining = examDate.getTime() - new Date().getTime();
      
      if (timeRemaining < 0) {
        return undefined;
      }
      
      if (timeRemaining > 86400000) {
        const daysLeft = Math.floor(timeRemaining / 86400000);
        return `${daysLeft} ${daysLeft > 1 ? "days" : "day"}`;
      } else {
        const hoursLeft = Math.floor(timeRemaining / 3600000);
        return `${hoursLeft} ${hoursLeft > 1 ? "hours" : "hour"}`;
      }
    } catch (error) {
      console.error("Error calculating time remaining:", error);
      return undefined;
    }
  };

  // Group exams by status
  const groupedExams: GroupedExams = useMemo(() => {
    return {
      upcoming: exams.filter(
        exam => exam.status === ExamStatus.UPCOMING || exam.status === ExamStatus.ONGOING
      ),
      completed: exams.filter(
        exam => exam.status === ExamStatus.COMPLETED
      )
    };
  }, [exams]);

  return {
    exams,
    groupedExams,
    loading: loading || fapLoading
  };
}; 