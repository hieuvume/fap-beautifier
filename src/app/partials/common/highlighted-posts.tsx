import { Fragment } from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { HexagonBadge } from './hexagon-badge';

export interface HighlightedPostsItem {
  icon: LucideIcon;
  title: string;
  summary: string;
  path: string;
}

export type HighlightedPostsItems = Array<HighlightedPostsItem>;

export interface HighlightedPostsProps {
  posts: HighlightedPostsItem[];
}

export function HighlightedPosts({ posts }: HighlightedPostsProps) {
  const renderItem = (post: HighlightedPostsItem, index: number) => {
    return (
      <Fragment key={index}>
        <div className="flex flex-col items-start gap-2.5">
          <div className="mb-2.5">
            <HexagonBadge
              stroke="stroke-orange-200 dark:stroke-orange-950"
              fill="fill-orange-50 dark:fill-orange-950/30"
              size="size-[50px]"
              badge={
                <post.icon
                  size={28}
                  className="text-xl ps-px text-orange-400"
                />
              }
            />
          </div>
          <Link
            to={`${post.path}`}
            className="text-base font-semibold text-mono hover:text-primary"
          >
            {post.title}
          </Link>
          <p className="text-sm text-secondary-foreground">{post.summary}</p>
          <Button mode="link" underlined="dashed" asChild>
            <Link to={`${post.path}`}>Learn more</Link>
          </Button>
        </div>
        <span className="hidden not-last:block not-last:border-b border-b-border"></span>
      </Fragment>
    );
  };

  return (
    <Card>
      <CardContent className="py-10 flex flex-col gap-5 lg:gap-7.5">
        {posts.map((post, index) => {
          return renderItem(post, index);
        })}
      </CardContent>
    </Card>
  );
}
