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
import {
  Chrome,
  EllipsisVertical,
  Filter,
  Search,
  Settings2,
  X,
} from 'lucide-react';
import { Link } from 'react-router';
import { toast } from 'sonner';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { useCopyToClipboard } from '@/app/hooks/use-copy-to-clipboard';
import { Alert, AlertIcon, AlertTitle } from '@/app/components/ui/alert';
import { Badge } from '@/app/components/ui/badge';
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
    name: string;
  };
  browser: string;
  ipAddress: string;
  location: {
    flag: string;
    name: string;
  };
  activity: string;
}

const data: IData[] = [
  {
    id: '1',
    user: {
      avatar: '300-3.png',
      name: 'Tyler Hero',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '234.0.155.191',
    location: {
      name: 'Estonia',
      flag: 'estonia.svg',
    },
    activity: 'Current session',
  },
  {
    id: '2',
    user: {
      avatar: '300-23.png',
      name: 'Jane Smith',
    },
    browser: 'Chrome on Windows 7',
    ipAddress: '70.218.212.162',
    location: {
      name: 'Malaysia',
      flag: 'malaysia.svg',
    },
    activity: 'Week ago',
  },
  {
    id: '3',
    user: {
      avatar: '300-1.png',
      name: 'Emma Johnson',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '140.92.152.213',
    location: {
      name: 'Ukraine',
      flag: 'ukraine.svg',
    },
    activity: 'Today, 9:53 am',
  },
  {
    id: '4',
    user: {
      avatar: '300-14.png',
      name: 'Michael Brown',
    },
    browser: 'Chrome on Windows 10',
    ipAddress: '214.219.147.46',
    location: {
      name: 'Canada',
      flag: 'canada.svg',
    },
    activity: 'Current session',
  },
  {
    id: '5',
    user: {
      avatar: '300-19.png',
      name: 'Chloe Davis',
    },
    browser: 'Chrome on iOS 14',
    ipAddress: '246.44.68.100',
    location: {
      name: 'India',
      flag: 'india.svg',
    },
    activity: 'Month ago',
  },
  {
    id: '6',
    user: {
      avatar: '300-6.png',
      name: 'William Wilson',
    },
    browser: 'Chrome on Windows 11',
    ipAddress: '233.182.185.28',
    location: {
      name: 'USA',
      flag: 'united-states.svg',
    },
    activity: 'Current session',
  },
  {
    id: '7',
    user: {
      avatar: '300-34.png',
      name: 'Olivia Martin',
    },
    browser: 'Chrome on Android 16',
    ipAddress: '76.216.214.248',
    location: {
      name: 'Turkey',
      flag: 'turkey.svg',
    },
    activity: 'Current session',
  },
  {
    id: '8',
    user: {
      avatar: '300-4.png',
      name: 'Ethan Garcia',
    },
    browser: 'Safari on Mac OS X',
    ipAddress: '102.150.137.255',
    location: {
      name: 'Brasil',
      flag: 'brazil.svg',
    },
    activity: 'Current session',
  },
  {
    id: '9',
    user: {
      avatar: '300-13.png',
      name: 'Ava Rodriguez',
    },
    browser: 'Safari on Mac OS X',
    ipAddress: '75.243.106.80',
    location: {
      name: 'Latvia',
      flag: 'latvia.svg',
    },
    activity: 'Week ago',
  },
  {
    id: '10',
    user: {
      avatar: '300-31.png',
      name: 'Matthew Martinez',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '214.219.147.46',
    location: {
      name: 'Uruguay',
      flag: 'uruguay.svg',
    },
    activity: 'Current session',
  },
  {
    id: '11',
    user: {
      avatar: '300-15.png',
      name: 'Henry Clark',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '192.168.1.2',
    location: {
      name: 'Italy',
      flag: 'italy.svg',
    },
    activity: 'Yesterday',
  },
  {
    id: '12',
    user: {
      avatar: '300-16.png',
      name: 'Amelia Lewis',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '192.168.1.3',
    location: {
      name: 'Spain',
      flag: 'spain.svg',
    },
    activity: '2 days ago',
  },
  {
    id: '13',
    user: {
      avatar: '300-17.png',
      name: 'Lucas Walker',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '192.168.1.4',
    location: {
      name: 'France',
      flag: 'france.svg',
    },
    activity: 'Today, 8:45 am',
  },
  {
    id: '14',
    user: {
      avatar: '300-18.png',
      name: 'Grace Allens',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '192.168.1.5',
    location: {
      name: 'Germany',
      flag: 'germany.svg',
    },
    activity: 'Current session',
  },
  {
    id: '15',
    user: {
      avatar: '300-19.png',
      name: 'Jack Harris',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '192.168.1.6',
    location: {
      name: 'Netherlands',
      flag: 'netherlands.svg',
    },
    activity: 'Week ago',
  },
  {
    id: '16',
    user: {
      avatar: '300-20.png',
      name: 'Charlotte Young',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '192.168.1.7',
    location: {
      name: 'Sweden',
      flag: 'sweden.svg',
    },
    activity: 'Month ago',
  },
  {
    id: '17',
    user: {
      avatar: '300-21.png',
      name: 'Benjamin Harris',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '192.168.1.8',
    location: {
      name: 'Switzerland',
      flag: 'switzerland.svg',
    },
    activity: 'Today, 14:10',
  },
  {
    id: '18',
    user: {
      avatar: '300-22.png',
      name: 'James Martinez',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '192.168.1.9',
    location: {
      name: 'Portugal',
      flag: 'portugal.svg',
    },
    activity: 'Current session',
  },
  {
    id: '19',
    user: {
      avatar: '300-24.png',
      name: 'SAiden King',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '192.168.1.10',
    location: {
      name: 'Norway',
      flag: 'norway.svg',
    },
    activity: '2 days ago',
  },
  {
    id: '20',
    user: {
      avatar: '300-25.png',
      name: 'Avery Green',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '192.168.1.11',
    location: {
      name: 'Denmark',
      flag: 'denmark.svg',
    },
    activity: 'Today, 11:53 am',
  },
  {
    id: '21',
    user: {
      avatar: '300-26.png',
      name: 'Ella White',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '92.168.1.12',
    location: {
      name: 'Belgium',
      flag: 'belgium.svg',
    },
    activity: 'Current session',
  },
  {
    id: '22',
    user: {
      avatar: '300-27.png',
      name: 'Henry King',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '192.168.1.13',
    location: {
      name: 'Austria',
      flag: 'austria.svg',
    },
    activity: 'Month ago',
  },
  {
    id: '23',
    user: {
      avatar: '300-28.png',
      name: 'Olivia Green',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '192.168.1.14',
    location: {
      name: 'Poland',
      flag: 'poland.svg',
    },
    activity: 'Today, 15:02',
  },
  {
    id: '24',
    user: {
      avatar: '300-29.png',
      name: 'Mason Lewis',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '192.168.1.15',
    location: {
      name: 'Finland',
      flag: 'finland.svg',
    },
    activity: 'Current session',
  },
  {
    id: '25',
    user: {
      avatar: '300-30.png',
      name: 'Sophia Lee',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '192.168.1.16',
    location: {
      name: 'Ireland',
      flag: 'ireland.svg',
    },
    activity: 'Week ago',
  },
  {
    id: '26',
    user: {
      avatar: '300-31.png',
      name: 'Matthew Martinez',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '2192.168.1.17',
    location: {
      name: 'Italy',
      flag: 'italy.svg',
    },
    activity: 'Month ago',
  },
  {
    id: '27',
    user: {
      avatar: '300-32.png',
      name: 'Noah Wilson',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '192.168.1.18',
    location: {
      name: 'Sweden',
      flag: 'sweden.svg',
    },
    activity: 'Today, 14:10',
  },
  {
    id: '28',
    user: {
      avatar: '300-33.png',
      name: 'Mia Brown',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '192.168.1.19',
    location: {
      name: 'Switzerland',
      flag: 'switzerland.svg',
    },
    activity: 'Yesterday',
  },
  {
    id: '29',
    user: {
      avatar: '300-34.png',
      name: 'Oliver Taylor',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '192.168.1.20',
    location: {
      name: 'Portugal',
      flag: 'portugal.svg',
    },
    activity: '2 days ago',
  },
  {
    id: '30',
    user: {
      avatar: '300-1.png',
      name: 'Ella White',
    },
    browser: 'Chrome on Mac OS X',
    ipAddress: '92.168.1.21',
    location: {
      name: 'Norway',
      flag: 'norway.svg',
    },
    activity: 'Current session',
  },
];

function ActionsCell({ row }: { row: Row<IData> }) {
  const { copyToClipboard } = useCopyToClipboard();
  const handleCopyId = () => {
    copyToClipboard(String(row.original.id));
    const message = `Visitor ID successfully copied: ${row.original.id}`;
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
        <DropdownMenuItem
          onClick={() =>
            alert(`Clicked on action button for row ${row.original.user.name}`)
          }
        >
          Action
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyId}>Copy ID</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={() => {}}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const Visitors = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'user', desc: false },
  ]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string>('latest');

  const filteredData = useMemo(() => {
    let filtered = data;

    // Filter by activity
    if (selectedActivities.length > 0) {
      filtered = filtered.filter((item) =>
        selectedActivities.includes(item.activity),
      );
    }

    // Filter by search query (case-insensitive)
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.user.name.toLowerCase().includes(searchLower) ||
          item.browser.toLowerCase().includes(searchLower) ||
          item.ipAddress.toLowerCase().includes(searchLower) ||
          item.location.name.toLowerCase().includes(searchLower) ||
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
  }, [searchQuery, selectedActivities, sortOrder]);

  const activityCounts = useMemo(() => {
    return data.reduce(
      (acc, item) => {
        const activity = item.activity;
        acc[activity] = (acc[activity] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
  }, []);

  const handleActivityChange = (checked: boolean, value: string) => {
    setSelectedActivities((prev = []) =>
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
        id: 'user',
        accessorFn: (row) => row.user,
        header: ({ column }) => (
          <DataGridColumnHeader title="User" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-2.5">
            <div className="shrink-0">
              <img
                src={toAbsoluteUrl(
                  `/media/avatars/${row.original.user.avatar}`,
                )}
                className="size-7 rounded-full"
                alt="image"
              />
            </div>
            <Link
              className="text-sm font-medium text-mono hover:text-primary-active"
              to="#"
            >
              {row.original.user.name}
            </Link>
          </div>
        ),
        enableSorting: true,
        size: 200,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'browser',
        accessorFn: (row) => row.browser,
        header: ({ column }) => (
          <DataGridColumnHeader title="Browser" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-1.5 text-foreground font-normal">
            <Chrome size={14} />
            <span>{row.original.browser}</span>
          </div>
        ),
        enableSorting: true,
        size: 250,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'ipAddress',
        accessorFn: (row) => row.ipAddress,
        header: ({ column }) => (
          <DataGridColumnHeader title="IP Address" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-secondary-foreground font-normal">
            {row.original.ipAddress}
          </span>
        ),
        enableSorting: true,
        size: 190,
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
          <div className="flex items-center gap-1.5">
            <img
              src={toAbsoluteUrl(`/media/flags/${row.original.location.flag}`)}
              className="h-4 rounded-full"
              alt="image"
            />
            <span className="leading-none text-secondary-foreground">
              {row.original.location.name}
            </span>
          </div>
        ),
        enableSorting: true,
        size: 190,
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
        size: 190,
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
                  placeholder="Search Clients..."
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
                    Activity
                    {selectedActivities.length > 0 && (
                      <Badge size="sm" appearance="stroke">
                        {selectedActivities.length}
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
                      {Object.keys(activityCounts).map((activity) => (
                        <div
                          key={activity}
                          className="flex items-center gap-2.5"
                        >
                          <Checkbox
                            id={activity}
                            checked={selectedActivities.includes(activity)}
                            onCheckedChange={(checked) =>
                              handleActivityChange(checked === true, activity)
                            }
                          />
                          <Label
                            htmlFor={activity}
                            className="grow flex items-center justify-between font-normal gap-1.5"
                          >
                            {activity}
                            <span className="text-muted-foreground">
                              {activityCounts[activity]}
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

export { Visitors };
