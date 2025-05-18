import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

interface ICollaborateProps {
  title: string;
}

const Collaborate = ({ title }: ICollaborateProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground leading-5.5">
          Experienced UI/UX designer seeking new opportunities.
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

export { Collaborate, type ICollaborateProps };
