/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import { AccountSettingsSidebar } from '@/app/pages/sample-page/account/home/settings-sidebar';
import {
  AdvancedSettingsAddress,
  AdvancedSettingsAppearance,
  AdvancedSettingsNotifications,
  AdvancedSettingsPreferences,
  AuthEmail,
  AuthPassword,
  AuthSingleSingOn,
  AuthSocialSignIn,
  AuthTwoFactor,
  BasicSettings,
  DeleteAccount,
  ExternalServicesIntegrations,
  ExternalServicesManageApi,
} from '@/app/pages/sample-page/account/home/settings-sidebar/components';
import { useIsMobile } from '@/app/hooks/use-mobile';
import { useViewport } from '@/app/hooks/use-viewport';
import { Button } from '@/app/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Scrollspy } from '@/app/components/ui/scrollspy';

interface IModalProfileProps {
  open: boolean;
  onOpenChange: () => void;
}

export function AccountSettingsModal({
  open,
  onOpenChange,
}: IModalProfileProps) {
  const mobileMode = useIsMobile();
  const navBar = useRef<any | null>(null);
  const parentRef = useRef<any | null>(null);
  const [sidebarHeight, setSidebarHeight] = useState<number>(0);
  const [viewportHeight] = useViewport();
  const offset = 260;

  useEffect(() => {
    setSidebarHeight(viewportHeight - offset);
  }, [viewportHeight]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="mx-auto grow w-full max-w-[1320px] flex flex-col px-10 gap-0 overflow-hidden [&>button]:hidden"
        variant="fullscreen"
      >
        <DialogHeader className="p-0 border-0">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
          <div className="flex items-center justify-between flex-wrap grow gap-5 pb-7.5">
            <div className="flex flex-col justify-center gap-2">
              <h1 className="text-xl font-semibold leading-none text-mono">
                Settings - Modal
              </h1>
              <div className="flex items-center gap-2 text-sm font-normal text-secondary-foreground">
                Dynamic, Focused Adjustment Interface
              </div>
            </div>
            <Button onClick={onOpenChange} variant="outline">
              Close
            </Button>
          </div>
        </DialogHeader>
        <ScrollArea
          className="grow py-0 mb-5 ps-0 pe-3 -me-7"
          viewportRef={parentRef}
        >
          <div className="flex grow gap-5 lg:gap-7.5">
            {!mobileMode && (
              <div
                className="w-[300px] sticky top-[1px]"
                style={{ maxHeight: `${sidebarHeight}px` }}
              >
                <ScrollArea viewportRef={navBar} className="h-full">
                  <Scrollspy offset={100} targetRef={parentRef}>
                    <AccountSettingsSidebar />
                  </Scrollspy>
                </ScrollArea>
              </div>
            )}
            <div className="flex flex-col items-stretch grow gap-5 lg:gap-7.5">
              <BasicSettings />
              <AuthEmail />
              <AuthPassword />
              <AuthSocialSignIn />
              <AuthSingleSingOn />
              <AuthTwoFactor />
              <AdvancedSettingsPreferences />
              <AdvancedSettingsAppearance title={''} />
              <AdvancedSettingsNotifications />
              <AdvancedSettingsAddress />
              <ExternalServicesManageApi title={''} switch={false} />
              <ExternalServicesIntegrations />
              <DeleteAccount />
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
