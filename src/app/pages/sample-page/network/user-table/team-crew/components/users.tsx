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
import { Link } from 'react-router-dom';
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

interface IData {
  id: string;
  user: {
    avatar: string;
    userName: string;
    userGmail: string;
  };
  role: string;
  status: {
    label: string;
    color:
      | 'secondary'
      | 'primary'
      | 'destructive'
      | 'success'
      | 'info'
      | 'mono'
      | 'warning'
      | null
      | undefined;
  };
  location: string;
  flag: string;
  activity: string;
}

const data: IData[] = [
  {
    id: '1',
    user: {
      avatar: '300-1.png',
      userName: 'Esther Howard',
      userGmail: 'esther.howard@gmail.com',
    },
    role: 'Editor',
    status: {
      label: 'On Leave',
      color: 'destructive',
    },
    location: 'Malaysia',
    flag: 'malaysia.svg',
    activity: 'Week ago',
  },
  {
    id: '2',
    user: {
      avatar: '300-2.png',
      userName: 'Cody Fisher',
      userGmail: 'cody.fisher@gmail.com',
    },
    role: 'Manager',
    status: {
      label: 'Remote',
      color: 'primary',
    },
    location: 'Canada',
    flag: 'canada.svg',
    activity: 'Current session',
  },
  {
    id: '3',
    user: {
      avatar: '300-3.png',
      userName: 'Tyler Hero',
      userGmail: 'tyler.hero@gmail.com',
    },
    role: 'Super Admin',
    status: {
      label: 'In Office',
      color: 'success',
    },
    location: 'Estonia',
    flag: 'estonia.svg',
    activity: 'Current session',
  },
  {
    id: '4',
    user: {
      avatar: '300-4.png',
      userName: 'Robert Fox',
      userGmail: 'robert.fox@gmail.com',
    },
    role: 'Developer',
    status: {
      label: 'In Office',
      color: 'success',
    },
    location: 'USA',
    flag: 'united-states.svg',
    activity: 'Today, 15:02',
  },
  {
    id: '5',
    user: {
      avatar: '300-5.png',
      userName: 'Leslie Alexander',
      userGmail: 'leslie.alexander@gmail.com',
    },
    role: 'Super Admin',
    status: {
      label: 'In Office',
      color: 'success',
    },
    location: 'India',
    flag: 'india.svg',
    activity: 'Month ago',
  },
  {
    id: '6',
    user: {
      avatar: '300-6.png',
      userName: 'John Smith',
      userGmail: 'john.smith@gmail.com',
    },
    role: 'Designer',
    status: {
      label: 'On Leave',
      color: 'destructive',
    },
    location: 'Australia',
    flag: 'australia.svg',
    activity: 'Yesterday, 14:23',
  },
  {
    id: '7',
    user: {
      avatar: '300-7.png',
      userName: 'Emily Johnson',
      userGmail: 'emily.johnson@gmail.com',
    },
    role: 'Developer',
    status: {
      label: 'Remote',
      color: 'primary',
    },
    location: 'France',
    flag: 'france.svg',
    activity: 'Today, 10:12',
  },
  {
    id: '8',
    user: {
      avatar: '300-8.png',
      userName: 'Michael Brown',
      userGmail: 'michael.brown@gmail.com',
    },
    role: 'QA Engineer',
    status: {
      label: 'In Office',
      color: 'success',
    },
    location: 'Germany',
    flag: 'germany.svg',
    activity: 'Today, 09:45',
  },
  {
    id: '9',
    user: {
      avatar: '300-10.png',
      userName: 'Olivia Martinez',
      userGmail: 'olivia.martinez@gmail.com',
    },
    role: 'Product Manager',
    status: {
      label: 'Remote',
      color: 'primary',
    },
    location: 'Italy',
    flag: 'italy.svg',
    activity: 'Current session',
  },
  {
    id: '10',
    user: {
      avatar: '300-11.png',
      userName: 'Jacob Jones',
      userGmail: 'jacob.jones@gmail.com',
    },
    role: 'Analyst',
    status: {
      label: 'Remote',
      color: 'primary',
    },
    location: 'Ukraine',
    flag: 'ukraine.svg',
    activity: '',
  },
  {
    id: '11',
    user: {
      avatar: '300-12.png',
      userName: 'Daniel Wilson',
      userGmail: 'daniel.wilson@gmail.com',
    },
    role: 'CTO',
    status: {
      label: 'In Office',
      color: 'success',
    },
    location: 'Japan',
    flag: 'japan.svg',
    activity: 'Yesterday, 17:45',
  },
  {
    id: '12',
    user: {
      avatar: '300-13.png',
      userName: 'Sophia Lee',
      userGmail: 'sophia.lee@gmail.com',
    },
    role: 'HR',
    status: {
      label: 'On Leave',
      color: 'destructive',
    },
    location: 'South Korea',
    flag: 'south-korea.svg',
    activity: 'Week ago',
  },
  {
    id: '13',
    user: {
      avatar: '300-14.png',
      userName: 'James Miller',
      userGmail: 'james.miller@gmail.com',
    },
    role: 'DevOps',
    status: {
      label: 'In Office',
      color: 'success',
    },
    location: 'Russia',
    flag: 'russia.svg',
    activity: 'Today, 11:30',
  },
  {
    id: '14',
    user: {
      avatar: '300-15.png',
      userName: 'Linda Scott',
      userGmail: 'linda.scott@gmail.com',
    },
    role: 'Designer',
    status: {
      label: 'Remote',
      color: 'primary',
    },
    location: 'Netherlands',
    flag: 'netherlands.svg',
    activity: 'Today, 13:22',
  },
  {
    id: '15',
    user: {
      avatar: '300-16.png',
      userName: 'Anthony Thomas',
      userGmail: 'anthony.thomas@gmail.com',
    },
    role: 'Engineer',
    status: {
      label: 'In Office',
      color: 'success',
    },
    location: 'Sweden',
    flag: 'sweden.svg',
    activity: 'Month ago',
  },
  {
    id: '16',
    user: {
      avatar: '300-17.png',
      userName: 'Christopher Martinez',
      userGmail: 'christopher.martinez@gmail.com',
    },
    role: 'Analyst',
    status: {
      label: 'On Leave',
      color: 'destructive',
    },
    location: 'Mexico',
    flag: 'mexico.svg',
    activity: 'Yesterday, 10:50',
  },
  {
    id: '17',
    user: {
      avatar: '300-18.png',
      userName: 'Ronald Richards',
      userGmail: 'ronald.richards@gmail.com',
    },
    role: 'Manager',
    status: {
      label: 'Remote',
      color: 'primary',
    },
    location: 'Uruguay',
    flag: 'uruguay.svg',
    activity: 'Current session',
  },
  {
    id: '18',
    user: {
      avatar: '300-19.png',
      userName: 'Jennifer Thomas',
      userGmail: 'jennifer.thomas@gmail.com',
    },
    role: 'HR',
    status: {
      label: 'In Office',
      color: 'success',
    },
    location: 'Brazil',
    flag: 'brazil.svg',
    activity: 'Today, 14:20',
  },
  {
    id: '19',
    user: {
      avatar: '300-20.png',
      userName: 'Guy Hawkins',
      userGmail: 'guy.hawkins@gmail.com',
    },
    role: 'HR',
    status: {
      label: 'Remote',
      color: 'primary',
    },
    location: 'Turkey',
    flag: 'turkey.svg',
    activity: 'Current session',
  },
  {
    id: '20',
    user: {
      avatar: '300-21.png',
      userName: 'Natalie Watson',
      userGmail: 'natalie.watson@gmail.com',
    },
    role: 'Editor',
    status: {
      label: 'On Leave',
      color: 'destructive',
    },
    location: 'Finland',
    flag: 'finland.svg',
    activity: 'Week ago',
  },
  {
    id: '21',
    user: {
      avatar: '300-22.png',
      userName: 'Marvin McKinney',
      userGmail: 'marvin.mckenney@gmail.com',
    },
    role: 'Viewer',
    status: {
      label: 'In Office',
      color: 'success',
    },
    location: 'Latvia',
    flag: 'latvia.svg',
    activity: 'Week ago',
  },
  {
    id: '22',
    user: {
      avatar: '300-23.png',
      userName: 'Theresa Webb',
      userGmail: 'theresa.webb@gmail.com',
    },
    role: 'Admin',
    status: {
      label: 'On Leave',
      color: 'destructive',
    },
    location: 'Brazil',
    flag: 'brazil.svg',
    activity: 'Current session',
  },
  {
    id: '23',
    user: {
      avatar: '300-24.png',
      userName: 'Brian Ross',
      userGmail: 'brian.ross@gmail.com',
    },
    role: 'Designer',
    status: {
      label: 'Remote',
      color: 'primary',
    },
    location: 'Norway',
    flag: 'norway.svg',
    activity: 'Today, 08:30',
  },
  {
    id: '24',
    user: {
      avatar: '300-25.png',
      userName: 'Donald Coleman',
      userGmail: 'donald.coleman@gmail.com',
    },
    role: 'Manager',
    status: {
      label: 'In Office',
      color: 'success',
    },
    location: 'Ireland',
    flag: 'ireland.svg',
    activity: 'Yesterday, 12:00',
  },
  {
    id: '25',
    user: {
      avatar: '300-26.png',
      userName: 'Jason Reed',
      userGmail: 'jason.reed@gmail.com',
    },
    role: 'Engineer',
    status: {
      label: 'In Office',
      color: 'success',
    },
    location: 'Belgium',
    flag: 'belgium.svg',
    activity: 'Month ago',
  },
  {
    id: '26',
    user: {
      avatar: '300-27.png',
      userName: 'Paul Walker',
      userGmail: 'paul.walker@gmail.com',
    },
    role: 'Developer',
    status: {
      label: 'On Leave',
      color: 'destructive',
    },
    location: 'Denmark',
    flag: 'denmark.svg',
    activity: 'Yesterday, 16:00',
  },
  {
    id: '27',
    user: {
      avatar: '300-28.png',
      userName: 'Andrew Mitchell',
      userGmail: 'andrew.mitchell@gmail.com',
    },
    role: 'Product Manager',
    status: {
      label: 'Remote',
      color: 'primary',
    },
    location: 'Portugal',
    flag: 'portugal.svg',
    activity: 'Today, 12:45',
  },
  {
    id: '28',
    user: {
      avatar: '300-29.png',
      userName: 'Kevin Evans',
      userGmail: 'kevin.evans@gmail.com',
    },
    role: 'Support',
    status: {
      label: 'In Office',
      color: 'success',
    },
    location: 'Austria',
    flag: 'austria.svg',
    activity: 'Today, 14:00',
  },
  {
    id: '29',
    user: {
      avatar: '300-30.png',
      userName: 'Steven Harris',
      userGmail: 'steven.harris@gmail.com',
    },
    role: 'Admin',
    status: {
      label: 'Remote',
      color: 'primary',
    },
    location: 'Greece',
    flag: 'greece.svg',
    activity: 'Current session',
  },
  {
    id: '30',
    user: {
      avatar: '300-31.png',
      userName: 'Thomas Clark',
      userGmail: 'thomas.clark@gmail.com',
    },
    role: 'Analyst',
    status: {
      label: 'In Office',
      color: 'success',
    },
    location: 'Switzerland',
    flag: 'switzerland.svg',
    activity: 'Today, 11:00',
  },
  {
    id: '31',
    user: {
      avatar: '300-32.png',
      userName: 'Justin Adams',
      userGmail: 'justin.adams@gmail.com',
    },
    role: 'Viewer',
    status: {
      label: 'On Leave',
      color: 'destructive',
    },
    location: 'Czech Republic',
    flag: 'czech-republic.svg',
    activity: 'Yesterday, 15:30',
  },
  {
    id: '32',
    user: {
      avatar: '300-33.png',
      userName: 'Charles Carter',
      userGmail: 'charles.carter@gmail.com',
    },
    role: 'Engineer',
    status: {
      label: 'In Office',
      color: 'success',
    },
    location: 'Hungary',
    flag: 'hungary.svg',
    activity: 'Today, 10:30',
  },
  {
    id: '33',
    user: {
      avatar: '300-34.png',
      userName: 'Jessica Evans',
      userGmail: 'jessica.evans@gmail.com',
    },
    role: 'Designer',
    status: {
      label: 'Remote',
      color: 'primary',
    },
    location: 'Poland',
    flag: 'poland.svg',
    activity: 'Today, 13:45',
  },
];

