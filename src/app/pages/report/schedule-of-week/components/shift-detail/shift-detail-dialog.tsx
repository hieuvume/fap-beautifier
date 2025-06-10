import { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, Clock3, Loader2, XCircle } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/app/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { cn } from '@/app/lib/utils';
import { useIntl } from 'react-intl';

import { ShiftDetail, ShiftDetailProps, StatusInfo } from './types';
import { StatusBanner } from './status-banner';
import { CourseInformation } from './course-information';
import { PeopleInformation } from './people-information';
import { ResourceLinks } from './resource-links';

const ShiftDetailDialog = ({
  activityId,
  activityStatus,
  shiftTime,
  isOpen,
  onClose,
}: ShiftDetailProps) => {
  const intl = useIntl();
  const [loading, setLoading] = useState(false);
  const [shiftDetail, setShiftDetail] = useState<ShiftDetail | null>(null);
  const [activeTab, setActiveTab] = useState<string>("details");

  useEffect(() => {
    if (activityId && isOpen) {
      fetchShiftDetail(activityId);
    } else {
      setShiftDetail(null);
    }
  }, [activityId, isOpen]);

  const fetchShiftDetail = async (id: number) => {
    setLoading(true);
    try {
      const response = await fetch(`/Schedule/ActivityDetail.aspx?id=${id}`);
      const html = await response.text();
      
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      if (doc) {
        const table = doc.querySelector('#ctl00_mainContent_divContent');
        
        if (table) {
          const rows = table.querySelectorAll('tr');

          // Extract instructor information
          const instructorCell = rows[3]?.querySelector('td:nth-child(2)');
          const instructorLink = instructorCell?.querySelector('a');
          const instructorName = instructorLink?.textContent?.trim() || '';
          let instructorProfileLink = instructorLink?.getAttribute('href') || '';
          
          // Extract username from instructor link
          const usernameMatch = instructorProfileLink.match(/username=([^&]+)/);
          let username = '';
          if (usernameMatch && usernameMatch[1]) {
            username = usernameMatch[1];
            instructorProfileLink = `/User/UserDetail.aspx?login=${username}`;
          }

          setShiftDetail({
            id,
            date: rows[0]?.querySelector('td:nth-child(2)')?.textContent?.trim() || '',
            slot: rows[1]?.querySelector('td:nth-child(2)')?.textContent?.trim() || '',
            time: shiftTime, // Use the time passed from props
            studentGroup: {
              name: rows[2]?.querySelector('td:nth-child(2)')?.textContent?.trim() || '',
              link: rows[2]?.querySelector('td:nth-child(2)')?.querySelector('a')?.getAttribute('href') || '',
            },
            instructor: {
              name: instructorName,
              link: instructorProfileLink,
            },
            meetURL: rows[3]?.querySelector('td:nth-child(2)')?.querySelector('a:nth-child(2)')?.getAttribute('href') || '',
            course: rows[4]?.querySelector('td:nth-child(2)')?.textContent?.trim() || '',
            campus: rows[8]?.querySelector('td:nth-child(2)')?.textContent?.trim() || '',
            attendance: rows[9]?.querySelector('td:nth-child(2)')?.textContent?.trim() || '',
            recordTime: rows[11]?.querySelector('td:nth-child(2)')?.textContent?.trim() || '',
          });
        }
      }
    } catch (error) {
      console.error('Error fetching shift detail:', error);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to determine the status badge color
  const getStatusBadgeClasses = (): StatusInfo => {
    switch (activityStatus) {
      case 0: return { bg: 'bg-blue-100/50', text: 'text-blue-700', icon: <Clock3 className="h-4 w-4 mr-1 text-blue-700" /> };
      case 1: return { bg: 'bg-green-100/50', text: 'text-green-700', icon: <CheckCircle2 className="h-4 w-4 mr-1 text-green-700" /> };
      case 2: return { bg: 'bg-red-100/50', text: 'text-red-700', icon: <XCircle className="h-4 w-4 mr-1 text-red-700" /> };
      default: return { bg: 'bg-gray-100/50', text: 'text-gray-700', icon: <AlertCircle className="h-4 w-4 mr-1 text-gray-700" /> };
    }
  };

  const statusClasses = getStatusBadgeClasses();
  const statusText = activityStatus === 0 ? 'NOT YET' : (activityStatus === 1 ? 'ATTENDED' : 'ABSENT');

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader className="border-b pb-3">
          <DialogTitle className="flex items-center gap-2">
            <span className="text-primary">{intl.formatMessage({ id: 'SCHEDULE.SHIFT_DETAIL.TITLE' })}</span>
            {activityId && <Badge variant="secondary" className="ml-2">#{activityId}</Badge>}
          </DialogTitle>
        </DialogHeader>
        
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : shiftDetail ? (
          <div className="py-2">
            {/* Status Banner */}
            <StatusBanner 
              statusClasses={statusClasses} 
              statusText={statusText} 
              recordTime={shiftDetail.recordTime} 
            />

            <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="details">{intl.formatMessage({ id: 'SCHEDULE.SHIFT_DETAIL.CLASS_DETAILS' })}</TabsTrigger>
                <TabsTrigger value="links">{intl.formatMessage({ id: 'SCHEDULE.SHIFT_DETAIL.RESOURCES_LINKS' })}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-5">
                  {/* Course Information */}
                  <CourseInformation shiftDetail={shiftDetail} />
                  
                  {/* People Information */}
                  <PeopleInformation shiftDetail={shiftDetail} />
                </div>
              </TabsContent>
              
              <TabsContent value="links">
                <ResourceLinks shiftDetail={shiftDetail} />
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <div className="py-12 text-center text-muted-foreground">
            <AlertCircle className="h-10 w-10 mx-auto mb-2 text-muted-foreground/50" />
            <p>{intl.formatMessage({ id: 'SCHEDULE.SHIFT_DETAIL.NO_DETAILS' })}</p>
          </div>
        )}
        
        <DialogFooter className="border-t pt-3">
          <Button variant="outline" onClick={onClose}>
            {intl.formatMessage({ id: 'COMMON.CLOSE' })}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { ShiftDetailDialog }; 