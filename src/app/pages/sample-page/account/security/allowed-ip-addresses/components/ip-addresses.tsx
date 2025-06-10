'use client';

import { useEffect, useMemo, useState } from 'react';
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
import {
  Filter,
  Info,
  Search,
  Settings2,
  SquarePen,
  Trash2,
  X,
} from 'lucide-react';
import { toast } from 'sonner';
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
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/components/ui/popover';
import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';
import { Switch } from '@/app/components/ui/switch';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/ui/tooltip';

interface IData {
  id: string;
  status: string;
  ipAddress: string;
  lastSession: string;
  label: string;
  method: string;
}

const data: IData[] = [
  {
    id: '1',
    status: 'bg-green-500',
    ipAddress: '192.168.1.1',
    lastSession: '6 Aug, 2024',
    label: 'HR Dept',
    method: 'Basic auth',
  },
  {
    id: '2',
    status: 'bg-green-500',
    ipAddress: '2001:db8:0:1234:0:567:8:5',
    lastSession: '22 Jul 2024',
    label: 'Guy Hawkins',
    method: 'Web',
  },
  {
    id: '3',
    status: 'bg-destructive',
    ipAddress: '2001:db8:0:1234:0:567:8:4',
    lastSession: '18 Jul, 2024',
    label: 'Sales Dept',
    method: 'SSH',
  },
  {
    id: '4',
    status: 'bg-green-500',
    ipAddress: '192.168.1.2',
    lastSession: '15 Jul, 2024',
    label: 'Sales Dept',
    method: 'Kerberos',
  },
  {
    id: '5',
    status: 'bg-yellow-400',
    ipAddress: '2001:db8:0:1234:0:567:8:3',
    lastSession: '30 Jul, 2024',
    label: 'Legal Dept',
    method: 'Token',
  },
  {
    id: '6',
    status: 'bg-yellow-400',
    ipAddress: '10.0.0.2',
    lastSession: '28 Jul, 2024',
    label: 'Finance Dept',
    method: 'API Key',
  },
  {
    id: '7',
    status: 'bg-green-500',
    ipAddress: '192.168.1.4',
    lastSession: '16 Jul, 2024',
    label: 'Design Dept',
    method: 'FIDO U2F',
  },
  {
    id: '8',
    status: 'bg-destructive',
    ipAddress: '2001:db8:0:1234:0:567:8:6',
    lastSession: '11 Aug, 2024',
    label: 'Compliance Dept',
    method: 'OpenID',
  },
  {
    id: '9',
    status: 'bg-green-500',
    ipAddress: '2001:db8:0:1234:0:567:8:9',
    lastSession: '19 Jul, 2024',
    label: 'Alice Smith',
    method: 'Biometric',
  },
  {
    id: '10',
    status: 'bg-green-500',
    ipAddress: '192.168.1.1',
    lastSession: '6 Aug, 2024',
    label: 'HR Dept',
    method: 'Basic auth',
  },
  {
    id: '11',
    status: 'bg-yellow-400',
    ipAddress: '192.168.0.1',
    lastSession: '15 Sep, 2024',
    label: 'John Doe',
    method: 'Biometric',
  },
  {
    id: '12',
    status: 'bg-destructive',
    ipAddress: '10.0.0.1',
    lastSession: '22 Sep, 2024',
    label: 'Marketing Dept',
    method: 'Basic auth',
  },
  {
    id: '13',
    status: 'bg-violet-500',
    ipAddress: '172.16.0.1',
    lastSession: '30 Sep, 2024',
    label: 'Jane Doe',
    method: 'OAuth2',
  },
  {
    id: '14',
    status: 'bg-green-500',
    ipAddress: '192.168.2.1',
    lastSession: '5 Oct, 2024',
    label: 'Sales Dept',
    method: 'Biometric',
  },
  {
    id: '15',
    status: 'bg-yellow-400',
    ipAddress: '10.1.1.1',
    lastSession: '12 Oct, 2024',
    label: 'Bob Johnson',
    method: 'Basic auth',
  },
  {
    id: '16',
    status: 'bg-destructive',
    ipAddress: '172.17.0.1',
    lastSession: '20 Oct, 2024',
    label: 'Engineering Dept',
    method: 'OAuth2',
  },
  {
    id: '17',
    status: 'bg-violet-500',
    ipAddress: '192.168.3.1',
    lastSession: '27 Oct, 2024',
    label: 'Alice Johnson',
    method: 'Biometric',
  },
  {
    id: '18',
    status: 'bg-green-500',
    ipAddress: '10.2.2.1',
    lastSession: '4 Nov, 2024',
    label: 'IT Dept',
    method: 'Basic auth',
  },
  {
    id: '19',
    status: 'bg-yellow-400',
    ipAddress: '172.18.0.1',
    lastSession: '11 Nov, 2024',
    label: 'Finance Dept',
    method: 'OAuth2',
  },
  {
    id: '20',
    status: 'bg-destructive',
    ipAddress: '192.168.4.1',
    lastSession: '18 Nov, 2024',
    label: 'David Smith',
    method: 'Biometric',
  },
  {
    id: '21',
    status: 'bg-violet-500',
    ipAddress: '10.3.3.1',
    lastSession: '25 Nov, 2024',
    label: 'Security Dept',
    method: 'Basic auth',
  },
  {
    id: '22',
    status: 'bg-green-500',
    ipAddress: '172.19.0.1',
    lastSession: '2 Dec, 2024',
    label: 'Operations Dept',
    method: 'OAuth2',
  },
  {
    id: '23',
    status: 'bg-yellow-400',
    ipAddress: '192.168.5.1',
    lastSession: '9 Dec, 2024',
    label: 'Sarah Johnson',
    method: 'Biometric',
  },
  {
    id: '24',
    status: 'bg-destructive',
    ipAddress: '10.4.4.1',
    lastSession: '16 Dec, 2024',
    label: 'Customer Support',
    method: 'Basic auth',
  },
  {
    id: '25',
    status: 'bg-violet-500',
    ipAddress: '172.20.0.1',
    lastSession: '23 Dec, 2024',
    label: 'Mary Smith',
    method: 'OAuth2',
  },
  {
    id: '26',
    status: 'bg-green-500',
    ipAddress: '192.168.6.1',
    lastSession: '30 Dec, 2024',
    label: 'Development Dept',
    method: 'Biometric',
  },
  {
    id: '27',
    status: 'bg-yellow-400',
    ipAddress: '10.5.5.1',
    lastSession: '6 Jan, 2025',
    label: 'Tom Johnson',
    method: 'Basic auth',
  },
  {
    id: '28',
    status: 'bg-destructive',
    ipAddress: '172.21.0.1',
    lastSession: '13 Jan, 2025',
    label: 'Human Resources',
    method: 'OAuth2',
  },
  {
    id: '29',
    status: 'bg-violet-500',
    ipAddress: '192.168.7.1',
    lastSession: '20 Jan, 2025',
    label: 'Emily Smith',
    method: 'Biometric',
  },
  {
    id: '30',
    status: 'bg-green-500',
    ipAddress: '10.6.6.1',
    lastSession: '27 Jan, 2025',
    label: 'Legal Dept',
    method: 'Basic auth',
  },
];

