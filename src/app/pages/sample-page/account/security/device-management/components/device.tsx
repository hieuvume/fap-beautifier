'use client';

import { ReactElement, useEffect, useMemo, useState } from 'react';
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
import {
  Info,
  Laptop,
  Monitor,
  Search,
  Settings2,
  Smartphone,
  SquarePen,
  Tablet,
  TabletSmartphone,
  Trash2,
  X,
} from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardFooter,
  CardHeader,
  CardTable,
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/ui/tooltip';

interface IColumnFilterProps<TData, TValue> {
  column: Column<TData, TValue>;
}

interface IData {
  id: string;
  device: {
    icon: ReactElement;
    name: string;
    browser: string;
  };
  ipAddress: string;
  location: string;
  added: string;
  lastSession: string;
}

const data: IData[] = [
  {
    id: '1',
    device: {
      icon: <Monitor className="text-xl text-muted-foreground" />,
      name: 'Mac',
      browser: 'Chrome MacOS',
    },
    ipAddress: '117.61.104.86',
    location: 'United States',
    lastSession: '16 Aug, 2024',
    added: '17 hours ago',
  },
  {
    id: '2',
    device: {
      icon: <Smartphone className="text-xl text-muted-foreground" />,
      name: 'iPhone 12',
      browser: 'Safari iOS',
    },
    ipAddress: '234.0.155.191',
    location: 'Canada',
    lastSession: '15 Aug, 2024',
    added: '2 days ago',
  },
  {
    id: '3',
    device: {
      icon: <Smartphone className="text-xl text-muted-foreground" />,
      name: 'Samsung Galaxy S20',
      browser: 'Chrome Android',
    },
    ipAddress: '70.218.212.162',
    location: 'United Kingdom',
    lastSession: '14 Aug, 2024',
    added: '1 day ago',
  },
  {
    id: '4',
    device: {
      icon: <TabletSmartphone className="text-xl text-muted-foreground" />,
      name: 'iPad Pro',
      browser: 'Safari iOS',
    },
    ipAddress: '140.92.152.213',
    location: 'Australia',
    lastSession: '13 Aug, 2024',
    added: '3 days ago',
  },
  {
    id: '5',
    device: {
      icon: <Laptop className="text-xl text-muted-foreground" />,
      name: 'Microsoft Surface 3',
      browser: 'Edge on Windows',
    },
    ipAddress: '214.219.147.46',
    location: 'Germany',
    lastSession: '12 Aug, 2024',
    added: '4 hours ago',
  },
  {
    id: '6',
    device: {
      icon: <Laptop className="text-xl text-muted-foreground" />,
      name: 'Dell XPS',
      browser: 'Chrome Windows',
    },
    ipAddress: '246.44.68.100',
    location: 'France',
    lastSession: '11 Aug, 2024',
    added: '5 days ago',
  },
  {
    id: '7',
    device: {
      icon: <Laptop className="text-xl text-muted-foreground" />,
      name: 'Dell XPS',
      browser: 'Chrome Windows',
    },
    ipAddress: '246.44.68.100',
    location: 'France',
    lastSession: '11 Aug, 2024',
    added: '5 days ago',
  },
  {
    id: '8',
    device: {
      icon: <Smartphone className="text-xl text-muted-foreground" />,
      name: 'Google Pixel 5',
      browser: 'Chrome Android',
    },
    ipAddress: '233.182.185.28',
    location: 'Japan',
    lastSession: '10 Aug, 2024',
    added: '6 days ago',
  },
  {
    id: '9',
    device: {
      icon: <Smartphone className="text-xl text-muted-foreground" />,
      name: 'Huawei P30',
      browser: 'Chrome Android',
    },
    ipAddress: '76.216.214.248',
    location: 'South Korea',
    lastSession: '09 Aug, 2024',
    added: '1 week ago',
  },
  {
    id: '10',
    device: {
      icon: <Laptop className="text-xl text-muted-foreground" />,
      name: 'MacBook Air',
      browser: 'Safari MacOS',
    },
    ipAddress: '102.150.137.255',
    location: 'Italy',
    lastSession: '08 Aug, 2024',
    added: '8 hours ago',
  },
  {
    id: '11',
    device: {
      icon: <Laptop className="text-xl text-muted-foreground" />,
      name: 'Lenovo ThinkPad',
      browser: 'Firefox Windows',
    },
    ipAddress: '75.243.106.80',
    location: 'Spain',
    lastSession: '07 Aug, 2024',
    added: '9 days ago',
  },
  {
    id: '12',
    device: {
      icon: <Laptop className="text-xl text-muted-foreground" />,
      name: 'Dell XPS',
      browser: 'Chrome Windows',
    },
    ipAddress: '246.44.68.100',
    location: 'France',
    lastSession: '06 Aug, 2024',
    added: '10 days ago',
  },
  {
    id: '13',
    device: {
      icon: <Laptop className="text-xl text-muted-foreground" />,
      name: 'Dell XPS',
      browser: 'Chrome Windows',
    },
    ipAddress: '246.44.68.100',
    location: 'France',
    lastSession: '05 Aug, 2024',
    added: '11 days ago',
  },
  {
    id: '14',
    device: {
      icon: <Laptop className="text-xl text-muted-foreground" />,
      name: 'Asus ZenBook',
      browser: 'Edge Windows',
    },
    ipAddress: '198.51.100.0',
    location: 'Netherlands',
    lastSession: '04 Aug, 2024',
    added: '12 days ago',
  },
  {
    id: '15',
    device: {
      icon: <Smartphone className="text-xl text-muted-foreground" />,
      name: 'OnePlus 8',
      browser: 'Chrome Android',
    },
    ipAddress: '203.0.113.1',
    location: 'Brazil',
    lastSession: '03 Aug, 2024',
    added: '13 days ago',
  },
  {
    id: '16',
    device: {
      icon: <Smartphone className="text-xl text-muted-foreground" />,
      name: 'iPhone SE',
      browser: 'Safari iOS',
    },
    ipAddress: '192.0.2.2',
    location: 'Mexico',
    lastSession: '02 Aug, 2024',
    added: '2 weeks ago',
  },
  {
    id: '17',
    device: {
      icon: <TabletSmartphone className="text-xl text-muted-foreground" />,
      name: 'Samsung Galaxy Tab S7',
      browser: 'Chrome Android',
    },
    ipAddress: '198.51.100.3',
    location: 'India',
    lastSession: '01 Aug, 2024',
    added: '15 days ago',
  },
  {
    id: '18',
    device: {
      icon: <Laptop className="text-xl text-muted-foreground" />,
      name: 'HP Spectre x360',
      browser: 'Chrome Windows',
    },
    ipAddress: '203.0.113.4',
    location: 'Russia',
    lastSession: '31 Jul, 2024',
    added: '16 days ago',
  },
  {
    id: '19',
    device: {
      icon: <Laptop className="text-xl text-muted-foreground" />,
      name: 'Acer Aspire 5',
      browser: 'Firefox Windows',
    },
    ipAddress: '192.0.2.5',
    location: 'China',
    lastSession: '30 Jul, 2024',
    added: '17 days ago',
  },
  {
    id: '20',
    device: {
      icon: <Smartphone className="text-xl text-muted-foreground" />,
      name: 'Samsung Galaxy S21',
      browser: 'Chrome Android',
    },
    ipAddress: '198.51.100.6',
    location: 'South Africa',
    lastSession: '29 Jul, 2024',
    added: '18 days ago',
  },
  {
    id: '21',
    device: {
      icon: <Laptop className="text-xl text-muted-foreground" />,
      name: 'Microsoft Surface Pro 7',
      browser: 'Edge Windows',
    },
    ipAddress: '203.0.113.7',
    location: 'Sweden',
    lastSession: '28 Jul, 2024',
    added: '19 days ago',
  },
  {
    id: '22',
    device: {
      icon: <TabletSmartphone className="text-xl text-muted-foreground" />,
      name: 'iPad Mini',
      browser: 'Safari iOS',
    },
    ipAddress: '192.0.2.8',
    location: 'Norway',
    lastSession: '27 Jul, 2024',
    added: '20 days ago',
  },
  {
    id: '23',
    device: {
      icon: <Smartphone className="text-xl text-muted-foreground" />,
      name: 'Sony Xperia 1 II',
      browser: 'Chrome Android',
    },
    ipAddress: '198.51.100.9',
    location: 'Switzerland',
    lastSession: '26 Jul, 2024',
    added: '21 days ago',
  },
  {
    id: '24',
    device: {
      icon: <Laptop className="text-xl text-muted-foreground" />,
      name: 'MacBook Pro',
      browser: 'Safari MacOS',
    },
    ipAddress: '203.0.113.10',
    location: 'Denmark',
    lastSession: '25 Jul, 2024',
    added: '22 days ago',
  },
  {
    id: '25',
    device: {
      icon: <Smartphone className="text-xl text-muted-foreground" />,
      name: 'LG V60 ThinQ',
      browser: 'Chrome Android',
    },
    ipAddress: '192.0.2.11',
    location: 'Finland',
    lastSession: '24 Jul, 2024',
    added: '23 days ago',
  },
  {
    id: '26',
    device: {
      icon: <Tablet className="text-xl text-muted-foreground" />,
      name: 'Microsoft Surface Go 2',
      browser: 'Edge Windows',
    },
    ipAddress: '198.51.100.12',
    location: 'Belgium',
    lastSession: '23 Jul, 2024',
    added: '24 days ago',
  },
  {
    id: '27',
    device: {
      icon: <Laptop className="text-xl text-muted-foreground" />,
      name: 'Razer Blade Stealth',
      browser: 'Chrome Windows',
    },
    ipAddress: '203.0.113.13',
    location: 'Austria',
    lastSession: '22 Jul, 2024',
    added: '25 days ago',
  },
  {
    id: '28',
    device: {
      icon: <Smartphone className="text-xl text-muted-foreground" />,
      name: 'OnePlus 9 Pro',
      browser: 'Chrome Android',
    },
    ipAddress: '192.0.2.14',
    location: 'New Zealand',
    lastSession: '21 Jul, 2024',
    added: '26 days ago',
  },
  {
    id: '29',
    device: {
      icon: <Smartphone className="text-xl text-muted-foreground" />,
      name: 'Motorola Edge',
      browser: 'Chrome Android',
    },
    ipAddress: '198.51.100.15',
    location: 'Ireland',
    lastSession: '20 Jul, 2024',
    added: '27 days ago',
  },
  {
    id: '30',
    device: {
      icon: <Tablet className="text-xl text-muted-foreground" />,
      name: 'Amazon Fire HD 10',
      browser: 'Silk Browser',
    },
    ipAddress: '203.0.113.16',
    location: 'Portugal',
    lastSession: '19 Jul, 2024',
    added: '28 days ago',
  },
  {
    id: '31',
    device: {
      icon: <Laptop className="text-xl text-muted-foreground" />,
      name: 'HP Envy 13',
      browser: 'Chrome Windows',
    },
    ipAddress: '192.0.2.17',
    location: 'Argentina',
    lastSession: '18 Jul, 2024',
    added: '29 days ago',
  },
  {
    id: '32',
    device: {
      icon: <Smartphone className="text-xl text-muted-foreground" />,
      name: 'Nokia 8.3 5G',
      browser: 'Chrome Android',
    },
    ipAddress: '198.51.100.18',
    location: 'Chile',
    lastSession: '17 Jul, 2024',
    added: '30 days ago',
  },
];

