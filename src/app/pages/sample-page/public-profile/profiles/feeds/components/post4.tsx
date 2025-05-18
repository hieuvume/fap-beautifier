import { useState } from 'react';
import { Card } from '@/app/components/ui/card';
import { Comments, Heading, Likes, Saves, Tabs } from '../post';
import { ICommentsItems } from './post1';

const Post4 = () => {
  const [activeTab, setActiveTab] = useState('comments');

  const comments: ICommentsItems = [
    {
      avatar: '300-3.png',
      author: 'Mr. Anderson',
      date: '1 Day ago',
      text: 'Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write. I’ll show you how to write a great blog post in five simple steps that people will actually want to read. Ready?',
    },
    {
      avatar: '300-15.png',
      author: 'Mrs. Anderson',
      date: '1 Day ago',
      text: 'Long before you sit dow to put digital pen to paper.',
    },
  ];

  return (
    <Card>
      <Heading
        author="Jenny Klabber"
        avatar={{ image: '300-1.png', imageClass: 'rounded-full size-[50px]' }}
        date="Week ago"
      />
      <p className="text-sm text-foreground leading-5.5 mb-5 px-7.5">
        This doesn’t mean that all bloggers are insincere fakers. On the
        contrary, many bloggers’ natural curiosity is what makes them great at
        what they do. If you blog for a living, you have to be comfortable
        jumping from one topic to the next, even if you don’t know anything
        about it.
      </p>
      <div>
        <Tabs
          postId={4}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          comments={2}
          likes="47k"
          saves={900}
          className="mx-7.5"
        />
        {activeTab === 'comments' && (
          <div id="post_4_comments">
            <Comments items={comments} />
          </div>
        )}
        {activeTab === 'likes' && (
          <div id="post_4_likes">
            <Likes />
          </div>
        )}
        {activeTab === 'saves' && (
          <div id="post_4_saves">
            <Saves />
          </div>
        )}
      </div>
    </Card>
  );
};

export { Post4 };
