import { Fragment } from 'react';
import { PageMenu } from '@/app/pages/sample-page/public-profile';
import { UserHero } from '@/app/partials/common/user-hero';
import { DropdownMenu9 } from '@/app/partials/dropdown-menu/dropdown-menu-9';
import { Navbar, NavbarActions } from '@/app/partials/navbar/navbar';
import {
  EllipsisVertical,
  Luggage,
  Mail,
  MapPin,
  MessagesSquare,
  Users,
} from 'lucide-react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Container } from '@/app/components/common/container';
import { ProfileCompanyContent } from '.';

export function ProfileCompanyPage() {
  const image = (
    <div className="flex items-center justify-center rounded-full border-2 border-green-200 size-[100px] shrink-0 bg-background">
      <img
        src={toAbsoluteUrl('/media/brand-logos/duolingo.svg')}
        className="size-[50px]"
        alt="image"
      />
    </div>
  );

  return (
    <Fragment>
      <UserHero
        name="Duolingo"
        image={image}
        info={[
          { label: 'Public Company', icon: Luggage },
          { label: 'Pittsburgh, KS', icon: MapPin },
          { email: 'info@duolingo.com', icon: Mail },
        ]}
      />
      <Container>
        <Navbar>
          <PageMenu />
          <NavbarActions>
            <Button>
              <Users /> Follow
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
        <ProfileCompanyContent />
      </Container>
    </Fragment>
  );
}
