'use client';

import { useMemo, useState } from 'react';
import { Rating } from '@/app/partials/common/rating';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { RiCheckboxCircleFill } from '@remixicon/react';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  Row,
  RowSelectionState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import {
  Dribbble,
  EllipsisVertical,
  Facebook,
  Filter,
  Music2,
  Search,
  Settings2,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { useCopyToClipboard } from '@/app/hooks/use-copy-to-clipboard';
import { Alert, AlertIcon, AlertTitle } from '@/app/components/ui/alert';
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
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/components/ui/popover';
import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';

interface IData {
  id: string;
  user: {
    avatar: string;
    userName: string;
    description: string;
  };
  total: string;
  team: {
    logo: string;
    label: string;
  };
  products: string;
  rating: {
    value: number;
    round: number;
  };
}

const data: IData[] = [
  {
    id: '1',
    user: {
      avatar: '300-3.png',
      userName: 'Tyler Hero',
      description: 'IT Consultant',
    },
    total: '$27,456.09',
    team: {
      logo: 'weave.svg',
      label: 'Tech Titans',
    },
    products: '905',
    rating: { value: 3, round: 0.5 },
  },
  {
    id: '2',
    user: {
      avatar: '300-1.png',
      userName: 'Esther Howard',
      description: 'Graphic Designer',
    },
    total: '$45,800.90',
    team: {
      logo: 'monetha.svg',
      label: 'Creative Minds',
    },
    products: '325',
    rating: { value: 5, round: 0 },
  },
  {
    id: '3',
    user: {
      avatar: '300-11.png',
      userName: 'Jacob Jones',
      description: 'Financial Analyst',
    },
    total: '$63,250.30',
    team: {
      logo: 'foursquare.svg',
      label: 'Code Crafters',
    },
    products: '212',
    rating: { value: 5, round: 0 },
  },
  {
    id: '4',
    user: {
      avatar: '300-2.png',
      userName: 'Cody Fisher',
      description: 'Software Engineer',
    },
    total: '$80,100.45',
    team: {
      logo: 'flood-io.svg',
      label: 'Market Movers',
    },
    products: '1500',
    rating: { value: 4, round: 0 },
  },
  {
    id: '5',
    user: {
      avatar: '300-5.png',
      userName: 'Leslie Alexander',
      description: 'Marketing Manager',
    },
    total: '$56,500.60',
    team: {
      logo: 'gitlab.svg',
      label: 'Brand Builders',
    },
    products: '785',
    rating: { value: 2, round: 0.5 },
  },
  {
    id: '6',
    user: {
      avatar: '300-4.png',
      userName: 'Robert Fox',
      description: 'Data Scientist',
    },
    total: '$70,342.25',
    team: {
      logo: 'btcchina.svg',
      label: 'Data Pioneers',
    },
    products: '468',
    rating: { value: 5, round: 0 },
  },
  {
    id: '7',
    user: {
      avatar: '300-20.png',
      userName: 'Guy Hawkins',
      description: 'HR Specialist',
    },
    total: '$40,210.15',
    team: {
      logo: 'bridgefy.svg',
      label: 'Talent Scouts',
    },
    products: '198',
    rating: { value: 4, round: 0.5 },
  },
  {
    id: '8',
    user: {
      avatar: '300-23.png',
      userName: 'Theresa Webb',
      description: 'Sales Executive',
    },
    total: '$52,315.70',
    team: {
      logo: 'the-ocean.svg',
      label: 'Revenue Raisers',
    },
    products: '1100',
    rating: { value: 1, round: 0.5 },
  },
  {
    id: '9',
    user: {
      avatar: '300-22.png',
      userName: 'Marvin McKinney',
      description: 'Project Manager',
    },
    total: '$68,450.55',
    team: {
      logo: 'xing.svg',
      label: 'Vision Guides',
    },
    products: '308',
    rating: { value: 5, round: 0 },
  },
  {
    id: '10',
    user: {
      avatar: '300-18.png',
      userName: 'Ronald Richards',
      description: 'Web Developer',
    },
    total: '$73,270.80',
    team: {
      logo: 'voise.svg',
      label: 'Web Wizards',
    },
    products: '675',
    rating: { value: 4, round: 0.5 },
  },
  {
    id: '11',
    user: {
      avatar: '300-6.png',
      userName: 'William Wilson',
      description: 'Security Specialist',
    },
    total: '$29,400.00',
    team: {
      logo: 'google-analytics.svg',
      label: 'Security Squad',
    },
    products: '412',
    rating: { value: 3, round: 0 },
  },
  {
    id: '12',
    user: {
      avatar: '300-7.png',
      userName: 'Sophia Anderson',
      description: 'Content Strategist',
    },
    total: '$58,700.50',
    team: {
      logo: 'slack.svg',
      label: 'Content Creators',
    },
    products: '981',
    rating: { value: 4, round: 0.5 },
  },
  {
    id: '13',
    user: {
      avatar: '300-8.png',
      userName: 'Mason Taylor',
      description: 'UX/UI Designer',
    },
    total: '$75,200.35',
    team: {
      logo: 'jira.svg',
      label: 'Design Dynamos',
    },
    products: '560',
    rating: { value: 5, round: 0 },
  },
  {
    id: '14',
    user: {
      avatar: '300-9.png',
      userName: 'Isabella Lee',
      description: 'Digital Marketer',
    },
    total: '$41,620.45',
    team: {
      logo: 'twitch-purple.svg',
      label: 'Market Masters',
    },
    products: '742',
    rating: { value: 3, round: 0 },
  },
  {
    id: '15',
    user: {
      avatar: '300-10.png',
      userName: 'James Martinez',
      description: 'Product Manager',
    },
    total: '$69,870.00',
    team: {
      logo: 'google-analytics.svg',
      label: 'Product Pros',
    },
    products: '698',
    rating: { value: 5, round: 0 },
  },
  {
    id: '16',
    user: {
      avatar: '300-12.png',
      userName: 'Emily Thomas',
      description: 'Customer Success Manager',
    },
    total: '$55,740.80',
    team: {
      logo: 'invision.svg',
      label: 'Success Stars',
    },
    products: '328',
    rating: { value: 4, round: 0.5 },
  },
  {
    id: '17',
    user: {
      avatar: '300-13.png',
      userName: 'Benjamin Harris',
      description: 'Operations Manager',
    },
    total: '$78,450.75',
    team: {
      logo: 'slack.svg',
      label: 'Ops Experts',
    },
    products: '490',
    rating: { value: 5, round: 0 },
  },
  {
    id: '18',
    user: {
      avatar: '300-14.png',
      userName: 'Charlotte Young',
      description: 'Creative Director',
    },
    total: '$64,520.30',
    team: {
      logo: 'monetha.svg',
      label: 'Creative Chiefs',
    },
    products: '255',
    rating: { value: 5, round: 0 },
  },
  {
    id: '19',
    user: {
      avatar: '300-15.png',
      userName: 'Henry Clark',
      description: 'Business Analyst',
    },
    total: '$39,680.25',
    team: {
      logo: 'gitlab.svg',
      label: 'Biz Analysts',
    },
    products: '408',
    rating: { value: 4, round: 0 },
  },
  {
    id: '20',
    user: {
      avatar: '300-16.png',
      userName: 'Amelia Lewis',
      description: 'Marketing Specialist',
    },
    total: '$57,330.10',
    team: {
      logo: 'bridgefy.svg',
      label: 'Market Leaders',
    },
    products: '302',
    rating: { value: 4, round: 0 },
  },
  {
    id: '21',
    user: {
      avatar: '300-17.png',
      userName: 'Lucas Walker',
      description: 'Full Stack Developer',
    },
    total: '$82,670.90',
    team: {
      logo: 'voise.svg',
      label: 'Dev Masters',
    },
    products: '1105',
    rating: { value: 5, round: 0 },
  },
  {
    id: '22',
    user: {
      avatar: '300-19.png',
      userName: 'Grace Allen',
      description: 'Data Analyst',
    },
    total: '$50,230.70',
    team: {
      logo: 'flood-io.svg',
      label: 'Data Detectives',
    },
    products: '620',
    rating: { value: 3, round: 0.5 },
  },
  {
    id: '23',
    user: {
      avatar: '300-21.png',
      userName: 'Jack Harris',
      description: 'Solutions Architect',
    },
    total: '$89,450.50',
    team: {
      logo: 'weave.svg',
      label: 'Solutions Squad',
    },
    products: '711',
    rating: { value: 5, round: 0 },
  },
  {
    id: '24',
    user: {
      avatar: '300-24.png',
      userName: 'Aiden King',
      description: 'SEO Specialist',
    },
    total: '$45,670.20',
    team: {
      logo: 'the-ocean.svg',
      label: 'SEO Stars',
    },
    products: '380',
    rating: { value: 3, round: 0 },
  },
  {
    id: '25',
    user: {
      avatar: '300-25.png',
      userName: 'Avery Green',
      description: 'Content Creator',
    },
    total: '$47,590.80',
    team: {
      logo: 'monetha.svg',
      label: 'Content Creators',
    },
    products: '544',
    rating: { value: 4, round: 0.5 },
  },
  {
    id: '26',
    user: {
      avatar: '300-26.png',
      userName: 'Ella White',
      description: 'HR Coordinator',
    },
    total: '$51,230.40',
    team: {
      logo: 'xing.svg',
      label: 'HR Heroes',
    },
    products: '370',
    rating: { value: 3, round: 0 },
  },
  {
    id: '27',
    user: {
      avatar: '300-27.png',
      userName: 'Henry King',
      description: 'Social Media Manager',
    },
    total: '$54,780.95',
    team: {
      logo: 'gitlab.svg',
      label: 'Social Stars',
    },
    products: '490',
    rating: { value: 4, round: 0 },
  },
  {
    id: '28',
    user: {
      avatar: '300-28.png',
      userName: 'Olivia Green',
      description: 'QA Engineer',
    },
    total: '$60,340.15',
    team: {
      logo: 'foursquare.svg',
      label: 'Quality Quest',
    },
    products: '399',
    rating: { value: 5, round: 0 },
  },
  {
    id: '29',
    user: {
      avatar: '300-29.png',
      userName: 'Mason Lewis',
      description: 'DevOps Engineer',
    },
    total: '$76,540.25',
    team: {
      logo: 'bridgefy.svg',
      label: 'Ops Wizards',
    },
    products: '604',
    rating: { value: 4, round: 0.5 },
  },
  {
    id: '30',
    user: {
      avatar: '300-30.png',
      userName: 'Sophia Lee',
      description: 'Customer Support Specialist',
    },
    total: '$48,500.60',
    team: {
      logo: 'btcchina.svg',
      label: 'Support Stars',
    },
    products: '518',
    rating: { value: 3, round: 0.5 },
  },
];

function ActionsCell({ row }: { row: Row<IData> }) {
  const { copyToClipboard } = useCopyToClipboard();
  const handleCopyId = () => {
    copyToClipboard(String(row.original.id));
    const message = `User ID successfully copied: ${row.original.id}`;
    toast.custom(
      (t) => (
        <Alert
          variant="mono"
          icon="success"
          close={false}
          onClose={() => toast.dismiss(t)}
        >
          <AlertIcon>
            <RiCheckboxCircleFill />
          </AlertIcon>
          <AlertTitle>{message}</AlertTitle>
        </Alert>
      ),
      {
        position: 'top-center',
      },
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="size-7" mode="icon" variant="ghost">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end">
        <DropdownMenuItem onClick={() => {}}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyId}>Copy ID</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={() => {}}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const Users = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'users', desc: false },
  ]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<string>('latest');

  const filteredData = useMemo(() => {
    let filtered = data;

    // Filter by search query (case-insensitive)
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.user.userName.toLowerCase().includes(searchLower) ||
          item.user.description.toLowerCase().includes(searchLower) ||
          item.total.toLowerCase().includes(searchLower) ||
          item.team.label.toLowerCase().includes(searchLower) ||
          item.products.toLowerCase().includes(searchLower),
      );
    }

    // Apply sorting based on sortOrder
    if (sortOrder === 'latest') {
      filtered = [...filtered].sort(
        (a, b) => new Date(b.id).getTime() - new Date(a.id).getTime(),
      );
    } else if (sortOrder === 'older') {
      filtered = [...filtered].sort(
        (a, b) => new Date(a.id).getTime() - new Date(b.id).getTime(),
      );
    } else if (sortOrder === 'oldest') {
      filtered = [...filtered].sort(
        (a, b) => new Date(a.id).getTime() - new Date(b.id).getTime(),
      );
    }

    return filtered;
  }, [searchQuery, sortOrder]);

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
        id: 'users',
        accessorFn: (row) => row.user,
        header: ({ column }) => (
          <DataGridColumnHeader title="Author" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-2.5">
            <img
              src={toAbsoluteUrl(`/media/avatars/${row.original.user.avatar}`)}
              className="rounded-full size-7 shrink-0"
              alt={`${row.original.user.userName}`}
            />
            <div className="flex flex-col">
              <Link
                to="#"
                className="text-sm font-medium text-mono hover:text-primary-active mb-px"
              >
                {row.original.user.userName}
              </Link>
              <span className="text-sm text-secondary-foreground font-normal">
                {row.original.user.description}
              </span>
            </div>
          </div>
        ),
        enableSorting: true,
        size: 260,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'total',
        accessorFn: (row) => row.total,
        header: ({ column }) => (
          <DataGridColumnHeader title="Earnings" column={column} />
        ),
        cell: ({ row }) => (
          <span className="font-normal text-foreground">
            {row.original.total}
          </span>
        ),
        enableSorting: true,
        size: 150,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'team',
        accessorFn: (row) => row.team,
        header: ({ column }) => (
          <DataGridColumnHeader title="Team" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center text-foreground font-normal gap-1.5">
            <img
              src={toAbsoluteUrl(
                `/media/brand-logos/${row.original.team.logo}`,
              )}
              className="w-5 shrink-0"
              alt="image"
            />
            {row.original.team.label}
          </div>
        ),
        enableSorting: true,
        size: 175,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'products',
        accessorFn: (row) => row.products,
        header: ({ column }) => (
          <DataGridColumnHeader title="Products" column={column} />
        ),
        cell: ({ row }) => (
          <span className="font-normal text-foreground">
            {row.original.products}
          </span>
        ),
        enableSorting: true,
        size: 140,
        meta: {
          headerClassName: '',
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
        size: 150,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'social',
        header: ({ column }) => (
          <DataGridColumnHeader title="Social Profiles" column={column} />
        ),
        cell: () => (
          <div className="flex items-center gap-2.5">
            <Link to="#">
              <Facebook size={16} className="text-muted-foreground text-lg" />
            </Link>
            <Link to="#">
              <Dribbble size={16} className="text-muted-foreground text-lg" />
            </Link>
            <Link to="#">
              <Music2 size={16} className="text-muted-foreground text-lg" />
            </Link>
          </div>
        ),
        enableSorting: true,
        size: 150,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'actions',
        header: '',
        cell: ({ row }) => <ActionsCell row={row} />,
        enableSorting: false,
        size: 60,
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
        <Button>
          <Settings2 size={16} />
          Filters
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
          <CardHeading>
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <Search className="size-4 text-muted-foreground absolute start-3 top-1/2 -translate-y-1/2" />
                <Input
                  placeholder="Search Users..."
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
                    Sort Order
                    {sortOrder !== 'latest' && (
                      <Badge size="sm" appearance="stroke">
                        {sortOrder.charAt(0).toUpperCase() + sortOrder.slice(1)}
                      </Badge>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-40 p-3" align="start">
                  <div className="space-y-3">
                    <div className="text-xs font-medium text-muted-foreground">
                      Sort By
                    </div>
                    <div className="space-y-3">
                      {['latest', 'older', 'oldest'].map((order) => (
                        <div key={order} className="flex items-center gap-2.5">
                          <Checkbox
                            id={order}
                            checked={sortOrder === order}
                            onCheckedChange={(checked) =>
                              checked && setSortOrder(order)
                            }
                          />
                          <Label
                            htmlFor={order}
                            className="grow flex items-center justify-between font-normal gap-1.5"
                          >
                            {order.charAt(0).toUpperCase() + order.slice(1)}
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

export { Users };
