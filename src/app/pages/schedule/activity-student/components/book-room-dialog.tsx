import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { Button } from '@/app/components/ui/button';
import { Checkbox } from '@/app/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/app/components/ui/select';
import { useState } from 'react';

interface BookRoomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  booking: {
    day: string;
    slot: string;
    room: string;
    roomNote: string;
    area: string;
  };
}

export function BookRoomDialog({ isOpen, onClose, booking }: BookRoomDialogProps) {
  const [purpose, setPurpose] = useState<string>('');
  const [students, setStudents] = useState<string[]>([]);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Basic form validation
  const isFormValid = purpose !== '' && agreedToTerms;

  // Mock list of students for the purpose dropdown
  const purposeOptions = [
    { value: '1', label: 'Học nhóm' },
    { value: '2', label: 'Quay video dự án môn học' },
    { value: '3', label: 'Tổ chức workshop' },
    { value: '4', label: 'Tự học' },
  ];

  // Handle form submission
  const handleSubmit = () => {
    if (!isFormValid) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      // In a real app, you would show a success message and update the UI
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Book Room Information</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="day">Day / Ngày</Label>
              <Input id="day" value={booking.day} readOnly className="mt-1" />
            </div>
            <div>
              <Label htmlFor="slot">Slot</Label>
              <Input id="slot" value={booking.slot} readOnly className="mt-1" />
            </div>
            <div>
              <Label htmlFor="room">Room / Phòng</Label>
              <Input id="room" value={booking.room} readOnly className="mt-1" />
            </div>
          </div>
          
          <div>
            <Label htmlFor="purpose">Purpose / Mục đích</Label>
            <p className="text-sm text-muted-foreground mt-1 mb-2">
              Nếu sinh viên sử dụng phòng cho mục đích khác, vui lòng liên hệ trực tiếp với phòng Dịch vụ sinh viên để được xem xét.
            </p>
            <Select value={purpose} onValueChange={setPurpose}>
              <SelectTrigger id="purpose" className="w-full">
                <SelectValue placeholder="Select purpose" />
              </SelectTrigger>
              <SelectContent>
                {purposeOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="students">Students / Các sinh viên tham gia</Label>
            <div className="flex items-center gap-2 mt-1">
              <Input
                id="studentSearch"
                placeholder="Search by student ID (min. 3 characters)"
                className="flex-1"
              />
              <Button variant="outline" type="button">Add</Button>
            </div>
            
            <div className="mt-2 max-h-32 overflow-y-auto border rounded-md p-2">
              {students.length === 0 ? (
                <p className="text-sm text-muted-foreground italic">No students added yet</p>
              ) : (
                <ul className="space-y-1">
                  {students.map((student, index) => (
                    <li key={index} className="text-sm flex justify-between">
                      <span>{student}</span>
                      <Button variant="ghost" size="sm" className="h-6 px-2">
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          
          <Alert>
            <AlertDescription>
              <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>Sau khi book phòng nếu thay đổi kế hoạch và không có nhu cầu sử dụng cần thao tác hủy phòng trước thời gian đăng ký sử dụng.</li>
                <li>Chỉ được book phòng cho mục đích học tập, nếu sử dụng sai mục đích hoặc book nhưng không sử dụng sẽ bị cấm book phòng trong 1 kỳ.</li>
                <li>Đảm bảo CSVC trong phòng, nếu hư phỏng sẽ phải đền bù theo quy định.</li>
                <li>Trả lại nguyên hiện trạng ban đầu của phòng sau khi sử dụng.</li>
                <li>Trong quá trình sử dụng không tự ý mang CSVC ra khỏi phòng học.</li>
              </ul>
            </AlertDescription>
          </Alert>
          
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="agree" 
              checked={agreedToTerms} 
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
              className="mt-1"
            />
            <Label 
              htmlFor="agree" 
              className="text-sm font-normal"
            >
              Tôi đồng ý tuân thủ các quy định đặt phòng / I agree to comply with the room booking rules.
            </Label>
          </div>
        </div>
        
        <DialogFooter>
          <Button 
            type="button" 
            variant="outline" 
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button 
            type="button" 
            onClick={handleSubmit} 
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? 'Booking...' : 'Book Room'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 