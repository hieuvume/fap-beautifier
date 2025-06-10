import {
  HighlightedPosts,
  HighlightedPostsItems,
} from '@/app/partials/common/highlighted-posts';
import { BookCopy, ChartNoAxesCombined, Compass } from 'lucide-react';
import {
  AccountSettings,
  Branding,
  DataImport,
  GeneralInfo,
  Members,
} from './components';

export function AccountCompanyProfileContent() {
  const posts: HighlightedPostsItems = [
    {
      icon: BookCopy,
      title: 'User Guidelines for a Safe and Respectful Workspace',
      summary:
        'Understand the importance of safety and respect in our work environment through our user guidelines.',
      path: '#',
    },
    {
      icon: Compass,
      title: 'Comprehensive Guide to Navigating Our Digital Platform',
      summary:
        'A detailed walkthrough to help you understand and use our digital platform for maximum efficiency.',
      path: '#',
    },
    {
      icon: ChartNoAxesCombined,
      title: "Stay Updated with Platform's Latest Features and Improvements",
      summary:
        'Keep abreast of the newest enhancements and features on our platform to enhance your user experience.',
      path: '#',
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <GeneralInfo />
          <AccountSettings />
          <Branding />
          <Members url="#" />
          <DataImport />
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
