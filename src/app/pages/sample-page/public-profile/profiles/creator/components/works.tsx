import { CardWork } from '@/app/partials/cards';

interface IWorksItem {
  title: string;
  image: string;
  authorName: string;
  authorAvatar: string;
  likes: number;
  comments: number;
}
type IWorksItems = Array<IWorksItem>;

const Works = () => {
  const items: IWorksItems = [
    {
      title: 'Urban Dreams',
      image: '1.jpg',
      authorName: 'Cody Fisher',
      authorAvatar: '300-6.png',
      likes: 24,
      comments: 5,
    },
    {
      title: 'Timeless Elegance',
      image: '2.jpg',
      authorName: 'Jenny Wilson',
      authorAvatar: '300-5.png',
      likes: 6,
      comments: 1,
    },
    {
      title: 'Whispered Emotions',
      image: '3.jpg',
      authorName: 'Wade Warren',
      authorAvatar: '300-14.png',
      likes: 187,
      comments: 49,
    },
    {
      title: 'Golden Serenity',
      image: '4.jpg',
      authorName: 'Albert Flores',
      authorAvatar: '300-11.png',
      likes: 60,
      comments: 13,
    },
    {
      title: 'Wild Beauty',
      image: '5.jpg',
      authorName: 'Devon Lane',
      authorAvatar: '300-16.png',
      likes: 625,
      comments: 109,
    },
    {
      title: 'Mystic Shadows',
      image: '6.jpg',
      authorName: 'Kathryn Murphy',
      authorAvatar: '300-1.png',
      likes: 37,
      comments: 16,
    },
  ];

  const renderItem = (item: IWorksItem, index: number) => {
    return (
      <CardWork
        title={item.title}
        image={item.image}
        authorName={item.authorName}
        authorAvatar={item.authorAvatar}
        likes={item.likes}
        comments={item.comments}
        key={index}
      />
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7.5">
      {items.map((item, index) => {
        return renderItem(item, index);
      })}
    </div>
  );
};

export { Works, type IWorksItem, type IWorksItems };
