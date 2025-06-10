import { Fragment, useEffect, useState } from 'react';
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
import { useIntl } from 'react-intl';

interface Option {
  value: string;
  label: string;
}

interface Room {
  id: string;
  name: string;
  capacity: number;
  type: 'theatre' | 'meeting' | 'classroom' | 'computer' | 'guest';
  note: string;
  availability: Record<string, boolean>;
}

interface Slot {
  id: string;
  time: string;
}

// Default slot data for fallback
const DEFAULT_SLOTS: Slot[] = [
  { id: '1', time: '07:30-09:00' },
  { id: '2', time: '09:10-10:40' },
  { id: '3', time: '10:50-12:20' },
  { id: '4', time: '12:50-14:20' },
  { id: '5', time: '14:30-16:00' },
  { id: '6', time: '16:10-17:40' },
  { id: '7', time: '18:00-19:30' },
  { id: '8', time: '19:45-21:15' },
];

// Default campus options
const DEFAULT_CAMPUS_OPTIONS: Option[] = [
  { value: '3', label: 'FU-HL' }
];

// Default area options
const DEFAULT_AREA_OPTIONS: Option[] = [
  { value: '9', label: 'AL&BE' },
  { value: '10', label: 'GA' },
  { value: '8', label: 'Little UK' },
  { value: '5', label: 'Physical training' },
  { value: '12', label: 'Sân bóng' },
  { value: '13', label: 'Đường' },
  { value: '14', label: 'NewSlot' },
];

