import {
  ShareProfileSettings,
  ShareProfileUsers,
  ShareProfileViaEmail,
  ShareProfileViaLink,
} from '@/app/partials/dialogs/share-profile';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog';

export function GiveAwardDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 space-y-0 max-w-[600px]">
        <DialogHeader className="pt-5 pb-0 m-0 px-5">
          <DialogTitle>Give Award</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid gap-5 px-0 py-5">
          <ShareProfileViaLink />
          <div className="border-b border-b-border"></div>

          <ShareProfileViaEmail />
          <div className="border-b border-b-border"></div>

          <div className="scrollable-y-auto max-h-[300px]">
            <ShareProfileUsers />
          </div>

          <div className="border-b border-b-border"></div>
          <ShareProfileSettings />
        </div>
      </DialogContent>
    </Dialog>
  );
}
