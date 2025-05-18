'use client';

import { useMemo, useState } from 'react';
import { Avatar, AvatarGroup } from '@/app/partials/common/avatar-group';
import { Rating } from '@/app/partials/common/rating';
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
import { Search, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardFooter,
  CardHeader,
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
import { Skeleton } from '@/app/components/ui/skeleton';

interface IData {
  id: number;
  name: string;
  description: string;
  rating: number;
  created_at: string;
  updated_at: string;
  users: Avatar[];
}

const data: IData[] = [
  {
    id: 1,
    name: 'Product Management',
    description: 'Product development & lifecycle',
    rating: 5,
    created_at: '21 Oct, 2024',
    updated_at: '21 Oct, 2024',
    users: [
      { path: '/media/avatars/300-4.png', fallback: 'PM' }, // Cristian Mitchell
      { path: '/media/avatars/300-1.png', fallback: 'PM' }, // Grace Mueller
      { path: '/media/avatars/300-2.png', fallback: 'PM' }, // Ephraim Wilderman
      { path: '/media/avatars/300-4.png', fallback: 'PM' }, // Colin Balistreri
    ],
  },
  {
    id: 2,
    name: 'Marketing Team',
    description: 'Campaigns & market analysis',
    rating: 3.5,
    created_at: '15 Oct, 2024',
    updated_at: '15 Oct, 2024',
    users: [
      { path: '/media/avatars/300-4.png', fallback: 'MT' }, // Keenan Keeling
      { path: '', fallback: 'MT' }, // Una Goldner
    ],
  },
  {
    id: 3,
    name: 'HR Department',
    description: 'Talent acquisition, employee welfare',
    rating: 5,
    created_at: '10 Oct, 2024',
    updated_at: '10 Oct, 2024',
    users: [
      { path: '/media/avatars/300-4.png', fallback: 'HR' }, // Rupert Maggio
      { path: '/media/avatars/300-1.png', fallback: 'HR' }, // Pattie Morar
      { path: '/media/avatars/300-2.png', fallback: 'HR' }, // Stuart Hermiston
    ],
  },
  {
    id: 4,
    name: 'Sales Division',
    description: 'Customer relations, sales strategy',
    rating: 5,
    created_at: '05 Oct, 2024',
    updated_at: '05 Oct, 2024',
    users: [
      { path: '/media/avatars/300-24.png', fallback: 'SD' }, // Ezequiel Quigley
      { path: '/media/avatars/300-7.png', fallback: 'SD' }, // Florine Homenick
    ],
  },
  {
    id: 5,
    name: 'Development Team',
    description: 'Software development',
    rating: 4.5,
    created_at: '01 Oct, 2024',
    updated_at: '01 Oct, 2024',
    users: [
      { path: '/media/avatars/300-3.png', fallback: 'DT' }, // Ubaldo Mosciski
      { path: '/media/avatars/300-8.png', fallback: 'DT' }, // Jarrod Kerluke
      { path: '/media/avatars/300-9.png', fallback: 'DT' }, // Trace Rosenbaum
    ],
  },
  {
    id: 6,
    name: 'Quality Assurance',
    description: 'Product testing',
    rating: 5,
    created_at: '25 Sep, 2024',
    updated_at: '25 Sep, 2024',
    users: [
      { path: '/media/avatars/300-6.png', fallback: 'DT' }, // Ubaldo Mosciski
      { path: '/media/avatars/300-5.png', fallback: 'DT' }, // Jarrod Kerluke
    ],
  },
  {
    id: 7,
    name: 'Finance Team',
    description: 'Financial planning',
    rating: 4,
    created_at: '20 Sep, 2024',
    updated_at: '20 Sep, 2024',
    users: [
      { path: '/media/avatars/300-10.png', fallback: 'DT' }, // Ubaldo Mosciski
      { path: '/media/avatars/300-11.png', fallback: 'DT' }, // Jarrod Kerluke
      { path: '/media/avatars/300-12.png', fallback: 'DT' }, // Trace Rosenbaum
    ],
  },
  {
    id: 8,
    name: 'Customer Support',
    description: 'Customer service',
    rating: 3,
    created_at: '15 Sep, 2024',
    updated_at: '15 Sep, 2024',
    users: [
      { path: '/media/avatars/300-13.png', fallback: 'DT' }, // Ubaldo Mosciski
      { path: '/media/avatars/300-14.png', fallback: 'DT' }, // Jarrod Kerluke
    ],
  },
  {
    id: 9,
    name: 'R&D Team',
    description: 'Research & development',
    rating: 5,
    created_at: '10 Sep, 2024',
    updated_at: '10 Sep, 2024',
    users: [
      { path: '/media/avatars/300-15.png', fallback: 'DT' }, // Ubaldo Mosciski
      { path: '/media/avatars/300-16.png', fallback: 'DT' }, // Jarrod Kerluke
    ],
  },
  {
    id: 10,
    name: 'Operations Team',
    description: 'Operations management',
    rating: 4,
    created_at: '05 Sep, 2024',
    updated_at: '05 Sep, 2024',
    users: [
      { path: '/media/avatars/300-17.png', fallback: 'DT' }, // Ubaldo Mosciski
      { path: '/media/avatars/300-18.png', fallback: 'DT' }, // Jarrod Kerluke
      { path: '/media/avatars/300-19.png', fallback: 'DT' }, // Trace Rosenbaum
    ],
  },
  {
    id: 11,
    name: 'IT Support',
    description: 'Technical support',
    rating: 5,
    created_at: '01 Sep, 2024',
    updated_at: '01 Sep, 2024',
    users: [
      { path: '/media/avatars/300-20.png', fallback: 'DT' }, // Ubaldo Mosciski
      { path: '/media/avatars/300-21.png', fallback: 'DT' }, // Jarrod Kerluke
    ],
  },
  {
    id: 12,
    name: 'Legal Team',
    description: 'Legal support',
    rating: 4,
    created_at: '25 Aug, 2024',
    updated_at: '25 Aug, 2024',
    users: [
      { path: '/media/avatars/300-22.png', fallback: 'DT' }, // Ubaldo Mosciski
      { path: '/media/avatars/300-23.png', fallback: 'DT' }, // Jarrod Kerluke
    ],
  },
  {
    id: 13,
    name: 'Logistics Team',
    description: 'Supply chain',
    rating: 3,
    created_at: '20 Aug, 2024',
    updated_at: '20 Aug, 2024',
    users: [
      { path: '/media/avatars/300-24.png', fallback: 'DT' }, // Ubaldo Mosciski
      { path: '/media/avatars/300-25.png', fallback: 'DT' }, // Jarrod Kerluke
    ],
  },
  {
    id: 14,
    name: 'Procurement Team',
    description: 'Supplier management',
    rating: 5,
    created_at: '15 Aug, 2024',
    updated_at: '15 Aug, 2024',
    users: [
      { path: '/media/avatars/300-26.png', fallback: 'DT' }, // Ubaldo Mosciski
      { path: '/media/avatars/300-27.png', fallback: 'DT' }, // Jarrod Kerluke
      { path: '/media/avatars/300-28.png', fallback: 'DT' }, // Trace Rosenbaum
    ],
  },
  {
    id: 15,
    name: 'Training Team',
    description: 'Employee training',
    rating: 4,
    created_at: '10 Aug, 2024',
    updated_at: '10 Aug, 2024',
    users: [
      { path: '/media/avatars/300-29.png', fallback: 'DT' }, // Ubaldo Mosciski
      { path: '/media/avatars/300-30.png', fallback: 'DT' }, // Jarrod Kerluke
    ],
  },
];

const Teams = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'updated_at', desc: true },
  ]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    if (!searchQuery) return data;
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

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
        size: 48,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'name',
        accessorFn: (row) => row.name,
        header: ({ column }) => (
          <DataGridColumnHeader title="Team" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col gap-2">
            <span className="leading-none font-medium text-sm text-mono hover:text-primary">
              {row.original.name}
            </span>
            <span className="text-sm text-secondary-foreground font-normal leading-3">
              {row.original.description}
            </span>
          </div>
        ),
        enableSorting: true,
        size: 280,
        meta: {
          skeleton: (
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-[125px]" />
              <Skeleton className="h-2.5 w-[90px]" />
            </div>
          ),
        },
      },
      {
        id: 'rating',
        accessorFn: (row) => row.rating,
        header: ({ column }) => (
          <DataGridColumnHeader title="Rating" column={column} />
        ),
        cell: ({ row }) => (
          <Rating
            rating={Math.floor(row.original.rating)}
            round={row.original.rating % 1}
          />
        ),
        enableSorting: true,
        size: 135,
        meta: {
          skeleton: <Skeleton className="h-5 w-[60px]" />,
        },
      },
      {
        id: 'updated_at',
        accessorFn: (row) => row.updated_at,
        header: ({ column }) => (
          <DataGridColumnHeader title="Last Modified" column={column} />
        ),
        cell: ({ row }) => row.original.updated_at,
        enableSorting: true,
        size: 135,
        meta: {
          skeleton: <Skeleton className="h-5 w-[70px]" />,
        },
      },
      {
        id: 'users',
        accessorFn: (row) => row.users,
        header: ({ column }) => (
          <DataGridColumnHeader title="Members" column={column} />
        ),
        cell: ({ row }) => (
          <AvatarGroup group={row.original.users} size="size-8" />
        ),
        enableSorting: true,
        size: 135,
        meta: {
          skeleton: <Skeleton className="h-6 w-[75px]" />,
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
        <CardHeader className="py-3.5">
          <CardTitle>Teams</CardTitle>
          <CardToolbar className="relative">
            <Search className="size-4 text-muted-foreground absolute start-3 top-1/2 -translate-y-1/2" />
            <Input
              placeholder="Search Teams..."
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
};

export { Teams };
