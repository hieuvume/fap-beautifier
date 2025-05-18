import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog';

export function WelcomeMessageDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[500px]">
        <DialogHeader className="border-0">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <DialogBody className="flex flex-col items-center pt-10 pb-10">
          <div className="mb-10">
            <img
              src={toAbsoluteUrl('/media/illustrations/21.svg')}
              className="dark:hidden max-h-[140px]"
              alt="image"
            />
            <img
              src={toAbsoluteUrl('/media/illustrations/21-dark.svg')}
              className="light:hidden max-h-[140px]"
              alt="image"
            />
          </div>

          <h3 className="text-lg font-medium text-mono text-center mb-3">
            Welcome to Metronic
          </h3>

          <div className="text-sm text-center text-secondary-foreground mb-7">
            We're thrilled to have you on board and excited for <br />
            the journey ahead together.
          </div>

          <div className="flex justify-center mb-2">
            <Link to="/" className="btn btn-primary flex justify-center">
              Show me around
            </Link>
          </div>

          <Link
            to="/"
            className="text-sm font-medium text-secondary-foreground hover:text-primary py-3"
          >
            Skip the tour
          </Link>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}
