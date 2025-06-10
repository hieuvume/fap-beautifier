import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Trash, CalendarDays, Clock, MapPin, Users } from 'lucide-react';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/app/components/ui/alert-dialog';

interface Booking {
  id: string;
  day: string;
  slot: {
    id: string;
    time: string;
  };
  room: string;
  purpose: string;
  students: string[];
  status: 'approved' | 'pending' | 'cancelled';
}

export function BookingList() {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(null);
  
  // Mock bookings data - in a real app, this would come from an API
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: '1',
      day: '18/05/2025',
      slot: {
        id: '3',
        time: '10:50-12:20'
      },
      room: 'EP-105',
      purpose: 'Học nhóm',
      students: ['PhongNT', 'HungNQ', 'HaiTT'],
      status: 'approved'
    },
    {
      id: '2',
      day: '20/05/2025',
      slot: {
        id: '7',
        time: '18:00-19:30'
      },
      room: 'Sân bóng-01',
      purpose: 'Tổ chức workshop',
      students: ['PhongNT', 'HungNQ', 'HaiTT', 'DungLH'],
      status: 'pending'
    }
  ]);
  
  const handleDeleteClick = (id: string) => {
    setSelectedBookingId(id);
    setIsDeleteDialogOpen(true);
  };
  
  const confirmDelete = () => {
    if (selectedBookingId) {
      // In a real app, you would call an API to delete the booking
      setBookings(bookings.filter(booking => booking.id !== selectedBookingId));
      setIsDeleteDialogOpen(false);
      setSelectedBookingId(null);
    }
  };
  
  const getStatusBadge = (status: Booking['status']) => {
    switch (status) {
      case 'approved':
        return <Badge variant="success">Approved</Badge>;
      case 'pending':
        return <Badge variant="warning">Pending</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return null;
    }
  };
  
  if (bookings.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">You have no active bookings.</p>
      </div>
    );
  }
  
  return (
    <div>
      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Slot</TableHead>
              <TableHead>Room</TableHead>
              <TableHead>Purpose</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{booking.day}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>Slot {booking.slot.id} ({booking.slot.time})</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{booking.room}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-muted-foreground" />
                    <div className="flex flex-col">
                      <span>{booking.purpose}</span>
                      <span className="text-xs text-muted-foreground">
                        {booking.students.length} students
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(booking.status)}</TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => handleDeleteClick(booking.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will cancel your room booking. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
} 