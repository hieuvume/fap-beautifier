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
import { Search, Settings2, SquarePen, Trash2, X } from 'lucide-react';
import { Link } from 'react-router';
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
  team: {
    name: string;
    description: string;
  };
  rating: {
    value: number;
    round: number;
  };
  lastModified: string;
  members: {
    size: string;
    group: Avatar[];
    more?: { variant?: string; number?: number | string; label?: string };
  };
}

const data: IData[] = [
  {
    id: '1',
    team: {
      name: 'Product Management',
      description: 'Overseeing product development and lifecycle',
    },
    rating: { value: 5, round: 0 },
    lastModified: '21 Oct, 2024',
    members: {
      size: 'size-[30px]',
      group: [
        { filename: '300-4.png' },
        { filename: '300-1.png' },
        { filename: '300-2.png' },
      ],
      more: {
        number: 10,
        variant: 'text-white ring-background bg-green-500',
      },
    },
  },
  {
    id: '2',
    team: {
      name: 'Marketing Team',
      description: 'Developing campaigns, market analysis',
    },
    rating: { value: 3, round: 0.5 },
    lastModified: '15 Oct, 2024',
    members: {
      size: 'size-[30px]',
      group: [
        { filename: '300-4.png' },
        {
          fallback: 'g',
          variant: 'uppercase text-white ring-background bg-yellow-400',
        },
      ],
    },
  },
  {
    id: '3',
    team: {
      name: 'HR Department',
      description: 'Talent acquisition, employee welfare',
    },
    rating: { value: 5, round: 0 },
    lastModified: '10 Oct, 2024',
    members: {
      size: 'size-[30px]',
      group: [
        { filename: '300-4.png' },
        { filename: '300-1.png' },
        { filename: '300-2.png' },
      ],
      more: {
        number: 'A',
        variant: 'text-white ring-background bg-violet-500',
      },
    },
  },
  {
    id: '4',
    team: {
      name: 'Sales Division',
      description: 'Customer relations, sales strategy execution',
    },
    rating: { value: 5, round: 0 },
    lastModified: '05 Oct, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-24.png' }, { filename: '300-7.png' }],
    },
  },
  {
    id: '5',
    team: {
      name: 'IT Support',
      description: 'Maintaining IT infrastructure, user support',
    },
    rating: { value: 3, round: 0.5 },
    lastModified: '21 Oct, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-4.png' }, { filename: '300-2.png' }],
      more: {
        number: 's',
        variant: 'text-primary-foreground ring-background bg-primary',
      },
    },
  },
  {
    id: '6',
    team: {
      name: 'Research and Development',
      description: 'Innovating and developing new products',
    },
    rating: { value: 4, round: 0.5 },
    lastModified: '28 Sep, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-3.png' }, { filename: '300-6.png' }],
      more: {
        number: 4,
        variant: 'text-white ring-background bg-yellow-400',
      },
    },
  },
  {
    id: '7',
    team: {
      name: 'Finance Department',
      description: 'Managing company finances',
    },
    rating: { value: 5, round: 0 },
    lastModified: '22 Sep, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-8.png' }, { filename: '300-9.png' }],
      more: {
        number: 8,
        variant: 'text-white ring-background bg-violet-500',
      },
    },
  },
  {
    id: '8',
    team: {
      name: 'Operations Team',
      description: 'Ensuring smooth day-to-day operations',
    },
    rating: { value: 4, round: 0 },
    lastModified: '15 Sep, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-10.png' }, { filename: '300-11.png' }],
      more: {
        number: 5,
        variant: 'text-white ring-background bg-green-500',
      },
    },
  },
  {
    id: '9',
    team: {
      name: 'Legal Team',
      description: 'Handling all legal matters',
    },
    rating: { value: 5, round: 0 },
    lastModified: '10 Sep, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-12.png' }, { filename: '300-13.png' }],
      more: {
        number: 7,
        variant: 'text-white ring-background bg-yellow-400',
      },
    },
  },
  {
    id: '10',
    team: {
      name: 'Customer Service',
      description: 'Providing customer support and assistance',
    },
    rating: { value: 4, round: 0.5 },
    lastModified: '05 Sep, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-14.png' }, { filename: '300-15.png' }],
      more: {
        number: 3,
        variant: 'text-white ring-background bg-violet-500',
      },
    },
  },
  {
    id: '11',
    team: {
      name: 'Procurement Team',
      description: 'Sourcing and purchasing materials',
    },
    rating: { value: 3, round: 0.5 },
    lastModified: '30 Aug, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-16.png' }, { filename: '300-17.png' }],
      more: {
        number: 6,
        variant: 'text-primary-foreground ring-background bg-primary',
      },
    },
  },
  {
    id: '12',
    team: {
      name: 'Quality Assurance',
      description: 'Ensuring product quality',
    },
    rating: { value: 4, round: 0 },
    lastModified: '25 Aug, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-18.png' }, { filename: '300-19.png' }],
      more: {
        number: 2,
        variant: 'text-white ring-background bg-green-500',
      },
    },
  },
  {
    id: '13',
    team: {
      name: 'Logistics Team',
      description: 'Managing supply chain and distribution',
    },
    rating: { value: 3, round: 0 },
    lastModified: '20 Aug, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-20.png' }, { filename: '300-21.png' }],
      more: {
        number: 9,
        variant: 'text-white ring-background bg-yellow-400',
      },
    },
  },
  {
    id: '14',
    team: {
      name: 'Design Team',
      description: 'Creating visual content and UI designs',
    },
    rating: { value: 5, round: 0 },
    lastModified: '15 Aug, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-22.png' }, { filename: '300-23.png' }],
      more: {
        number: 4,
        variant: 'text-white ring-background bg-violet-500',
      },
    },
  },
  {
    id: '15',
    team: {
      name: 'Technical Writing',
      description: 'Documenting product features and guides',
    },
    rating: { value: 4, round: 0.5 },
    lastModified: '10 Aug, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-24.png' }, { filename: '300-25.png' }],
      more: {
        number: 3,
        variant: 'text-white ring-background bg-green-500',
      },
    },
  },
  {
    id: '16',
    team: {
      name: 'Data Analytics',
      description: 'Analyzing data and generating insights',
    },
    rating: { value: 5, round: 0 },
    lastModified: '05 Aug, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-26.png' }, { filename: '300-27.png' }],
      more: {
        number: 6,
        variant: 'text-primary-foreground ring-background bg-primary',
      },
    },
  },
  {
    id: '17',
    team: {
      name: 'Security Team',
      description: 'Ensuring data and system security',
    },
    rating: { value: 4, round: 0.5 },
    lastModified: '30 Jul, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-28.png' }, { filename: '300-29.png' }],
      more: {
        number: 2,
        variant: 'text-white ring-background bg-green-500',
      },
    },
  },
  {
    id: '18',
    team: {
      name: 'Admin Team',
      description: 'Handling administrative tasks',
    },
    rating: { value: 3, round: 0.5 },
    lastModified: '25 Jul, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-30.png' }, { filename: '300-31.png' }],
      more: {
        number: 3,
        variant: 'text-white ring-background bg-yellow-400',
      },
    },
  },
  {
    id: '19',
    team: {
      name: 'Customer Relations',
      description: 'Managing customer interactions',
    },
    rating: { value: 5, round: 0 },
    lastModified: '20 Jul, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-32.png' }, { filename: '300-33.png' }],
      more: {
        number: 7,
        variant: 'text-white ring-background bg-violet-500',
      },
    },
  },
  {
    id: '20',
    team: {
      name: 'Training Team',
      description: 'Training employees on new systems',
    },
    rating: { value: 4, round: 0 },
    lastModified: '15 Jul, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-34.png' }, { filename: '300-1.png' }],
      more: {
        number: 5,
        variant: 'text-white ring-background bg-green-500',
      },
    },
  },
  {
    id: '21',
    team: {
      name: 'Project Management',
      description: 'Managing company projects',
    },
    rating: { value: 5, round: 0 },
    lastModified: '10 Jul, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-2.png' }, { filename: '300-3.png' }],
      more: {
        number: 8,
        variant: 'text-primary-foreground ring-background bg-primary',
      },
    },
  },
  {
    id: '22',
    team: {
      name: 'Business Analysis',
      description: 'Analyzing business processes',
    },
    rating: { value: 4, round: 0.5 },
    lastModified: '05 Jul, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-4.png' }, { filename: '300-5.png' }],
      more: {
        number: 4,
        variant: 'text-white ring-background bg-yellow-400',
      },
    },
  },
  {
    id: '23',
    team: {
      name: 'Corporate Communications',
      description: 'Managing internal and external communications',
    },
    rating: { value: 5, round: 0 },
    lastModified: '30 Jun, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-6.png' }, { filename: '300-7.png' }],
      more: {
        number: 6,
        variant: 'text-white ring-background bg-violet-500',
      },
    },
  },
  {
    id: '24',
    team: {
      name: 'Compliance Team',
      description: 'Ensuring regulatory compliance',
    },
    rating: { value: 4, round: 0 },
    lastModified: '25 Jun, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-8.png' }, { filename: '300-9.png' }],
      more: {
        number: 7,
        variant: 'text-white ring-background bg-green-500',
      },
    },
  },
  {
    id: '25',
    team: {
      name: 'Risk Management',
      description: 'Identifying and managing risks',
    },
    rating: { value: 5, round: 0 },
    lastModified: '20 Jun, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-10.png' }, { filename: '300-11.png' }],
      more: {
        number: 5,
        variant: 'text-white ring-background bg-yellow-400',
      },
    },
  },
  {
    id: '26',
    team: {
      name: 'Strategy Team',
      description: 'Developing and implementing strategies',
    },
    rating: { value: 5, round: 0 },
    lastModified: '15 Jun, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-12.png' }, { filename: '300-13.png' }],
      more: {
        number: 6,
        variant: 'text-primary-foreground ring-background bg-primary',
      },
    },
  },
  {
    id: '27',
    team: {
      name: 'Executive Team',
      description: 'Leading the company',
    },
    rating: { value: 5, round: 0 },
    lastModified: '10 Jun, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-14.png' }, { filename: '300-15.png' }],
      more: {
        number: 8,
        variant: 'text-white ring-background bg-violet-500',
      },
    },
  },
  {
    id: '28',
    team: {
      name: 'Social Media Team',
      description: 'Managing social media channels',
    },
    rating: { value: 4, round: 0.5 },
    lastModified: '05 Jun, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-16.png' }, { filename: '300-17.png' }],
      more: {
        number: 4,
        variant: 'text-white ring-background bg-green-500',
      },
    },
  },
  {
    id: '29',
    team: {
      name: 'Supply Chain Team',
      description: 'Overseeing the supply chain',
    },
    rating: { value: 3, round: 0 },
    lastModified: '30 May, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-18.png' }, { filename: '300-19.png' }],
      more: {
        number: 5,
        variant: 'text-white ring-background bg-yellow-400',
      },
    },
  },
  {
    id: '30',
    team: {
      name: 'Content Team',
      description: 'Creating and managing content',
    },
    rating: { value: 4, round: 0.5 },
    lastModified: '25 May, 2024',
    members: {
      size: 'size-[30px]',
      group: [{ filename: '300-20.png' }, { filename: '300-21.png' }],
      more: {
        number: 3,
        variant: 'text-white ring-background bg-violet-500',
      },
    },
  },
];

