import { ReactNode, useEffect, useMemo, useState } from 'react';
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
import { Copy, Settings2, SquarePen } from 'lucide-react';
import { toast } from 'sonner';
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
import { Label } from '@/app/components/ui/label';
import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';
import { Switch } from '@/app/components/ui/switch';

interface IColumnFilterProps<TData, TValue> {
  column: Column<TData, TValue>;
}

interface IData {
  id: string; // Use string for ID
  integration: string;
  apiKey: string;
  dailyCalls: string;
  status: ReactNode;
}

const data: IData[] = [
  {
    id: '1', // Unique ID as a string
    integration: 'Quick Pay Service',
    apiKey: 'a1b2Xc3dY4ZxQvPlQp',
    dailyCalls: '10,000',
    status: <Switch size="sm" defaultChecked />,
  },
  {
    id: '2',
    integration: 'User Auth System',
    apiKey: 'f6g7Z8h9R0TfUaSdTf',
    dailyCalls: '15,000',
    status: <Switch size="sm" />,
  },
  {
    id: '3',
    integration: 'Data Analytics',
    apiKey: 'k1V2m3N4L5CvPbDvDa',
    dailyCalls: '5,000',
    status: <Switch size="sm" />,
  },
  {
    id: '4',
    integration: 'CRM Connector',
    apiKey: 'p6qM7rS8tK9BnHjCcR',
    dailyCalls: '8,000',
    status: <Switch size="sm" />,
  },
  {
    id: '5',
    integration: 'Inventory Manager',
    apiKey: 'u1vP2wF3xJ4KlYnIlM',
    dailyCalls: '12,000',
    status: <Switch size="sm" defaultChecked />,
  },
  {
    id: '6',
    integration: 'Inventory Manager',
    apiKey: 'z6G7bT8cQ9WxEcEdEs',
    dailyCalls: '20,000',
    status: <Switch size="sm" defaultChecked />,
  },
  {
    id: '7',
    integration: 'Order Tracking Sys',
    apiKey: 'e1E2gH3hB4iYtUvOtS',
    dailyCalls: '9,500',
    status: <Switch size="sm" />,
  },
  {
    id: '8',
    integration: 'Feedback Loop',
    apiKey: 'j6k7l8m9n0QaWsFlFb',
    dailyCalls: '7,000',
    status: <Switch size="sm" defaultChecked />,
  },
  {
    id: '9',
    integration: 'Payment Gateway',
    apiKey: '1p2q3r4s5DfGhPgPy',
    dailyCalls: '25,000',
    status: <Switch size="sm" />,
  },
  {
    id: '10',
    integration: 'Shipping Coordinator',
    apiKey: 't6u7v8w9x0CvBnNlSc',
    dailyCalls: '14,000',
    status: <Switch size="sm" defaultChecked />,
  },
  {
    id: '11',
    integration: 'Accounting Tool',
    apiKey: 'a9b8c7d6e5f4g3h2i1',
    dailyCalls: '18,000',
    status: <Switch size="sm" />,
  },
  {
    id: '12',
    integration: 'Customer Support',
    apiKey: 'j1k2l3m4n5o6p7q8r9',
    dailyCalls: '22,000',
    status: <Switch size="sm" defaultChecked />,
  },
  {
    id: '13',
    integration: 'Social Media Manager',
    apiKey: 's1t2u3v4w5x6y7z8a9',
    dailyCalls: '13,000',
    status: <Switch size="sm" />,
  },
  {
    id: '14',
    integration: 'SEO Analyzer',
    apiKey: 'b1c2d3e4f5g6h7i8j9',
    dailyCalls: '6,000',
    status: <Switch size="sm" />,
  },
  {
    id: '15',
    integration: 'Newsletter Service',
    apiKey: 'k2l3m4n5o6p7q8r9s1',
    dailyCalls: '11,000',
    status: <Switch size="sm" defaultChecked />,
  },
  {
    id: '16',
    integration: 'SMS Notification Service',
    apiKey: 't2u3v4w5x6y7z8a9b1',
    dailyCalls: '19,000',
    status: <Switch size="sm" />,
  },
  {
    id: '17',
    integration: 'Cloud Storage',
    apiKey: 'c2d3e4f5g6h7i8j9k1',
    dailyCalls: '23,000',
    status: <Switch size="sm" defaultChecked />,
  },
  {
    id: '18',
    integration: 'Fraud Detection',
    apiKey: 'u3v4w5x6y7z8a9b1c2',
    dailyCalls: '17,000',
    status: <Switch size="sm" />,
  },
  {
    id: '19',
    integration: 'AI Chatbot',
    apiKey: 'd3e4f5g6h7i8j9k1l2',
    dailyCalls: '21,000',
    status: <Switch size="sm" defaultChecked />,
  },
  {
    id: '20',
    integration: 'Project Management',
    apiKey: 'v4w5x6y7z8a9b1c2d3',
    dailyCalls: '14,500',
    status: <Switch size="sm" />,
  },
  {
    id: '21',
    integration: 'Event Logging',
    apiKey: 'e4f5g6h7i8j9k1l2m3',
    dailyCalls: '20,000',
    status: <Switch size="sm" defaultChecked />,
  },
  {
    id: '22',
    integration: 'Calendar Sync',
    apiKey: 'w5x6y7z8a9b1c2d3e4',
    dailyCalls: '18,500',
    status: <Switch size="sm" />,
  },
  {
    id: '23',
    integration: 'HR Management',
    apiKey: 'f5g6h7i8j9k1l2m3n4',
    dailyCalls: '16,000',
    status: <Switch size="sm" defaultChecked />,
  },
  {
    id: '24',
    integration: 'Content Delivery Network',
    apiKey: 'x6y7z8a9b1c2d3e4f5',
    dailyCalls: '12,500',
    status: <Switch size="sm" />,
  },
  {
    id: '25',
    integration: 'Marketing Automation',
    apiKey: 'g6h7i8j9k1l2m3n4o5',
    dailyCalls: '24,000',
    status: <Switch size="sm" defaultChecked />,
  },
  {
    id: '26',
    integration: 'File Sharing',
    apiKey: 'y7z8a9b1c2d3e4f5g6',
    dailyCalls: '9,000',
    status: <Switch size="sm" />,
  },
  {
    id: '27',
    integration: 'Customer Feedback',
    apiKey: 'h7i8j9k1l2m3n4o5p6',
    dailyCalls: '7,500',
    status: <Switch size="sm" defaultChecked />,
  },
  {
    id: '28',
    integration: 'Sales Forecasting',
    apiKey: 'z8a9b1c2d3e4f5g6h7',
    dailyCalls: '11,500',
    status: <Switch size="sm" />,
  },
  {
    id: '29',
    integration: 'Data Warehouse',
    apiKey: 'i8j9k1l2m3n4o5p6q7',
    dailyCalls: '20,500',
    status: <Switch size="sm" defaultChecked />,
  },
  {
    id: '30',
    integration: 'Email Campaigns',
    apiKey: 'a9b1c2d3e4f5g6h7i8',
    dailyCalls: '10,500',
    status: <Switch size="sm" />,
  },
  {
    id: '31',
    integration: 'Business Intelligence',
    apiKey: 'j9k1l2m3n4o5p6q7r8',
    dailyCalls: '8,500',
    status: <Switch size="sm" defaultChecked />,
  },
];

