import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

const Seats = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Seats</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2.5">
        <h4 className="text-base font-medium text-mono">14/49 Seats</h4>
        <p className="text-sm text-foreground">
          Additional seats have been added, yet availability remains limited –
          secure yours quickly today.
        </p>
        <div>
          <Button mode="link" underlined="dashed" asChild>
            <Link to="#">Learn more</Link>
          </Button>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button variant="outline">
          <Link to="#">Add Seats</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { Seats };
