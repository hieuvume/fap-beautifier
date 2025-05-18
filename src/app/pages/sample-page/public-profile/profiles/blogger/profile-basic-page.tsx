import { Fragment } from 'react';
import { PageMenu } from '@/app/pages/sample-page/public-profile';
import { UserHero } from '@/app/partials/common/user-hero';
import { DropdownMenu9 } from '@/app/partials/dropdown-menu/dropdown-menu-9';
import { Navbar, NavbarActions } from '@/app/partials/navbar/navbar';
import {
  Dribbble,
  EllipsisVertical,
  Mail,
  MapPin,
  MessagesSquare,
  Users,
} from 'lucide-react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Container } from '@/app/components/common/container';
import { ProfileBloggerContent } from '.';

export function ProfileBloggerPage() {
  const image = (
    <img
      src={toAbsoluteUrl('/media/avatars/300-1.png')}
      className="rounded-full border-3 border-green-500 size-[100px] shrink-0"
      alt="image"
    />
  );

  return (
    <Fragment>
      <UserHero
        name="Jenny Klabber"
        image={image}
        info={[
          { label: 'KeenThemes', icon: Dribbble },
          { label: 'SF, Bay Area', icon: MapPin },
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
        <ProfileBloggerContent />
      </Container>
    </Fragment>
  );
}
