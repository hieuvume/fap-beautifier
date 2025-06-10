import { Archive, Heart, MessageSquare } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface ITabsProps {
  postId: number;
  activeTab: string;
  setActiveTab: (newTab: string) => void;
  comments: number;
  likes: string;
  saves: number;
  className?: string;
}

const Tabs = ({
  postId,
  activeTab,
  setActiveTab,
  comments,
  likes,
  saves,
  className,
}: ITabsProps) => {
  return (
    <div
      data-tabs="true"
      className={`flex flex-col sm:flex-row items-stretch sm:items-center flex-wrap gap-2.5 border-input border-t border-b border-dashed py-3 mb-4 ${className}`}
    >
      <Button
        variant={activeTab === 'comments' ? 'primary' : 'ghost'}
        className={`text-mono hover:text-primary-active text-sm border-blue-300 ${
          activeTab === 'comments'
            ? 'bg-blue-50 border text-blue-600 hover:text-white hover:bg-blue-500 dark:border-blue-950 dark:bg-blue-950/30'
            : ''
        }`}
        onClick={() => setActiveTab('comments')}
        data-tab-toggle={`#post_${postId}_comments`}
      >
        <MessageSquare /> {comments} Comments
      </Button>
      <Button
        variant={activeTab === 'likes' ? 'primary' : 'ghost'}
        className={`text-mono hover:text-primary-active text-sm border-blue-300 ${
          activeTab === 'likes'
            ? 'bg-blue-50 border text-blue-600 hover:text-white hover:bg-blue-500 dark:border-blue-950 dark:bg-blue-950/30'
            : ''
        }`}
        onClick={() => setActiveTab('likes')}
        data-tab-toggle={`#post_${postId}_likes`}
      >
        <Heart /> {likes} Likes
      </Button>
      <Button
        variant={activeTab === 'saves' ? 'primary' : 'ghost'}
        className={`text-mono hover:text-primary-active text-sm border-blue-300 ${
          activeTab === 'saves'
            ? 'bg-blue-50 border text-blue-600 hover:text-white hover:bg-blue-500 dark:border-blue-950 dark:bg-blue-950/30'
            : ''
        }`}
        onClick={() => setActiveTab('saves')}
        data-tab-toggle={`#post_${postId}_saves`}
      >
        <Archive /> {saves} Saves
      </Button>
    </div>
  );
};

export { Tabs, type ITabsProps };