const IPAddresses = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'lastSession', desc: true },
  ]);
  const [rowSelection] = useState<RowSelectionState>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Filter by status
      const matchesStatus =
        !selectedStatuses?.length ||
        selectedStatuses.includes(
          item.status.replace('bg-', '').charAt(0).toUpperCase() +
            item.status.replace('bg-', '').slice(1),
        );

      // Filter by search query (case-insensitive)
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        item.ipAddress.toLowerCase().includes(searchLower) ||
        item.label.toLowerCase().includes(searchLower) ||
        item.method.toLowerCase().includes(searchLower);

      return matchesStatus && matchesSearch;
    });
  }, [searchQuery, selectedStatuses]);

  const statusCounts = useMemo(() => {
    return data.reduce(
      (acc, item) => {
        const status =
          item.status.replace('bg-', '').charAt(0).toUpperCase() +
          item.status.replace('bg-', '').slice(1);
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
        size: 46,
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
          <div className="text-center">
            <Badge appearance="ghost">
              <BadgeDot className={row.original.status} />
            </Badge>
          </div>
        ),
        enableSorting: true,
        size: 85,
        meta: {
          cellClassName: '',
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
        size: 200,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'lastSession',
        accessorFn: (row) => row.lastSession,
        header: ({ column }) => (
          <DataGridColumnHeader title="Last Session" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-secondary-foreground font-normal">
            {row.original.lastSession}
          </span>
        ),
        enableSorting: true,
        size: 185,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'label',
        accessorFn: (row) => row.label,
        header: ({ column }) => (
          <DataGridColumnHeader title="Label" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-secondary-foreground font-normal">
            {row.original.label}
          </span>
        ),
        enableSorting: true,
        size: 150,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'method',
        accessorFn: (row) => row.method,
        header: ({ column }) => (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  <DataGridColumnHeader
                    title="Method"
                    visibility={true}
                    column={column}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Verify the identity of a user trying to access a resource</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ),
        cell: ({ row }) => (
          <span className="text-secondary-foreground font-normal">
            {row.original.method}
          </span>
        ),
        enableSorting: true,
        size: 150,
        meta: {
          headerClassName: '',
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
        size: 65,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'trash',
        header: () => '',
        cell: () => (
          <Button variant="ghost">
            <Trash2 />
          </Button>
        ),
        enableSorting: false,
        size: 65,
        meta: {
          headerClassName: '',
        },
      },
    ],
    [],
  );

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
        <div className="flex items-center space-x-2">
          <Label htmlFor="auto-update" className="text-sm">
            IP Allowlist Enabled
          </Label>
          <Switch size="sm" id="auto-update" defaultChecked />
        </div>
        <Button>Add IP Address</Button>
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
        <CardHeader className="py-4">
          <CardHeading>
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <Search className="size-4 text-muted-foreground absolute start-3 top-1/2 -translate-y-1/2" />
                <Input
                  placeholder="Search IP Addresses..."
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

export { IPAddresses };
