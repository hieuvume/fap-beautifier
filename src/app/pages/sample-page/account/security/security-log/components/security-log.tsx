'use client';

import { ReactElement, useMemo, useState } from 'react';
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
import {
  FileDown,
  Filter,
  KeyRound,
  Lock,
  NotepadText,
  Search,
  Settings2,
  ShieldAlert,
  ShieldCheck,
  ShieldX,
  TrafficCone,
  Wifi,
  X,
} from 'lucide-react';
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

interface EventType {
  icon: ReactElement;
  label: string;
}

interface Severity {
  label: string;
  variant:
    | 'secondary'
    | 'primary'
    | 'destructive'
    | 'success'
    | 'info'
    | 'mono'
    | 'warning'
    | null
    | undefined;
}

interface IData {
  id: string;
  timestamp: string;
  eventType: EventType;
  actionTaken: string;
  sourceIp: string;
  destinationIp: string;
  severity: Severity;
}

const data: IData[] = [
  {
    id: '1',
    timestamp: '2024-01-04T23:59:59Z',
    eventType: {
      icon: <ShieldAlert size={16} className="text-destructive" />,
      label: 'Unauthorized Access',
    },
    actionTaken: 'Login Attempt Blocked',
    sourceIp: '192.168.10.15',
    destinationIp: '10.1.1.50',
    severity: {
      label: 'High',
      variant: 'warning',
    },
  },
  {
    id: '2',
    timestamp: '2024-01-04T22:30:00Z',
    eventType: {
      icon: <KeyRound size={16} className="text-yellow-400" />,
      label: 'Key Rotation',
    },
    actionTaken: 'Key Successfully Rotated',
    sourceIp: '10.0.0.1',
    destinationIp: '192.168.1.1',
    severity: {
      label: 'Medium',
      variant: 'primary',
    },
  },
  {
    id: '3',
    timestamp: '2024-01-04T21:15:25Z',
    eventType: {
      icon: <Search size={16} className="text-primary" />,
      label: 'Suspicious Login',
    },
    actionTaken: 'User Account Locked',
    sourceIp: '172.16.254.3',
    destinationIp: '10.2.2.2',
    severity: {
      label: 'High',
      variant: 'warning',
    },
  },
  {
    id: '4',
    timestamp: '2024-01-04T20:05:10Z',
    eventType: {
      icon: <ShieldX size={16} className="text-yellow-400" />,
      label: 'Firewall Update',
    },
    actionTaken: 'New Rule Implemented',
    sourceIp: '192.168.1.100',
    destinationIp: '172.16.0.1',
    severity: {
      label: 'Low',
      variant: 'success',
    },
  },
  {
    id: '5',
    timestamp: '2024-01-04T18:45:05Z',
    eventType: {
      icon: <TrafficCone size={16} className="text-primary" />,
      label: 'Traffic Anomaly',
    },
    actionTaken: 'Traffic Analysis Initiated',
    sourceIp: '10.0.1.200',
    destinationIp: '10.1.2.50',
    severity: {
      label: 'Critical',
      variant: 'destructive',
    },
  },
  {
    id: '6',
    timestamp: '2024-01-04T17:30:00Z',
    eventType: {
      icon: <Lock size={16} className="text-green-500" />,
      label: 'Transfer Completed',
    },
    actionTaken: 'Login Attempt Blocked',
    sourceIp: '192.168.2.150',
    destinationIp: '192.168.2.1',
    severity: {
      label: 'Medium',
      variant: 'primary',
    },
  },
  {
    id: '7',
    timestamp: '2024-01-04T16:00:15Z',
    eventType: {
      icon: <FileDown size={16} className="text-secondary-foreground" />,
      label: 'Data Backup Completed',
    },
    actionTaken: 'Backup Verified',
    sourceIp: '10.1.1.20',
    destinationIp: '192.168.4.1',
    severity: {
      label: 'Low',
      variant: 'success',
    },
  },
  {
    id: '8',
    timestamp: '2024-01-04T14:45:30Z',
    eventType: {
      icon: <Wifi size={16} className="text-info" />,
      label: 'Network Scanning',
    },
    actionTaken: 'Scanning Completed',
    sourceIp: '172.16.0.5',
    destinationIp: '10.3.3.3',
    severity: {
      label: 'Medium',
      variant: 'primary',
    },
  },
  {
    id: '9',
    timestamp: '2024-01-04T13:20:00Z',
    eventType: {
      icon: <ShieldCheck size={16} className="text-destructive" />,
      label: 'Access Revoked',
    },
    actionTaken: 'Login Attempt Blocked',
    sourceIp: '192.168.3.30',
    destinationIp: '172.16.1.1',
    severity: {
      label: 'High',
      variant: 'warning',
    },
  },
  {
    id: '10',
    timestamp: '2024-01-04T12:05:05Z',
    eventType: {
      icon: <Settings2 size={16} className="text-primary" />,
      label: 'System Maintenance',
    },
    actionTaken: 'Maintenance Completed',
    sourceIp: '10.2.2.40',
    destinationIp: '192.168.5.1',
    severity: {
      label: 'Low',
      variant: 'success',
    },
  },
];

