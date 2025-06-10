'use client';

import { useMemo, useState } from 'react';
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
import { EllipsisVertical, Filter, Search, Settings2, X } from 'lucide-react';
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
import { Switch } from '@/app/components/ui/switch';

interface IData {
  id: string;
  user: {
    avatar: string;
    userName: string;
  };
  phone: string;
  branch: string;
  logos: string[];
  labels: string[];
  switch: boolean;
}

const data: IData[] = [
  {
    id: '1',
    user: {
      avatar: '300-3.png',
      userName: 'Tyler Hero',
    },
    phone: '(212) 867-5309',
    branch: 'Miami, FL',
    logos: ['slack.svg', 'twitch-purple.svg', 'invision.svg'],
    labels: ['NFT', 'Design'],
    switch: true,
  },
  {
    id: '2',
    user: {
      avatar: '300-23.png',
      userName: 'Jane Smith',
    },
    phone: '(305) 421-7890',
    branch: 'Dallas, TX',
    logos: ['google-analytics.svg', 'google-calendar.svg'],
    labels: ['Lead', 'Investor'],
    switch: false,
  },
  {
    id: '3',
    user: {
      avatar: '300-1.png',
      userName: 'Emma Johnson',
    },
    phone: '(702) 314-1592',
    branch: 'Atlanta, GA',
    logos: ['tiktok-2.svg', 'monetha.svg', 'twitch-purple.svg'],
    labels: ['Support', 'Consultant'],
    switch: true,
  },
  {
    id: '4',
    user: {
      avatar: '300-14.png',
      userName: 'Michael Brown',
    },
    phone: '(415) 926-6487',
    branch: 'Denver, CO',
    logos: ['x.svg', 'instagram-2.svg'],
    labels: ['Developer', 'Advisor'],
    switch: true,
  },
  {
    id: '5',
    user: {
      avatar: '300-19.png',
      userName: 'Chloe Davis',
    },
    phone: '(512) 582-4316',
    branch: 'Seattle, WA',
    logos: ['twitch-purple.svg', 'invision.svg', 'slack.svg', 'tiktok-2.svg'],
    labels: ['Strategist', 'Partner'],
    switch: false,
  },
  {
    id: '6',
    user: {
      avatar: '300-6.png',
      userName: 'William Wilson',
    },
    phone: '(312) 753-9801',
    branch: 'Boston, MA',
    logos: ['jira.svg', 'slack.svg', 'google-webdev.svg'],
    labels: ['Manager', 'Educator'],
    switch: false,
  },
  {
    id: '7',
    user: {
      avatar: '300-34.png',
      userName: 'Olivia Martin',
    },
    phone: '(213) 674-2983',
    branch: 'Phoenix, AZ',
    logos: ['azure.svg'],
    labels: ['Creator', 'Analyst'],
    switch: false,
  },
  {
    id: '8',
    user: {
      avatar: '300-4.png',
      userName: 'Ethan Garcia',
    },
    phone: '(617) 935-2641',
    branch: 'Detroit, MI',
    logos: ['facebook.svg', 'weave.svg', 'plastic-scm.svg'],
    labels: ['Vendor', 'Support'],
    switch: true,
  },
  {
    id: '9',
    user: {
      avatar: '300-13.png',
      userName: 'Ava Rodriguez',
    },
    phone: '(404) 762-1453',
    branch: 'Nashville, TN',
    logos: ['sololearn.svg', 'twitch-purple.svg', 'linkedin.svg', 'office.svg'],
    labels: ['Coordinator', 'Marketer'],
    switch: true,
  },
  {
    id: '10',
    user: {
      avatar: '300-31.png',
      userName: 'Matthew Martinez',
    },
    phone: '(503) 894-3752',
    branch: 'Portland, OR',
    logos: ['slack.svg'],
    labels: ['Engineer', 'Executive'],
    switch: true,
  },
  {
    id: '11',
    user: {
      avatar: '300-7.png',
      userName: 'Sophia Anderson',
    },
    phone: '(213) 555-3987',
    branch: 'Los Angeles, CA',
    logos: ['slack.svg', 'twitch-purple.svg'],
    labels: ['Project Manager', 'Organizer'],
    switch: true,
  },
  {
    id: '12',
    user: {
      avatar: '300-8.png',
      userName: 'Mason Taylor',
    },
    phone: '(702) 555-1632',
    branch: 'Las Vegas, NV',
    logos: ['jira.svg', 'google-analytics.svg'],
    labels: ['Scrum Master', 'Agile Coach'],
    switch: false,
  },
  {
    id: '13',
    user: {
      avatar: '300-9.png',
      userName: 'Isabella Lee',
    },
    phone: '(512) 555-8921',
    branch: 'Austin, TX',
    logos: ['twitch-purple.svg', 'invision.svg'],
    labels: ['Sales', 'Customer Success'],
    switch: true,
  },
  {
    id: '14',
    user: {
      avatar: '300-10.png',
      userName: 'James Martinez',
    },
    phone: '(503) 555-7389',
    branch: 'Portland, OR',
    logos: ['slack.svg', 'jira.svg'],
    labels: ['E-commerce', 'Payments'],
    switch: false,
  },
  {
    id: '15',
    user: {
      avatar: '300-11.png',
      userName: 'Emily Thomas',
    },
    phone: '(312) 555-2013',
    branch: 'Chicago, IL',
    logos: ['google-calendar.svg', 'google-analytics.svg'],
    labels: ['Meetings', 'Webinars'],
    switch: true,
  },
  {
    id: '16',
    user: {
      avatar: '300-12.png',
      userName: 'Benjamin Harris',
    },
    phone: '(213) 555-1678',
    branch: 'Los Angeles, CA',
    logos: ['jira.svg', 'twitch-purple.svg'],
    labels: ['Support', 'Customer Service'],
    switch: false,
  },
  {
    id: '17',
    user: {
      avatar: '300-15.png',
      userName: 'Charlotte Young',
    },
    phone: '(702) 555-9073',
    branch: 'Las Vegas, NV',
    logos: ['monetha.svg', 'sololearn.svg'],
    labels: ['Creative', 'Graphics'],
    switch: true,
  },
  {
    id: '18',
    user: {
      avatar: '300-16.png',
      userName: 'Henry Clark',
    },
    phone: '(512) 555-6712',
    branch: 'Austin, TX',
    logos: ['google-webdev.svg', 'google-analytics.svg'],
    labels: ['Backend', 'Database'],
    switch: false,
  },
  {
    id: '19',
    user: {
      avatar: '300-17.png',
      userName: 'Amelia Lewis',
    },
    phone: '(415) 555-0193',
    branch: 'San Francisco, CA',
    logos: ['jira.svg', 'twitch-purple.svg'],
    labels: ['Product Manager', 'Coordinator'],
    switch: true,
  },
  {
    id: '20',
    user: {
      avatar: '300-18.png',
      userName: 'Lucas Walker',
    },
    phone: '(312) 555-3402',
    branch: 'Chicago, IL',
    logos: ['slack.svg', 'google-analytics.svg'],
    labels: ['Content Creator', 'Blogger'],
    switch: false,
  },
  {
    id: '21',
    user: {
      avatar: '300-20.png',
      userName: 'Harper White',
    },
    phone: '(213) 555-7819',
    branch: 'Los Angeles, CA',
    logos: ['jira.svg', 'twitch-purple.svg'],
    labels: ['Video', 'Content'],
    switch: true,
  },
  {
    id: '22',
    user: {
      avatar: '300-21.png',
      userName: 'Jack Harris',
    },
    phone: '(702) 555-4890',
    branch: 'Las Vegas, NV',
    logos: ['slack.svg', 'google-calendar.svg'],
    labels: ['UX/UI Designer', 'Prototype'],
    switch: false,
  },
  {
    id: '23',
    user: {
      avatar: '300-22.png',
      userName: 'Grace Allen',
    },
    phone: '(512) 555-2017',
    branch: 'Austin, TX',
    logos: ['monetha.svg', 'slack.svg'],
    labels: ['Entertainment', 'Streaming'],
    switch: true,
  },
  {
    id: '24',
    user: {
      avatar: '300-24.png',
      userName: 'Aiden King',
    },
    phone: '(415) 555-8943',
    branch: 'San Francisco, CA',
    logos: ['google-calendar.svg', 'slack.svg'],
    labels: ['Project Management', 'Collaboration'],
    switch: true,
  },
  {
    id: '25',
    user: {
      avatar: '300-25.png',
      userName: 'Avery Green',
    },
    phone: '(503) 555-1234',
    branch: 'Portland, OR',
    logos: ['google-calendar.svg', 'google-analytics.svg'],
    labels: ['Coordinator', 'Scheduler'],
    switch: false,
  },
  {
    id: '26',
    user: {
      avatar: '300-26.png',
      userName: 'Ella White',
    },
    phone: '(702) 555-5678',
    branch: 'Las Vegas, NV',
    logos: ['twitch-purple.svg', 'google-analytics.svg'],
    labels: ['Cloud Storage', 'Files'],
    switch: true,
  },
  {
    id: '27',
    user: {
      avatar: '300-27.png',
      userName: 'Henry King',
    },
    phone: '(415) 555-7890',
    branch: 'San Francisco, CA',
    logos: ['sololearn.svg', 'monetha.svg'],
    labels: ['CRM', 'Sales'],
    switch: true,
  },
  {
    id: '28',
    user: {
      avatar: '300-28.png',
      userName: 'Olivia Green',
    },
    phone: '(312) 555-3456',
    branch: 'Chicago, IL',
    logos: ['google-analytics.svg', 'jira.svg'],
    labels: ['Social Media', 'Marketing'],
    switch: false,
  },
  {
    id: '29',
    user: {
      avatar: '300-29.png',
      userName: 'Mason Lewis',
    },
    phone: '(213) 555-7891',
    branch: 'Los Angeles, CA',
    logos: ['slack.svg', 'twitch-purple.svg'],
    labels: ['Professional Network', 'Recruitment'],
    switch: true,
  },
  {
    id: '30',
    user: {
      avatar: '300-30.png',
      userName: 'Sophia Lee',
    },
    phone: '(702) 555-1234',
    branch: 'Las Vegas, NV',
    logos: ['google-analytics.svg', 'jira.svg'],
    labels: ['Communications', 'Collaboration'],
    switch: false,
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
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string>('latest');
  const [users, setUsers] = useState<IData[]>(data);

  const handleToggle = (index: number) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers[index] = {
        ...updatedUsers[index],
        switch: !updatedUsers[index].switch,
      };
      return updatedUsers;
    });
  };

  const filteredData = useMemo(() => {
    let filtered = users;

    // Filter by status (2FA Enabled/Disabled)
    if (selectedStatuses.length > 0) {
      filtered = filtered.filter((item) => {
        const status = item.switch ? '2FA Enabled' : '2FA Disabled';
        return selectedStatuses.includes(status);
      });
    }

    // Filter by search query (case-insensitive)
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.user.userName.toLowerCase().includes(searchLower) ||
          item.phone.toLowerCase().includes(searchLower) ||
          item.branch.toLowerCase().includes(searchLower) ||
          item.labels.some((label) =>
            label.toLowerCase().includes(searchLower),
          ),
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
  }, [users, searchQuery, selectedStatuses, sortOrder]);

  const statusCounts = useMemo(() => {
    return users.reduce(
      (acc, item) => {
        const status = item.switch ? '2FA Enabled' : '2FA Disabled';
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
  }, [users]);

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
        size: 51,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'users',
        accessorFn: (row) => row.user,
        header: ({ column }) => (
          <DataGridColumnHeader title="Users" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-2.5">
            <img
              src={toAbsoluteUrl(`/media/avatars/${row.original.user.avatar}`)}
              className="rounded-full size-7 shrink-0"
              alt={`${row.original.user.userName}`}
            />
            <Link
              to="#"
              className="text-sm font-medium text-mono hover:text-primary-active"
            >
              {row.original.user.userName}
            </Link>
          </div>
        ),
        enableSorting: true,
        size: 200,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'phone',
        accessorFn: (row) => row.phone,
        header: ({ column }) => (
          <DataGridColumnHeader title="Phone" column={column} />
        ),
        cell: ({ row }) => (
          <span className="font-normal text-foreground">
            {row.original.phone}
          </span>
        ),
        enableSorting: true,
        size: 165,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'branch',
        accessorFn: (row) => row.branch,
        header: ({ column }) => (
          <DataGridColumnHeader title="Branch" column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-foreground font-normal">
            {row.original.branch}
          </span>
        ),
        enableSorting: true,
        size: 165,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'image',
        accessorFn: (row) => row.logos,
        header: ({ column }) => (
          <DataGridColumnHeader title="Connected Apps" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center text-foreground font-normal gap-1.5">
            {Array.isArray(row.original.logos) &&
              row.original.logos.map((logo, index) => (
                <img
                  key={index}
                  src={toAbsoluteUrl(`/media/brand-logos/${logo}`)}
                  className="size-[18px] shrink-0"
                  alt="image"
                />
              ))}
          </div>
        ),
        enableSorting: true,
        size: 165,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'label',
        accessorFn: (row) => row.labels,
        header: ({ column }) => (
          <DataGridColumnHeader title="Tags" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center text-foreground font-normal gap-1.5">
            {Array.isArray(row.original.labels) &&
              row.original.labels.map((label, index) => (
                <span key={index} className="badge badge-sm">
                  {label}
                </span>
              ))}
          </div>
        ),
        enableSorting: true,
        size: 225,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'switch',
        accessorFn: (row) => row.switch,
        header: ({ column }) => (
          <DataGridColumnHeader title="Enforce 2FA" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center mb-2">
            <Switch
              defaultChecked={row.original.switch}
              onChange={() => handleToggle(row.index)}
              size="sm"
            />
          </div>
        ),
        enableSorting: true,
        size: 130,
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
          <Settings2 /> Filters
        </Button>
        <DataGridColumnVisibility
          table={table}
          trigger={
            <Button variant="outline">
              <Settings2 /> Columns
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
