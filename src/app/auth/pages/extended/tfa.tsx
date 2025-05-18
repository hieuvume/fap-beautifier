import { useState } from 'react';
import { MoveLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

const TwoFactorAuth = () => {
  const [codeInputs, setCodeInputs] = useState(Array(6).fill(''));

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const updatedInputs = [...codeInputs];
    updatedInputs[index] = value;
    setCodeInputs(updatedInputs);
  };

  return (
    <div className="flex flex-col gap-5 p-10">
      <img
        src={toAbsoluteUrl('/media/illustrations/34.svg')}
        className="dark:hidden h-20 mb-2"
        alt=""
      />
      <img
        src={toAbsoluteUrl('/media/illustrations/34-dark.svg')}
        className="light:hidden h-20 mb-2"
        alt=""
      />

      <div className="text-center mb-2">
        <h3 className="text-lg font-medium text-mono mb-5">
          Verify your phone
        </h3>
        <div className="flex flex-col">
          <span className="text-sm text-secondary-foreground mb-1.5">
            Enter the verification code we sent to
          </span>
          <a href="#" className="text-sm font-medium text-mono">
            ****** 7859
          </a>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5">
        {codeInputs.map((value, index) => (
          <Input
            key={index}
            type="text"
            maxLength={1}
            className="size-10 shrink-0 px-0 text-center"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>

      <div className="flex items-center justify-center mb-2">
        <span className="text-sm text-secondary-foreground me-1.5">
          Didn’t receive a code? (37s)
        </span>
        <Link
          to="/auth/classic/login"
          className="font-semibold text-foreground hover:text-primary"
        >
          Resend
        </Link>
      </div>

      <Button className="grow">Continue</Button>

      <Link
        to="/auth/signin"
        className="gap-2.5 flex items-center justify-center text-sm font-semibold text-foreground hover:text-primary"
      >
        <MoveLeft className="size-3.5 opacity-70" />
        Back to Login
      </Link>
    </div>
  );
};

export { TwoFactorAuth };