const ApiIntegrations = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [rowSelection] = useState<RowSelectionState>({});
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'integration', desc: true },
  ]);

  const ColumnInputFilter = <TData, TValue>({
    column,
  }: IColumnFilterProps<TData, TValue>) => {
    return (
      <Input
        placeholder="Filter..."
        value={(column.getFilterValue() as string) ?? ''}
        onChange={(event) => column.setFilterValue(event.target.value)}
        className="h-9 w-full max-w-40"
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
        size: 51,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'integration',
        accessorFn: (row) => row.integration,
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Integration"
            filter={<ColumnInputFilter column={column} />}
            column={column}
          />
        ),
        cell: (info) => info.getValue(),
        enableSorting: true,
        size: 200,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'apiKey',
        accessorFn: (row) => row.apiKey,
        header: ({ column }) => (
          <DataGridColumnHeader title="API Key" column={column} />
        ),
        cell: (info) => (
          <div className="flex items-center text-foreground font-normal">
            {info.row.original.apiKey}
            <Button
              variant="dim"
              mode="icon"
              className="text-muted-foreground hover:text-primary-active"
            >
              <Copy size={16} />
            </Button>
          </div>
        ),
        enableSorting: true,
        size: 220,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'dailyCalls',
        accessorFn: (row) => row.dailyCalls,
        header: ({ column }) => (
          <DataGridColumnHeader title="Daily Calls" column={column} />
        ),
        cell: (info) => info.getValue(),
        enableSorting: true,
        size: 130,
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
        cell: (info) => info.getValue(),
        enableSorting: true,
        size: 100,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'edit',
        header: () => '',
        cell: () => (
          <Button variant="ghost">
            <SquarePen />
          </Button>
        ),
        enableSorting: false,
        size: 70,
        meta: {
          headerClassName: '',
        },
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
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center space-x-2">
            <Label htmlFor="auto-update" className="text-sm">
              Pause all
            </Label>
            <Switch size="sm" />
          </div>
          <Button>Add New</Button>
          <DataGridColumnVisibility
            table={table}
            trigger={
              <Button variant="outline">
                <Settings2 />
                Columns
              </Button>
            }
          />
        </div>
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
          <CardTitle>API Integrations</CardTitle>
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

export { ApiIntegrations };
