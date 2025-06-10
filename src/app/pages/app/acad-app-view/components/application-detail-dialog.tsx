import { Application } from '../types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { ApplicationStatusBadge } from './application-status-badge';
import { useIntl } from 'react-intl';

interface ApplicationDetailDialogProps {
  application?: Application;
  isOpen: boolean;
  onClose: () => void;
}

function linkify(text: string) {
  if (!text) return '';
  // Regex nhận diện URL
  const urlRegex = /(https?:\/\/[\w\-._~:/?#[\]@!$&'()*+,;=%]+)|(www\.[\w\-._~:/?#[\]@!$&'()*+,;=%]+)/gi;
  return text.replace(urlRegex, (url) => {
    let href = url;
    if (!href.startsWith('http')) href = 'https://' + href;
    return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline break-all">${url}</a>`;
  });
}

export function ApplicationDetailDialog({ application, isOpen, onClose }: ApplicationDetailDialogProps) {
  const intl = useIntl();
  
  if (!isOpen || !application) return null;
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="border-b pb-3 mb-2">
          <DialogTitle className="flex items-center gap-2">
            <span className="text-primary">{intl.formatMessage({ id: 'APPLICATION.DETAIL.TITLE' })}</span>
            <ApplicationStatusBadge status={application.status} statusRaw={application.statusRaw} />
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-2 text-sm">
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <div className="font-medium text-gray-700 min-w-[120px]">{intl.formatMessage({ id: 'APPLICATION.DETAIL.TYPE' })}</div>
            <div className="text-gray-900">{application.type}</div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <div className="font-medium text-gray-700 min-w-[120px]">{intl.formatMessage({ id: 'APPLICATION.DETAIL.CREATE_DATE' })}</div>
            <div className="text-gray-900">{application.createDate}</div>
          </div>
          {application.processedAt && (
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <div className="font-medium text-gray-700 min-w-[120px]">{intl.formatMessage({ id: 'APPLICATION.DETAIL.PROCESSED_AT' })}</div>
              <div className="text-gray-900">{application.processedAt}</div>
            </div>
          )}
          <div>
            <div className="font-medium text-gray-700 mb-1">{intl.formatMessage({ id: 'APPLICATION.DETAIL.PURPOSE' })}</div>
            <div className="bg-gray-50 rounded p-2 whitespace-pre-line text-gray-900 break-words" dangerouslySetInnerHTML={{ __html: linkify(application.purpose) }} />
          </div>
          <div>
            <div className="font-medium text-gray-700 mb-1">{intl.formatMessage({ id: 'APPLICATION.DETAIL.PROCESS_NOTE' })}</div>
            <div className="bg-gray-50 rounded p-2 whitespace-pre-line text-gray-900 min-h-[40px] break-words" dangerouslySetInnerHTML={{ __html: linkify(application.processNote || `<i>${intl.formatMessage({ id: 'APPLICATION.DETAIL.NO_RESPONSE' })}</i>`) }} />
          </div>
          {application.fileUrl && (
            <div>
              <div className="font-medium text-gray-700 mb-1">{intl.formatMessage({ id: 'APPLICATION.DETAIL.ATTACHMENT' })}</div>
              <a href={application.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all">{application.fileUrl}</a>
            </div>
          )}
        </div>
        <DialogFooter className="border-t pt-3 mt-4">
          <Button variant="outline" onClick={onClose} className="w-full md:w-auto">{intl.formatMessage({ id: 'APPLICATION.ACTIONS.CLOSE' })}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}