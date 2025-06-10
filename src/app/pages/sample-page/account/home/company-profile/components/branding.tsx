import { useId, useState } from 'react';
import { Image as ImageIcon, SquareMousePointer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Input, InputWrapper } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Switch } from '@/app/components/ui/switch';

const Branding = () => {
  const id = useId();
  const [keyInput, setKeyInput] = useState('#BA35A0');

  return (
    <>
      <style>
        {`
          .branding-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/bg-5.png')}');
          }
          .dark .branding-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/bg-5-dark.png')}');
          }
        `}
      </style>

      <Card className="min-w-full">
        <CardHeader className="gap-2">
          <CardTitle>Branding</CardTitle>
          <div className="flex items-center gap-2">
            <Label htmlFor="auto-update" className="text-sm">
              Publish
            </Label>
            <Switch defaultChecked size="sm" />
          </div>
        </CardHeader>
        <CardContent className="lg:py-7.5 py-5">
          <div className="flex flex-wrap justify-between gap-5">
            <div className="flex flex-col">
              <div className="text-mono text-sm font-medium">Company Logo</div>
              <span className="text-secondary-foreground text-sm">
                Emblematic Corporate Identity Symbol
              </span>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap gap-5 lg:gap-7.5 max-w-96 w-full">
              <img
                src={toAbsoluteUrl('/media/brand-logos/hex-lab.svg')}
                className="h-[35px] mt-2"
                alt="image"
              />
              <div className="flex bg-center w-full p-5 lg:p-7 bg-no-repeat bg-[length:550px] border border-input rounded-xl border-dashed branding-bg">
                <div className="flex flex-col place-items-center place-content-center text-center rounded-xl w-full">
                  <div className="flex items-center mb-2.5">
                    <div className="relative size-11 shrink-0">
                      <svg
                        className="w-full h-full stroke-orange-200 fill-white dark:stroke-orange-950 dark:fill-orange-950/30"
                        width="44"
                        height="48"
                        viewBox="0 0 44 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
                            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
                            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z"
                          fill=""
                        />
                        <path
                          d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
                            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
                            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z"
                          stroke=""
                          strokeOpacity="0.2"
                        />
                      </svg>
                      <div className="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
                        <ImageIcon className="text-xl ps-px text-orange-400" />
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/network/user-cards/mini-cards"
                    className="text-mono text-xs font-medium hover:text-primary-active mb-px"
                  >
                    Click or Drag & Drop
                  </Link>
                  <span className="text-xs text-secondary-foreground text-nowrap">
                    SVG,PNG, JPG (max. 800x400)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border my-7.5"></div>
          <div className="flex flex-wrap justify-between gap-5">
            <div className="flex flex-col">
              <div className="text-mono text-sm font-medium">Brand Color</div>
              <span className="text-secondary-foreground text-sm">
                Signature Palette Branding Element
              </span>
            </div>
            <InputWrapper className="sm:max-w-full xl:max-w-96 w-full">
              <Button variant="dim" mode="icon" className="-me-2">
                <SquareMousePointer size={16} className="text-green-500" />
              </Button>
              <Input
                type="text"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
              />
            </InputWrapper>
          </div>
          <div className="border-t border-border my-7.5"></div>
          <div className="flex flex-wrap justify-between gap-5">
            <div className="flex flex-col">
              <div className="text-mono text-sm font-medium">Branding</div>
              <span className="text-secondary-foreground text-sm">
                Comprehensive Image Identity Design
              </span>
            </div>
            <div className="flex flex-col gap-5 max-w-96 w-full">
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center space-x-2">
                  <Checkbox id={id} />
                  <Label htmlFor={id}>Security Questionaries</Label>
                </div>
                <span className="text-secondary-foreground text-sm">
                  Detailed Risk Assessment & Compliance Verification
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center space-x-2">
                  <Checkbox id={id} defaultChecked />
                  <Label htmlFor={id}>Emails</Label>
                </div>
                <span className="text-secondary-foreground text-sm">
                  Electronic Message Communication
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center space-x-2">
                  <Checkbox id={id} defaultChecked />
                  <Label htmlFor={id}>Vendor Reports</Label>
                </div>
                <span className="text-secondary-foreground text-sm">
                  Supplier Performance & Reliability Evaluations
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-border my-7.5"></div>
          <div className="flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export { Branding };
