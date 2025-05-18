import { useEffect, useMemo, useState } from 'react';
import {
  Column,
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
import { Download, Settings2 } from 'lucide-react';
import { toast } from 'sonner';
import { Badge, BadgeProps } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardFooter,
  CardHeader,
  CardTable,
  CardTitle,
  CardToolbar,
} from '@/app/components/ui/card';
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
import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';

interface IColumnFilterProps<TData, TValue> {
  column: Column<TData, TValue>;
}

interface IData {
  id: string; // Use string for ID
  invoice: string;
  label: string;
  status: string;
  date: string;
  dueDate: string;
  amount: string;
}

const data: IData[] = [
  {
    id: '1', // Unique ID as a string
    invoice: 'Invoice-2024-xd912c',
    label: 'Upcoming',
    status: 'warning',
    date: '6 Aug, 2024',
    dueDate: 'HR Dept', // Changed to date
    amount: '$24.00',
  },
  {
    id: '2',
    invoice: 'Invoice-2024-rq857m',
    label: 'Paid',
    status: 'success',
    date: '17 Jun, 2024',
    dueDate: '6 Aug, 2024',
    amount: '$29.99',
  },
  {
    id: '3',
    invoice: 'Invoice-2024-jk563z',
    label: 'Paid',
    status: 'success',
    date: '30 Apr, 2024',
    dueDate: '6 Aug, 2024',
    amount: '$24.00',
  },
  {
    id: '4',
    invoice: 'Invoice-2024-hg234x',
    label: 'Declined',
    status: 'destructive',
    date: '21 Apr, 2024',
    dueDate: '6 Aug, 2024',
    amount: '$6.59',
  },
  {
    id: '5',
    invoice: 'Invoice-2024-lp098y',
    label: 'Paid',
    status: 'success',
    date: '14 Mar, 2024',
    dueDate: '6 Aug, 2024',
    amount: '$79.00',
  },
  {
    id: '6',
    invoice: 'Invoice-2024-q196l',
    label: 'Paid',
    status: 'success',
    date: '08 Jan, 2024',
    dueDate: '6 Aug, 2024',
    amount: '$257.00',
  },
  {
    id: '7',
    invoice: 'Invoice-2024-m113s',
    label: 'Upcoming',
    status: 'warning',
    date: '07 Nov, 2024',
    dueDate: 'Design Dept', // Changed to date
    amount: '$67.00',
  },
  {
    id: '8',
    invoice: 'Invoice-2024-u859c',
    label: 'Declined',
    status: 'destructive',
    date: '16 May, 2024',
    dueDate: '07 Nov, 2024',
    amount: '$494.00',
  },
  {
    id: '9',
    invoice: 'Invoice-2024-m803g',
    label: 'Paid',
    status: 'success',
    date: '16 Mar, 2024',
    dueDate: '16 Mar, 2024',
    amount: '$142.00',
  },
  {
    id: '10',
    invoice: 'Invoice-2024-r204u',
    label: 'Paid',
    status: 'success',
    date: '25 Mar, 2024',
    dueDate: '25 Mar, 2024',
    amount: '$35.00',
  },
  {
    id: '11',
    invoice: 'Invoice-2024-b907a',
    label: 'Paid',
    status: 'success',
    date: '12 Feb, 2024',
    dueDate: '12 Feb, 2024',
    amount: '$59.99',
  },
  {
    id: '12',
    invoice: 'Invoice-2024-n567k',
    label: 'Upcoming',
    status: 'warning',
    date: '01 Mar, 2024',
    dueDate: 'Marketing Dept', // Changed to date
    amount: '$150.00',
  },
  {
    id: '13',
    invoice: 'Invoice-2024-k453j',
    label: 'Declined',
    status: 'destructive',
    date: '03 Apr, 2024',
    dueDate: '03 Apr, 2024',
    amount: '$89.50',
  },
  {
    id: '14',
    invoice: 'Invoice-2024-d981q',
    label: 'Paid',
    status: 'success',
    date: '20 Feb, 2024',
    dueDate: '20 Feb, 2024',
    amount: '$200.00',
  },
  {
    id: '15',
    invoice: 'Invoice-2024-p846y',
    label: 'Paid',
    status: 'success',
    date: '15 May, 2024',
    dueDate: '15 May, 2024',
    amount: '$75.00',
  },
  {
    id: '16',
    invoice: 'Invoice-2024-z190x',
    label: 'Upcoming',
    status: 'warning',
    date: '10 Jun, 2024',
    dueDate: 'Finance Dept', // Changed to date
    amount: '$130.00',
  },
  {
    id: '17',
    invoice: 'Invoice-2024-l892v',
    label: 'Paid',
    status: 'success',
    date: '25 Jan, 2024',
    dueDate: '25 Jan, 2024',
    amount: '$100.00',
  },
  {
    id: '18',
    invoice: 'Invoice-2024-t675c',
    label: 'Declined',
    status: 'destructive',
    date: '18 Jul, 2024',
    dueDate: '18 Jul, 2024',
    amount: '$45.00',
  },
  {
    id: '19',
    invoice: 'Invoice-2024-w432r',
    label: 'Paid',
    status: 'success',
    date: '09 Aug, 2024',
    dueDate: '09 Aug, 2024',
    amount: '$60.00',
  },
  {
    id: '20',
    invoice: 'Invoice-2024-e765n',
    label: 'Upcoming',
    status: 'warning',
    date: '12 Oct, 2024',
    dueDate: 'IT Dept', // Changed to date
    amount: '$500.00',
  },
  // Add the rest of the items in the same pattern...
];

