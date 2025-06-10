import {
  Card,
  CardFooter,
  CardHeader,
  CardHeading,
  CardTable
} from '@/app/components/ui/card';
import { DataGrid } from '@/app/components/ui/data-grid';
import { DataGridColumnHeader } from '@/app/components/ui/data-grid-column-header';
import { DataGridPagination } from '@/app/components/ui/data-grid-pagination';
import { DataGridTable } from '@/app/components/ui/data-grid-table';
import { Input } from '@/app/components/ui/input';
import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/app/components/ui/tooltip';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable
} from '@tanstack/react-table';
import { Info, Loader2, Search, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import { SubjectFee } from '../types';

interface SubjectFeesTableProps {
  fees: SubjectFee[];
  filterText: string;
  setFilterText: (value: string) => void;
  loading: boolean;
}

const SubjectFeesTable = ({
  fees,
  filterText,
  setFilterText,
  loading
}: SubjectFeesTableProps) => {
  const intl = useIntl();
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'subjectCode', desc: false },
  ]);
  
  // Helper to format currency
  const formatCurrency = (value: string) => {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    return !isNaN(numericValue) 
      ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(numericValue)
      : value;
  };
  
  // Filter data based on search input
  const filteredData = useMemo(() => {
    return fees.filter(item => 
      !filterText || 
      item.subjectCode.toLowerCase().includes(filterText.toLowerCase()) ||
      item.subjectName.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [fees, filterText]);
  
  // Define columns for DataGrid
  const columns = useMemo<ColumnDef<SubjectFee>[]>(
    () => [
      {
        id: 'subjectCode',
        accessorFn: (row) => row.subjectCode,
        header: ({ column }) => (
          <DataGridColumnHeader title={intl.formatMessage({ id: 'SUBJECT_FEES.TABLE.SUBJECT_CODE' })} column={column} />
        ),
        cell: ({ row }) => (
          <span className="font-medium text-primary">
            {row.original.subjectCode}
          </span>
        ),
        enableSorting: true,
        size: 120,
      },
      {
        id: 'subjectName',
        accessorFn: (row) => row.subjectName,
        header: ({ column }) => (
          <DataGridColumnHeader title={intl.formatMessage({ id: 'SUBJECT_FEES.TABLE.SUBJECT_NAME' })} column={column} />
        ),
        cell: ({ row }) => (
          <span className="text-secondary-foreground font-normal">
            {row.original.subjectName}
          </span>
        ),
        enableSorting: true,
      },
      {
        id: 'numberCredits',
        accessorFn: (row) => row.numberCredits,
        header: ({ column }) => (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 justify-end">
                  <DataGridColumnHeader title={intl.formatMessage({ id: 'SUBJECT_FEES.TABLE.CREDITS' })} column={column} />
                  <Info className="h-4 w-4" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{intl.formatMessage({ id: 'SUBJECT_FEES.TABLE.CREDITS_TOOLTIP' })}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ),
        cell: ({ row }) => (
          <div className="text-right font-normal">
            {row.original.numberCredits}
          </div>
        ),
        enableSorting: true,
        size: 100,
      },
      {
        id: 'fee',
        accessorFn: (row) => row.fee,
        header: ({ column }) => (
          <DataGridColumnHeader title={intl.formatMessage({ id: 'SUBJECT_FEES.TABLE.FEE' })} column={column} />
        ),
        cell: ({ row }) => (
          <div className="text-right font-normal">
            {formatCurrency(row.original.fee)}
          </div>
        ),
        enableSorting: true,
        size: 150,
      },
      {
        id: 'feeInternational',
        accessorFn: (row) => row.feeInternational,
        header: ({ column }) => (
          <DataGridColumnHeader title={intl.formatMessage({ id: 'SUBJECT_FEES.TABLE.INTERNATIONAL_FEE' })} column={column} />
        ),
        cell: ({ row }) => (
          <div className="text-right font-normal">
            {formatCurrency(row.original.feeInternational)}
          </div>
        ),
        enableSorting: true,
        size: 180,
      },
    ],
    [intl],
  );
  
  const table = useReactTable({
    columns,
    data: filteredData,
    pageCount: Math.ceil((filteredData?.length || 0) / pagination.pageSize),
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
  
  // Reset to first page when filter changes
  useEffect(() => {
    setPagination(prev => ({ ...prev, pageIndex: 0 }));
  }, [filterText]);

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
      <Card className="relative">
        {loading && (
          <div className="absolute inset-0 bg-background/70 flex items-center justify-center z-10 rounded-xl">
            <Loader2 className="h-6 w-6 text-primary animate-spin" />
          </div>
        )}
        
        <CardHeader className="py-4">
          <CardHeading>
            <div className="relative">
              <Search className="size-4 text-muted-foreground absolute start-3 top-1/2 -translate-y-1/2" />
              <Input
                placeholder={intl.formatMessage({ id: 'SUBJECT_FEES.SEARCH.PLACEHOLDER' })}
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="ps-9 w-64"
              />
              {filterText.length > 0 && (
                <button
                  className="absolute end-1.5 top-1/2 -translate-y-1/2 h-6 w-6 rounded-sm hover:bg-muted flex items-center justify-center"
                  onClick={() => setFilterText('')}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </CardHeading>
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

export { SubjectFeesTable };
