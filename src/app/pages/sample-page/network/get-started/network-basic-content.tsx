import {
  BadgeInfo,
  CalendarCheck,
  KeyRound,
  PieChart,
  UserSquare,
} from 'lucide-react';
import { IOptionsItems, Options } from './components';

export function NetworkGetStartedContent() {
  const items: IOptionsItems = [
    {
      icon: UserSquare,
      title: 'User Cards',
      description:
        'A Broad Perspective on Our Comprehensive Security Features and Policies.',
      sub: [
        {
          title: 'Mini Cards',
          path: 'network/user-cards/mini-cards',
        },
        {
          title: 'Team Members',
          path: 'account/members/team-members',
        },
        {
          title: 'Athor',
          path: 'network/user-cards/author',
        },
        {
          title: 'NFT',
          path: 'network/user-cards/nft',
        },
        {
          title: 'Social',
          path: 'network/user-cards/social',
        },
      ],
    },
    {
      icon: BadgeInfo,
      title: 'User Base',
      description:
        'A Broad Perspective on Our Comprehensive Security Features and Policies.',
      sub: [
        {
          title: 'Team Crew',
          path: 'network/user-cards/team-crew',
        },
        {
          title: 'App Roster',
          path: 'user-table/app-roster',
        },
        {
          title: 'Visitor',
          path: 'network/user-table/visitors',
        },
        {
          title: 'Authors',
          path: 'network/user-cards/author',
        },
        {
          title: 'SaaS Users',
          path: 'network/user-table/saas-users',
        },
        {
          title: 'Store Clients',
          path: 'network/user-table/store-clients',
        },
      ],
    },
    {
      icon: KeyRound,
      title: 'Cooperators',
      description:
        'A Broad Perspective on Our Comprehensive Security Features and Policies.',
      sub: [
        {
          title: 'Contacts',
          path: 'account/members/roles',
        },
        {
          title: 'Employee',
          path: 'account/members/team-members',
        },
        {
          title: 'Vendors',
          path: 'network/user-table/market-authors',
        },
        {
          title: 'Companies',
          path: 'public-profile/profiles/company',
        },
        {
          title: 'Service Agents',
          path: 'account/api-keys',
        },
        {
          title: 'Applicants',
          path: 'network/user-table/store-clients',
        },
      ],
    },
    {
      icon: PieChart,
      title: 'Community Engagement',
      description:
        'A Broad Perspective on Our Comprehensive Security Features and Policies.',
      sub: [
        {
          title: 'Contacts',
          path: 'account/members/roles',
        },
        {
          title: 'Employee',
          path: 'account/members/team-members',
        },
        {
          title: 'Vendors',
          path: 'network/user-table/market-authors',
        },
        {
          title: 'Companies',
          path: 'public-profile/profiles/company',
        },
        {
          title: 'Service Agents',
          path: 'account/api-keys',
        },
        {
          title: 'Applicants',
          path: 'network/user-table/store-clients',
        },
      ],
    },
    {
      icon: CalendarCheck,
      title: 'Donatiors',
      description:
        'A Broad Perspective on Our Comprehensive Security Features and Policies.',
      sub: [
        {
          title: 'Contacts',
          path: 'account/members/roles',
        },
        {
          title: 'Employee',
          path: 'account/members/team-members',
        },
        {
          title: 'Vendors',
          path: 'network/user-table/market-authors',
        },
        {
          title: 'Companies',
          path: 'public-profile/profiles/company',
        },
        {
          title: 'Service Agents',
          path: 'account/api-keys',
        },
        {
          title: 'Applicants',
          path: 'network/user-table/store-clients',
        },
      ],
    },
  ];

  return (
    <div className="grid gap-5 lg:gap-7.5">
      <Options items={items} />
    </div>
  );
}
