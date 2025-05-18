'use client';

import { ReactElement, useMemo, useState } from 'react';
import { RiCheckboxCircleFill } from '@remixicon/react';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import {
  Chrome,
  Compass,
  EllipsisVertical,
  Filter,
  Search,
  Settings2,
  X,
} from 'lucide-react';
import { Link } from 'react-router';
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
  DropdownMenu,
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

interface IUser {
  avatar: string;
  name: string;
}

interface IBrowser {
  icon: ReactElement;
  name: string;
}

interface ILocation {
  name: string;
  flag: string;
}

interface IData {
  id: string;
  user: IUser;
  browser: IBrowser;
  ipAddress: string;
  location: ILocation;
}

const data: IData[] = [
  {
    id: '1',
    user: {
      avatar: '300-1.png',
      name: 'Esther Howard',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Chrome on Mac OS X',
    },
    ipAddress: '234.0.155.191',
    location: {
      name: 'Malaysia',
      flag: 'malaysia.svg',
    },
  },
  {
    id: '2',
    user: {
      avatar: '300-2.png',
      name: 'Tyler Hero',
    },
    browser: {
      icon: <Compass size={16} />,
      name: 'Safari on iPhone',
    },
    ipAddress: '70.218.212.162',
    location: {
      name: 'Estonia',
      flag: 'estonia.svg',
    },
  },
  {
    id: '3',
    user: {
      avatar: '300-3.png',
      name: 'Leslie Alexander',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Firefox on Mac OS X',
    },
    ipAddress: '140.92.152.213',
    location: {
      name: 'India',
      flag: 'india.svg',
    },
  },
  {
    id: '4',
    user: {
      avatar: '300-4.png',
      name: 'Robert Fox',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Edge on Windows 10',
    },
    ipAddress: '214.219.147.46',
    location: {
      name: 'Spain',
      flag: 'spain.svg',
    },
  },
  {
    id: '5',
    user: {
      avatar: '300-5.png',
      name: 'Brooklyn Simmons',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Chrome on Mac OS X',
    },
    ipAddress: '246.44.68.100',
    location: {
      name: 'Germany',
      flag: 'germany.svg',
    },
  },
  {
    id: '6',
    user: {
      avatar: '300-6.png',
      name: 'Jerome Bell',
    },
    browser: {
      icon: <Compass size={16} />,
      name: 'Safari on iOS 14',
    },
    ipAddress: '246.44.68.100',
    location: {
      name: 'France',
      flag: 'france.svg',
    },
  },
  {
    id: '7',
    user: {
      avatar: '300-7.png',
      name: 'Darlene Robertson',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Chrome on Windows 11',
    },
    ipAddress: '233.182.185.28',
    location: {
      name: 'Japan',
      flag: 'japan.svg',
    },
  },
  {
    id: '8',
    user: {
      avatar: '300-8.png',
      name: 'Devon Lane',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Chrome on Mac OS X',
    },
    ipAddress: '234.0.155.191',
    location: {
      name: 'Malaysia',
      flag: 'malaysia.svg',
    },
  },
  {
    id: '9',
    user: {
      avatar: '300-9.png',
      name: 'Walter White',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Firefox on Windows 10',
    },
    ipAddress: '70.218.212.162',
    location: {
      name: 'Estonia',
      flag: 'estonia.svg',
    },
  },
  {
    id: '10',
    user: {
      avatar: '300-10.png',
      name: 'Mallory Horton',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Firefox on Mac OS X',
    },
    ipAddress: '75.243.106.80',
    location: {
      name: 'Turkey',
      flag: 'turkey.svg',
    },
  },
  {
    id: '11',
    user: {
      avatar: '300-11.png',
      name: 'Jacob Jones',
    },
    browser: {
      icon: <Compass size={16} />,
      name: 'Safari on Mac OS X',
    },
    ipAddress: '102.150.137.255',
    location: {
      name: 'Ukraine',
      flag: 'ukraine.svg',
    },
  },
  {
    id: '12',
    user: {
      avatar: '300-12.png',
      name: 'Marvin McKinney',
    },
    browser: {
      icon: <Compass size={16} />,
      name: 'Safari on macOS Big Sur',
    },
    ipAddress: '140.92.152.213',
    location: {
      name: 'India',
      flag: 'india.svg',
    },
  },
  {
    id: '13',
    user: {
      avatar: '300-13.png',
      name: 'Kathryn Murphy',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Chrome on Android 16',
    },
    ipAddress: '76.216.214.248',
    location: {
      name: 'Uruguay',
      flag: 'uruguay.svg',
    },
  },
  {
    id: '14',
    user: {
      avatar: '300-14.png',
      name: 'Tiffany Hayes',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Firefox on Windows 11',
    },
    ipAddress: '233.182.185.28',
    location: {
      name: 'Philippines',
      flag: 'philippines.svg',
    },
  },
  {
    id: '15',
    user: {
      avatar: '300-15.png',
      name: 'Michael Scott',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Brave Browser on Windows 11',
    },
    ipAddress: '76.216.214.248',
    location: {
      name: 'Indonesia',
      flag: 'indonesia.svg',
    },
  },
  {
    id: '16',
    user: {
      avatar: '300-16.png',
      name: 'Robert Fox',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Opera on Windows 11',
    },
    ipAddress: '102.150.137.255',
    location: {
      name: 'Poland',
      flag: 'poland.svg',
    },
  },
  {
    id: '17',
    user: {
      avatar: '300-17.png',
      name: 'Ralph Edwards',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Edge (Chromium)',
    },
    ipAddress: '75.243.106.80',
    location: {
      name: 'Portugal',
      flag: 'portugal.svg',
    },
  },
  {
    id: '18',
    user: {
      avatar: '300-18.png',
      name: 'Ronald Richards',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Chrome on Windows 10',
    },
    ipAddress: '140.92.152.213',
    location: {
      name: 'Nigeria',
      flag: 'nigeria.svg',
    },
  },
  {
    id: '19',
    user: {
      avatar: '300-19.png',
      name: 'Sharon Rice',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Chrome on Mac OS X',
    },
    ipAddress: '234.0.155.191',
    location: {
      name: 'Malaysia',
      flag: 'malaysia.svg',
    },
  },
  {
    id: '20',
    user: {
      avatar: '300-20.png',
      name: 'Guy Hawkins',
    },
    browser: {
      icon: <Compass size={16} />,
      name: 'Safari on iPhone',
    },
    ipAddress: '214.219.147.46',
    location: {
      name: 'Turkey',
      flag: 'turkey.svg',
    },
  },
  {
    id: '21',
    user: {
      avatar: '300-21.png',
      name: 'Natalie Watson',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Chrome on Windows 11',
    },
    ipAddress: '233.182.185.28',
    location: {
      name: 'Japan',
      flag: 'japan.svg',
    },
  },
  {
    id: '22',
    user: {
      avatar: '300-22.png',
      name: 'Esther Howard',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Firefox on Mac OS X',
    },
    ipAddress: '75.243.106.80',
    location: {
      name: 'Turkey',
      flag: 'turkey.svg',
    },
  },
  {
    id: '23',
    user: {
      avatar: '300-23.png',
      name: 'Theresa Webb',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Chrome on Windows 11',
    },
    ipAddress: '214.219.147.46',
    location: {
      name: 'Spain',
      flag: 'spain.svg',
    },
  },
  {
    id: '24',
    user: {
      avatar: '300-24.png',
      name: 'Albert Flores',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Firefox on Mac OS X',
    },
    ipAddress: '75.243.106.80',
    location: {
      name: 'Turkey',
      flag: 'turkey.svg',
    },
  },
  {
    id: '25',
    user: {
      avatar: '300-25.png',
      name: 'Donald Coleman',
    },
    browser: {
      icon: <Compass size={16} />,
      name: 'Safari on iOS 14',
    },
    ipAddress: '246.44.68.100',
    location: {
      name: 'France',
      flag: 'france.svg',
    },
  },
  {
    id: '26',
    user: {
      avatar: '300-26.png',
      name: 'Jason Reed',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Chrome on Mac OS X',
    },
    ipAddress: '234.0.155.191',
    location: {
      name: 'Malaysia',
      flag: 'malaysia.svg',
    },
  },
  {
    id: '27',
    user: {
      avatar: '300-27.png',
      name: 'Paul Walker',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Firefox on Windows 10',
    },
    ipAddress: '70.218.212.162',
    location: {
      name: 'Estonia',
      flag: 'estonia.svg',
    },
  },
  {
    id: '28',
    user: {
      avatar: '300-28.png',
      name: 'Andrew Mitchell',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Chrome on Windows 11',
    },
    ipAddress: '233.182.185.28',
    location: {
      name: 'Japan',
      flag: 'japan.svg',
    },
  },
  {
    id: '29',
    user: {
      avatar: '300-29.png',
      name: 'Kevin Evans',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Firefox on Windows 11',
    },
    ipAddress: '233.182.185.28',
    location: {
      name: 'Japan',
      flag: 'japan.svg',
    },
  },
  {
    id: '30',
    user: {
      avatar: '300-30.png',
      name: 'Steven Harris',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Firefox on Windows 10',
    },
    ipAddress: '233.182.185.28',
    location: {
      name: 'Japan',
      flag: 'japan.svg',
    },
  },
  {
    id: '31',
    user: {
      avatar: '300-31.png',
      name: 'Thomas Clark',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Chrome on Windows 11',
    },
    ipAddress: '233.182.185.28',
    location: {
      name: 'Japan',
      flag: 'japan.svg',
    },
  },
  {
    id: '32',
    user: {
      avatar: '300-32.png',
      name: 'Justin Adams',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Firefox on Windows 11',
    },
    ipAddress: '233.182.185.28',
    location: {
      name: 'Japan',
      flag: 'japan.svg',
    },
  },
  {
    id: '33',
    user: {
      avatar: '300-33.png',
      name: 'Charles Carter',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Chrome on Windows 11',
    },
    ipAddress: '233.182.185.28',
    location: {
      name: 'Japan',
      flag: 'japan.svg',
    },
  },
  {
    id: '34',
    user: {
      avatar: '300-34.png',
      name: 'Jessica Evans',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Firefox on Windows 11',
    },
    ipAddress: '233.182.185.28',
    location: {
      name: 'Japan',
      flag: 'japan.svg',
    },
  },
  {
    id: '35',
    user: {
      avatar: '300-1.png',
      name: 'Esther Howard',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Chrome on Mac OS X',
    },
    ipAddress: '234.0.155.191',
    location: {
      name: 'Malaysia',
      flag: 'malaysia.svg',
    },
  },
  {
    id: '36',
    user: {
      avatar: '300-2.png',
      name: 'Tyler Hero',
    },
    browser: {
      icon: <Compass size={16} />,
      name: 'Safari on iPhone',
    },
    ipAddress: '70.218.212.162',
    location: {
      name: 'Estonia',
      flag: 'estonia.svg',
    },
  },
  {
    id: '37',
    user: {
      avatar: '300-3.png',
      name: 'Leslie Alexander',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Firefox on Mac OS X',
    },
    ipAddress: '140.92.152.213',
    location: {
      name: 'India',
      flag: 'india.svg',
    },
  },
  {
    id: '38',
    user: {
      avatar: '300-4.png',
      name: 'Robert Fox',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Edge on Windows 10',
    },
    ipAddress: '214.219.147.46',
    location: {
      name: 'Spain',
      flag: 'spain.svg',
    },
  },
  {
    id: '39',
    user: {
      avatar: '300-5.png',
      name: 'Brooklyn Simmons',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Chrome on Mac OS X',
    },
    ipAddress: '246.44.68.100',
    location: {
      name: 'Germany',
      flag: 'germany.svg',
    },
  },
  {
    id: '40',
    user: {
      avatar: '300-6.png',
      name: 'Jerome Bell',
    },
    browser: {
      icon: <Compass size={16} />,
      name: 'Safari on iOS 14',
    },
    ipAddress: '246.44.68.100',
    location: {
      name: 'France',
      flag: 'france.svg',
    },
  },
  {
    id: '41',
    user: {
      avatar: '300-7.png',
      name: 'Darlene Robertson',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Chrome on Windows 11',
    },
    ipAddress: '233.182.185.28',
    location: {
      name: 'Japan',
      flag: 'japan.svg',
    },
  },
  {
    id: '42',
    user: {
      avatar: '300-8.png',
      name: 'Devon Lane',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Chrome on Mac OS X',
    },
    ipAddress: '234.0.155.191',
    location: {
      name: 'Malaysia',
      flag: 'malaysia.svg',
    },
  },
  {
    id: '43',
    user: {
      avatar: '300-9.png',
      name: 'Walter White',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Firefox on Windows 10',
    },
    ipAddress: '70.218.212.162',
    location: {
      name: 'Estonia',
      flag: 'estonia.svg',
    },
  },
  {
    id: '44',
    user: {
      avatar: '300-10.png',
      name: 'Mallory Horton',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Firefox on Mac OS X',
    },
    ipAddress: '75.243.106.80',
    location: {
      name: 'Turkey',
      flag: 'turkey.svg',
    },
  },
  {
    id: '45',
    user: {
      avatar: '300-11.png',
      name: 'Jacob Jones',
    },
    browser: {
      icon: <Compass size={16} />,
      name: 'Safari on Mac OS X',
    },
    ipAddress: '102.150.137.255',
    location: {
      name: 'Ukraine',
      flag: 'ukraine.svg',
    },
  },
  {
    id: '46',
    user: {
      avatar: '300-12.png',
      name: 'Marvin McKinney',
    },
    browser: {
      icon: <Compass size={16} />,
      name: 'Safari on macOS Big Sur',
    },
    ipAddress: '140.92.152.213',
    location: {
      name: 'India',
      flag: 'india.svg',
    },
  },
  {
    id: '47',
    user: {
      avatar: '300-13.png',
      name: 'Kathryn Murphy',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Chrome on Android 16',
    },
    ipAddress: '76.216.214.248',
    location: {
      name: 'Uruguay',
      flag: 'uruguay.svg',
    },
  },
  {
    id: '48',
    user: {
      avatar: '300-14.png',
      name: 'Tiffany Hayes',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Firefox on Windows 11',
    },
    ipAddress: '233.182.185.28',
    location: {
      name: 'Philippines',
      flag: 'philippines.svg',
    },
  },
  {
    id: '49',
    user: {
      avatar: '300-15.png',
      name: 'Michael Scott',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Brave Browser on Windows 11',
    },
    ipAddress: '76.216.214.248',
    location: {
      name: 'Indonesia',
      flag: 'indonesia.svg',
    },
  },
  {
    id: '50',
    user: {
      avatar: '300-16.png',
      name: 'Robert Fox',
    },
    browser: {
      icon: <Chrome size={16} />,
      name: 'Opera on Windows 11',
    },
    ipAddress: '102.150.137.255',
    location: {
      name: 'Poland',
      flag: 'poland.svg',
    },
  },
];