function ActionsCell({ row }: { row: Row<IData> }) {
  const { copyToClipboard } = useCopyToClipboard();
  const handleCopyId = () => {
    copyToClipboard(String(row.original.id));
    const message = `User ID successfully copied: ${row.original.id}`;
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

const Users = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'users', desc: false },
  ]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string>('latest');

  const filteredData = useMemo(() => {
    let filtered = data;

    // Filter by status
    if (selectedStatuses.length > 0) {
      filtered = filtered.filter((item) =>
        selectedStatuses.includes(item.status.label),
      );
    }

    // Filter by search query (case-insensitive)
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.user.userName.toLowerCase().includes(searchLower) ||
          item.user.userGmail.toLowerCase().includes(searchLower) ||
          item.role.toLowerCase().includes(searchLower) ||
          item.status.label.toLowerCase().includes(searchLower) ||
          item.location.toLowerCase().includes(searchLower) ||
          item.activity.toLowerCase().includes(searchLower),
      );
    }

    // Apply sorting based on sortOrder
    if (sortOrder === 'latest') {
      filtered = [...filtered].sort(
        (a, b) => new Date(b.id).getTime() - new Date(a.id).getTime(),
      );
    } else if (sortOrder === 'older') {
      filtered = [...filtered].sort(
        (a, b) => new Date(a.id).getTime() - new Date(b.id).getTime(),
      );
    } else if (sortOrder === 'oldest') {
      filtered = [...filtered].sort(
        (a, b) => new Date(a.id).getTime() - new Date(b.id).getTime(),
      );
    }

    return filtered;
  }, [searchQuery, selectedStatuses, sortOrder]);

  const statusCounts = useMemo(() => {
    return data.reduce(
      (acc, item) => {
        const status = item.status.label;
        acc[status] = (acc[status] || 0) + 1;
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
        id: 'users',
        accessorFn: (row) => row.user,
        header: ({ column }) => (
          <DataGridColumnHeader title="Member" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-4">
            <img
              src={toAbsoluteUrl(`/media/avatars/${row.original.user.avatar}`)}
              className="rounded-full size-9 shrink-0"
              alt={`${row.original.user.userName}`}
            />
            <div className="flex flex-col gap-0.5">
              <Link
                to="#"
                className="text-sm font-medium text-mono hover:text-primary-active mb-px"
              >
                {row.original.user.userName}
              </Link>
              <Link
                to="#"
                className="text-sm text-secondary-foreground font-normal hover:text-primary-active"
              >
                {row.original.user.userGmail}
              </Link>
            </div>
          </div>
        ),
        enableSorting: true,
        size: 300,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'role',
        accessorFn: (row) => row.role,
        header: ({ column }) => (
          <DataGridColumnHeader title="Role" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-foreground font-normal">
            {row.original.role}
          </span>
        ),
        enableSorting: true,
        size: 180,
        meta: {
          headerClassName: '',
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
            variant={row.original.status.color}
            appearance="outline"
            shape="circle"
          >
            <BadgeDot className={`${row.original.status.color}`} />
            {row.original.status.label}
          </Badge>
        ),
        enableSorting: true,
        size: 180,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'location',
        accessorFn: (row) => row.location,
        header: ({ column }) => (
          <DataGridColumnHeader title="Location" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center text-foreground font-normal gap-1.5">
            <img
              src={toAbsoluteUrl(`/media/flags/${row.original.flag}`)}
              className="rounded-full size-4 shrink-0"
              alt={`${row.original.user.userName}`}
            />
            {row.original.location}
          </div>
        ),
        enableSorting: true,
        size: 180,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'activity',
        accessorFn: (row) => row.activity,
        header: ({ column }) => (
          <DataGridColumnHeader title="Activity" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-foreground font-normal">
            {row.original.activity}
          </span>
        ),
        enableSorting: true,
        size: 180,
        meta: {
          headerClassName: '',
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
        <Button>
          <Settings2 size={16} />
          Filters
        </Button>
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
                  placeholder="Search Users..."
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
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <Filter />
                    Sort Order
                    {sortOrder !== 'latest' && (
                      <Badge size="sm" appearance="stroke">
                        {sortOrder.charAt(0).toUpperCase() + sortOrder.slice(1)}
                      </Badge>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-40 p-3" align="start">
                  <div className="space-y-3">
                    <div className="text-xs font-medium text-muted-foreground">
                      Sort By
                    </div>
                    <div className="space-y-3">
                      {['latest', 'older', 'oldest'].map((order) => (
                        <div key={order} className="flex items-center gap-2.5">
                          <Checkbox
                            id={order}
                            checked={sortOrder === order}
                            onCheckedChange={(checked) =>
                              checked && setSortOrder(order)
                            }
                          />
                          <Label
                            htmlFor={order}
                            className="grow flex items-center justify-between font-normal gap-1.5"
                          >
                            {order.charAt(0).toUpperCase() + order.slice(1)}
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

export { Users };
