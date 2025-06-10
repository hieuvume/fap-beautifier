import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

interface IOpenToWorkProps {
  className: string;
  title: string;
}

const OpenToWork = ({ className, title }: IOpenToWorkProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground leading-5.5">
          Seasoned UI/UX designer with a flair for user-centric interfaces.
          Let's create something amazing together!
        </p>
      </CardContent>
      <CardFooter className="justify-center">
        <Button mode="link" underlined="dashed" asChild>
          <Link to="/public-profile/works">View details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { OpenToWork, type IOpenToWorkProps };
