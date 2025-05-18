import { Fragment } from 'react';
import { PageMenu } from '@/app/pages/sample-page/public-profile';
import { UserHero } from '@/app/partials/common/user-hero';
import { DropdownMenu9 } from '@/app/partials/dropdown-menu/dropdown-menu-9';
import { Navbar, NavbarActions } from '@/app/partials/navbar/navbar';
import {
  EllipsisVertical,
  MapPin,
  MessagesSquare,
  ScanEye,
  SquarePlus,
  Twitch,
  Users,
} from 'lucide-react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Container } from '@/app/components/common/container';
import { ProfileGamerContent } from '.';

export function ProfileGamerPage() {
  const image = (
    <img
      src={toAbsoluteUrl('/media/avatars/300-27.png')}
      className="rounded-full border-3 border-green-500 size-[100px] shrink-0"
      alt="image"
    />
  );

  return (
    <Fragment>
      <UserHero
        name="Floyd Miles"
        image={image}
        info={[
          { label: 'SF, Bay Area', icon: MapPin },
          { label: 'floydgg', icon: Twitch },
          { email: 'Level 22', icon: ScanEye },
        ]}
      />
      <Container>
        <Navbar>
          <PageMenu />
          <NavbarActions>
            <Button>
              <Users /> Connect
            </Button>
            <Button variant="outline">
              <SquarePlus /> Invite to Team
            </Button>
            <Button variant="outline" mode="icon">
              <MessagesSquare />
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
        <ProfileGamerContent />
      </Container>
    </Fragment>
  );
}