const SecurityLog = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'timestamp', desc: true },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeverities, setSelectedSeverities] = useState<string[]>([]);

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Filter by severity
      const matchesSeverity =
        !selectedSeverities?.length ||
        selectedSeverities.includes(item.severity.label);

      // Filter by search query (case-insensitive)
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        item.timestamp.toLowerCase().includes(searchLower) ||
        item.eventType.label.toLowerCase().includes(searchLower) ||
        item.actionTaken.toLowerCase().includes(searchLower) ||
        item.sourceIp.toLowerCase().includes(searchLower) ||
        item.destinationIp.toLowerCase().includes(searchLower);

      return matchesSeverity && matchesSearch;
    });
  }, [searchQuery, selectedSeverities]);

  const severityCounts = useMemo(() => {
    return data.reduce(
      (acc, item) => {
        const severity = item.severity.label;
        acc[severity] = (acc[severity] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
  }, []);

  const handleSeverityChange = (checked: boolean, value: string) => {
    setSelectedSeverities((prev = []) =>
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
        id: 'timestamp',
        accessorFn: (row) => row.timestamp,
        header: ({ column }) => (
          <DataGridColumnHeader title="Timestamp" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-secondary-foreground font-normal">
            {row.original.timestamp}
          </span>
        ),
        enableSorting: true,
        size: 200,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'eventType',
        accessorFn: (row) => row.eventType,
        header: ({ column }) => (
          <DataGridColumnHeader title="Event Type" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-1.5">
            {row.original.eventType.icon}
            <span className="leading-none font-semibold text-secondary-foreground">
              {row.original.eventType.label}
            </span>
          </div>
        ),
        enableSorting: true,
        size: 200,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'actionTaken',
        accessorFn: (row) => row.actionTaken,
        header: ({ column }) => (
          <DataGridColumnHeader title="Action Taken" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-secondary-foreground font-normal">
            {row.original.actionTaken}
          </span>
        ),
        enableSorting: true,
        size: 200,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'sourceIp',
        accessorFn: (row) => row.sourceIp,
        header: ({ column }) => (
          <DataGridColumnHeader title="Source IP" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-secondary-foreground font-normal">
            {row.original.sourceIp}
          </span>
        ),
        enableSorting: true,
        size: 130,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'destinationIp',
        accessorFn: (row) => row.destinationIp,
        header: ({ column }) => (
          <DataGridColumnHeader title="Destination IP" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-secondary-foreground font-normal">
            {row.original.destinationIp}
          </span>
        ),
        enableSorting: true,
        size: 130,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'severity',
        accessorFn: (row) => row.severity,
        header: ({ column }) => (
          <DataGridColumnHeader title="Severity" column={column} />
        ),
        cell: ({ row }) => (
          <Badge variant={row.original.severity.variant} appearance="outline">
            {row.original.severity.label}
          </Badge>
        ),
        enableSorting: true,
        size: 110,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'actions',
        header: () => '',
        cell: () => (
          <Button variant="ghost">
            <NotepadText />
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
          <Label htmlFor="auto-update" className="text-sm">
            Push Alerts
          </Label>
          <Switch size="sm" id="auto-update" defaultChecked />
        </div>
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
                  placeholder="Search Logs..."
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
                    Severity
                    {selectedSeverities.length > 0 && (
                      <Badge appearance="stroke">
                        {selectedSeverities.length}
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
                      {Object.keys(severityCounts).map((severity) => (
                        <div
                          key={severity}
                          className="flex items-center gap-2.5"
                        >
                          <Checkbox
                            id={severity}
                            checked={selectedSeverities.includes(severity)}
                            onCheckedChange={(checked) =>
                              handleSeverityChange(checked === true, severity)
                            }
                          />
                          <Label
                            htmlFor={severity}
                            className="grow flex items-center justify-between font-normal gap-1.5"
                          >
                            {severity}
                            <span className="text-muted-foreground">
                              {severityCounts[severity]}
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

export { SecurityLog };
