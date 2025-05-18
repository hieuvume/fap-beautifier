import { Container } from '@/app/components/common/container';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/app/components/ui/card';
import { Skeleton } from '@/app/components/ui/skeleton';
import { useFapData } from '@/app/providers/fap-data-provider';
import { ArrowLeft, Calendar, ChevronRight, Home, User } from 'lucide-react';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNewsDetail } from './use-news-detail';

// Skeleton for loading state
const NewsDetailSkeleton = () => {
  return (
    <Container>
      {/* Header Skeleton */}
      <div className="h-14 flex items-center mb-6">
        <Skeleton className="h-9 w-[250px]" />
      </div>

      {/* Breadcrumbs Skeleton */}
      <div className="flex items-center mb-6">
        <Skeleton className="h-5 w-[400px]" />
      </div>

      {/* Content Skeleton */}
      <Card>
        <CardHeader className="pb-4 space-y-2">
          <Skeleton className="h-8 w-[80%]" />
          <div className="flex space-x-4">
            <Skeleton className="h-5 w-[150px]" />
            <Skeleton className="h-5 w-[120px]" />
          </div>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full mb-3" />
          <Skeleton className="h-4 w-[90%] mb-3" />
          <Skeleton className="h-4 w-[95%] mb-3" />
          <Skeleton className="h-4 w-full mb-6" />
          <Skeleton className="h-4 w-[60%] mb-3" />
          <Skeleton className="h-4 w-[80%] mb-3" />
          <Skeleton className="h-4 w-[75%]" />
        </CardContent>
        <CardFooter>
          <Skeleton className="h-10 w-28" />
        </CardFooter>
      </Card>
    </Container>
  );
};

const NewsDetailPage = () => {
  const navigate = useNavigate();
  const { loading } = useFapData();
  const { title, author, publishDate, content, authorInfo } = useNewsDetail();

  if (loading) {
    return <NewsDetailSkeleton />;
  }

  return (
    <Fragment>
      {/* Breadcrumbs */}
      <Container className="mb-6">
        <div className="flex items-center text-sm text-muted-foreground">
          <Button
            variant="ghost"
            size="sm"
            className="p-0 h-auto"
            onClick={() => navigate('/')}
          >
            <Home className="h-3.5 w-3.5" />
          </Button>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Button
            variant="ghost"
            size="sm"
            className="p-0 h-auto"
            onClick={() => navigate('/CmsFAP/News.aspx')}
          >
            News
          </Button>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="truncate max-w-xs">{title}</span>
        </div>
      </Container>

      {/* News Content Card */}
      <Container>
        <Card className="overflow-hidden border-none shadow-lg">
          <div className="w-full h-1 bg-gradient-to-r from-primary/80 to-primary"></div>
          <CardHeader className="pb-4 pt-6">
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-foreground leading-tight">
                {title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                {author && (
                  <div className="flex items-center gap-1.5">
                    <User className="h-4 w-4 text-primary/70" />
                    <span>{author}</span>
                  </div>
                )}
                {publishDate && (
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-primary/70" />
                    <span>{publishDate}</span>
                  </div>
                )}
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            <div
              className="prose max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-strong:font-semibold prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:marker:text-primary/40"
              dangerouslySetInnerHTML={{ __html: content ?? "" }}
            />
          </CardContent>

          <CardFooter className="flex justify-between py-4">
            <Button
              variant="outline"
              onClick={() => navigate('/CmsFAP/News.aspx')}
              className="flex items-center"
              size="sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Button>
          </CardFooter>
        </Card>
      </Container>
    </Fragment>
  );
};

export { NewsDetailPage };
