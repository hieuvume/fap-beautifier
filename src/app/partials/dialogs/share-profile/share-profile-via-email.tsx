import { useState } from 'react';
import { Info } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export function ShareProfileViaEmail() {
  const [emailInput, setEmailInput] = useState('');
  return (
    <div className="flex flex-col px-5 gap-2.5">
      <div className="flex flex-center gap-1">
        <h2 className="text-mono font-semibold text-sm">Share via email</h2>
        <Info size={16} className="text-muted-foreground text-sm" />
      </div>

      <div className="flex flex-center gap-2.5">
        <Input
          type="email"
          placeholder="miles.turner@gmail.com"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          className="w-full"
        />

        <Button size="md">Share</Button>
      </div>
    </div>
  );
}
