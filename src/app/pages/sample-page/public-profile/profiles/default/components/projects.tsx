import { AvatarGroup } from '@/app/partials/common/avatar-group';
import { DropdownMenu1 } from '@/app/partials/dropdown-menu/dropdown-menu-1';
import { DropdownMenu2 } from '@/app/partials/dropdown-menu/dropdown-menu-2';
import { EllipsisVertical } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Progress } from '@/app/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';

interface IProjectsItem {
  name: string;
  team: {
    group: Array<{ filename?: string; fallback?: string; variant?: string }>;
    more?: {
      number: number;
      variant: string;
    };
  };
  dueDate: string;
  progress: {
    variant: string;
    value: number;
  };
}
type IProjectsItems = Array<IProjectsItem>;

const Projects = () => {
  const items: IProjectsItems = [
    {
      name: 'Acme software development',
      team: {
        group: [
          { filename: '300-4.png' },
          { filename: '300-1.png' },
          { filename: '300-2.png' },
        ],
        more: {
          number: 3,
          variant: 'text-white ring-background bg-green-500',
        },
      },
      dueDate: '24 Aug, 2024',
      progress: {
        variant: 'bg-primary',
        value: 60,
      },
    },
    {
      name: 'Strategic Partnership Deal',
      team: {
        group: [
          { filename: '300-1.png' },
          { filename: '300-2.png' },
          {
            fallback: 'M',
            variant:
              'text-destructive-foreground ring-background bg-destructive',
          },
        ],
      },
      dueDate: '10 Sep, 2024',
      progress: {
        variant: 'bg-secondary',
        value: 100,
      },
    },
    {
      name: 'Client Onboarding',
      team: {
        group: [{ filename: '300-20.png' }, { filename: '300-7.png' }],
      },
      dueDate: '19 Sep, 2024',
      progress: {
        variant: 'bg-primary',
        value: 20,
      },
    },
    {
      name: 'Widget Supply Agreement',
      team: {
        group: [
          { filename: '300-6.png' },
          { filename: '300-23.png' },
          { filename: '300-12.png' },
        ],
        more: {
          number: 1,
          variant: 'text-primary-foreground ring-background bg-primary',
        },
      },
      dueDate: '5 May, 2024',
      progress: {
        variant: 'bg-green-500',
        value: 100,
      },
    },
    {
      name: 'Project X Redesign',
      team: {
        group: [
          { filename: '300-2.png' },
          { filename: '300-15.png' },
          { filename: '300-18.png' },
        ],
        more: {
          number: 2,
          variant: 'text-white ring-background bg-green-500',
        },
      },
      dueDate: '1 Feb, 2025',
      progress: {
        variant: 'bg-primary',
        value: 80,
      },
    },
  ];

  const renderItem = (item: IProjectsItem, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell className="text-start py-2">
          <Link
            to="#"
            className="text-sm font-medium text-mono hover:text-primary"
          >
            {item.name}
          </Link>
        </TableCell>
        <TableCell>
          <Progress
            value={item.progress.value}
            indicatorClassName={item.progress.variant}
            className="h-1"
          />
        </TableCell>
        <TableCell>
          <div className="flex justify-end rtl:justify-start shrink-0">
            <AvatarGroup group={item.team.group} more={item.team.more} />
          </div>
        </TableCell>
        <TableCell className="text-end text-sm font-medium text-secondary-foreground">
          {item.dueDate}
        </TableCell>
        <TableCell className="text-start">
          <DropdownMenu2
            trigger={
              <Button variant="ghost" mode="icon">
                <EllipsisVertical />
              </Button>
            }
          />
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
        <DropdownMenu1
          trigger={
            <Button variant="ghost" mode="icon">
              <EllipsisVertical />
            </Button>
          }
        />
      </CardHeader>
      <CardContent className="kt-scrollable-x-auto p-0">
        <Table>
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead className="min-w-52 font-normal! text-secondary-foreground! h-10">
                Project Name
              </TableHead>
              <TableHead className="min-w-40 font-normal! text-secondary-foreground! h-10">
                Progress
              </TableHead>
              <TableHead className="text-end min-w-32 font-normal! text-secondary-foreground! h-10">
                People
              </TableHead>
              <TableHead className="text-end min-w-32 font-normal! text-secondary-foreground! h-10">
                Due Date
              </TableHead>
              <TableHead className="w-[30px] h-10"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => {
              return renderItem(item, index);
            })}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-center">
        <Button mode="link" underlined="dashed" asChild>
          <Link to="/public-profile/projects/3-columns">All Projects</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { Projects, type IProjectsItem, type IProjectsItems };
