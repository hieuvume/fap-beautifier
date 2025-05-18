import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

interface IUsersItem {
  image: string;
}
type IUsersItems = Array<IUsersItem>;

interface IUsersProps {
  items: IUsersItem[];
  title: string;
}

const Users = ({ title, items }: IUsersProps) => {
  const renderItem = (item: IUsersItem, index: number) => {
    return (
      <img
        src={toAbsoluteUrl(`/media/avatars/${item.image}`)}
        className="rounded-full h-[36px]"
        alt="image"
        key={index}
      />
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2.5 xl:me-16">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button mode="link" underlined="dashed" asChild>
          <Link to="/account/members/teams">Join Our Team</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { Users, type IUsersItem, type IUsersItems, type IUsersProps };
