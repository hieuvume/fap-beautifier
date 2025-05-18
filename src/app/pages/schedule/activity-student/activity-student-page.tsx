import { Fragment, useState } from 'react';
import { Container } from '@/app/components/common/container';
import { Navbar } from '@/app/partials/navbar/navbar';
import { useFapData } from '@/app/providers/fap-data-provider';
import { RoomGrid } from './components/room-grid';
import { useActivityStudent } from './use-activity-student';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Button } from '@/app/components/ui/button';
import { DatePickerWithPresets } from './components/date-picker';
import { format } from 'date-fns';
import { BookRoomDialog } from './components/book-room-dialog';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';
import { InfoIcon } from 'lucide-react';
import { BookingList } from './components/booking-list';

interface Option {
  value: string;
  label: string;
}

export function ActivityStudentPage() {
  const { loading } = useFapData();
  const {
    date, 
    setDate,
    campusOptions,
    areaOptions,
    selectedCampus,
    selectedArea,
    handleCampusChange,
    handleAreaChange,
    rooms,
    slots
  } = useActivityStudent();
  
  const [isBookDialogOpen, setIsBookDialogOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<{
    day: string;
    slot: string;
    room: string;
    roomNote: string;
    area: string;
  } | null>(null);

  const handleBookRoom = (booking: typeof selectedBooking) => {
    setSelectedBooking(booking);
    setIsBookDialogOpen(true);
  };

  return (
    <Fragment>
      {/* Main content */}
      <Container className="space-y-6">
        {/* Information Alert */}
        <Alert variant="warning" appearance="light">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Important Information</AlertTitle>
          <AlertDescription className="mt-2">
            <ul className="list-disc space-y-1">
              <li>Each student can book a maximum of 4 slots per week.</li>
              <li>Available booking times: slots 7-8 on weekdays and slots 1-6 on weekends.</li>
              <li>Rooms marked with "+" are available for booking. Rooms with "i" are already booked or reserved for other purposes.</li>
            </ul>
          </AlertDescription>
        </Alert>
        
        {/* Booking Controls */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Booking Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="w-full sm:w-1/4 space-y-1">
                <label className="text-sm font-medium">Campus</label>
                <Select
                  disabled={loading || campusOptions.length <= 1}
                  value={selectedCampus}
                  onValueChange={handleCampusChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select campus" />
                  </SelectTrigger>
                  <SelectContent>
                    {campusOptions.map((option: Option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full sm:w-1/4 space-y-1">
                <label className="text-sm font-medium">Area</label>
                <Select
                  value={selectedArea}
                  onValueChange={handleAreaChange}
                  disabled={loading || areaOptions.length === 0}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select area" />
                  </SelectTrigger>
                  <SelectContent>
                    {areaOptions.map((option: Option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full sm:w-1/4 space-y-1">
                <label className="text-sm font-medium">Date</label>
                <DatePickerWithPresets date={date} setDate={setDate} />
              </div>
              
              <div className="w-full sm:w-1/4 flex">
                <Button className="w-full">View</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Room Type Legend */}
        <div className="bg-card rounded-md p-3 border shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#0000ee]"></div>
              <span className="text-sm">Theoretical theatre</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ef923c]"></div>
              <span className="text-sm">Meeting room</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-600"></div>
              <span className="text-sm">Class room</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-black"></div>
              <span className="text-sm">Computer lab</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#737350]"></div>
              <span className="text-sm">Guest room</span>
            </div>
          </div>
        </div>

        {/* Room Grid */}
        <RoomGrid 
          date={format(date, 'dd/MM/yyyy')}
          rooms={rooms}
          slots={slots}
          isLoading={loading}
          onBookRoom={handleBookRoom}
        />
        
        {/* My Bookings */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>My Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <BookingList />
          </CardContent>
        </Card>
      </Container>
      
      {/* Booking Dialog */}
      {selectedBooking && (
        <BookRoomDialog 
          isOpen={isBookDialogOpen} 
          onClose={() => setIsBookDialogOpen(false)}
          booking={selectedBooking}
        />
      )}
    </Fragment>
  );
} 