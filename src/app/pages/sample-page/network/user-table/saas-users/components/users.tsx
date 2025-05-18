'use client';

import { useMemo, useState } from 'react';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  RowSelectionState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { Filter, Search, Settings2, X } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
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
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/components/ui/popover';
import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';
import { Switch } from '@/app/components/ui/switch';

interface IData {
  id: string;
  user: {
    avatar: string;
    name: string;
    email: string;
  };
  labels: string[];
  license: {
    type: string;
    left: string;
  };
  payment: string;
  enforce: boolean;
}

const data: IData[] = [
  {
    id: '1',
    user: {
      avatar: '300-3.png',
      name: 'Tyler Hero',
      email: 'tyler.hero@gmail.com',
    },
    labels: ['NFT', 'Artwork', 'Widget'],
    license: {
      type: 'Premium',
      left: '4 months left',
    },
    payment: '6 Aug, 2024',
    enforce: true,
  },
  {
    id: '2',
    user: {
      avatar: '300-1.png',
      name: 'Esther Howard',
      email: 'esther.howard@gmail.com',
    },
    labels: ['Design', 'Template'],
    license: {
      type: 'Trial',
      left: '16 days left',
    },
    payment: '21 Apr, 2024',
    enforce: false,
  },
  {
    id: '3',
    user: {
      avatar: '300-11.png',
      name: 'Jacob Jones',
      email: 'jacob.jones@gmail.com',
    },
    labels: ['App', 'Plugin'],
    license: {
      type: 'Premium',
      left: '2 months left',
    },
    payment: '14 Mar, 2024',
    enforce: true,
  },
  {
    id: '4',
    user: {
      avatar: '300-2.png',
      name: 'Cody Fisher',
      email: 'cody.fisher@gmail.com',
    },
    labels: ['Template', 'NFT'],
    license: {
      type: 'Standard',
      left: '',
    },
    payment: '20 Apr, 2024',
    enforce: true,
  },
  {
    id: '5',
    user: {
      avatar: '300-5.png',
      name: 'Leslie Alexander',
      email: 'leslie.alexander@gmail.com',
    },
    labels: ['Artwork', 'App'],
    license: {
      type: 'Premium',
      left: '6 months left',
    },
    payment: '29 Jan, 2024',
    enforce: false,
  },
  {
    id: '6',
    user: {
      avatar: '300-4.png',
      name: 'Robert Fox',
      email: 'robert.fox@gmail.com',
    },
    labels: ['Design', 'Widget'],
    license: {
      type: 'Trial',
      left: '5 days left',
    },
    payment: '17 Mar, 2024',
    enforce: false,
  },
  {
    id: '7',
    user: {
      avatar: '300-20.png',
      name: 'Guy Hawkins',
      email: 'guy.hawkins@gmail.com',
    },
    labels: ['Plugin', 'Artwork'],
    license: {
      type: 'Standard',
      left: '',
    },
    payment: '20 Jul, 2024',
    enforce: false,
  },
  {
    id: '8',
    user: {
      avatar: '300-23.png',
      name: 'Theresa Webb',
      email: 'theresa.webb@gmail.com',
    },
    labels: ['NFT', 'Template'],
    license: {
      type: 'Trial',
      left: '2 days left',
    },
    payment: '06 May, 2024',
    enforce: true,
  },
  {
    id: '9',
    user: {
      avatar: '300-22.png',
      name: 'Marvin McKinney',
      email: 'marvin.mckenney@gmail.com',
    },
    labels: ['Widget', 'App'],
    license: {
      type: 'Premium',
      left: '1 months left',
    },
    payment: '16 Apr, 2024',
    enforce: true,
  },
  {
    id: '10',
    user: {
      avatar: '300-18.png',
      name: 'Ronald Richards',
      email: 'ronald.richards@gmail.com',
    },
    labels: ['Artwork', 'Design', 'Plugin'],
    license: {
      type: 'Premium',
      left: '3 months left',
    },
    payment: '15 Jun, 2024',
    enforce: false,
  },
  {
    id: '11',
    user: {
      avatar: '300-6.png',
      name: 'William Wilson',
      email: 'william.wilson@gmail.com',
    },
    labels: ['App', 'Design'],
    license: {
      type: 'Trial',
      left: '10 days left',
    },
    payment: '28 Jul, 2024',
    enforce: true,
  },
  {
    id: '12',
    user: {
      avatar: '300-7.png',
      name: 'Sophia Anderson',
      email: 'sophia.anderson@gmail.com',
    },
    labels: ['Plugin', 'Template'],
    license: {
      type: 'Standard',
      left: '',
    },
    payment: '12 Aug, 2024',
    enforce: false,
  },
  {
    id: '13',
    user: {
      avatar: '300-8.png',
      name: 'Mason Taylor',
      email: 'mason.taylor@gmail.com',
    },
    labels: ['NFT', 'Artwork'],
    license: {
      type: 'Premium',
      left: '5 months left',
    },
    payment: '09 Sep, 2024',
    enforce: true,
  },
  {
    id: '14',
    user: {
      avatar: '300-9.png',
      name: 'Isabella Lee',
      email: 'isabella.lee@gmail.com',
    },
    labels: ['App', 'Widget'],
    license: {
      type: 'Trial',
      left: '8 days left',
    },
    payment: '22 Oct, 2024',
    enforce: false,
  },
  {
    id: '15',
    user: {
      avatar: '300-10.png',
      name: 'James Martinez',
      email: 'james.martinez@gmail.com',
    },
    labels: ['Template', 'Design'],
    license: {
      type: 'Standard',
      left: '',
    },
    payment: '15 Nov, 2024',
    enforce: true,
  },
  {
    id: '16',
    user: {
      avatar: '300-12.png',
      name: 'Emily Thomas',
      email: 'emily.thomas@gmail.com',
    },
    labels: ['Artwork', 'Plugin'],
    license: {
      type: 'Premium',
      left: '7 months left',
    },
    payment: '03 Dec, 2024',
    enforce: false,
  },
  {
    id: '17',
    user: {
      avatar: '300-13.png',
      name: 'Benjamin Harris',
      email: 'benjamin.harris@gmail.com',
    },
    labels: ['NFT', 'App'],
    license: {
      type: 'Trial',
      left: '12 days left',
    },
    payment: '21 Jan, 2024',
    enforce: true,
  },
  {
    id: '18',
    user: {
      avatar: '300-14.png',
      name: 'Charlotte Young',
      email: 'charlotte.young@gmail.com',
    },
    labels: ['Template', 'Plugin'],
    license: {
      type: 'Standard',
      left: '',
    },
    payment: '10 Feb, 2024',
    enforce: false,
  },
  {
    id: '19',
    user: {
      avatar: '300-15.png',
      name: 'Henry Clark',
      email: 'henry.clark@gmail.com',
    },
    labels: ['Design', 'Widget'],
    license: {
      type: 'Premium',
      left: '9 months left',
    },
    payment: '08 Mar, 2024',
    enforce: true,
  },
  {
    id: '20',
    user: {
      avatar: '300-16.png',
      name: 'Amelia Lewis',
      email: 'amelia.lewis@gmail.com',
    },
    labels: ['Artwork', 'Template'],
    license: {
      type: 'Trial',
      left: '3 days left',
    },
    payment: '26 Apr, 2024',
    enforce: false,
  },
  {
    id: '21',
    user: {
      avatar: '300-17.png',
      name: 'Lucas Walker',
      email: 'lucas.walker@gmail.com',
    },
    labels: ['App', 'Plugin'],
    license: {
      type: 'Standard',
      left: '',
    },
    payment: '19 May, 2024',
    enforce: true,
  },
  {
    id: '22',
    user: {
      avatar: '300-19.png',
      name: 'Grace Allen',
      email: 'grace.allen@gmail.com',
    },
    labels: ['Widget', 'Design'],
    license: {
      type: 'Premium',
      left: '11 months left',
    },
    payment: '03 Jun, 2024',
    enforce: false,
  },
  {
    id: '23',
    user: {
      avatar: '300-21.png',
      name: 'Jack Harris',
      email: 'jack.harris@gmail.com',
    },
    labels: ['NFT', 'Template'],
    license: {
      type: 'Trial',
      left: '9 days left',
    },
    payment: '25 Jul, 2024',
    enforce: true,
  },
  {
    id: '24',
    user: {
      avatar: '300-24.png',
      name: 'Aiden King',
      email: 'aiden.king@gmail.com',
    },
    labels: ['App', 'Artwork'],
    license: {
      type: 'Standard',
      left: '',
    },
    payment: '02 Aug, 2024',
    enforce: false,
  },
  {
    id: '25',
    user: {
      avatar: '300-25.png',
      name: 'Avery Green',
      email: 'avery.green@gmail.com',
    },
    labels: ['Plugin', 'Widget'],
    license: {
      type: 'Premium',
      left: '10 months left',
    },
    payment: '15 Sep, 2024',
    enforce: true,
  },
  {
    id: '26',
    user: {
      avatar: '300-26.png',
      name: 'Ella White',
      email: 'ella.white@gmail.com',
    },
    labels: ['NFT', 'Template'],
    license: {
      type: 'Trial',
      left: '14 days left',
    },
    payment: '09 Oct, 2024',
    enforce: false,
  },
  {
    id: '27',
    user: {
      avatar: '300-26.png',
      name: 'Henry King',
      email: 'henry.king@gmail.com',
    },
    labels: ['Design', 'App'],
    license: {
      type: 'Standard',
      left: '',
    },
    payment: '20 Nov, 2024',
    enforce: true,
  },
  {
    id: '28',
    user: {
      avatar: '300-28.png',
      name: 'Olivia Green',
      email: 'olivia.green@gmail.com',
    },
    labels: ['Plugin', 'Artwork'],
    license: {
      type: 'Premium',
      left: '8 months left',
    },
    payment: '05 Dec, 2024',
    enforce: false,
  },
  {
    id: '29',
    user: {
      avatar: '300-29.png',
      name: 'Mason Lewis',
      email: 'mason.lewis@gmail.com',
    },
    labels: ['Template', 'Widget'],
    license: {
      type: 'Trial',
      left: '7 days leftt',
    },
    payment: '22 Jan, 2024',
    enforce: true,
  },
  {
    id: '30',
    user: {
      avatar: '300-30.png',
      name: 'Sophia Lee',
      email: 'sophia.lee@gmail.com',
    },
    labels: ['Design', 'Plugin'],
    license: {
      type: 'Standard',
      left: '',
    },
    payment: '11 Feb, 2024',
    enforce: false,
  },
  {
    id: '31',
    user: {
      avatar: '300-31.png',
      name: 'Matthew Martinez',
      email: 'matthew.martinez@gmail.com',
    },
    labels: ['NFT', 'App'],
    license: {
      type: 'Premium',
      left: '6 months left',
    },
    payment: '28 Mar, 2024',
    enforce: true,
  },
];

