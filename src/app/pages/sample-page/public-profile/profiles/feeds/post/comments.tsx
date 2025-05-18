import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Input, InputWrapper } from '@/app/components/ui/input';
import { ICommentsItem } from '../components';

interface ICommentsProps {
  items: ICommentsItem[];
}

const Comments = ({ items }: ICommentsProps) => {
  const [commentInput, setCommentInput] = useState('');

  const renderItem = (item: ICommentsItem, index: number) => {
    return (
      <div key={index} className="flex items-start gap-2.5">
        <img
          src={toAbsoluteUrl(`/media/avatars/${item.avatar}`)}
          className="rounded-full w-9 h-9 lg:w-[50px] lg:h-[50px] mt-1"
          alt="image"
        />
        <div className="grid gap-2.5 grow">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <Link
                to="#"
                className="text-base font-medium text-mono hover:text-primary-active"
              >
                {item.author}
              </Link>
              <span className="text-sm text-secondary-foreground">
                {item.date}
              </span>
            </div>
            <Button mode="link" underlined="dashed" asChild>
              <Link to="#">Reply</Link>
            </Button>
          </div>
          <p className="text-sm text-foreground heading-5.5">{item.text}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="grid gap-2 lg:gap-5 p-7.5 pt-0">
      {items.map((item, index) => {
        return renderItem(item, index);
      })}
      <div className="flex items-center gap-2.5">
        <img
          src={toAbsoluteUrl('/media/avatars/300-3.png')}
          className="rounded-full size-10 shrink-0"
          alt="image"
        />
        <InputWrapper>
          <Input
            type="text"
            placeholder="your comment.."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            className="w-full"
          />
          <Button variant="dim" mode="icon" className="-me-2">
            <ImageIcon size={20} />
          </Button>
        </InputWrapper>
      </div>
    </div>
  );
};

export { Comments, type ICommentsProps };
