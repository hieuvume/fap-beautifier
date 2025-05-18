import { Command, Search } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Kbd } from '@/app/components/ui/kbd';

export function StoreAdminTopbar() {
  return (
    <div className="relative me-3">
      <Search className="size-4 text-muted-foreground absolute top-1/2 -translate-y-1/2 start-2" />
      <Input type="text" className="px-7" placeholder="Search shop" />
      <Kbd size="sm" className="absolute top-1/2 -translate-y-1/2 end-2">
        <Command /> +K
      </Kbd>
    </div>
  );
}
