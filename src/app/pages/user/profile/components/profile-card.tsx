import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Info } from 'lucide-react';

interface ProfileCardProps {
  title: string;
  data: Record<string, string>;
  show: boolean;
}

export const ProfileCard = ({ title, data, show }: ProfileCardProps) => {
  if (!show) return null;
  
  return (
    <Card className="shadow-sm overflow-hidden">
      <CardHeader className="bg-muted/30 px-6 py-3">
        <CardTitle>
          <span className="text-base font-semibold">{title}</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-0">
        {Object.entries(data).length > 0 ? (
          <div className="divide-y divide-gray-100">
            {Object.entries(data).map(([key, value], index) => (
              <div 
                key={key} 
                className={`flex flex-col sm:flex-row py-4 px-6 ${index % 2 === 0 ? 'bg-muted/10' : ''}`}
              >
                <div className="font-medium text-muted-foreground sm:w-1/3 mb-1 sm:mb-0 text-sm">
                  {key}
                </div>
                <div className="text-foreground sm:w-2/3 text-sm">
                  {value || <span className="text-muted-foreground italic">Not provided</span>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 px-6 text-center">
            <div className="flex justify-center mb-3">
              <div className="rounded-full bg-muted/30 p-3">
                <Info className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
            <h3 className="text-base font-medium mb-1 text-foreground">No Information Available</h3>
            <p className="text-sm text-muted-foreground">
              There is no {title.toLowerCase()} data available at this time.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}; 