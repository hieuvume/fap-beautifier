'use client';

import { useMemo, useState } from 'react';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { RiCheckboxCircleFill } from '@remixicon/react';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  Row,
  RowSelectionState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { EllipsisVertical, Filter, Search, Settings2, X } from 'lucide-react';
import { Link } from 'react-router';
import { toast } from 'sonner';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { useCopyToClipboard } from '@/app/hooks/use-copy-to-clipboard';
import { Alert, AlertIcon, AlertTitle } from '@/app/components/ui/alert';
import { Badge, BadgeDot } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardFooter,
  CardHeader,
  CardHeading,
  CardTable,
  CardToolbar,
} from '@/app/components/ui/card';
import { Checkbox } from '@/app/components/ui/checkbox';
import { DataGrid, useDataGrid } from '@/app/components/ui/data-grid';
import { DataGridColumnHeader } from '@/app/components/ui/data-grid-column-header';
import { DataGridColumnVisibility } from '@/app/components/ui/data-grid-column-visibility';
import { DataGridPagination } from '@/app/components/ui/data-grid-pagination';
import {
  DataGridTable,
  DataGridTableRowSelect,
  DataGridTableRowSelectAll,
} from '@/app/components/ui/data-grid-table';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/components/ui/popover';
import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';
import { Switch } from '@/app/components/ui/switch';

interface MemberData {
  avatar: string;
  name: string;
  tasks: string;
}

interface LocationData {
  name: string;
  flag: string;
}

interface StatusData {
  label: string;
  variant:
    | 'secondary'
    | 'primary'
    | 'destructive'
    | 'success'
    | 'info'
    | 'mono'
    | 'warning'
    | null
    | undefined;
}

interface IData {
  id: string;
  member: MemberData;
  location: LocationData;
  status: StatusData;
  recentlyActivity: string;
}

