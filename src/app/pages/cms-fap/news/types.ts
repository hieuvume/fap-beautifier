export interface NewsItem {
  id: string;
  title: string;
  dateTime: string;
}

export interface PaginationItem {
  text: string;
  page: number;
  active: boolean;
  disabled: boolean;
}

export interface NewsData {
  newsItems: NewsItem[];
  pagination: PaginationItem[];
  viewStateValue: string;
  viewStateGeneratorValue: string;
  eventValidationValue: string;
} 