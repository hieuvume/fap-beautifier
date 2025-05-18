'use client';

import { useMemo, useState } from 'react';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { Search, X } from 'lucide-react';
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
  CardTitle,
  CardToolbar,
} from '@/app/components/ui/card';
import { DataGrid } from '@/app/components/ui/data-grid';
import { DataGridColumnHeader } from '@/app/components/ui/data-grid-column-header';
import { DataGridPagination } from '@/app/components/ui/data-grid-pagination';
import {
  DataGridTable,
  DataGridTableRowSelect,
  DataGridTableRowSelectAll,
} from '@/app/components/ui/data-grid-table';
import { Input } from '@/app/components/ui/input';
import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';

interface ILocation {
  name: string;
  flag: string;
}

interface IStatus {
  label: string;
  variant: 'success' | 'warning' | 'destructive';
}

interface IData {
  id: string;
  orderId: string;
  date: string;
  customer: string;
  amount: string;
  payment: string;
  location: ILocation;
  status: IStatus;
}

const data: IData[] = [
  {
    id: '1',
    orderId: '583920-XT',
    date: '18 Aug, 2025',
    customer: 'Mia Martinez',
    amount: '83.00',
    payment: 'Visa',
    location: {
      name: 'Estonia',
      flag: 'estonia.svg',
    },
    status: {
      label: 'Allocated',
      variant: 'success',
    },
  },
  {
    id: '2',
    orderId: '104761-BQ',
    date: '20 Jan, 2025',
    customer: 'Alice Morgan',
    amount: '99.00',
    payment: 'Mastercard',
    location: {
      name: 'India',
      flag: 'india.svg',
    },
    status: {
      label: 'Pending',
      variant: 'warning',
    },
  },
  {
    id: '3',
    orderId: '847305-ZR',
    date: '219 Feb, 2025',
    customer: 'Noah Garcia',
    amount: '120.00',
    payment: 'iDeal',
    location: {
      name: 'Malaysia',
      flag: 'malaysia.svg',
    },
    status: {
      label: 'Delivered',
      variant: 'success',
    },
  },
  {
    id: '4',
    orderId: '1229176-LK',
    date: '16 Mar, 2025',
    customer: 'Liam Brown',
    amount: '72.00',
    payment: 'Paypal',
    location: {
      name: 'Ukraine',
      flag: 'ukraine.svg',
    },
    status: {
      label: 'Cancelled',
      variant: 'destructive',
    },
  },
  {
    id: '5',
    orderId: '71452-VN',
    date: '9 Mar, 2025',
    customer: 'Emma Chen',
    amount: '7169.00',
    payment: 'Mastercard',
    location: {
      name: 'Canada',
      flag: 'canada.svg',
    },
    status: {
      label: 'Delivered',
      variant: 'success',
    },
  },
  {
    id: '6',
    orderId: '398274-JY',
    date: '9 Aug, 2025',
    customer: 'Olivia Davis',
    amount: '110.00',
    payment: 'iDeal',
    location: {
      name: 'Estonia',
      flag: 'estonia.svg',
    },
    status: {
      label: 'Delivered',
      variant: 'success',
    },
  },
  {
    id: '7',
    orderId: '750163-DP',
    date: '22 Jul, 2025',
    customer: 'Lucas Anderson',
    amount: '49.00',
    payment: 'Mastercard',
    location: {
      name: 'Malaysia',
      flag: 'malaysia.svg',
    },
    status: {
      label: 'Pending',
      variant: 'warning',
    },
  },
  {
    id: '8',
    orderId: '912048-MF',
    date: '28 Apr, 2025',
    customer: 'Sophia Patel',
    amount: '230.00',
    payment: 'Visa',
    location: {
      name: 'Ukraine',
      flag: 'ukraine.svg',
    },
    status: {
      label: 'Delivered',
      variant: 'success',
    },
  },
  {
    id: '9',
    orderId: '336791-TA',
    date: '10 Jan, 2025',
    customer: 'Ethan Wilson',
    amount: '140.00',
    payment: 'Visa',
    location: {
      name: 'Canada',
      flag: 'canada.svg',
    },
    status: {
      label: 'Cancelled',
      variant: 'destructive',
    },
  },
  {
    id: '10',
    orderId: '508234-WS',
    date: '22 Jul, 2025',
    customer: 'James Liu',
    amount: '84.00',
    payment: 'iDeal',
    location: {
      name: 'India',
      flag: 'india.svg',
    },
    status: {
      label: 'Delivered',
      variant: 'success',
    },
  },
  {
    id: '11',
    orderId: '583920-XT',
    date: '18 Aug, 2025',
    customer: 'Mia Martinez',
    amount: '83.00',
    payment: 'Visa',
    location: {
      name: 'Estonia',
      flag: 'estonia.svg',
    },
    status: {
      label: 'Allocated',
      variant: 'success',
    },
  },
  {
    id: '12',
    orderId: '104761-BQ',
    date: '20 Jan, 2025',
    customer: 'Alice Morgan',
    amount: '99.00',
    payment: 'Mastercard',
    location: {
      name: 'India',
      flag: 'india.svg',
    },
    status: {
      label: 'Pending',
      variant: 'warning',
    },
  },
  {
    id: '13',
    orderId: '847305-ZR',
    date: '219 Feb, 2025',
    customer: 'Noah Garcia',
    amount: '120.00',
    payment: 'iDeal',
    location: {
      name: 'Malaysia',
      flag: 'malaysia.svg',
    },
    status: {
      label: 'Delivered',
      variant: 'success',
    },
  },
  {
    id: '14',
    orderId: '1229176-LK',
    date: '16 Mar, 2025',
    customer: 'Liam Brown',
    amount: '72.00',
    payment: 'Paypal',
    location: {
      name: 'Ukraine',
      flag: 'ukraine.svg',
    },
    status: {
      label: 'Cancelled',
      variant: 'destructive',
    },
  },
  {
    id: '15',
    orderId: '71452-VN',
    date: '9 Mar, 2025',
    customer: 'Emma Chen',
    amount: '7169.00',
    payment: 'Mastercard',
    location: {
      name: 'Canada',
      flag: 'canada.svg',
    },
    status: {
      label: 'Delivered',
      variant: 'success',
    },
  },
  {
    id: '16',
    orderId: '398274-JY',
    date: '9 Aug, 2025',
    customer: 'Olivia Davis',
    amount: '110.00',
    payment: 'iDeal',
    location: {
      name: 'Estonia',
      flag: 'estonia.svg',
    },
    status: {
      label: 'Delivered',
      variant: 'success',
    },
  },
  {
    id: '17',
    orderId: '750163-DP',
    date: '22 Jul, 2025',
    customer: 'Lucas Anderson',
    amount: '49.00',
    payment: 'Mastercard',
    location: {
      name: 'Malaysia',
      flag: 'malaysia.svg',
    },
    status: {
      label: 'Pending',
      variant: 'warning',
    },
  },
];

