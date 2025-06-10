import { useEffect, useState } from 'react';
import { AlertCircle, Mail } from 'lucide-react';
import { useIntl } from 'react-intl';
import { Alert, AlertIcon, AlertTitle } from '@/app/components/ui/alert';
import { Button } from '@/app/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Icons } from '@/app/components/common/icons';
import { useLogin } from './use-login';

const LoginPage = () => {
  const [campusId, setCampusId] = useState('3');
  const {
    message,
    viewStateValue,
    viewStateGeneratorValue,
    eventValidationValue,
    alertContent,
  } = useLogin();
  const intl = useIntl();

  useEffect(() => {
    const savedCampusId = localStorage.getItem('lastCampus');
    if (savedCampusId) {
      setCampusId(savedCampusId);
    }
  }, []);

  const setEventTarget = (targetValue: string) => {
    const eventTarget = document.getElementById(
      '__EVENTTARGET',
    ) as HTMLInputElement;
    if (eventTarget) {
      eventTarget.value = targetValue;
    }
  };

  const onGoogleLogin = () => {
    localStorage.setItem('lastCampus', campusId);
    setEventTarget('ctl00$mainContent$btnLogin');
  };

  const onFeIdLogin = () => {
    setEventTarget('ctl00$mainContent$btnloginFeId');
  };

  return (
    <form
      className="block w-full space-y-2"
      action="./Default.aspx"
      method="POST"
    >
      <input
        type="hidden"
        name="__EVENTTARGET"
        id="__EVENTTARGET"
        value="ctl00$mainContent$btnLogin"
      />
      <input
        type="hidden"
        name="__EVENTARGUMENT"
        id="__EVENTARGUMENT"
        value=""
      />
      <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
      <input
        type="hidden"
        name="__VIEWSTATE"
        id="__VIEWSTATE"
        value={viewStateValue}
      />
      <input
        type="hidden"
        name="__VIEWSTATEGENERATOR"
        id="__VIEWSTATEGENERATOR"
        value={viewStateGeneratorValue}
      />
      <input
        type="hidden"
        name="__EVENTVALIDATION"
        id="__EVENTVALIDATION"
        value={eventValidationValue}
      />
      <input
        type="hidden"
        name="ctl00$mainContent$ddlCampus"
        id="ctl00_mainContent_ddlCampus"
        value={campusId}
      />
      <input
        type="hidden"
        name="ctl00$mainContent$message"
        id="ctl00_mainContent_message"
      />

      <div className="text-center space-y-1 pb-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          {intl.formatMessage({ id: 'LOGIN.TITLE' })}
        </h1>
        <p className="text-sm text-muted-foreground">
          {intl.formatMessage({ id: 'LOGIN.SUBTITLE' })}
        </p>
      </div>

      {/* <Alert appearance="light" size="sm" close={false}>
                <AlertIcon>
                    <AlertCircle className="text-primary" />
                </AlertIcon>
                <AlertTitle className="text-accent-foreground">
                    Use <strong>demo@kt.com</strong> username and {` `}
                    <strong>demo123</strong> password for demo access.
                </AlertTitle>
            </Alert> */}

      {message && (
        <Alert variant="destructive" appearance="light">
          <AlertIcon>
            <AlertCircle />
          </AlertIcon>
          <AlertTitle>{message}</AlertTitle>
        </Alert>
      )}

      {alertContent && (
        <Alert variant="destructive" appearance="light">
          <AlertIcon>
            <AlertCircle />
          </AlertIcon>
          <AlertTitle
            dangerouslySetInnerHTML={{ __html: alertContent }}
          ></AlertTitle>
        </Alert>
      )}

      <div className="grow">
        <Select
          value={campusId}
          onValueChange={(value) => {
            if (value) {
              setCampusId(value);
            }
          }}
        >
          <SelectTrigger size="lg">
            <SelectValue placeholder="Select Campus" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3">FU - Hòa Lạc</SelectItem>
            <SelectItem value="4">FU - Hồ Chí Minh</SelectItem>
            <SelectItem value="5">FU - Đà Nẵng</SelectItem>
            <SelectItem value="6">FU - Cần Thơ</SelectItem>
            <SelectItem value="7">FU - Quy Nhơn</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-3.5">
        <Button variant="outline" className="h-10" onClick={onGoogleLogin}>
          <Icons.googleColorful className="size-5!" />{' '}
          {intl.formatMessage({ id: 'LOGIN.GOOGLE' })}
        </Button>
      </div>

      <div className="relative py-1.5">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            {intl.formatMessage({ id: 'LOGIN.FEID_SEPARATOR' })}
          </span>
        </div>
      </div>

      <Button type="submit" className="w-full h-10" onClick={onFeIdLogin}>
        <Mail className="size-4" />
        {intl.formatMessage({ id: 'LOGIN.FEID' })}
      </Button>
    </form>
  );
};

export { LoginPage };