const Invoicing = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const [rowSelection] = useState<RowSelectionState>({});
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'date', desc: true },
  ]);

  const ColumnInputFilter = <TData, TValue>({
    column,
  }: IColumnFilterProps<TData, TValue>) => {
    return (
      <Input
        placeholder="Filter..."
        value={(column.getFilterValue() as string) ?? ''}
        onChange={(event) => column.setFilterValue(event.target.value)}
        size="sm"
        className="max-w-40"
      />
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
        size: 48,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'invoice',
        accessorFn: (row) => row.invoice,
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Member"
            filter={<ColumnInputFilter column={column} />}
            column={column}
          />
        ),
        cell: (info) => {
          return info.row.original.invoice;
        },
        enableSorting: true,
        size: 210,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'label',
        accessorFn: (row) => row.label,
        header: ({ column }) => (
          <DataGridColumnHeader title="Status" column={column} />
        ),
        cell: (info) => {
          const variant = info.row.original
            .status as keyof BadgeProps['variant'];

          return (
            <Badge variant={variant} appearance="outline">
              {info.row.original.label}
            </Badge>
          );
        },
        enableSorting: true,
        size: 150,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'date',
        accessorFn: (row) => row.date,
        header: ({ column }) => (
          <DataGridColumnHeader title="Date" column={column} />
        ),
        cell: (info) => {
          return info.row.original.date;
        },
        enableSorting: true,
        size: 170,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'dueDate',
        accessorFn: (row) => row.dueDate,
        header: ({ column }) => (
          <DataGridColumnHeader title="Due Date" column={column} />
        ),
        cell: (info) => {
          return info.row.original.dueDate;
        },
        enableSorting: true,
        size: 170,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'amount',
        accessorFn: (row) => row.amount,
        header: ({ column }) => (
          <DataGridColumnHeader title="Amount" column={column} />
        ),
        cell: (info) => {
          return info.row.original.amount;
        },
        enableSorting: true,
        size: 160,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'actions',
        header: () => '',
        enableSorting: false,
        cell: () => {
          return (
            <Button mode="link" underlined="dashed">
              Download
            </Button>
          );
        },
        size: 90,
      },
    ],
    [],
  );

  const filteredData: IData[] = useMemo(() => data, []);

  useEffect(() => {
    const selectedRowIds = Object.keys(rowSelection);

    if (selectedRowIds.length > 0) {
      toast(`Total ${selectedRowIds.length} are selected.`, {
        description: `Selected row IDs: ${selectedRowIds}`,
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      });
    }
  }, [rowSelection]);

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

  const Toolbar = () => {
    const { table } = useDataGrid();

    return (
      <CardToolbar>
        <Button variant="outline">
          <Download />
          Download PDF
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
          <CardTitle>Billing and Invoicing</CardTitle>
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

export { Invoicing };