export function ActivityStudentPage() {
  const { loading: fapLoading } = useFapData();
  const intl = useIntl();
  
  // Date state
  const [date, setDate] = useState<Date>(new Date());
  
  // Campus and area states
  const [campusOptions, setCampusOptions] = useState<Option[]>([]);
  const [areaOptions, setAreaOptions] = useState<Option[]>([]);
  const [selectedCampus, setSelectedCampus] = useState<string>('');
  const [selectedArea, setSelectedArea] = useState<string>('');
  
  // Room and slot states
  const [rooms, setRooms] = useState<Room[]>([]);
  const [slots, setSlots] = useState<Slot[]>([]);
  
  // Booking dialog state
  const [isBookDialogOpen, setIsBookDialogOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<{
    day: string;
    slot: string;
    room: string;
    roomNote: string;
    area: string;
  } | null>(null);

  // Get data and functions from the hook
  const {
    fetchRoomData,
    isLoading,
    extractedData
  } = useActivityStudent();
  
  // Handle campus selection change
  const handleCampusChange = (value: string) => {
    setSelectedCampus(value);
  };
  
  // Handle area selection change
  const handleAreaChange = (value: string) => {
    setSelectedArea(value);
  };
  
  // Handle View button click
  const handleViewClick = () => {
    fetchRoomData(selectedCampus, selectedArea, date);
  };
  
  // Handle booking room
  const handleBookRoom = (booking: typeof selectedBooking) => {
    setSelectedBooking(booking);
    setIsBookDialogOpen(true);
  };
  
  // Combine loading states
  const loading = fapLoading || isLoading;
  
  // Process extracted data when it changes
  useEffect(() => {
    const { campusData, areaData, roomsData, slotsData } = extractedData;
    
    // Process campus data if available
    if (campusData && campusData.length > 0) {
      setCampusOptions(campusData);
      
      // Set default campus selection if not already set
      if (!selectedCampus) {
        const defaultCampus = campusData.find(option => 
          option.label.includes('FU-HL')
        );
        setSelectedCampus(defaultCampus?.value || campusData[0].value);
      }
    } else if (campusOptions.length === 0) {
      // Set default campus options if none available
      setCampusOptions(DEFAULT_CAMPUS_OPTIONS);
      setSelectedCampus(DEFAULT_CAMPUS_OPTIONS[0].value);
    }
    
    // Process area data if available
    if (areaData && areaData.length > 0) {
      setAreaOptions(areaData);
      
      // Set default area selection if not already set
      if (!selectedArea) {
        const defaultArea = areaData.find(option => 
          option.label.includes('Sân bóng')
        );
        setSelectedArea(defaultArea?.value || areaData[0].value);
      }
    } else if (areaOptions.length === 0) {
      // Set default area options if none available
      setAreaOptions(DEFAULT_AREA_OPTIONS);
      setSelectedArea(DEFAULT_AREA_OPTIONS.find(o => o.label === 'Sân bóng')?.value || DEFAULT_AREA_OPTIONS[0].value);
    }
    
    // Process room data if available
    if (roomsData && roomsData.length > 0) {
      setRooms(roomsData);
    }
    
    // Process slot data if available
    if (slotsData && slotsData.length > 0) {
      setSlots(slotsData);
    } else if (slots.length === 0) {
      // Set default slot data if none available
      setSlots(DEFAULT_SLOTS);
    }
  }, [extractedData, selectedCampus, selectedArea, campusOptions.length, areaOptions.length, slots.length]);

  return (
    <Fragment>
      {/* Main content */}
      <Container className="space-y-6">
        {/* Information Alert */}
        <Alert variant="warning" appearance="light">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>{intl.formatMessage({ id: 'ACTIVITY.INFO.TITLE' })}</AlertTitle>
          <AlertDescription className="mt-2">
            <ul className="list-disc space-y-1">
              <li>{intl.formatMessage({ id: 'ACTIVITY.INFO.RULE_1' })}</li>
              <li>{intl.formatMessage({ id: 'ACTIVITY.INFO.RULE_2' })}</li>
              <li>{intl.formatMessage({ id: 'ACTIVITY.INFO.RULE_3' })}</li>
            </ul>
          </AlertDescription>
        </Alert>
        
        {/* Booking Controls */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">{intl.formatMessage({ id: 'ACTIVITY.BOOKING.TITLE' })}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="w-full sm:w-1/4 space-y-1">
                <label className="text-sm font-medium">{intl.formatMessage({ id: 'ACTIVITY.FORM.CAMPUS' })}</label>
                <Select
                  disabled={loading || campusOptions.length <= 1}
                  value={selectedCampus}
                  onValueChange={handleCampusChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={intl.formatMessage({ id: 'ACTIVITY.FORM.SELECT_CAMPUS' })} />
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
                <label className="text-sm font-medium">{intl.formatMessage({ id: 'ACTIVITY.FORM.AREA' })}</label>
                <Select
                  value={selectedArea}
                  onValueChange={handleAreaChange}
                  disabled={loading || areaOptions.length === 0}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={intl.formatMessage({ id: 'ACTIVITY.FORM.SELECT_AREA' })} />
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
                <label className="text-sm font-medium">{intl.formatMessage({ id: 'ACTIVITY.FORM.DATE' })}</label>
                <DatePickerWithPresets date={date} setDate={setDate} />
              </div>
              
              <div className="w-full sm:w-1/4 flex">
                <Button 
                  className="w-full" 
                  onClick={handleViewClick}
                  disabled={loading || !selectedCampus || !selectedArea}
                >
                  {isLoading ? intl.formatMessage({ id: 'ACTIVITY.ACTIONS.LOADING' }) : intl.formatMessage({ id: 'ACTIVITY.ACTIONS.VIEW' })}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Room Type Legend */}
        <div className="bg-card rounded-md p-3 border shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#0000ee]"></div>
              <span className="text-sm">{intl.formatMessage({ id: 'ACTIVITY.LEGEND.THEORETICAL_THEATRE' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ef923c]"></div>
              <span className="text-sm">{intl.formatMessage({ id: 'ACTIVITY.LEGEND.MEETING_ROOM' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-600"></div>
              <span className="text-sm">{intl.formatMessage({ id: 'ACTIVITY.LEGEND.CLASS_ROOM' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-black"></div>
              <span className="text-sm">{intl.formatMessage({ id: 'ACTIVITY.LEGEND.COMPUTER_LAB' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#737350]"></div>
              <span className="text-sm">{intl.formatMessage({ id: 'ACTIVITY.LEGEND.GUEST_ROOM' })}</span>
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
            <CardTitle>{intl.formatMessage({ id: 'ACTIVITY.MY_BOOKINGS.TITLE' })}</CardTitle>
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