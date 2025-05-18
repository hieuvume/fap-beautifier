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
    email: string;
  };
  clientId: string;
  ordersValue: string;
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
      email: 'tyler.hero@gmail.com',
    },
    clientId: 'MS-23456832',
    ordersValue: '$427,456.09',
    location: {
      flag: 'estonia.svg',
      name: 'Estonia',
    },
    activity: 'Current session',
  },
  {
    id: '2',
    user: {
      avatar: '300-1.png',
      name: 'Esther Howard',
      email: 'esther.howard@gmail.com',
    },
    clientId: 'MS-52967418',
    ordersValue: '$45,800.90',
    location: {
      flag: 'malaysia.svg',
      name: 'Malaysia',
    },
    activity: 'Week ago',
  },
  {
    id: '3',
    user: {
      avatar: '300-11.png',
      name: 'Jacob Jones',
      email: 'jacob.jones@gmail.com',
    },
    clientId: 'MS-43765928',
    ordersValue: '$63,250.30',
    location: {
      flag: 'ukraine.svg',
      name: 'Ukraine',
    },
    activity: 'Week ago',
  },
  {
    id: '4',
    user: {
      avatar: '300-2.png',
      name: 'Cody Fisher',
      email: 'cody.fisher@gmail.com',
    },
    clientId: 'MS2-9846571',
    ordersValue: '$80,100.45',
    location: {
      flag: 'canada.svg',
      name: 'Canada',
    },
    activity: 'Current session',
  },
  {
    id: '5',
    user: {
      avatar: '300-5.png',
      name: 'Leslie Alexander',
      email: 'leslie.alexander@gmail.com',
    },
    clientId: 'MS2-71639482',
    ordersValue: '$56,500.60',
    location: {
      flag: 'india.svg',
      name: 'India',
    },
    activity: 'Month ago',
  },
  {
    id: '6',
    user: {
      avatar: '300-4.png',
      name: 'Robert Fox',
      email: 'robert.fox@gmail.com',
    },
    clientId: 'MS2-65438729',
    ordersValue: '$70,342.25',
    location: {
      flag: 'united-states.svg',
      name: 'USA',
    },
    activity: 'Today, 15:02',
  },
  {
    id: '7',
    user: {
      avatar: '300-20.png',
      name: 'Guy Hawkins',
      email: 'guy.hawkins@gmail.com',
    },
    clientId: 'MS2-58372914',
    ordersValue: '$40,210.15',
    location: {
      flag: 'turkey.svg',
      name: 'Turkey',
    },
    activity: 'Current session',
  },
  {
    id: '8',
    user: {
      avatar: '300-23.png',
      name: 'Theresa Webb',
      email: 'theresa.webb@gmail.com',
    },
    clientId: 'MS-47298356',
    ordersValue: '$52,315.70',
    location: {
      flag: 'brazil.svg',
      name: 'Brasil',
    },
    activity: 'Current session',
  },
  {
    id: '9',
    user: {
      avatar: '300-23.png',
      name: 'Marvin McKinney',
      email: 'marvin.mckenney@gmail.com',
    },
    clientId: 'MS-83926145',
    ordersValue: '$568,450.55',
    location: {
      flag: 'latvia.svg',
      name: 'Latvia',
    },
    activity: 'Week ago',
  },
  {
    id: '10',
    user: {
      avatar: '300-18.png',
      name: 'Ronald Richards',
      email: 'ronald.richards@gmail.com',
    },
    clientId: 'MS-72649538',
    ordersValue: '$573,270.80',
    location: {
      flag: 'uruguay.svg',
      name: 'Uruguay',
    },
    activity: 'Current session',
  },
  {
    id: '11',
    user: {
      avatar: '300-6.png',
      name: 'William Wilson',
      email: 'william.wilson@gmail.com',
    },
    clientId: 'MS-98473654',
    ordersValue: '$28,456.22',
    location: {
      flag: 'germany.svg',
      name: 'Germany',
    },
    activity: 'Yesterday',
  },
  {
    id: '12',
    user: {
      avatar: '300-7.png',
      name: 'Sophia Anderson',
      email: 'sophia.anderson@gmail.com',
    },
    clientId: 'MS-23784956',
    ordersValue: '$46,800.90',
    location: {
      flag: 'france.svg',
      name: 'France',
    },
    activity: '2 days ago',
  },
  {
    id: '13',
    user: {
      avatar: '300-8.png',
      name: 'Mason Taylor',
      email: 'mason.taylor@gmail.com',
    },
    clientId: 'MS-48723659',
    ordersValue: '$66,350.30',
    location: {
      flag: 'italy.svg',
      name: 'Italy',
    },
    activity: 'Today, 8:45 am',
  },
  {
    id: '14',
    user: {
      avatar: '300-9.png',
      name: 'Isabella Lee',
      email: 'isabella.lee@gmail.com',
    },
    clientId: 'MS-29374685',
    ordersValue: '$90,150.45',
    location: {
      flag: 'japan.svg',
      name: 'Japan',
    },
    activity: 'Current session',
  },
  {
    id: '15',
    user: {
      avatar: '300-10.png',
      name: 'James Martinez',
      email: 'james.martinez@gmail.com',
    },
    clientId: 'MS-73649281',
    ordersValue: '$4,600.60',
    location: {
      flag: 'mexico.svg',
      name: 'Mexico',
    },
    activity: 'Week ago',
  },
  {
    id: '16',
    user: {
      avatar: '300-12.png',
      name: 'Emily Thomas',
      email: 'emily.thomas@gmail.com',
    },
    clientId: 'MS-47682953',
    ordersValue: '$74,342.25',
    location: {
      flag: 'south-korea.svg',
      name: 'South Korea',
    },
    activity: 'Today, 14:10',
  },
  {
    id: '17',
    user: {
      avatar: '300-13.png',
      name: 'Benjamin Harris',
      email: 'benjamin.harris@gmail.com',
    },
    clientId: 'MS-58394721',
    ordersValue: '$33,210.15',
    location: {
      flag: 'russia.svg',
      name: 'Russia',
    },
    activity: 'Current session',
  },
  {
    id: '18',
    user: {
      avatar: '300-14.png',
      name: 'Charlotte Young',
      email: 'charlotte.young@gmail.com',
    },
    clientId: 'MS-69583742',
    ordersValue: '$52,315.70',
    location: {
      flag: 'spain.svg',
      name: 'Spain',
    },
    activity: '3 days ago',
  },
  {
    id: '19',
    user: {
      avatar: '300-15.png',
      name: 'Henry Clark',
      email: 'henry.clark@gmail.com',
    },
    clientId: 'MS-98237645',
    ordersValue: '$68,450.55',
    location: {
      flag: 'portugal.svg',
      name: 'Portugal',
    },
    activity: 'Week ago',
  },
  {
    id: '20',
    user: {
      avatar: '300-16.png',
      name: 'Amelia Lewis',
      email: 'amelia.lewis@gmail.com',
    },
    clientId: 'MS-4653728',
    ordersValue: '$73,270.80',
    location: {
      flag: 'netherlands.svg',
      name: 'Netherlands',
    },
    activity: 'Current session',
  },
  {
    id: '21',
    user: {
      avatar: '300-17.png',
      name: 'Lucas Walker',
      email: 'lucas.walker@gmail.com',
    },
    clientId: 'MS-29374650',
    ordersValue: '$57,456.09',
    location: {
      flag: 'belgium.svg',
      name: 'Belgium',
    },
    activity: 'Yesterday',
  },
  {
    id: '22',
    user: {
      avatar: '300-19.png',
      name: 'Grace Allen',
      email: 'grace.allen@gmail.com',
    },
    clientId: 'MS-47682953',
    ordersValue: '$85,800.90',
    location: {
      flag: 'sweden.svg',
      name: 'Sweden',
    },
    activity: '2 days ago',
  },
  {
    id: '23',
    user: {
      avatar: '300-21.png',
      name: 'Jack Harris',
      email: 'jack.harris@gmail.com',
    },
    clientId: 'MS-83926145',
    ordersValue: '$63,250.30',
    location: {
      flag: 'norway.svg',
      name: 'Norway',
    },
    activity: 'Today, 11:53 am',
  },
  {
    id: '24',
    user: {
      avatar: '300-24.png',
      name: 'Aiden King',
      email: 'aiden.king@gmail.com',
    },
    clientId: 'MS-29846571',
    ordersValue: '$90,100.45',
    location: {
      flag: 'denmark.svg',
      name: 'Denmark',
    },
    activity: 'Current session',
  },
  {
    id: '25',
    user: {
      avatar: '300-25.png',
      name: 'Avery Green',
      email: 'avery.green@gmail.com',
    },
    clientId: 'MS-71639482',
    ordersValue: '$56,500.60',
    location: {
      flag: 'austria.svg',
      name: 'Austria',
    },
    activity: 'Month ago',
  },
  {
    id: '26',
    user: {
      avatar: '300-26.png',
      name: 'Ella White',
      email: 'ella.white@gmail.com',
    },
    clientId: 'MS-65438729',
    ordersValue: '$70,342.25',
    location: {
      flag: 'poland.svg',
      name: 'Poland',
    },
    activity: 'Today, 15:02',
  },
  {
    id: '27',
    user: {
      avatar: '300-27.png',
      name: 'Henry King',
      email: 'henry.king@gmail.com',
    },
    clientId: 'MS-58372914',
    ordersValue: '$40,210.15',
    location: {
      flag: 'switzerland.svg',
      name: 'Switzerland',
    },
    activity: 'Current session',
  },
  {
    id: '28',
    user: {
      avatar: '300-28.png',
      name: 'Olivia Green',
      email: 'olivia.green@gmail.com',
    },
    clientId: 'MS-47298356',
    ordersValue: '$52,315.70',
    location: {
      flag: 'finland.svg',
      name: 'Finland',
    },
    activity: 'Current session',
  },
  {
    id: '29',
    user: {
      avatar: '300-29.png',
      name: 'Mason Lewis',
      email: 'mason.lewis@gmail.com',
    },
    clientId: 'MS-83926145',
    ordersValue: '$68,450.55',
    location: {
      flag: 'ireland.svg',
      name: 'Ireland',
    },
    activity: 'Week ago',
  },
  {
    id: '30',
    user: {
      avatar: '300-30.png',
      name: 'Sophia Lee',
      email: 'sophia.lee@gmail.com',
    },
    clientId: 'MS-72649538',
    ordersValue: '$73,270.80',
    location: {
      flag: 'portugal.svg',
      name: 'Portugal',
    },
    activity: 'Current session',
  },
  {
    id: '31',
    user: {
      avatar: '300-31.png',
      name: 'Matthew Martinez',
      email: 'matthew.martinez@gmail.com',
    },
    clientId: 'MS-3456832',
    ordersValue: '$27,456.09',
    location: {
      flag: 'estonia.svg',
      name: 'Estonia',
    },
    activity: 'Current session',
  },
];

