export interface TransReportFilter {
  fromDate: string;
  toDate: string;
}

export interface TransactionRecord {
  id: number;
  receiptNo: string;
  date: string;
  feeType: string;
  amount: string;
  inputBy: string;
  description: string;
}

export interface TransReportData {
  transactions: TransactionRecord[];
  viewState: {
    viewStateValue: string;
    viewStateGeneratorValue: string;
    eventValidationValue: string;
  };
} 