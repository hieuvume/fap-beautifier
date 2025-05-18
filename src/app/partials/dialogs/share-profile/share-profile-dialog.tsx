import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog';
import {
  ShareProfileSettings,
  ShareProfileUsers,
  ShareProfileViaEmail,
  ShareProfileViaLink,
} from './';

export function ShareProfileDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: () => void;
}) {
  const scrollableHeight = 300;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 space-y-0 max-w-[500px]">
        <DialogHeader className="p-5 m-0">
          <DialogTitle>Share Profile</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid gap-5 px-0 pt-1 pb-5">
          <ShareProfileViaLink />

          <div className="border-b border-b-border"></div>

          <ShareProfileViaEmail />

          <div className="border-b border-b-border"></div>

          <div
            className="scrollable-y-auto"
            style={{ maxHeight: `${scrollableHeight}px` }}
          >
            <ShareProfileUsers />
          </div>

          <div className="border-b border-b-border"></div>

          <ShareProfileSettings />
        </div>
      </DialogContent>
    </Dialog>
  );
}
