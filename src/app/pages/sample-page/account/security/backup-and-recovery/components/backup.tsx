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
import { File, Image as ImageIcon, Search, Settings2, X } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardFooter,
  CardHeader,
  CardHeading,
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
import { Label } from '@/app/components/ui/label';
import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';
import { Switch } from '@/app/components/ui/switch';

interface IData {
  id: string;
  when: {
    duration: string;
    datetime: string;
  };
  details: {
    title: string;
    pages: string;
    media: string;
  };
}

const data: IData[] = [
  {
    id: '1',
    when: {
      duration: '7 minutes ago',
      datetime: '24 Jan, 2024, 9:24:53 AM',
    },
    details: {
      title: 'Routine Quick Backup',
      pages: '47',
      media: '235',
    },
  },
  {
    id: '2',
    when: {
      duration: 'Today',
      datetime: '24 Jan, 2024, 2:09:26 AM',
    },
    details: {
      title: 'Early Morning Sync',
      pages: '12',
      media: '120',
    },
  },
  {
    id: '3',
    when: {
      duration: 'Today',
      datetime: '24 Jan, 2024, 2:09:26 AM',
    },
    details: {
      title: 'Early Morning Sync',
      pages: '12',
      media: '120',
    },
  },
  {
    id: '4',
    when: {
      duration: 'Today',
      datetime: '23 Jan, 2024, 9:24:53 AM',
    },
    details: {
      title: 'End of Day Data Archive',
      pages: '8',
      media: '109',
    },
  },
  {
    id: '5',
    when: {
      duration: 'Yesterday',
      datetime: '23 Jan, 2024, 9:24:53 AM',
    },
    details: {
      title: 'End of Day Data Archive',
      pages: '8',
      media: '109',
    },
  },
  {
    id: '6',
    when: {
      duration: '2 days ago',
      datetime: '22 Jan, 2024, 9:24:53 AM',
    },
    details: {
      title: 'Midweek System Update',
      pages: '12',
      media: '150',
    },
  },
  {
    id: '7',
    when: {
      duration: '3 days ago',
      datetime: '21 Jan, 2024, 9:24:53 AM',
    },
    details: {
      title: 'Weekly Full Backup',
      pages: '236',
      media: '3276',
    },
  },
  {
    id: '8',
    when: {
      duration: '4 days ago',
      datetime: '20 Jan, 2024, 1:17:53 AM',
    },
    details: {
      title: 'Weekly Backup - Documents',
      pages: '16',
      media: '32',
    },
  },
  {
    id: '9',
    when: {
      duration: '5 days ago',
      datetime: '19 Jan, 2024, 2:34:13 AM',
    },
    details: {
      title: 'Quick Data Backup - User Profiles',
      pages: '12',
      media: '17',
    },
  },
  {
    id: '10',
    when: {
      duration: '6 days ago',
      datetime: '18 Jan, 2024, 9:24:53 AM',
    },
    details: {
      title: 'Weekly Data Backup - Invoices',
      pages: '5',
      media: '3',
    },
  },
  {
    id: '11',
    when: {
      duration: '7 days ago',
      datetime: '17 Jan, 2024, 10:15:43 AM',
    },
    details: {
      title: 'System Maintenance',
      pages: '20',
      media: '50',
    },
  },
  {
    id: '12',
    when: {
      duration: '8 days ago',
      datetime: '16 Jan, 2024, 11:05:33 AM',
    },
    details: {
      title: 'Database Optimization',
      pages: '15',
      media: '60',
    },
  },
  {
    id: '13',
    when: {
      duration: '9 days ago',
      datetime: '15 Jan, 2024, 1:25:23 PM',
    },
    details: {
      title: 'Nightly Cleanup',
      pages: '10',
      media: '100',
    },
  },
  {
    id: '14',
    when: {
      duration: '10 days ago',
      datetime: '14 Jan, 2024, 3:45:13 PM',
    },
    details: {
      title: 'Monthly Report Generation',
      pages: '30',
      media: '200',
    },
  },
  {
    id: '15',
    when: {
      duration: 'Today',
      datetime: '24 Jan, 2024, 2:09:26 AM',
    },
    details: {
      title: 'Early Morning Sync',
      pages: '12',
      media: '120',
    },
  },
  {
    id: '16',
    when: {
      duration: 'Today',
      datetime: '24 Jan, 2024, 2:09:26 AM',
    },
    details: {
      title: 'Early Morning Sync',
      pages: '12',
      media: '120',
    },
  },
  {
    id: '17',
    when: {
      duration: 'Today',
      datetime: '23 Jan, 2024, 9:24:53 AM',
    },
    details: {
      title: 'End of Day Data Archive',
      pages: '8',
      media: '109',
    },
  },
  {
    id: '18',
    when: {
      duration: 'Yesterday',
      datetime: '23 Jan, 2024, 9:24:53 AM',
    },
    details: {
      title: 'End of Day Data Archive',
      pages: '8',
      media: '109',
    },
  },
  {
    id: '19',
    when: {
      duration: '2 days ago',
      datetime: '22 Jan, 2024, 9:24:53 AM',
    },
    details: {
      title: 'Midweek System Update',
      pages: '12',
      media: '150',
    },
  },
  {
    id: '20',
    when: {
      duration: '3 days ago',
      datetime: '21 Jan, 2024, 9:24:53 AM',
    },
    details: {
      title: 'Weekly Full Backup',
      pages: '236',
      media: '3276',
    },
  },
  {
    id: '21',
    when: {
      duration: '4 days ago',
      datetime: '20 Jan, 2024, 1:17:53 AM',
    },
    details: {
      title: 'Weekly Backup - Documents',
      pages: '16',
      media: '32',
    },
  },
  {
    id: '22',
    when: {
      duration: '5 days ago',
      datetime: '19 Jan, 2024, 2:34:13 AM',
    },
    details: {
      title: 'Quick Data Backup - User Profiles',
      pages: '12',
      media: '17',
    },
  },
  {
    id: '23',
    when: {
      duration: '6 days ago',
      datetime: '18 Jan, 2024, 9:24:53 AM',
    },
    details: {
      title: 'Weekly Data Backup - Invoices',
      pages: '5',
      media: '3',
    },
  },
  {
    id: '24',
    when: {
      duration: '7 days ago',
      datetime: '17 Jan, 2024, 10:15:43 AM',
    },
    details: {
      title: 'System Maintenance',
      pages: '20',
      media: '50',
    },
  },
  {
    id: '25',
    when: {
      duration: '8 days ago',
      datetime: '16 Jan, 2024, 11:05:33 AM',
    },
    details: {
      title: 'Database Optimization',
      pages: '15',
      media: '60',
    },
  },
  {
    id: '26',
    when: {
      duration: '9 days ago',
      datetime: '15 Jan, 2024, 1:25:23 PM',
    },
    details: {
      title: 'Nightly Cleanup',
      pages: '10',
      media: '100',
    },
  },
  {
    id: '27',
    when: {
      duration: '10 days ago',
      datetime: '14 Jan, 2024, 3:45:13 PM',
    },
    details: {
      title: 'Monthly Report Generation',
      pages: '30',
      media: '200',
    },
  },
  {
    id: '28',
    when: {
      duration: '11 days ago',
      datetime: '13 Jan, 2024, 5:55:03 PM',
    },
    details: {
      title: 'Security Patch Installation',
      pages: '25',
      media: '75',
    },
  },
  {
    id: '29',
    when: {
      duration: '12 days ago',
      datetime: '12 Jan, 2024, 7:05:53 PM',
    },
    details: {
      title: 'Log File Cleanup',
      pages: '18',
      media: '85',
    },
  },
  {
    id: '30',
    when: {
      duration: '13 days ago',
      datetime: '11 Jan, 2024, 9:15:43 PM',
    },
    details: {
      title: 'Routine Data Backup',
      pages: '22',
      media: '95',
    },
  },
  {
    id: '31',
    when: {
      duration: '14 days ago',
      datetime: '10 Jan, 2024, 11:25:33 PM',
    },
    details: {
      title: 'Server Maintenance',
      pages: '28',
      media: '65',
    },
  },
  {
    id: '32',
    when: {
      duration: '15 days ago',
      datetime: '09 Jan, 2024, 12:35:23 AM',
    },
    details: {
      title: 'Nightly Data Sync',
      pages: '14',
      media: '105',
    },
  },
  {
    id: '33',
    when: {
      duration: '16 days ago',
      datetime: '08 Jan, 2024, 2:45:13 AM',
    },
    details: {
      title: 'Weekly Data Audit',
      pages: '32',
      media: '115',
    },
  },
  {
    id: '34',
    when: {
      duration: '17 days ago',
      datetime: '07 Jan, 2024, 4:55:03 AM',
    },
    details: {
      title: 'System Log Backup',
      pages: '40',
      media: '125',
    },
  },
  {
    id: '35',
    when: {
      duration: '18 days ago',
      datetime: '06 Jan, 2024, 6:05:53 AM',
    },
    details: {
      title: 'End of Week Data Archive',
      pages: '35',
      media: '135',
    },
  },
  {
    id: '36',
    when: {
      duration: '19 days ago',
      datetime: '05 Jan, 2024, 8:15:43 AM',
    },
    details: {
      title: 'Full System Backup',
      pages: '50',
      media: '145',
    },
  },
  {
    id: '37',
    when: {
      duration: '20 days ago',
      datetime: '04 Jan, 2024, 10:25:33 AM',
    },
    details: {
      title: 'Quick Database Backup',
      pages: '38',
      media: '155',
    },
  },
  {
    id: '38',
    when: {
      duration: '21 days ago',
      datetime: '03 Jan, 2024, 12:35:23 PM',
    },
    details: {
      title: 'Nightly Security Check',
      pages: '27',
      media: '165',
    },
  },
  {
    id: '39',
    when: {
      duration: '22 days ago',
      datetime: '02 Jan, 2024, 2:45:13 PM',
    },
    details: {
      title: 'Routine System Check',
      pages: '42',
      media: '175',
    },
  },
  {
    id: '40',
    when: {
      duration: '23 days ago',
      datetime: '01 Jan, 2024, 4:55:03 PM',
    },
    details: {
      title: 'Monthly Maintenance',
      pages: '36',
      media: '185',
    },
  },
  {
    id: '41',
    when: {
      duration: '24 days ago',
      datetime: '31 Dec, 2023, 6:05:53 PM',
    },
    details: {
      title: 'End of Year Backup',
      pages: '48',
      media: '195',
    },
  },
  {
    id: '42',
    when: {
      duration: '25 days ago',
      datetime: '30 Dec, 2023, 8:15:43 PM',
    },
    details: {
      title: 'Routine Quick Backup',
      pages: '47',
      media: '235',
    },
  },
  {
    id: '43',
    when: {
      duration: '26 days ago',
      datetime: '29 Dec, 2023, 10:25:33 PM',
    },
    details: {
      title: 'Early Morning Sync',
      pages: '12',
      media: '120',
    },
  },
  {
    id: '44',
    when: {
      duration: '27 days ago',
      datetime: '28 Dec, 2023, 12:35:23 AM',
    },
    details: {
      title: 'End of Day Data Archive',
      pages: '8',
      media: '109',
    },
  },
  {
    id: '45',
    when: {
      duration: '28 days ago',
      datetime: '27 Dec, 2023, 2:45:13 AM',
    },
    details: {
      title: 'Midweek System Update',
      pages: '12',
      media: '150',
    },
  },
  {
    id: '46',
    when: {
      duration: '29 days ago',
      datetime: '26 Dec, 2023, 4:55:03 AM',
    },
    details: {
      title: 'Weekly Full Backup',
      pages: '236',
      media: '3276',
    },
  },
  {
    id: '47',
    when: {
      duration: '30 days ago',
      datetime: '25 Dec, 2023, 6:05:53 AM',
    },
    details: {
      title: 'Weekly Backup - Documents',
      pages: '16',
      media: '32',
    },
  },
];

