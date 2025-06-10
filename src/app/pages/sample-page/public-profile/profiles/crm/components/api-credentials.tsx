import { useState } from 'react';
import { Copy, KeyRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Input, InputWrapper } from '@/app/components/ui/input';

const ApiCredentials = () => {
  const [keyInput, setKeyInput] = useState('hwewe4654fdd5sdfh');

  return (
    <Card>
      <CardHeader>
        <CardTitle>API Credentials</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-foreground leading-5.5 pb-5">
          The granted credentials serve a twofold function, enabling{' '}
          <Button mode="link" asChild>
            <Link to="#">API authentication</Link>
          </Button>{' '}
          and governing JavaScript customization
        </div>
        <div className="flex flex-col flex-wrap gap-4">
          <InputWrapper>
            <Input
              type="text"
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
            />
            <Button variant="dim" mode="icon" className="-me-2">
              <Copy size={16} />
            </Button>
          </InputWrapper>
          <div>
            <Button>
              <KeyRound /> Access Tokens
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button mode="link" underlined="dashed" asChild>
          <Link to="/account/api-keys">Check API’s</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { ApiCredentials };
