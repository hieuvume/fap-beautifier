import { useState } from 'react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Card } from '@/app/components/ui/card';
import { Comments, Heading, Likes, Saves, Tabs } from '../post';

interface ICommentsItem {
  avatar: string;
  author: string;
  date: string;
  text: string;
}
type ICommentsItems = Array<ICommentsItem>;

const Post1 = () => {
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
        date="Yesterday at  5:06 PM"
      />
      <div className="grid gap-5 mb-5 px-7.5">
        <p className="text-sm text-foreground leading-5.5">
          Now that I’m done thoroughly mangling that vague metaphor, let’s get
          down to business. You know you need to start blogging to grow your
          business, but you don’t know how. In this post, I’ll show you how to
          write a great blog post in five simple steps that people will actually
          want to read. Ready? Let’s get started.
        </p>
        <div className="grid grid-cols-2 gap-2.5 xl:gap-7.5">
          <div>
            <div
              className="bg-cover bg-no-repeat min-h-[340px] w-full rounded-xl"
              style={{
                backgroundImage: `url(${toAbsoluteUrl(`/media/images/600x600//21.jpg`)})`,
              }}
            ></div>
          </div>
          <div className="grid grid-rows-2 gap-2.5 xl:gap-7.5">
            <div>
              <div
                className="bg-cover bg-no-repeat rounded-xl h-full w-full"
                style={{
                  backgroundImage: `url(${toAbsoluteUrl(`/media/images/600x400/19.jpg`)})`,
                }}
              ></div>
            </div>
            <div>
              <div
                className="bg-cover bg-no-repeat rounded-xl h-full w-full"
                style={{
                  backgroundImage: `url(${toAbsoluteUrl(`/media/images/600x400/20.jpg`)})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Tabs
          postId={1}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          comments={2}
          likes="47k"
          saves={900}
          className="mx-7.5"
        />
        {activeTab === 'comments' && (
          <div id="post_1_comments">
            <Comments items={comments} />
          </div>
        )}
        {activeTab === 'likes' && (
          <div id="post_1_likes">
            <Likes />
          </div>
        )}
        {activeTab === 'saves' && (
          <div id="post_1_saves">
            <Saves />
          </div>
        )}
      </div>
    </Card>
  );
};

export { Post1, type ICommentsItem, type ICommentsItems };
