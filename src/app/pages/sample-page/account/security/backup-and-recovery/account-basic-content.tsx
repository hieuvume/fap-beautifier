import { Faq } from '@/app/partials/common/faq';
import {
  HighlightedPosts,
  HighlightedPostsItems,
} from '@/app/partials/common/highlighted-posts';
import { Book, Database } from 'lucide-react';
import { Backup, BackupSettings } from './components';

export function AccountBackupAndRecoveryContent() {
  const posts: HighlightedPostsItems = [
    {
      icon: Book,
      title: 'Securing Data Integrity: Backup Recovery Systems',
      summary:
        'Safeguard your data with our resilient backup recovery solutions. Detailed guides and expert strategies provide the roadmap to robust data protection and swift recovery.',
      path: '#',
    },
    {
      icon: Database,
      title: 'Restoration Assurance: Proactive Backup Resources',
      summary:
        'Prepare for the unexpected with proactive backup plans. Access our extensive resources for establishing a reliable recovery protocol, ensuring continuity and peace of mind.',
      path: '#',
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <Backup />
          <Faq />
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <BackupSettings />
          <HighlightedPosts posts={posts} />
        </div>
      </div>
    </div>
  );
}
