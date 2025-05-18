import { ReactNode, useMemo, useState } from 'react';
import {
  Column,
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { Settings2 } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardFooter,
  CardHeader,
  CardTable,
  CardTitle,
} from '@/app/components/ui/card';
// Assuming these exist
import { DataGrid } from '@/app/components/ui/data-grid';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Switch } from '@/app/components/ui/switch';

interface IData {
  id: string;
  title: string;
  description: string;
  category: 'accessibility' | 'api';
  control: ReactNode;
  apiKey?: string;
  dailyCalls?: string;
}

interface IColumnFilterProps<TData, TValue> {
  column: Column<TData, TValue>;
}

const ApiIntegrations = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'updated_at', desc: true },
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

  const data: IData[] = useMemo(
    () => [
      {
        id: 'acc1',
        title: 'Shortcuts require modifier',
        description: 'Enable modifier keys for quick keyboard shortcuts.',
        category: 'accessibility',
        control: <Switch id="size-sm" size="sm" defaultChecked />,
      },
      {
        id: 'acc2',
        title: 'High color contrast',
        description: 'Improve readability with high-contrast interface colors.',
        category: 'accessibility',
        control: <Switch id="size-sm" size="sm" />,
      },
      {
        id: 'acc3',
        title: 'Autoplay videos',
        description: 'Choose preferences for automatic video playback.',
        category: 'accessibility',
        control: (
          <div className="grow min-w-48">
            <Select defaultValue="1">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">System preferences</SelectItem>
                <SelectItem value="2">Sound</SelectItem>
                <SelectItem value="3">Focus</SelectItem>
              </SelectContent>
            </Select>
          </div>
        ),
      },
      {
        id: 'acc4',
        title: 'Open links in Desktop',
        description: 'Links open in the desktop app for convenience.',
        category: 'accessibility',
        control: <Switch id="size-sm" size="sm" defaultChecked />,
      },
      {
        id: 'api1',
        title: 'Quick Pay Service',
        description: 'Payment processing integration',
        category: 'api',
        control: <Switch id="size-sm" size="sm" defaultChecked />,
        apiKey: 'a1b2Xc3dY4ZxQvPlQp',
        dailyCalls: '10,000',
      },
      {
        id: 'api2',
        title: 'User Auth System',
        description: 'Authentication service integration',
        category: 'api',
        control: <Switch id="size-sm" size="sm" />,
        apiKey: 'f6g7Z8h9R0TfUaSdTf',
        dailyCalls: '15,000',
      },
      {
        id: 'api3',
        title: 'Data Analytics',
        description: 'Analytics service integration',
        category: 'api',
        control: <Switch id="size-sm" size="sm" />,
        apiKey: 'k1V2m3N4L5CvPbDvDa',
        dailyCalls: '5,000',
      },
      {
        id: 'api4',
        title: 'CRM Connector',
        description: 'Customer relationship management integration',
        category: 'api',
        control: <Switch id="size-sm" size="sm" />,
        apiKey: 'p6qM7rS8tK9BnHjCcR',
        dailyCalls: '8,000',
      },
      {
        id: 'api5',
        title: 'Inventory Manager',
        description: 'Inventory management integration',
        category: 'api',
        control: <Switch id="size-sm" size="sm" defaultChecked />,
        apiKey: 'u1vP2wF3xJ4KlYnIlM',
        dailyCalls: '12,000',
      },
      {
        id: 'api6',
        title: 'Inventory Manager',
        description: 'Secondary inventory management integration',
        category: 'api',
        control: <Switch id="size-sm" size="sm" defaultChecked />,
        apiKey: 'z6G7bT8cQ9WxEcEdEs',
        dailyCalls: '20,000',
      },
      {
        id: 'api7',
        title: 'Order Tracking Sys',
        description: 'Order tracking system integration',
        category: 'api',
        control: <Switch id="size-sm" size="sm" />,
        apiKey: 'e1E2gH3hB4iYtUvOtS',
        dailyCalls: '9,500',
      },
      {
        id: 'api8',
        title: 'Feedback Loop',
        description: 'Customer feedback system integration',
        category: 'api',
        control: <Switch id="size-sm" size="sm" defaultChecked />,
        apiKey: 'j6k7l8m9n0QaWsFlFb',
        dailyCalls: '7,000',
      },
      {
        id: 'api9',
        title: 'Payment Gateway',
        description: 'Alternative payment processing integration',
        category: 'api',
        control: <Switch id="size-sm" size="sm" />,
        apiKey: '1p2q3r4s5DfGhPgPy',
        dailyCalls: '25,000',
      },
      {
        id: 'api10',
        title: 'Shipping Coordinator',
        description: 'Shipping management integration',
        category: 'api',
        control: <Switch id="size-sm" size="sm" defaultChecked />,
        apiKey: 't6u7v8w9x0CvBnNlSc',
        dailyCalls: '14,000',
      },
    ],
    [],
  );

  const columns = useMemo<ColumnDef<IData>[]>(
    () => [
      {
        accessorKey: 'id',
        header: () => <DataGridTableRowSelectAll />,
        cell: ({ row }) => <DataGridTableRowSelect row={row} />,
        enableSorting: false,
        enableHiding: false,
        meta: { headerClassName: 'w-0' },
      },
      {
        accessorFn: (row) => row.title,
        id: 'title',
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Setting"
            filter={<ColumnInputFilter column={column} />}
            column={column}
          />
        ),
        cell: (info) => info.row.original.title,
        meta: { headerClassName: 'min-w-[206px]' },
      },
      {
        accessorFn: (row) => row.description,
        id: 'description',
        header: ({ column }) => (
          <DataGridColumnHeader title="Description" column={column} />
        ),
        cell: (info) => info.row.original.description,
        meta: { headerClassName: 'min-w-[224px]' },
      },
      {
        accessorFn: (row) => row.apiKey,
        id: 'apiKey',
        header: ({ column }) => (
          <DataGridColumnHeader title="API Key" column={column} />
        ),
        cell: (info) =>
          info.row.original.apiKey && (
            <div className="flex items-center text-foreground font-normal">
              {info.row.original.apiKey}
              <Link
                to="#"
                className="btn btn-sm btn-icon btn-clear text-muted-foreground hover:text-primary-active"
              >
                <span className="text-xs">Copy</span>
              </Link>
            </div>
          ),
        meta: { headerClassName: 'min-w-[224px]' },
      },
      {
        accessorFn: (row) => row.dailyCalls,
        id: 'dailyCalls',
        header: ({ column }) => (
          <DataGridColumnHeader title="Daily Calls" column={column} />
        ),
        cell: (info) => info.row.original.dailyCalls,
        meta: { headerClassName: 'min-w-[122px]' },
      },
      {
        accessorFn: (row) => row.control,
        id: 'control',
        header: ({ column }) => (
          <DataGridColumnHeader title="Control" column={column} />
        ),
        cell: (info) => info.row.original.control,
        meta: { headerClassName: 'min-w-[98px]' },
      },
      {
        id: 'actions',
        header: () => '',
        enableSorting: false,
        cell: () => (
          <Button variant="dim" mode="icon">
            Edit
          </Button>
        ),
        meta: { headerClassName: 'w-[60px]' },
      },
    ],
    [],
  );

  const filteredData: IData[] = useMemo(() => data, [data]);

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
    return (
      <div className="flex items-center gap-2.5 justify-end">
        <div className="flex gap-7.5">
          <Label htmlFor="size-sm" className="text-sm">
            Pause all
          </Label>
          <Switch id="size-sm" size="sm" />
          <Button>Add New</Button>
        </div>
        <DataGridColumnVisibility
          table={table}
          trigger={
            <Button variant="outline">
              <Settings2 /> Columns
            </Button>
          }
        />
      </div>
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

export { ApiIntegrations, type IData };
