import { Container } from '@/app/components/common/container';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardToolbar,
} from '@/app/components/ui/card';
import { Skeleton } from '@/app/components/ui/skeleton';
import { cn } from '@/app/lib/utils';
import { useFapData } from '@/app/providers/fap-data-provider';
import { CalendarClock } from 'lucide-react';
import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNews } from './use-news';
import { useIntl } from 'react-intl';

// Skeleton for loading state
const NewsSkeleton = () => {
  return (
    <Container>
      {/* Header Skeleton */}
      <div className="h-14 flex items-center mb-6">
        <Skeleton className="h-9 w-[120px]" />
      </div>

      {/* News Items Skeleton */}
      <Card>
        <CardHeader className="pb-4">
          <Skeleton className="h-7 w-[120px]" />
        </CardHeader>
        <CardContent>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="mb-6">
              <Skeleton className="h-6 w-[350px] mb-2" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-center pt-2 pb-6">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-9 w-9" />
            ))}
          </div>
        </CardFooter>
      </Card>
    </Container>
  );
};

const NewsPage = () => {
  const { loading: pageLoading } = useFapData();
  const { newsItems, pagination, loading, onChangePage } = useNews();
  const intl = useIntl();

  const isPlusNews = useLocation().pathname.includes('/PlusNews.aspx');

  if (pageLoading) {
    return <NewsSkeleton />;
  }

  return (
    <Fragment>
      {/* News Card */}
      <Container>
        <Card className={loading ? 'opacity-60 pointer-events-none' : ''}>
          <CardHeader>
            <CardTitle>
              {isPlusNews
                ? intl.formatMessage({ id: 'NEWS.TITLE' })
                : intl.formatMessage({ id: 'NEWS.LATEST' })}
            </CardTitle>
            <CardToolbar>
              {!isPlusNews && (
                <Button variant="outline" size="sm" asChild>
                  <Link to="/CmsFAP/PlusNews.aspx">
                    {intl.formatMessage({ id: 'NEWS.VIEW_ALL' })}
                  </Link>
                </Button>
              )}
            </CardToolbar>
          </CardHeader>

          <CardContent>
            {newsItems.length > 0 ? (
              newsItems.map((item, index) => (
                <div
                  key={index}
                  className="mb-6 pb-4 border-b border-border last:border-b-0 last:mb-0 last:pb-0"
                >
                  <Link
                    to={`/CmsFAP/NewsDetail.aspx?id=${item.id}`}
                    className="text-md font-medium text-primary hover:text-primary/80 mb-1 block"
                  >
                    {item.title}
                  </Link>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarClock className="h-4 w-4 mr-1.5" />
                    <span>
                      {intl.formatMessage({ id: 'NEWS.POSTED_AT' }, { date: item.dateTime })}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                {intl.formatMessage({ id: 'NEWS.EMPTY' })}
              </div>
            )}
          </CardContent>

          {/* Pagination */}
          {pagination.length > 0 && (
            <CardFooter className="flex justify-center pt-2 pb-6">
              <div className="flex gap-1">
                {pagination.map((item, index) => (
                  <Button
                    key={index}
                    variant={item.active ? "primary" : "outline"}
                    size="sm"
                    disabled={item.disabled || loading}
                    onClick={() => onChangePage(item.page)}
                    className={cn(
                      "h-9 w-9 p-0",
                      item.text === '...' && "cursor-default"
                    )}
                  >
                    {item.text}
                  </Button>
                ))}
              </div>
            </CardFooter>
          )}
        </Card>
      </Container>
    </Fragment>
  );
};

export { NewsPage };
