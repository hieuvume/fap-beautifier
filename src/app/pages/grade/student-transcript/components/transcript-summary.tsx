import { useState, useEffect } from 'react';
import { Settings2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';

interface TranscriptSummaryProps {
  averageGPA: number;
  totalCredit: number;
  nonGpaCodes: string[];
  setNonGpaCodes: (codes: string[]) => void;
}

export function TranscriptSummary({ averageGPA, totalCredit, nonGpaCodes, setNonGpaCodes }: TranscriptSummaryProps) {
  const [open, setOpen] = useState(false);
  const [codes, setCodes] = useState<string[]>(nonGpaCodes);
  const [input, setInput] = useState('');

  useEffect(() => {
    setCodes(nonGpaCodes);
  }, [nonGpaCodes]);

  const handleAdd = () => {
    const code = input.trim().toUpperCase();
    if (code && !codes.includes(code)) {
      setCodes([...codes, code]);
      setInput('');
    }
  };
  const handleRemove = (code: string) => {
    setCodes(codes.filter((c) => c !== code));
  };
  const handleSave = () => {
    setNonGpaCodes(codes);
    setOpen(false);
  };

  return (
    <div className="mb-6 flex items-center justify-center relative">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="text-center">
          <div className="text-muted-foreground text-sm font-semibold">Average GPA</div>
          <div className="text-3xl font-bold text-primary">{averageGPA.toFixed(2)}</div>
        </div>
        <div className="text-center">
          <div className="text-muted-foreground text-sm font-semibold">Total Credits</div>
          <div className="text-3xl font-bold text-primary">{totalCredit}</div>
        </div>
      </div>
      <Button
        type="button"
        variant="secondary"
        size="sm"
        className="absolute right-0 top-1/2 -translate-y-1/2"
        onClick={() => setOpen(true)}
        title="Cài đặt môn không tính GPA"
      >
        <Settings2 className="w-5 h-5 mr-1" />
        <span>Cài đặt môn không tính GPA</span>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Cài đặt môn không tính GPA</DialogTitle>
          </DialogHeader>
          <div className="mb-2 text-sm text-muted-foreground">Các mã môn sẽ không được tính vào GPA:</div>
          <div className="flex flex-wrap gap-2 mb-3">
            {codes.map((code) => (
              <span key={code} className="bg-gray-100 px-2 py-1 rounded text-xs font-mono flex items-center gap-1">
                {code}
                <button className="ml-1 text-red-500 hover:text-red-700 cursor-pointer" onClick={() => handleRemove(code)} title="Xóa">×</button>
              </span>
            ))}
          </div>
          <div className="flex gap-2 mb-4">
            <input
              className="border rounded px-2 py-1 text-sm font-mono flex-1"
              placeholder="Thêm mã môn..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleAdd(); }}
            />
            <button className="bg-primary text-white px-3 py-1 rounded text-sm font-semibold cursor-pointer" onClick={handleAdd}>Thêm</button>
          </div>
          <DialogFooter>
            <button className="px-3 py-1 rounded text-sm cursor-pointer" onClick={() => setOpen(false)}>Hủy</button>
            <button className="bg-primary text-white px-3 py-1 rounded text-sm font-semibold cursor-pointer" onClick={handleSave}>Lưu</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 