import { Fragment, useState } from 'react';
import { PageMenu } from '@/app/pages/sample-page/public-profile';
import { UserHero } from '@/app/partials/common/user-hero';
import { DropdownMenu9 } from '@/app/partials/dropdown-menu/dropdown-menu-9';
import { Navbar, NavbarActions } from '@/app/partials/navbar/navbar';
import {
  EllipsisVertical,
  Luggage,
  Mail,
  MessageSquareText,
  Users,
} from 'lucide-react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Container } from '@/app/components/common/container';
import { AccountSettingsModal } from '.';

export function AccountSettingsModalPage() {
  const [settingsModalOpen, setSettingsModalOpen] = useState(true);
  const handleSettingsModalClose = () => {
    setSettingsModalOpen(false);
  };

  const image = (
    <img
      src={toAbsoluteUrl('/media/avatars/300-1.png')}
      className="rounded-full border-3 border-green-500 max-h-[100px] max-w-full"
      alt="image"
    />
  );

  return (
    <Fragment>
      <UserHero
        name="Jenny Klabber"
        image={image}
        info={[
          { label: 'KeenThemes', icon: Luggage },
          { label: '', icon: null },
          { email: 'jenny@kteam.com', icon: Mail },
        ]}
      />
      <Container>
        <Navbar>
          <PageMenu />
          <NavbarActions>
            <Button>
              <Users /> Connect
            </Button>
            <Button mode="icon" variant="outline">
              <MessageSquareText />
            </Button>
            <DropdownMenu9
              trigger={
                <Button variant="outline" mode="icon">
                  <EllipsisVertical />
                </Button>
              }
            />
          </NavbarActions>
        </Navbar>
      </Container>
      <Container>
        <AccountSettingsModal
          open={settingsModalOpen}
          onOpenChange={handleSettingsModalClose}
        />
      </Container>
    </Fragment>
  );
}
