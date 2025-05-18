import { LoaderPinwheel, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';

export function ShareProfileSettings() {
  return (
    <div className="flex flex-col px-5 gap-4">
      <h2 className="text-mono font-semibold text-sm">Settings</h2>

      <div className="flex flex-center justify-between flex-wrap gap-2">
        <div className="flex flex-center gap-1.5">
          <User size={16} className="text-muted-foreground" />

          <div className="flex flex-center text-secondary-foreground font-medium text-xs">
            Anyone at
            <Link to="#" className="text-xs font-medium link mx-1">
              KeenThemes
            </Link>
            can view
          </div>
        </div>

        <Button mode="link" underlined="dashed">
          <Link to="#">Change Access</Link>
        </Button>
      </div>

      <div className="flex flex-center justify-between flex-wrap gap-2 mb-1">
        <div className="flex flex-center gap-1.5">
          <LoaderPinwheel size={16} className="text-muted-foreground" />

          <div className="flex flex-center text-secondary-foreground font-medium text-xs">
            Anyone with link can edit
          </div>
        </div>

        <Button mode="link" underlined="dashed">
          <Link to="#">Set Password</Link>
        </Button>
      </div>

      <Button variant="primary" className="mx-auto w-full max-w-full">
        Done
      </Button>
    </div>
  );
}