const Backup = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'when', desc: true },
  ]);
  const [rowSelection] = useState<RowSelectionState>({});
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Filter by search query (case-insensitive)
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        item.when.duration.toLowerCase().includes(searchLower) ||
        item.when.datetime.toLowerCase().includes(searchLower) ||
        item.details.title.toLowerCase().includes(searchLower);

      return matchesSearch;
    });
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
        size: 51,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'when',
        accessorFn: (row) => row.when,
        header: ({ column }) => (
          <DataGridColumnHeader title="When" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-0.5">
              <span className="leading-none font-medium text-sm text-mono">
                {row.original.when.duration}
              </span>
              <span className="text-sm text-secondary-foreground font-normal">
                {row.original.when.datetime}
              </span>
            </div>
          </div>
        ),
        enableSorting: true,
        size: 260,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'details',
        accessorFn: (row) => row.details,
        header: ({ column }) => (
          <DataGridColumnHeader title="Details" column={column} />
        ),
        cell: ({ row }) => (
          <div>
            <span className="leading-none font-medium text-sm text-mono">
              {row.original.details.title}
            </span>
            <span className="flex items-center gap-2 text-xs text-secondary-foreground font-normal">
              <span className="flex items-center gap-1">
                <File size={16} />
                <p>{row.original.details.pages} pages</p>
              </span>
              <span className="border-e border-e-input h-4"></span>
              <span className="flex items-center gap-1">
                <ImageIcon size={16} />
                <p>{row.original.details.media} media</p>
              </span>
            </span>
          </div>
        ),
        enableSorting: true,
        size: 270,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'preview',
        header: () => '',
        cell: () => <Button variant="ghost">Preview</Button>,
        enableSorting: false,
        size: 100,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'restore',
        header: () => '',
        cell: () => <Button variant="outline">Restore</Button>,
        enableSorting: false,
        size: 100,
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
          <Label htmlFor="auto-update" className="text-sm">
            Cloud Sync
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
        <CardHeader className="py-4">
          <CardHeading>
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <Search className="size-4 text-muted-foreground absolute start-3 top-1/2 -translate-y-1/2" />
                <Input
                  placeholder="Search Backups..."
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

export { Backup };
