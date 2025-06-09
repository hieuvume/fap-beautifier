import { Application } from '../types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { ApplicationStatusBadge } from './application-status-badge';

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
  if (!isOpen || !application) return null;
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="border-b pb-3 mb-2">
          <DialogTitle className="flex items-center gap-2">
            <span className="text-primary">Chi tiết đơn từ</span>
            <ApplicationStatusBadge status={application.status} statusRaw={application.statusRaw} />
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-2 text-sm">
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <div className="font-medium text-gray-700 min-w-[120px]">Loại đơn:</div>
            <div className="text-gray-900">{application.type}</div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <div className="font-medium text-gray-700 min-w-[120px]">Ngày tạo:</div>
            <div className="text-gray-900">{application.createDate}</div>
          </div>
          {application.processedAt && (
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <div className="font-medium text-gray-700 min-w-[120px]">Xử lý lúc:</div>
              <div className="text-gray-900">{application.processedAt}</div>
            </div>
          )}
          <div>
            <div className="font-medium text-gray-700 mb-1">Mục đích:</div>
            <div className="bg-gray-50 rounded p-2 whitespace-pre-line text-gray-900 break-words" dangerouslySetInnerHTML={{ __html: linkify(application.purpose) }} />
          </div>
          <div>
            <div className="font-medium text-gray-700 mb-1">Phản hồi xử lý:</div>
            <div className="bg-gray-50 rounded p-2 whitespace-pre-line text-gray-900 min-h-[40px] break-words" dangerouslySetInnerHTML={{ __html: linkify(application.processNote || '<i>Không có</i>') }} />
          </div>
          {application.fileUrl && (
            <div>
              <div className="font-medium text-gray-700 mb-1">Tệp đính kèm:</div>
              <a href={application.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all">{application.fileUrl}</a>
            </div>
          )}
        </div>
        <DialogFooter className="border-t pt-3 mt-4">
          <Button variant="outline" onClick={onClose} className="w-full md:w-auto">Đóng</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 