const data: IData[] = [
  {
    id: '1',
    member: {
      avatar: '300-3.png',
      name: 'Tyler Hero',
      tasks: '26',
    },
    location: {
      name: 'Estonia',
      flag: 'estonia.svg',
    },
    status: {
      label: 'In Office',
      variant: 'success',
    },
    recentlyActivity: 'Current session',
  },
  {
    id: '2',
    member: {
      avatar: '300-2.png',
      name: 'Esther Howard',
      tasks: '639',
    },
    location: {
      name: 'Malaysia',
      flag: 'malaysia.svg',
    },
    status: {
      label: 'On Leave',
      variant: 'destructive',
    },
    recentlyActivity: 'Week ago',
  },
  {
    id: '3',
    member: {
      avatar: '300-11.png',
      name: 'Jacob Jones',
      tasks: '125',
    },
    location: {
      name: 'Ukraine',
      flag: 'ukraine.svg',
    },
    status: {
      label: 'Remote',
      variant: 'primary',
    },
    recentlyActivity: 'Today, 9:53 am',
  },
  {
    id: '4',
    member: {
      avatar: '300-2.png',
      name: 'Cody Fisher',
      tasks: '81',
    },
    location: {
      name: 'Canada',
      flag: 'canada.svg',
    },
    status: {
      label: 'On Leave',
      variant: 'destructive',
    },
    recentlyActivity: 'Current session',
  },
  {
    id: '5',
    member: {
      avatar: '300-5.png',
      name: 'Leslie Alexander',
      tasks: '203',
    },
    location: {
      name: 'India',
      flag: 'india.svg',
    },
    status: {
      label: 'Remote',
      variant: 'primary',
    },
    recentlyActivity: 'Month ago',
  },
  {
    id: '6',
    member: {
      avatar: '300-6.png',
      name: 'Brooklyn Simmons',
      tasks: '45',
    },
    location: {
      name: 'Spain',
      flag: 'spain.svg',
    },
    status: {
      label: 'In Office',
      variant: 'success',
    },
    recentlyActivity: 'Today, 3:45 pm',
  },
  {
    id: '7',
    member: {
      avatar: '300-7.png',
      name: 'Darlene Robertson',
      tasks: '108',
    },
    location: {
      name: 'Germany',
      flag: 'germany.svg',
    },
    status: {
      label: 'On Leave',
      variant: 'destructive',
    },
    recentlyActivity: '2 days ago',
  },
  {
    id: '8',
    member: {
      avatar: '300-8.png',
      name: 'Jerome Bell',
      tasks: '91',
    },
    location: {
      name: 'France',
      flag: 'france.svg',
    },
    status: {
      label: 'Remote',
      variant: 'primary',
    },
    recentlyActivity: 'Week ago',
  },
  {
    id: '9',
    member: {
      avatar: '300-9.png',
      name: 'Devon Lane',
      tasks: '56',
    },
    location: {
      name: 'Japan',
      flag: 'japan.svg',
    },
    status: {
      label: 'In Office',
      variant: 'success',
    },
    recentlyActivity: 'Today, 11:00 am',
  },
  {
    id: '10',
    member: {
      avatar: '300-10.png',
      name: 'Jane Cooper',
      tasks: '47',
    },
    location: {
      name: 'South Korea',
      flag: 'south-korea.svg',
    },
    status: {
      label: 'On Leave',
      variant: 'destructive',
    },
    recentlyActivity: '3 days ago',
  },
  {
    id: '11',
    member: {
      avatar: '300-12.png',
      name: 'Ronald Richards',
      tasks: '64',
    },
    location: {
      name: 'Brazil',
      flag: 'brazil.svg',
    },
    status: {
      label: 'Remote',
      variant: 'primary',
    },
    recentlyActivity: 'Month ago',
  },
  {
    id: '12',
    member: {
      avatar: '300-13.png',
      name: 'Kathryn Murphy',
      tasks: '78',
    },
    location: {
      name: 'United Kingdom',
      flag: 'united-kingdom.svg',
    },
    status: {
      label: 'In Office',
      variant: 'success',
    },
    recentlyActivity: 'Today, 10:30 am',
  },
  {
    id: '13',
    member: {
      avatar: '300-14.png',
      name: 'Jacob Smith',
      tasks: '92',
    },
    location: {
      name: 'Australia',
      flag: 'australia.svg',
    },
    status: {
      label: 'On Leave',
      variant: 'destructive',
    },
    recentlyActivity: 'Week ago',
  },
  {
    id: '14',
    member: {
      avatar: '300-15.png',
      name: 'Kristin Watson',
      tasks: '102',
    },
    location: {
      name: 'Italy',
      flag: 'italy.svg',
    },
    status: {
      label: 'Remote',
      variant: 'primary',
    },
    recentlyActivity: 'Today, 8:00 am',
  },
  {
    id: '15',
    member: {
      avatar: '300-16.png',
      name: 'Cameron Williamson',
      tasks: '58',
    },
    location: {
      name: 'Russia',
      flag: 'russia.svg',
    },
    status: {
      label: 'In Office',
      variant: 'success',
    },
    recentlyActivity: '2 days ago',
  },
  {
    id: '16',
    member: {
      avatar: '300-17.png',
      name: 'Courtney Henry',
      tasks: '75',
    },
    location: {
      name: 'India',
      flag: 'india.svg',
    },
    status: {
      label: 'On Leave',
      variant: 'destructive',
    },
    recentlyActivity: 'Month ago',
  },
  {
    id: '17',
    member: {
      avatar: '300-18.png',
      name: 'Ralph Edwards',
      tasks: '109',
    },
    location: {
      name: 'Spain',
      flag: 'spain.svg',
    },
    status: {
      label: 'Remote',
      variant: 'primary',
    },
    recentlyActivity: 'Week ago',
  },
  {
    id: '18',
    member: {
      avatar: '300-19.png',
      name: 'Arlene McCoy',
      tasks: '84',
    },
    location: {
      name: 'Canada',
      flag: 'canada.svg',
    },
    status: {
      label: 'In Office',
      variant: 'success',
    },
    recentlyActivity: 'Today, 1:00 pm',
  },
  {
    id: '19',
    member: {
      avatar: '300-20.png',
      name: 'Theresa Webb',
      tasks: '56',
    },
    location: {
      name: 'Malaysia',
      flag: 'malaysia.svg',
    },
    status: {
      label: 'On Leave',
      variant: 'destructive',
    },
    recentlyActivity: 'Week ago',
  },
  {
    id: '20',
    member: {
      avatar: '300-21.png',
      name: 'Guy Hawkins',
      tasks: '68',
    },
    location: {
      name: 'Estonia',
      flag: 'estonia.svg',
    },
    status: {
      label: 'Remote',
      variant: 'primary',
    },
    recentlyActivity: 'Today, 3:00 pm',
  },
  {
    id: '21',
    member: {
      avatar: '300-22.png',
      name: 'Floyd Miles',
      tasks: '43',
    },
    location: {
      name: 'Ukraine',
      flag: 'ukraine.svg',
    },
    status: {
      label: 'In Office',
      variant: 'success',
    },
    recentlyActivity: 'Today, 11:45 am',
  },
  {
    id: '22',
    member: {
      avatar: '300-23.png',
      name: 'Devon Lane',
      tasks: '91',
    },
    location: {
      name: 'India',
      flag: 'india.svg',
    },
    status: {
      label: 'On Leave',
      variant: 'destructive',
    },
    recentlyActivity: 'Month ago',
  },
  {
    id: '23',
    member: {
      avatar: '300-24.png',
      name: 'Ronald Richards',
      tasks: '78',
    },
    location: {
      name: 'France',
      flag: 'france.svg',
    },
    status: {
      label: 'Remote',
      variant: 'primary',
    },
    recentlyActivity: 'Week ago',
  },
  {
    id: '24',
    member: {
      avatar: '300-25.png',
      name: 'Kathryn Murphy',
      tasks: '85',
    },
    location: {
      name: 'Japan',
      flag: 'japan.svg',
    },
    status: {
      label: 'In Office',
      variant: 'success',
    },
    recentlyActivity: 'Today, 4:00 pm',
  },
  {
    id: '25',
    member: {
      avatar: '300-26.png',
      name: 'Jacob Smith',
      tasks: '92',
    },
    location: {
      name: 'South Korea',
      flag: 'south-korea.svg',
    },
    status: {
      label: 'On Leave',
      variant: 'destructive',
    },
    recentlyActivity: 'Week ago',
  },
  {
    id: '26',
    member: {
      avatar: '300-27.png',
      name: 'Kristin Watson',
      tasks: '102',
    },
    location: {
      name: 'Italy',
      flag: 'italy.svg',
    },
    status: {
      label: 'Remote',
      variant: 'primary',
    },
    recentlyActivity: 'Today, 8:00 am',
  },
  {
    id: '27',
    member: {
      avatar: '300-28.png',
      name: 'Cameron Williamson',
      tasks: '58',
    },
    location: {
      name: 'Russia',
      flag: 'russia.svg',
    },
    status: {
      label: 'In Office',
      variant: 'success',
    },
    recentlyActivity: '2 days ago',
  },
  {
    id: '28',
    member: {
      avatar: '300-29.png',
      name: 'Courtney Henry',
      tasks: '75',
    },
    location: {
      name: 'Spain',
      flag: 'spain.svg',
    },
    status: {
      label: 'On Leave',
      variant: 'destructive',
    },
    recentlyActivity: 'Month ago',
  },
  {
    id: '29',
    member: {
      avatar: '300-30.png',
      name: 'Ralph Edwards',
      tasks: '109',
    },
    location: {
      name: 'Canada',
      flag: 'canada.svg',
    },
    status: {
      label: 'Remote',
      variant: 'primary',
    },
    recentlyActivity: 'Week ago',
  },
  {
    id: '30',
    member: {
      avatar: '300-31.png',
      name: 'Arlene McCoy',
      tasks: '84',
    },
    location: {
      name: 'Malaysia',
      flag: 'malaysia.svg',
    },
    status: {
      label: 'In Office',
      variant: 'success',
    },
    recentlyActivity: 'Today, 1:00 pm',
  },
  {
    id: '31',
    member: {
      avatar: '300-32.png',
      name: 'Theresa Webb',
      tasks: '56',
    },
    location: {
      name: 'Estonia',
      flag: 'estonia.svg',
    },
    status: {
      label: 'On Leave',
      variant: 'destructive',
    },
    recentlyActivity: 'Week ago',
  },
  {
    id: '32',
    member: {
      avatar: '300-33.png',
      name: 'Guy Hawkins',
      tasks: '68',
    },
    location: {
      name: 'Ukraine',
      flag: 'ukraine.svg',
    },
    status: {
      label: 'Remote',
      variant: 'primary',
    },
    recentlyActivity: 'Today, 3:00 pm',
  },
  {
    id: '33',
    member: {
      avatar: '300-34.png',
      name: 'Floyd Miles',
      tasks: '43',
    },
    location: {
      name: 'India',
      flag: 'india.svg',
    },
    status: {
      label: 'In Office',
      variant: 'success',
    },
    recentlyActivity: 'Today, 11:45 am',
  },
];

