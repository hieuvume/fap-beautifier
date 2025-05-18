import { Fragment } from 'react';
import { Engage } from '@/app/partials/common/engage';
import { Faq } from '@/app/partials/common/faq';
import {
  HighlightedPosts,
  HighlightedPostsItems,
} from '@/app/partials/common/highlighted-posts';
import { BookUser, TableProperties, UsersRound } from 'lucide-react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { ConnectedProfiles, Members, Seats, TeamInfo } from './components';

export function AccountTeamInfoContent() {
  const posts: HighlightedPostsItems = [
    {
      icon: BookUser,
      title: 'Centralizing Team Profiles: Management and Directory Tools',
      summary:
        'Centralize your team information with our management tools. Access detailed instructions, expert advice, and technical documentation to maintain an up-to-date team directory.',
      path: '#',
    },
    {
      icon: UsersRound,
      title: 'Building a Cohesive Team: Resources for Profile Compilation',
      summary:
        'Craft a unified team environment by compiling profiles in one place. Utilize our resources for easy information gathering and profile management.',
      path: '#',
    },
    {
      icon: TableProperties,
      title: 'Organizing Team Data: Efficient Roster Solutions',
      summary:
        'Organize your team details with our efficient roster solutions. From quick imports to detailed management, our resources guide you through every step.',
      path: '#',
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <TeamInfo />
          <Members />
          <Faq />
          <Engage
            title="Questions ?"
            description="Visit our Help Center for detailed assistance on billing, payments, and subscriptions."
            image={
              <Fragment>
                <img
                  src={toAbsoluteUrl('/media/illustrations/29.svg')}
                  className="dark:hidden max-h-44"
                  alt="image"
                />
                <img
                  src={toAbsoluteUrl('/media/illustrations/29-dark.svg')}
                  className="light:hidden max-h-44"
                  alt="image"
                />
              </Fragment>
            }
            more={{
              title: 'Go to Help Center',
              url: '',
            }}
          />
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <Seats />
          <ConnectedProfiles />
          <HighlightedPosts posts={posts} />
        </div>
      </div>
    </div>
  );
}