export function RecentOrders() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'customer', desc: true },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatuses] = useState<string[]>([]);

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
        item.customer.toLowerCase().includes(searchLower) ||
        item.amount.toLowerCase().includes(searchLower) ||
        item.location.name.toLowerCase().includes(searchLower);

      return matchesStatus && matchesSearch;
    });
  }, [searchQuery, selectedStatuses]);

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
        size: 50,
        meta: { cellClassName: '' },
      },
      {
        id: 'orderId',
        accessorFn: (row) => row.orderId,
        header: ({ column }) => (
          <DataGridColumnHeader title="Order ID" column={column} />
        ),
        cell: ({ row }) => (
          <span className="font-medium text-mono">#{row.original.orderId}</span>
        ),
        enableSorting: true,
        size: 180,
        meta: { cellClassName: '' },
      },
      {
        id: 'date',
        accessorFn: (row) => row.date,
        header: ({ column }) => (
          <DataGridColumnHeader title="Date" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-secondary-foreground font-normal">
            {row.original.date}
          </span>
        ),
        enableSorting: true,
        size: 130,
        meta: { cellClassName: '' },
      },
      {
        id: 'customer',
        accessorFn: (row) => row.customer,
        header: ({ column }) => (
          <DataGridColumnHeader title="Customer" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-mono font-medium">{row.original.customer}</span>
        ),
        enableSorting: true,
        size: 180,
        meta: { cellClassName: '' },
      },
      {
        id: 'amount',
        accessorFn: (row) => row.amount,
        header: ({ column }) => (
          <DataGridColumnHeader title="Amount" column={column} />
        ),
        cell: ({ row }) => (
          <span className="font-medium text-mono">${row.original.amount}</span>
        ),
        enableSorting: true,
        size: 100,
        meta: { cellClassName: '' },
      },
      {
        id: 'payment',
        accessorFn: (row) => row.payment,
        header: ({ column }) => (
          <DataGridColumnHeader title="Payment Method" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-secondary-foreground font-normal">
            {row.original.payment}
          </span>
        ),
        enableSorting: true,
        size: 155,
        meta: { cellClassName: '' },
      },
      {
        id: 'location',
        accessorFn: (row) => row.location,
        header: ({ column }) => (
          <DataGridColumnHeader title="Country" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-1.5">
            <img
              src={toAbsoluteUrl(`/media/flags/${row.original.location.flag}`)}
              className="h-4 rounded-full"
              alt="flag"
            />
            <span className="leading-none text-foreground font-normal">
              {row.original.location.name}
            </span>
          </div>
        ),
        enableSorting: true,
        size: 180,
        meta: { cellClassName: '' },
      },
      {
        id: 'status',
        accessorFn: (row) => row.status,
        header: ({ column }) => (
          <DataGridColumnHeader title="Order Status" column={column} />
        ),
        cell: ({ row }) => (
          <Badge
            size="sm"
            variant={row.original.status.variant}
            appearance="outline"
          >
            {row.original.status.label}
          </Badge>
        ),
        enableSorting: true,
        size: 125,
        meta: { cellClassName: '' },
      },
      {
        id: 'actions',
        header: '',
        cell: () => (
          <Button mode="link" underlined="dashed">
            <Link to="#">Details</Link>
          </Button>
        ),
        enableSorting: false,
        size: 75,
        meta: { headerClassName: '' },
      },
    ],
    [],
  );

  const table = useReactTable({
    columns,
    data: filteredData,
    pageCount: Math.ceil((filteredData?.length || 0) / pagination.pageSize),
    getRowId: (row: IData) => row.id,
    state: {
      pagination,
      sorting,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <DataGrid
      table={table}
      recordCount={filteredData?.length || 0}
      tableLayout={{
        columnsPinnable: true,
        columnsMovable: true,
        columnsVisibility: false,
        cellBorder: true,
      }}
    >
      <Card className="min-w-full">
        <CardHeader className="py-5 flex-wrap gap-2">
          <CardHeading>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeading>
          <CardToolbar>
            <div className="relative">
              <Search className="size-4 text-muted-foreground absolute start-3 top-1/2 -translate-y-1/2" />
              <Input
                placeholder="Search by ID"
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
            <Button variant="outline" onClick={() => alert('Export CSV')}>
              Export CSV
            </Button>
          </CardToolbar>
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
}
