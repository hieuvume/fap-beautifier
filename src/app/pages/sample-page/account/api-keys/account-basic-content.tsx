import { Fragment } from 'react';
import { Engage } from '@/app/partials/common/engage';
import { Faq } from '@/app/partials/common/faq';
import {
  HighlightedPosts,
  HighlightedPostsItems,
} from '@/app/partials/common/highlighted-posts';
import { Cloud, Expand, StickyNote, UsersRound } from 'lucide-react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { ExternalServicesManageApi } from '../home/settings-sidebar';
import { DoNotDistrub } from '../notifications';
import { ApiIntegrations, Webhooks } from './components';

export function AccountApiKeysContent() {
  const posts: HighlightedPostsItems = [
    {
      icon: Cloud,
      title: 'Streamlined Alerts Setup: Custom Notification Preferences',
      summary:
        'Easily integrate and manage your APIs with our suite of configuration tools. Gain access to extensive instructions, expert support, and in-depth documentation to keep your API interactions efficient and up-to-date..',
      path: '#',
    },
    {
      icon: Expand,
      title: 'Enhancing Connectivity: Tools for API Expansion',
      summary:
        'Leverage the full potential of your APIs with our advanced expansion tools. We provide all the necessary resources for easy setup, information exchange, and maintaining high-performance API connectivity.',
      path: '#',
    },
    {
      icon: UsersRound,
      title: 'Organizing Team Data: Efficient Roster Solutions',
      summary:
        'Organize your API data more with our detailed interface solutions. From quick setup guides to management, our tools are designed to streamline every step of your API data organization.',
      path: '#',
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <ExternalServicesManageApi title="Public API Key" switch={true} />
          <ApiIntegrations />
          <Webhooks />
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
              url: '#',
            }}
          />
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <DoNotDistrub
            title="Project API keys"
            icon={<StickyNote className="text-input" size={20} />}
            text="Client Docs"
          />
          <HighlightedPosts posts={posts} />
        </div>
      </div>
    </div>
  );
}
