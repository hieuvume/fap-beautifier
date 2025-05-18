import { Fragment } from 'react';
import { Engage } from '@/app/partials/common/engage';
import {
  HighlightedPosts,
  HighlightedPostsItems,
} from '@/app/partials/common/highlighted-posts';
import { BookUser, MessageCirclePlus, Users } from 'lucide-react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { InviteWithLink } from '../members/team-members/components/invite-with-link';
import { InvitePeople, Invites } from './components';

export function AccountInviteAFriendContent() {
  const posts: HighlightedPostsItems = [
    {
      icon: Users,
      title: 'Expand Your Network: Seamless Friend Invitation System',
      summary:
        'Invite colleagues to join and collaborate with ease using our streamlined invitation process. Share the experience and grow your professional network effortlessly.',
      path: '#',
    },
    {
      icon: MessageCirclePlus,
      title: 'Collaboration Growth: Refer Peers with Custom Invites',
      summary:
        "Enhance your team's capabilities by inviting peers directly through personalized invitations. Strengthen your projects by collaborating with trusted professionals.",
      path: '#',
    },
    {
      icon: BookUser,
      title: 'Team Building: Easy Referral of Professional Contacts',
      summary:
        "Strengthen your team's dynamics by inviting industry friends to collaborate. Use our intuitive referral system to bring in expertise and foster collaboration.",
      path: '#',
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <InvitePeople />
          <Invites />
          <InviteWithLink />
          <Engage
            title="Contact Support"
            description="Need assistance? Contact our support team for prompt, personalized help your queries & concerns."
            image={
              <Fragment>
                <img
                  src={toAbsoluteUrl('/media/illustrations/31.svg')}
                  className="dark:hidden max-h-[150px]"
                  alt="image"
                />
                <img
                  src={toAbsoluteUrl('/media/illustrations/31-dark.svg')}
                  className="light:hidden max-h-[150px]"
                  alt="image"
                />
              </Fragment>
            }
            more={{
              title: 'Contact Support',
              url: 'https://keenthemes.com/contact',
            }}
          />
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <HighlightedPosts posts={posts} />
        </div>
      </div>
    </div>
  );
}