function ActionsCell({ row }: { row: Row<IData> }) {
  const { copyToClipboard } = useCopyToClipboard();
  const handleCopyId = () => {
    copyToClipboard(String(row.original.id));
    const message = `Member ID successfully copied: ${row.original.id}`;
    toast.custom(
      (t) => (
        <Alert
          variant="mono"
          icon="success"
          close={false}
          onClose={() => toast.dismiss(t)}
        >
          <AlertIcon>
            <RiCheckboxCircleFill />
          </AlertIcon>
          <AlertTitle>{message}</AlertTitle>
        </Alert>
      ),
      {
        position: 'top-center',
      },
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="size-7" mode="icon" variant="ghost">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end">
        <DropdownMenuItem onClick={() => {}}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyId}>Copy ID</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={() => {}}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const Members = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'recentlyActivity', desc: true },
  ]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Filter by status
      const matchesStatus =
        !selectedStatuses?.length ||
        selectedStatuses.includes(item.status.label);

      // Filter by search query (case-insensitive)
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        item.member.name.toLowerCase().includes(searchLower) ||
        item.member.tasks.toLowerCase().includes(searchLower) ||
        item.location.name.toLowerCase().includes(searchLower);

      return matchesStatus && matchesSearch;
    });
  }, [searchQuery, selectedStatuses]);

  const statusCounts = useMemo(() => {
    return data.reduce(
      (acc, item) => {
        acc[item.status.label] = (acc[item.status.label] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
  }, []);

  const handleStatusChange = (checked: boolean, value: string) => {
    setSelectedStatuses((prev = []) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value),
    );
  };

  const columns = useMemo<ColumnDef<IData>[]>(
    () => [
      {
        accessorKey: 'id',
        accessorFn: (row) => row.id,
        header: () => <DataGridTableRowSelectAll />,
        cell: ({ row }) => <DataGridTableRowSelect row={row} />,
        enableSorting: false,
        enableHiding: false,
        enableResizing: false,
        size: 51,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'member',
        accessorFn: (row) => row.member,
        header: ({ column }) => (
          <DataGridColumnHeader title="Member" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-2.5">
            <div className="shrink-0">
              <img
                src={toAbsoluteUrl(
                  `/media/avatars/${row.original.member.avatar}`,
                )}
                className="h-9 rounded-full"
                alt="image"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <Link
                className="leading-none font-medium text-sm text-mono hover:text-primary"
                to="#"
              >
                {row.original.member.name}
              </Link>
              <span className="text-sm text-secondary-foreground font-normal">
                {row.original.member.tasks} tasks
              </span>
            </div>
          </div>
        ),
        enableSorting: true,
        size: 250,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'location',
        accessorFn: (row) => row.location,
        header: ({ column }) => (
          <DataGridColumnHeader title="Location" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-1.5">
            <img
              src={toAbsoluteUrl(`/media/flags/${row.original.location.flag}`)}
              className="h-4 rounded-full"
              alt="image"
            />
            <span className="leading-none text-foreground font-normal">
              {row.original.location.name}
            </span>
          </div>
        ),
        enableSorting: true,
        size: 140,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'status',
        accessorFn: (row) => row.status,
        header: ({ column }) => (
          <DataGridColumnHeader title="Status" column={column} />
        ),
        cell: ({ row }) => (
          <Badge
            size="lg"
            variant={row.original.status.variant}
            appearance="outline"
            shape="circle"
          >
            <BadgeDot /> {row.original.status.label}
          </Badge>
        ),
        enableSorting: true,
        size: 120,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'recentlyActivity',
        accessorFn: (row) => row.recentlyActivity,
        header: ({ column }) => (
          <DataGridColumnHeader title="Recent Activity" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-secondary-foreground font-normal">
            {row.original.recentlyActivity}
          </span>
        ),
        enableSorting: true,
        size: 160,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'actions',
        header: '',
        cell: ({ row }) => <ActionsCell row={row} />,
        enableSorting: false,
        size: 60,
        meta: {
          headerClassName: '',
        },
      },
    ],
    [],
  );

  const table = useReactTable({
    columns,
    data: filteredData,
    pageCount: Math.ceil((filteredData?.length || 0) / pagination.pageSize),
    getRowId: (row: IData) => String(row.id),
    state: {
      pagination,
      sorting,
      rowSelection,
    },
    columnResizeMode: 'onChange',
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const Toolbar = () => {
    const { table } = useDataGrid();

    return (
      <CardToolbar>
        <div className="flex flex-wrap items-center gap-2.5">
          <Label htmlFor="auto-update" className="text-sm">
            Active Users
          </Label>
          <Switch size="sm" id="auto-update" defaultChecked />
        </div>
        <DataGridColumnVisibility
          table={table}
          trigger={
            <Button variant="outline">
              <Settings2 />
              Columns
            </Button>
          }
        />
      </CardToolbar>
    );
  };

  return (
    <DataGrid
      table={table}
      recordCount={filteredData?.length || 0}
      tableLayout={{
        columnsPinnable: true,
        columnsMovable: true,
        columnsVisibility: true,
        cellBorder: true,
      }}
    >
      <Card>
        <CardHeader>
          <CardHeading>
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <Search className="size-4 text-muted-foreground absolute start-3 top-1/2 -translate-y-1/2" />
                <Input
                  placeholder="Search Members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="ps-9 w-40"
                />
                {searchQuery.length > 0 && (
                  <Button
                    mode="icon"
                    variant="ghost"
                    className="absolute end-1.5 top-1/2 -translate-y-1/2 h-6 w-6"
                    onClick={() => setSearchQuery('')}
                  >
                    <X />
                  </Button>
                )}
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <Filter />
                    Status
                    {selectedStatuses.length > 0 && (
                      <Badge size="sm" appearance="stroke">
                        {selectedStatuses.length}
                      </Badge>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-40 p-3" align="start">
                  <div className="space-y-3">
                    <div className="text-xs font-medium text-muted-foreground">
                      Filters
                    </div>
                    <div className="space-y-3">
                      {Object.keys(statusCounts).map((status) => (
                        <div key={status} className="flex items-center gap-2.5">
                          <Checkbox
                            id={status}
                            checked={selectedStatuses.includes(status)}
                            onCheckedChange={(checked) =>
                              handleStatusChange(checked === true, status)
                            }
                          />
                          <Label
                            htmlFor={status}
                            className="grow flex items-center justify-between font-normal gap-1.5"
                          >
                            {status}
                            <span className="text-muted-foreground">
                              {statusCounts[status]}
                            </span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </CardHeading>
          <Toolbar />
        </CardHeader>
        <CardTable>
          <ScrollArea>
            <DataGridTable />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardTable>
        <CardFooter>
          <DataGridPagination />
        </CardFooter>
      </Card>
    </DataGrid>
  );
};

export { Members };