function ActionsCell({ row }: { row: Row<IData> }) {
  const { copyToClipboard } = useCopyToClipboard();
  const handleCopyId = () => {
    copyToClipboard(String(row.original.id));
    const message = `Session ID successfully copied: ${row.original.id}`;
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
        <DropdownMenuItem
          onClick={() =>
            alert(`Clicked on action button for row ${row.original.user.name}`)
          }
        >
          Action
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyId}>Copy ID</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={() => {}}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const CurrentSessions = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'user', desc: false },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrowsers, setSelectedBrowsers] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Filter by browser
      const matchesBrowser =
        !selectedBrowsers?.length ||
        selectedBrowsers.includes(item.browser.name.split(' ')[0]); // Extract browser name (e.g., "Chrome" from "Chrome on Mac OS X")

      // Filter by location
      const matchesLocation =
        !selectedLocations?.length ||
        selectedLocations.includes(item.location.name);

      // Filter by search query (case-insensitive)
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        item.user.name.toLowerCase().includes(searchLower) ||
        item.ipAddress.toLowerCase().includes(searchLower) ||
        item.location.name.toLowerCase().includes(searchLower);

      return matchesBrowser && matchesLocation && matchesSearch;
    });
  }, [searchQuery, selectedBrowsers, selectedLocations]);

  const browserCounts = useMemo(() => {
    return data.reduce(
      (acc, item) => {
        const browser = item.browser.name.split(' ')[0]; // Extract browser name (e.g., "Chrome")
        acc[browser] = (acc[browser] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
  }, []);

  const locationCounts = useMemo(() => {
    return data.reduce(
      (acc, item) => {
        const location = item.location.name;
        acc[location] = (acc[location] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
  }, []);

  const handleBrowserChange = (checked: boolean, value: string) => {
    setSelectedBrowsers((prev = []) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value),
    );
  };

  const handleLocationChange = (checked: boolean, value: string) => {
    setSelectedLocations((prev = []) =>
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
        id: 'user',
        accessorFn: (row) => row.user,
        header: ({ column }) => (
          <DataGridColumnHeader title="Person" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-2.5">
            <div className="shrink-0">
              <img
                src={toAbsoluteUrl(
                  `/media/avatars/${row.original.user.avatar}`,
                )}
                className="h-9 rounded-full"
                alt="image"
              />
            </div>
            <Link
              className="leading-none font-semibold text-mono hover:text-primary"
              to="#"
            >
              {row.original.user.name}
            </Link>
          </div>
        ),
        enableSorting: true,
        size: 290,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'browser',
        accessorFn: (row) => row.browser,
        header: ({ column }) => (
          <DataGridColumnHeader title="Browser" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            {row.original.browser.icon}
            <span className="text-secondary-foreground">
              {row.original.browser.name}
            </span>
          </div>
        ),
        enableSorting: true,
        size: 260,
        meta: {
          headerClassName: '',
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
        size: 240,
        meta: {
          headerClassName: '',
        },
      },
      {
        id: 'location',
        accessorFn: (row) => row.location,
        header: ({ column }) => (
          <DataGridColumnHeader title="Location" column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-1.5">
            <img
              src={toAbsoluteUrl(`/media/flags/${row.original.location.flag}`)}
              className="h-4 rounded-full"
              alt="image"
            />
            <span className="leading-none text-secondary-foreground">
              {row.original.location.name}
            </span>
          </div>
        ),
        enableSorting: true,
        size: 200,
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
            Only Active Users
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
                  placeholder="Search Sessions..."
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
                    Browser
                    {selectedBrowsers.length > 0 && (
                      <Badge size="sm" appearance="stroke">
                        {selectedBrowsers.length}
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
                      {Object.keys(browserCounts).map((browser) => (
                        <div
                          key={browser}
                          className="flex items-center gap-2.5"
                        >
                          <Checkbox
                            id={browser}
                            checked={selectedBrowsers.includes(browser)}
                            onCheckedChange={(checked) =>
                              handleBrowserChange(checked === true, browser)
                            }
                          />
                          <Label
                            htmlFor={browser}
                            className="grow flex items-center justify-between font-normal gap-1.5"
                          >
                            {browser}
                            <span className="text-muted-foreground">
                              {browserCounts[browser]}
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
                    Location
                    {selectedLocations.length > 0 && (
                      <Badge size="sm" appearance="stroke">
                        {selectedLocations.length}
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
                      {Object.keys(locationCounts).map((location) => (
                        <div
                          key={location}
                          className="flex items-center gap-2.5"
                        >
                          <Checkbox
                            id={location}
                            checked={selectedLocations.includes(location)}
                            onCheckedChange={(checked) =>
                              handleLocationChange(checked === true, location)
                            }
                          />
                          <Label
                            htmlFor={location}
                            className="grow flex items-center justify-between font-normal gap-1.5"
                          >
                            {location}
                            <span className="text-muted-foreground">
                              {locationCounts[location]}
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

export { CurrentSessions };
