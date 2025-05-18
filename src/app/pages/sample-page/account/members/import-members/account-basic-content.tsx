import { Engage } from '@/app/partials/common/engage';
import { Faq } from '@/app/partials/common/faq';
import {
  HighlightedPosts,
  HighlightedPostsItems,
} from '@/app/partials/common/highlighted-posts';
import { LogOut, MousePointer, Users } from 'lucide-react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Import } from './components';

export function AccountImportMembersContent() {
  const posts: HighlightedPostsItems = [
    {
      icon: Users,
      title: 'Streamlining Member Integration: Import Tools and Resources',
      summary:
        'Dive into seamless member onboarding with our robust import tools. Leverage detailed walkthroughs, practical resources, and support to simplify the process.',
      path: '#',
    },
    {
      icon: LogOut,
      title: 'Simplifying Roster Management: Bulk Upload Features',
      summary:
        'Manage your community efficiently with our bulk member import feature. Find step-by-step instructions, helpful tips, and best practices for a smooth update.',
      path: '#',
    },
    {
      icon: MousePointer,
      title: 'Effortless Member Enrollment: Importation and Setup',
      summary:
        'Initiate a hassle-free member import with our guided tools. Access comprehensive tutorials, insightful advice, and technical documentation for effortless setup.',
      path: '#',
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <Import />
          <Faq />
          <Engage
            title="Contact Support"
            description="Need assistance? Contact our support team for prompt, personalized help your queries & concerns."
            image={
              <>
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
              </>
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
