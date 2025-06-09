import { Application } from '../types';
import { ApplicationStatusBadge } from './application-status-badge';
import { Card, CardTable } from '@/app/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/app/components/ui/table';

interface ApplicationTableProps {
  applications: Application[];
  isLoading: boolean;
  onSelect: (id: string) => void;
}

export function ApplicationTable({ applications, isLoading, onSelect }: ApplicationTableProps) {
  if (isLoading) {
    return <div className="p-8 text-center text-muted">Đang tải dữ liệu...</div>;
  }
  if (!applications.length) {
    return <div className="p-8 text-center text-muted">Không có đơn nào.</div>;
  }
  return (
    <Card className="overflow-x-auto">
      <CardTable>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-3 py-2 text-left">Loại đơn</TableHead>
              <TableHead className="px-3 py-2 text-left">Mục đích</TableHead>
              <TableHead className="px-3 py-2">Ngày tạo</TableHead>
              <TableHead className="px-3 py-2">Trạng thái</TableHead>
              <TableHead className="px-3 py-2">Xử lý lúc</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map(app => (
              <TableRow
                key={app.id}
                className="hover:bg-accent/50 cursor-pointer"
                onClick={() => onSelect(app.id)}
              >
                <TableCell className="px-3 py-2 whitespace-pre-line">{app.type}</TableCell>
                <TableCell className="px-3 py-2 max-w-xs truncate" title={app.purpose}>{app.purpose}</TableCell>
                <TableCell className="px-3 py-2 text-center">{app.createDate}</TableCell>
                <TableCell className="px-3 py-2 text-center">
                  <ApplicationStatusBadge status={app.status} statusRaw={app.statusRaw} />
                </TableCell>
                <TableCell className="px-3 py-2 text-center">{app.processedAt || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardTable>
    </Card>
  );
} 