function ActionsCell({ row }: { row: Row<IData> }) {
  const { copyToClipboard } = useCopyToClipboard();
  const handleCopyId = () => {
    copyToClipboard(String(row.original.id));
    const message = `Client ID successfully copied: ${row.original.id}`;
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
        <DropdownMenuItem onClick={() => {}}>View Invoice</DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyId}>Copy ID</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => {}}>Edit</DropdownMenuItem>
        <DropdownMenuItem variant="destructive" onClick={() => {}}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const StoreClients = () => {
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
          item.user.email.toLowerCase().includes(searchLower) ||
          item.clientId.toLowerCase().includes(searchLower) ||
          item.ordersValue.toLowerCase().includes(searchLower) ||
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
          <DataGridColumnHeader title="Member" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-2.5">
            <img
              src={toAbsoluteUrl(`/media/avatars/${row.original.user.avatar}`)}
              className="size-7 rounded-full shrink-0"
              alt="image"
            />
            <div className="flex flex-col">
              <Link
                className="font-medium text-sm text-mono hover:text-primary-active mb-px"
                to="#"
              >
                {row.original.user.name}
              </Link>
              <Link
                className="text-sm text-secondary-foreground font-normal hover:text-primary-active"
                to="#"
              >
                {row.original.user.email}
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
        id: 'clientId',
        accessorFn: (row) => row.clientId,
        header: ({ column }) => (
          <DataGridColumnHeader title="Client ID" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-foreground font-normal">
            {row.original.clientId}
          </span>
        ),
        enableSorting: true,
        size: 150,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'ordersValue',
        accessorFn: (row) => row.ordersValue,
        header: ({ column }) => (
          <DataGridColumnHeader title="Orders Value" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-foreground font-normal">
            {row.original.ordersValue}
          </span>
        ),
        enableSorting: true,
        size: 150,
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
              className="size-4 rounded-full shrink-0"
              alt="image"
            />
            <span className="text-foreground font-normal">
              {row.original.location.name}
            </span>
          </div>
        ),
        enableSorting: true,
        size: 150,
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
        size: 150,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'actions',
        header: ({ column }) => (
          <DataGridColumnHeader title="Invoices" column={column} />
        ),
        enableSorting: false,
        cell: () => {
          return (
            <div className="text-center">
              <Button mode="link" underlined="dashed">
                View
              </Button>
            </div>
          );
        },
        size: 100,
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

export { StoreClients };
