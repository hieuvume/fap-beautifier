import { Fragment } from 'react';
import { Container } from '@/app/components/common/container';
import { Navbar } from '@/app/partials/navbar/navbar';
import { useFapData } from '@/app/providers/fap-data-provider';
import { useCourseGroups } from './use-course-groups';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTable,
  CardTitle,
} from '@/app/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';
import { Skeleton } from '@/app/components/ui/skeleton';
import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';
import { GraduationCap, User, Users } from 'lucide-react';
import { cn } from '@/app/lib/utils';

// Skeleton for loading state
const GroupsSkeleton = () => {
  return (
    <Container>
      {/* Header Skeleton */}
      <div className="h-14 flex items-center mb-6">
        <Skeleton className="h-9 w-[200px]" />
      </div>
      
      {/* Course Info Skeleton */}
      <div className="mb-6">
        <Skeleton className="h-10 w-[300px] mb-3" />
      </div>
      
      {/* Table Skeleton */}
      <Card>
        <CardHeader className="pb-4">
          <Skeleton className="h-7 w-[200px]" />
        </CardHeader>
        <CardContent className="p-0">
          <Skeleton className="h-[400px] w-full" />
        </CardContent>
      </Card>
    </Container>
  );
};

const CourseGroupsPage = () => {
  const { loading } = useFapData();
  const { courseName, groupName, members, currentRollNumber } = useCourseGroups();
  
  if (loading) {
    return <GroupsSkeleton />;
  }
  
  return (
    <Fragment>
      {/* Course Information */}
      <Container className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
              <GraduationCap className="text-primary h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-0.5">{courseName}</h2>
              <p className="text-sm text-muted-foreground">
                Group <span className="font-semibold text-primary">{groupName}</span>
              </p>
            </div>
          </div>
          
          <div className="md:ml-auto">
            <div className="text-sm text-muted-foreground flex items-center">
              <span>Total: </span>
              <span className="font-medium ml-1">{members.length} students</span>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Members Table */}
      <Container>
        <Card>
          <CardHeader>
            <CardTitle>Group Members</CardTitle>
            <CardDescription>
              Students enrolled in {groupName} group for {courseName}
            </CardDescription>
          </CardHeader>
          
          <CardTable>
            <ScrollArea>
              <Table>
                <TableHeader>
                  <TableRow className="bg-accent/60">
                    <TableHead className="w-14 h-10">No.</TableHead>
                    <TableHead className="min-w-28 h-10">Roll Number</TableHead>
                    <TableHead className="min-w-28 h-10">Surname</TableHead>
                    <TableHead className="min-w-28 h-10">Middle Name</TableHead>
                    <TableHead className="min-w-28 h-10">Given Name</TableHead>
                    <TableHead className="min-w-60 h-10">Full Name</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {members.map((member) => (
                    <TableRow 
                      key={member.id} 
                      className={cn(
                        "hover:bg-accent/50",
                        currentRollNumber === member.rollNumber.toLowerCase() && "bg-primary/10"
                      )}
                    >
                      <TableCell className="text-sm text-foreground font-normal">
                        {member.id}
                      </TableCell>
                      <TableCell className="text-sm text-primary font-semibold">
                        {member.rollNumber}
                      </TableCell>
                      <TableCell className="text-sm text-foreground font-medium">
                        {member.surname}
                      </TableCell>
                      <TableCell className="text-sm text-foreground font-medium">
                        {member.middleName}
                      </TableCell>
                      <TableCell className="text-sm text-foreground font-medium">
                        {member.givenName}
                      </TableCell>
                      <TableCell className="text-sm text-foreground">
                        <div className="flex items-center">
                          <div className="size-6 rounded-full bg-secondary/30 flex items-center justify-center mr-2">
                            <User className="h-3.5 w-3.5 text-secondary-foreground" />
                          </div>
                          {member.fullName}
                          {currentRollNumber === member.rollNumber.toLowerCase() && (
                            <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                              You
                            </span>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardTable>
        </Card>
      </Container>
    </Fragment>
  );
};

export { CourseGroupsPage }; 