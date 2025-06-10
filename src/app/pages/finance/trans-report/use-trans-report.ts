import { useState } from 'react';
import { useFapDataCustom } from '@/app/providers/fap-data-provider';
import { TransactionRecord } from './types';
import axios, { AxiosResponse } from 'axios';

export const useTransReport = () => {
  const [loading, setLoading] = useState(false);
  const [fromDate, setFromDate] = useState(new Date().toISOString().split('T')[0]);
  const [toDate, setToDate] = useState(new Date().toISOString().split('T')[0]);
  const [transactions, setTransactions] = useState<TransactionRecord[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [summary, setSummary] = useState<string>('');

  const transReportData = useFapDataCustom({
    viewStateValue: (original) => {
      const viewState = original?.querySelector('#__VIEWSTATE') as HTMLInputElement;
      return viewState ? viewState.value : '';
    },
    viewStateGeneratorValue: (original) => {
      const viewStateGenerator = original?.querySelector('#__VIEWSTATEGENERATOR') as HTMLInputElement;
      return viewStateGenerator ? viewStateGenerator.value : '';
    },
    eventValidationValue: (original) => {
      const eventValidation = original?.querySelector('#__EVENTVALIDATION') as HTMLInputElement;
      return eventValidation ? eventValidation.value : '';
    }
  });

  const parseTransactionTable = (htmlContent: string): TransactionRecord[] => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(htmlContent, 'text/html');
    const tableElement = htmlDoc.querySelector('#ctl00_mainContent_gvData') as HTMLTableElement;
    
    if (!tableElement) {
      return [];
    }
    
    const rows = tableElement.querySelectorAll('tr');
    const transactions: TransactionRecord[] = [];
    
    // Skip header row and summary row
    for (let i = 1; i < rows.length - 1; i++) {
      const row = rows[i];
      const cells = row.querySelectorAll('td');
      
      if (cells.length >= 7) {
        transactions.push({
          id: parseInt(cells[0]?.textContent?.trim() || '0'),
          receiptNo: cells[1]?.textContent?.trim() || '',
          date: cells[2]?.textContent?.trim() || '',
          feeType: cells[3]?.textContent?.trim() || '',
          amount: cells[4]?.textContent?.trim() || '',
          inputBy: cells[5]?.textContent?.trim() || '',
          description: cells[6]?.textContent?.trim() || ''
        });
      }
    }
    
    // Extract summary amount if available
    const summaryRow = rows[rows.length - 1];
    if (summaryRow) {
      const summaryCells = summaryRow.querySelectorAll('td');
      if (summaryCells.length >= 5) {
        setSummary(summaryCells[4]?.textContent?.trim() || '0');
      }
    }
    
    return transactions;
  };

  const onView = async () => {
    setLoading(true);
    setHasSearched(true);
    
    try {
      const response = await onPost(true);
      const parsedTransactions = parseTransactionTable(response.data);
      setTransactions(parsedTransactions);
    } catch (error) {
      console.error('Failed to fetch transaction report:', error);
      // TODO: Add proper error handling
    } finally {
      setLoading(false);
    }
  };

  const onExport = () => {
    onPost(false).then((res: AxiosResponse) => {
      const blob = new Blob([res.data], {
        type: 'application/vnd.ms-excel',
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'TransactionReport.xls';
      a.click();
    });
  };

  const onPost = (isView: boolean) => {
    const [fromYear, fromMonth, fromDay] = fromDate.split('-');
    const [toYear, toMonth, toDay] = toDate.split('-');
    const data: Record<string, string | number> = {
      __EVENTTARGET: '',
      __EVENTARGUMENT: '',
      __VIEWSTATE: transReportData.viewStateValue,
      __VIEWSTATEGENERATOR: transReportData.viewStateGeneratorValue,
      __EVENTVALIDATION: transReportData.eventValidationValue,
      'ctl00$mainContent$ucStartDate$ddlDays': Number(fromDay),
      'ctl00$mainContent$ucStartDate$ddlMonths': Number(fromMonth),
      'ctl00$mainContent$ucStartDate$ddlYears': Number(fromYear),
      'ctl00$mainContent$ucEndDate$ddlDays': Number(toDay),
      'ctl00$mainContent$ucEndDate$ddlMonths': Number(toMonth),
      'ctl00$mainContent$ucEndDate$ddlYears': Number(toYear),
      'ctl00$mainContent$hfError': '',
    };

    if (isView) {
      data['ctl00$mainContent$btView'] = 'View';
    } else {
      data['ctl00$mainContent$btExport'] = 'Export';
    }

    return axios.post('', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  };

  return {
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
  };
}; 