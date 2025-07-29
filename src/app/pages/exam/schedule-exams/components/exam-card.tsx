import { Exam, ExamStatus } from '../types';
import { cn } from '@/app/lib/utils';
import { Calendar, Clock, FileText, Info, MapPin, Megaphone } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/app/components/ui/card';
import { useIntl } from 'react-intl';

interface ExamCardProps {
  exam: Exam;
}

export const ExamCard = ({ exam }: ExamCardProps) => {
  const intl = useIntl();

  // Helper functions for styling
  const getStatusColor = (status: ExamStatus) => {
    switch (status) {
      case ExamStatus.UPCOMING:
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case ExamStatus.ONGOING:
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case ExamStatus.COMPLETED:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  const getStatusText = (status: ExamStatus) => {
    switch (status) {
      case ExamStatus.UPCOMING:
        return intl.formatMessage({ id: 'EXAM.STATUS.UPCOMING' });
      case ExamStatus.ONGOING:
        return intl.formatMessage({ id: 'EXAM.STATUS.ONGOING' });
      case ExamStatus.COMPLETED:
        return intl.formatMessage({ id: 'EXAM.STATUS.COMPLETED' });
      default:
        return intl.formatMessage({ id: 'EXAM.STATUS.UNKNOWN' });
    }
  };

  const getExamTypeColor = (type: string) => {
    const lowerType = type.toLowerCase();
    // Final exam types
    if (lowerType === 'fe' || lowerType.includes('final')) {
      return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
    }
    // Second-chance exams
    if (lowerType.includes('2nd') || lowerType.includes('resit')) {
      return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
    }
    // Practice exams
    if (lowerType === 'pe' || lowerType.includes('practice')) {
      return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
    }
    // Theory exams
    if (lowerType === 'te' || lowerType.includes('theory')) {
      return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
    }
    // Midterms and quizzes
    if (lowerType.includes('midterm') || lowerType.includes('quiz')) {
      return 'bg-pink-500/10 text-pink-500 border-pink-500/20';
    }
    // Progressive tests
    if (lowerType.includes('prog')) {
      return 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20';
    }
    // Assignments
    if (lowerType.includes('assignment')) {
      return 'bg-teal-500/10 text-teal-500 border-teal-500/20';
    }
    // Default color
    return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
  };

  const formatTime = (time: string) => {
    return time.replace('-', ' - ').replace('h', ':');
  };

  return (
    <Card className="h-full transition-all duration-200 overflow-hidden">
      <CardHeader className="p-4 pt-2 pb-2 flex flex-row justify-between items-center">
        <div className="flex flex-wrap gap-1">
          <Badge className={cn(
            "px-2.5 py-0.5 text-xs font-medium border",
            getStatusColor(exam.status)
          )}>
            {getStatusText(exam.status)}
            {exam.timeRemaining && exam.status === ExamStatus.UPCOMING && (
              <span className="ml-1">• {exam.timeRemaining}</span>
            )}
          </Badge>

          <Badge className={cn(
            "px-2 py-0.5 text-xs border",
            getExamTypeColor(exam.type)
          )}>
            {exam.type}
          </Badge>
        </div>

        <div className="flex-shrink-0 text-right">
          <p className="text-xl font-bold text-primary">{exam.subjectCode}</p>
          <p className="text-2sm text-muted-foreground text-right">
            {exam.form.replace(/_/g, ' ')}
          </p>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-2">
        <h3 className="text-base font-medium text-gray-700 mb-3 line-clamp-2">{exam.subjectName}</h3>

        <div className="grid grid-cols-2 gap-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm text-gray-500 font-medium">{intl.formatMessage({ id: 'EXAM.CARD.EXAM_DATE' })}</span>
          </div>
          <div className="text-sm text-gray-600 text-right">
            {exam.date}
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm text-gray-500 font-medium">{intl.formatMessage({ id: 'EXAM.CARD.EXAM_TIME' })}</span>
          </div>
          <div className="text-sm text-gray-600 text-right">
            {formatTime(exam.time)}
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm text-gray-500 font-medium">{intl.formatMessage({ id: 'EXAM.CARD.ROOM_NO' })}</span>
          </div>
          <div className="text-sm text-gray-600 text-right">
            {exam.room ? exam.room : (
              <span className="italic text-muted-foreground">{intl.formatMessage({ id: 'EXAM.CARD.NOT_ASSIGNED' })}</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Megaphone className="h-4 w-4 text-primary" />
            <span className="text-sm text-gray-500 font-medium">{intl.formatMessage({ id: 'EXAM.CARD.PUBLIC_DATE' })}</span>
          </div>
          <div className="text-sm text-gray-600 text-right">
            {formatTime(exam.publicDate)}
          </div>
        </div>

        {exam.status === ExamStatus.UPCOMING && exam.timeRemaining && (
          <div className={cn(
            "mt-3 p-2 rounded-lg text-xs font-medium flex items-center gap-1.5",
            "bg-blue-500/5 text-blue-500 border border-blue-500/20"
          )}>
            <Info className="h-3.5 w-3.5" />
            <span>{intl.formatMessage({ id: 'EXAM.CARD.COMING_UP' }, { timeRemaining: exam.timeRemaining })}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}; 