const Device = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [rowSelection] = useState<RowSelectionState>({});
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'device', desc: true },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Filter by search query (case-insensitive)
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        item.device.name.toLowerCase().includes(searchLower) ||
        item.device.browser.toLowerCase().includes(searchLower) ||
        item.ipAddress.toLowerCase().includes(searchLower) ||
        item.location.toLowerCase().includes(searchLower);

      return matchesSearch;
    });
  }, [searchQuery]);

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
        size: 51,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'device',
        accessorFn: (row) => row.device,
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Device"
            filter={<ColumnInputFilter column={column} />}
            column={column}
          />
        ),
        cell: (info) => (
          <div className="flex items-center gap-4">
            {info.row.original.device.icon}
            <div className="flex flex-col gap-0.5">
              <span className="leading-none font-medium text-sm text-mono">
                {info.row.original.device.name}
              </span>
              <span className="text-sm text-secondary-foreground font-normal">
                {info.row.original.device.browser}
              </span>
            </div>
          </div>
        ),
        enableSorting: true,
        size: 250,
        meta: {
          cellClassName: '',
        },
        filterFn: (row, columnId, filterValue) => {
          const device = row.getValue(columnId) as {
            name: string;
            browser: string;
          };
          const filterLower = filterValue.toLowerCase();
          return (
            device.name.toLowerCase().includes(filterLower) ||
            device.browser.toLowerCase().includes(filterLower)
          );
        },
      },
      {
        id: 'ipAddress',
        accessorFn: (row) => row.ipAddress,
        header: ({ column }) => (
          <DataGridColumnHeader title="IP Address" column={column} />
        ),
        cell: (info) => (
          <span className="text-sm text-foreground font-normal">
            {info.row.original.ipAddress}
          </span>
        ),
        enableSorting: true,
        size: 165,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'location',
        accessorFn: (row) => row.location,
        header: ({ column }) => (
          <DataGridColumnHeader title="Location" column={column} />
        ),
        cell: (info) => (
          <span className="text-sm text-foreground font-normal">
            {info.row.original.location}
          </span>
        ),
        enableSorting: true,
        size: 165,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'added',
        accessorFn: (row) => row.added,
        header: ({ column }) => (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  <DataGridColumnHeader
                    title="Added"
                    visibility={true}
                    column={column}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Time is based on your local timezone.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ),
        cell: (info) => (
          <span className="text-sm text-foreground font-normal">
            {info.row.original.added}
          </span>
        ),
        enableSorting: true,
        size: 165,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'lastSession',
        accessorFn: (row) => row.lastSession,
        header: ({ column }) => (
          <DataGridColumnHeader title="Last Session" column={column} />
        ),
        cell: (info) => (
          <span className="text-sm text-foreground font-normal">
            {info.row.original.lastSession}
          </span>
        ),
        enableSorting: true,
        size: 165,
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
      {
        id: 'trash',
        header: () => '',
        cell: () => (
          <Button variant="ghost">
            <Trash2 />
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
          <Button>Add Device</Button>
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
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <Search className="size-4 text-muted-foreground absolute start-3 top-1/2 -translate-y-1/2" />
              <Input
                placeholder="Search Devices..."
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
          </div>
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

export { Device };
