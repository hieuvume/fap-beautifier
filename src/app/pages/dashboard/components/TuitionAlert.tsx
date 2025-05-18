import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { RiInformationFill } from '@remixicon/react';

interface TuitionAlertProps {
  tuitionContent: string | undefined;
  accountBalance: string | undefined;
}

const TuitionAlert = ({ tuitionContent, accountBalance }: TuitionAlertProps) => {
  if (!tuitionContent) return null;

  return (
    <Alert variant="destructive" className="mb-5 border-red-200 bg-red-50">
      <div className="flex items-start">
        <RiInformationFill className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
        <AlertDescription className="text-red-600">
          <div className="font-medium">{tuitionContent}</div>
          {accountBalance && (
            <div dangerouslySetInnerHTML={{ __html: accountBalance }} className="mt-1" />
          )}
        </AlertDescription>
      </div>
    </Alert>
  );
};

export { TuitionAlert }; 