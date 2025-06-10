import { Fragment } from 'react';
import { Engage } from '@/app/partials/common/engage';
import { Faq } from '@/app/partials/common/faq';
import {
  HighlightedPosts,
  HighlightedPostsItems,
} from '@/app/partials/common/highlighted-posts';
import { ShieldCheck, ToggleRight, UserCog } from 'lucide-react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Members } from '../permissions-toggle/components/members';
import { PermissionsCheck } from './components';

export function AccountPermissionsCheckContent() {
  const posts: HighlightedPostsItems = [
    {
      icon: UserCog,
      title: 'Optimizing Team Coordination: Role Assignment Tools',
      summary:
        'Empower your team with dynamic role assignment capabilities. Utilize our intuitive tools to assign and manage user permissions effectively. Explore resources and best practices to maximize team efficiency.',
      path: '#',
    },
    {
      icon: ToggleRight,
      title: 'Refining Access Control: Permissions Customization',
      summary:
        "Tailor user experiences with customizable permission settings. Our detailed guides and resources provide streamlined processes for managing access levels. Ensure secure and precise control over your workspace's functionalities.",
      path: '#',
    },
    {
      icon: ShieldCheck,
      title: 'Enhanced Security Management: Granular Permission Settings',
      summary:
        'Fortify your workspace with enhanced permission controls. Our advanced settings allow for granular access management, ensuring each team member has the appropriate level of access. Benefit from our comprehensive security protocols and guidance.',
      path: '#',
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <PermissionsCheck />
          <Members title="Role Members" />
          <Faq />
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
              url: '',
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
