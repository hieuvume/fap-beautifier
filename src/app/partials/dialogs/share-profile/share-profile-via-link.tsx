import { useState } from 'react';
import { Copy, Info } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export function ShareProfileViaLink() {
  const [linkInput, setLinkInput] = useState('');
  return (
    <div className="flex flex-col px-5 gap-2.5">
      <div className="flex flex-center gap-1">
        <h2 className="text-mono font-semibold text-sm">
          Share read-only link
        </h2>
        <Info size={16} className="text-muted-foreground text-sm" />
      </div>

      <div className="relative w-full">
        <Input
          className="pe-10"
          type="text"
          value={linkInput}
          onChange={(e) => setLinkInput(e.target.value)}
          placeholder="https://metronic.com/profiles/x7g2vA3kZ5"
        />
        <Button
          variant="ghost"
          mode="icon"
          className="absolute end-0 top-2/4 -translate-y-2/4 me-1.5"
        >
          <Copy size={12} />
        </Button>
      </div>
    </div>
  );
}
