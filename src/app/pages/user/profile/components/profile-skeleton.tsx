import { Card, CardContent, CardHeader } from '@/app/components/ui/card';
import { Skeleton } from '@/app/components/ui/skeleton';
import { Fragment } from 'react';

export const ProfileSkeleton = () => {
  return (
    <Fragment>
      {/* Hero Section Skeleton */}
      <div className="bg-muted/30 animate-pulse">
        <div className="container mx-auto py-8 flex flex-col items-center gap-4">
          <Skeleton className="h-24 w-24 rounded-full" />
          <Skeleton className="h-6 w-44" />
          <div className="flex gap-4">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-28" />
          </div>
        </div>
      </div>
      
      {/* Navbar Skeleton */}
      <div className="container mx-auto my-4">
        <div className="flex justify-between border-b pb-4 mb-6">
          <div className="flex gap-4">
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-16" />
          </div>
          <div className="flex gap-3">
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </div>
      
      {/* Card Skeleton */}
      <div className="container mx-auto">
        <Card className="shadow-sm overflow-hidden mb-6">
          <CardHeader className="bg-muted/30 px-6 py-3 flex justify-between">
            <Skeleton className="h-5 w-36" />
          </CardHeader>
          <CardContent className="p-0">
            {Array(6).fill(0).map((_, index) => (
              <div 
                key={index} 
                className={`flex flex-col sm:flex-row py-4 px-6 ${index % 2 === 0 ? 'bg-muted/10' : ''}`}
              >
                <div className="sm:w-1/3 mb-2 sm:mb-0">
                  <Skeleton className="h-4 w-28" />
                </div>
                <div className="sm:w-2/3">
                  <Skeleton className="h-4 w-full max-w-md" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Fragment>
  );
}; 