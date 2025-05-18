import { Fragment } from 'react';
import { Container } from '@/app/components/common/container';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Skeleton } from '@/app/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/app/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  CardTable,
  CardHeading
} from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { CalendarDays, Download, Receipt, RefreshCw, Loader2, Search } from 'lucide-react';
import { useTransReport } from './use-trans-report';
import { cn } from '@/app/lib/utils';
import { DataGrid } from '@/app/components/ui/data-grid';
import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';
import { DataGridTable } from '@/app/components/ui/data-grid-table';
import { DataGridPagination } from '@/app/components/ui/data-grid-pagination';
import {
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import { Popover, PopoverContent, PopoverTrigger } from '@/app/components/ui/popover';
import { Calendar } from '@/app/components/ui/calendar';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

// Transaction table skeleton loader
const TransactionTableSkeleton = () => {
  return (
    <div className="p-8">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-8 w-[250px] mb-4" />
        <Skeleton className="h-[400px] w-full" />
      </div>
    </div>
  );
};

// Get color for amount (negative or positive)
const getAmountColor = (amount: string) => {
  // Remove non-numeric characters and check if it starts with a minus
  const numericValue = amount.replace(/[^\d.-]/g, '');
  if (numericValue.startsWith('-')) {
    return 'text-destructive';
  }
  return 'text-success-600';
};

const TransReportPage = () => {
  const {
    loading,
    transactions,
    summary,
    fromDate,
    toDate,
    setFromDate,
    setToDate,
    onView,
    onExport,
    hasSearched
  } = useTransReport();

  const formatCurrency = (amount: string) => {
    // Remove any existing formatting and extract only numbers and decimal point
    const numericValue = amount.replace(/[^\d.-]/g, '');
    // Check if it's negative
    const isNegative = numericValue.startsWith('-');
    const absValue = isNegative ? numericValue.substring(1) : numericValue;

    // Convert to number and format with VND
    try {
      const value = parseFloat(absValue);
      const formatted = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        maximumFractionDigits: 0
      }).format(value);

      return isNegative ? '-' + formatted : formatted;
    } catch (e) {
      return amount; // Return original if parsing fails
    }
  };

  // Convert date strings to Date objects for the calendar
  const fromDateObj = fromDate ? new Date(fromDate) : null;
  const toDateObj = toDate ? new Date(toDate) : null;

  // Format date for display
  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return format(date, 'dd/MM/yyyy', { locale: vi });
  };

  // Convert date to YYYY-MM-DD format for HTML input
  const formatDateForInput = (date: Date | null) => {
    if (!date) return '';
    return format(date, 'yyyy-MM-dd');
  };

  // Create basic table for DataGrid integration
  const table = useReactTable({
    data: transactions,
    columns: [], // We'll use custom rendering
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Fragment>
      {/* Filter Controls */}
      <Container className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Transaction Report</CardTitle>
            <CardDescription>
              Select date range to view transaction history
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium leading-none">
                  From Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        'w-full data-[state=open]:border-primary',
                        !fromDateObj && 'text-muted-foreground',
                      )}
                    >
                      <CalendarDays className="-ms-0.5" />
                      {fromDateObj ? (
                        format(fromDateObj, 'dd/MM/yyyy')
                      ) : (
                        <span className="text-muted-foreground">Select date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={fromDateObj || undefined}
                      onSelect={(date) => date && setFromDate(formatDateForInput(date))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium leading-none">
                  To Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        'w-full data-[state=open]:border-primary',
                        !toDateObj && 'text-muted-foreground',
                      )}
                    >
                      <CalendarDays className="-ms-0.5" />
                      {toDateObj ? (
                        format(toDateObj, 'dd/MM/yyyy')
                      ) : (
                        <span className="text-muted-foreground">Select date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={toDateObj || undefined}
                      onSelect={(date) => date && setToDate(formatDateForInput(date))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex items-end space-x-3">
                <Button
                  className="flex-1"
                  onClick={onView}
                  disabled={loading}
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  View
                </Button>
                <Button
                  variant="outline"
                  onClick={onExport}
                  disabled={loading || !hasSearched || transactions.length === 0}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>

      {/* Transaction Table */}
      <Container>
        <div className="w-full">
          <Card className="relative">
            <CardHeader>
              <CardHeading>
                <CardTitle>Transaction History</CardTitle>
                {transactions.length > 0 && (
                  <CardDescription>
                    Showing {transactions.length} transactions from {formatDateDisplay(fromDate)} to {formatDateDisplay(toDate)}
                  </CardDescription>
                )}
              </CardHeading>
            </CardHeader>

            <CardContent className="p-0 relative">
              {loading && (
                <div className="absolute inset-0 bg-background/70 flex items-center justify-center z-10 rounded-xl">
                  <Loader2 className="h-6 w-6 text-primary animate-spin" />
                </div>
              )}
              {!hasSearched ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <Receipt className="h-12 w-12 text-muted-foreground mb-3" />
                  <h3 className="text-lg font-semibold">No Transactions to Display</h3>
                  <p className="text-sm text-muted-foreground max-w-md mt-1">
                    Select a date range above and click View to see your transaction history
                  </p>
                </div>
              ) : transactions.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <Receipt className="h-12 w-12 text-muted-foreground mb-3" />
                  <h3 className="text-lg font-semibold">No Transactions Found</h3>
                  <p className="text-sm text-muted-foreground max-w-md mt-1">
                    No transactions were found for the selected date range
                  </p>
                </div>
              ) : (
                <CardTable>
                  <ScrollArea>
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-accent/60">
                          <TableHead className="w-12 h-10">No.</TableHead>
                          <TableHead className="min-w-40 h-10">Receipt No</TableHead>
                          <TableHead className="min-w-28 h-10">Date</TableHead>
                          <TableHead className="min-w-40 h-10">Fee Type</TableHead>
                          <TableHead className="min-w-32 h-10">Amount</TableHead>
                          <TableHead className="min-w-28 h-10">Input By</TableHead>
                          <TableHead className="min-w-72 h-10">Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {transactions.map((transaction) => (
                          <TableRow key={transaction.id} className="hover:bg-accent/50">
                            <TableCell className="text-sm text-foreground font-normal">
                              {transaction.id}
                            </TableCell>
                            <TableCell className="text-sm text-primary font-medium">
                              {transaction.receiptNo || '-'}
                            </TableCell>
                            <TableCell className="text-sm text-foreground font-normal">
                              {transaction.date}
                            </TableCell>
                            <TableCell>
                              <Badge className="font-normal bg-accent/80 text-accent-foreground border text-nowrap">
                                {transaction.feeType}
                              </Badge>
                            </TableCell>
                            <TableCell className={cn(
                              "text-sm font-semibold",
                              getAmountColor(transaction.amount)
                            )}>
                              {formatCurrency(transaction.amount)}
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {transaction.inputBy || '-'}
                            </TableCell>
                            <TableCell className="text-sm text-foreground font-normal">
                              {transaction.description}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </CardTable>
              )}
            </CardContent>
            {transactions.length > 0 && (
              <CardFooter className="flex justify-end border-t bg-accent/20 py-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-muted-foreground">Total Balance:</span>
                  <span className="text-lg font-bold text-primary">{formatCurrency(summary)}</span>
                </div>
              </CardFooter>
            )}
          </Card>
        </div>
      </Container>
    </Fragment>
  );
};

export { TransReportPage }; 