const EnforceSwitch = ({ enforce }: { enforce: boolean }) => {
  return <Switch id="size-sm" size="sm" defaultChecked={enforce} />;
};

const Users = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'user', desc: false },
  ]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string>('latest');

  const filteredData = useMemo(() => {
    let filtered = data;

    // Filter by status (2FA Enabled/Disabled)
    if (selectedStatuses.length > 0) {
      filtered = filtered.filter((item) => {
        const status = item.enforce ? '2FA Enabled' : '2FA Disabled';
        return selectedStatuses.includes(status);
      });
    }

    // Filter by search query (case-insensitive)
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.user.name.toLowerCase().includes(searchLower) ||
          item.user.email.toLowerCase().includes(searchLower) ||
          item.labels.some((label) =>
            label.toLowerCase().includes(searchLower),
          ) ||
          item.license.type.toLowerCase().includes(searchLower) ||
          item.payment.toLowerCase().includes(searchLower),
      );
    }

    // Apply sorting based on sortOrder
    if (sortOrder === 'latest') {
      filtered = [...filtered].sort(
        (a, b) => new Date(b.payment).getTime() - new Date(a.payment).getTime(),
      );
    } else if (sortOrder === 'older') {
      filtered = [...filtered].sort(
        (a, b) => new Date(a.payment).getTime() - new Date(b.payment).getTime(),
      );
    } else if (sortOrder === 'oldest') {
      filtered = [...filtered].sort(
        (a, b) => new Date(a.payment).getTime() - new Date(b.payment).getTime(),
      );
    }

    return filtered;
  }, [searchQuery, selectedStatuses, sortOrder]);

  const statusCounts = useMemo(() => {
    return data.reduce(
      (acc, item) => {
        const status = item.enforce ? '2FA Enabled' : '2FA Disabled';
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
        id: 'user',
        accessorFn: (row) => row.user,
        header: ({ column }) => (
          <DataGridColumnHeader title="Subscriber" column={column} />
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
                className="font-medium text-mono hover:text-primary-active mb-px"
                to="#"
              >
                {row.original.user.name}
              </Link>
              <Link
                className="text-sm text-secondary-foreground hover:text-primary-active"
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
        id: 'labels',
        accessorFn: (row) => row.labels,
        header: ({ column }) => (
          <DataGridColumnHeader title="Products" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex gap-1.5">
            {row.original.labels.map((label: string, index: number) => (
              <Badge
                key={index}
                size="sm"
                variant="secondary"
                appearance="solid"
              >
                {label}
              </Badge>
            ))}
          </div>
        ),
        enableSorting: true,
        size: 200,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'license',
        accessorFn: (row) => row.license,
        header: ({ column }) => (
          <DataGridColumnHeader title="License" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col">
            <span className="text-sm text-foreground font-medium">
              {row.original.license.type}
            </span>
            <span className="text-xs text-secondary-foreground">
              {row.original.license.left}
            </span>
          </div>
        ),
        enableSorting: true,
        size: 175,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'payment',
        accessorFn: (row) => row.payment,
        header: ({ column }) => (
          <DataGridColumnHeader title="Latest Payment" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-foreground font-medium">
            {row.original.payment}
          </span>
        ),
        enableSorting: true,
        size: 175,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'enforce',
        accessorFn: (row) => row.enforce,
        header: ({ column }) => (
          <DataGridColumnHeader title="Enforce 2FA" column={column} />
        ),
        cell: ({ row }) => <EnforceSwitch enforce={row.original.enforce} />,
        enableSorting: true,
        size: 137,
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
            <Button mode="link" underlined="dashed">
              Download
            </Button>
          );
        },
        size: 100,
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
