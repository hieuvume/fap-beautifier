import { Link } from 'react-router';
import { Card, CardContent } from '@/app/components/ui/card';

interface FeedbackNotificationProps {
  isVisible: boolean;
}

const FeedbackNotification = ({ isVisible }: FeedbackNotificationProps) => {
  if (!isVisible) return null;

  return (
    <Card className="mb-5">
      <CardContent className="p-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Feedbacks</h3>
          <div className="text-base text-gray-700 mb-6">
            Now is the time to take feedbacks on teachers and subjects which you
            are learning! The feedbacks will help FPT University to have
            information about teachers and the teaching of teachers. Take all
            your feedbacks before you view the information about learning (such
            as grade, attendance ...) please! This page will display on your
            screen, unless you take all your feedbacks.
          </div>

          <Link
            to="/Feedback/StudentFeedBack.aspx"
            className="px-4 py-2 bg-primary hover:bg-primary-active text-white rounded-md transition-colors"
          >
            Ý kiến về việc giảng dạy
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export { FeedbackNotification };