const Teams = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'lastModified', desc: true },
  ]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Filter by search query (case-insensitive)
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        item.team.name.toLowerCase().includes(searchLower) ||
        item.team.description.toLowerCase().includes(searchLower);

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
        id: 'team',
        accessorFn: (row) => row.team,
        header: ({ column }) => (
          <DataGridColumnHeader title="Team" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col gap-2">
            <Link
              className="leading-none font-medium text-sm text-mono hover:text-primary"
              to="#"
            >
              {row.original.team.name}
            </Link>
            <span className="text-sm text-secondary-foreground font-normal leading-3">
              {row.original.team.description}
            </span>
          </div>
        ),
        enableSorting: true,
        size: 360,
        meta: {
          cellClassName: '',
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
            rating={row.original.rating.value}
            round={row.original.rating.round}
          />
        ),
        enableSorting: true,
        size: 200,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'lastModified',
        accessorFn: (row) => row.lastModified,
        header: ({ column }) => (
          <DataGridColumnHeader title="Last Modified" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-secondary-foreground font-normal">
            {row.original.lastModified}
          </span>
        ),
        enableSorting: true,
        size: 200,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'members',
        accessorFn: (row) => row.members,
        header: ({ column }) => (
          <DataGridColumnHeader title="Members" column={column} />
        ),
        cell: ({ row }) => (
          <AvatarGroup
            size={row.original.members.size}
            group={row.original.members.group}
            more={row.original.members.more}
          />
        ),
        enableSorting: true,
        size: 200,
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
        <div className="flex flex-wrap items-center gap-2.5">
          <Label htmlFor="auto-update" className="text-sm">
            Only Active Groups
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

export { Teams };
