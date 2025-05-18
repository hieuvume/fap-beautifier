import { ReactNode, useState } from 'react';
import { DropdownMenu4 } from '@/app/partials/dropdown-menu/dropdown-menu-4';
import {
  Badge,
  Bolt,
  Captions,
  CircleUserRound,
  Home,
  IdCard,
  Search,
  Settings,
  SquareCode,
  UserRoundPen,
  UserRoundPlus,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/ui/dialog';
import { Input } from '@/app/components/ui/input';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import {
  SearchDocs,
  SearchDocsItem,
  SearchEmpty,
  SearchIntegrations,
  SearchIntegrationsItem,
  SearchMixed,
  SearchNoResults,
  SearchSettings,
  SearchSettingsItem,
  SearchUsers,
  SearchUsersItem,
} from './';

export function SearchDialog({ trigger }: { trigger: ReactNode }) {
  const [searchInput, setSearchInput] = useState('');

  const mixedSettingsItems: SearchSettingsItem[] = [
    { icon: IdCard, info: 'Public Profile' },
    { icon: Settings, info: 'My Account' },
    { icon: SquareCode, info: 'Devs Forum' },
  ];

  const mixedUsersItems: SearchUsersItem[] = [
    {
      avatar: '300-3.png',
      name: 'Tyler Hero',
      email: 'tyler.hero@gmail.com',
      label: 'In Office',
      color: 'success',
    },
    {
      avatar: '300-1.png',
      name: 'Esther Howard',
      email: 'esther.howard@gmail.com',
      label: 'On Leave',
      color: 'destructive',
    },
  ];

  const mixedIntegrationsItems: SearchIntegrationsItem[] = [
    {
      logo: 'jira.svg',
      name: 'Jira',
      description: 'Project management',
      team: [
        { filename: '300-4.png', variant: 'size-6' },
        { filename: '300-1.png', variant: 'size-6' },
        { filename: '300-2.png', variant: 'size-6' },
        {
          fallback: '+3',
          variant: 'text-white size-6 ring-background bg-green-500',
        },
      ],
    },
    {
      logo: 'inferno.svg',
      name: 'Inferno',
      description: 'Real-time photo sharing app',
      team: [
        { filename: '300-14.png', variant: 'size-6' },
        { filename: '300-12.png', variant: 'size-6' },
        { filename: '300-9.png', variant: 'size-6' },
      ],
    },
  ];

  const docsItems: SearchDocsItem[] = [
    {
      image: 'pdf.svg',
      desc: 'Project-pitch.pdf',
      date: '4.7 MB 26 Sep 2024 3:20 PM',
    },
    {
      image: 'doc.svg',
      desc: 'Report-v1.docx',
      date: '2.3 MB 1 Oct 2024 12:00 PM',
    },
    {
      image: 'javascript.svg',
      desc: 'Framework-App.js',
      date: '0.8 MB 17 Oct 2024 6:46 PM',
    },
    {
      image: 'ai.svg',
      desc: 'Framework-App.js',
      date: '0.8 MB 17 Oct 2024 6:46 PM',
    },
    {
      image: 'php.svg',
      desc: 'appController.js',
      date: '0.1 MB 21 Nov 2024 3:20 PM',
    },
  ];

  const settingsItems = [
    {
      title: 'Shortcuts',
      children: [
        { icon: Home, info: 'Go to Dashboard' },
        { icon: Badge, info: 'Public Profile' },
        { icon: CircleUserRound, info: 'My Profile' },
        { icon: Settings, info: 'My Account' },
        { icon: SquareCode, info: 'Devs Forum' },
      ],
    },
    {
      title: 'Actions',
      children: [
        { icon: UserRoundPlus, info: 'Create User' },
        { icon: UserRoundPen, info: 'Create Team' },
        { icon: Captions, info: 'Change Plan' },
        { icon: Bolt, info: 'Setup Branding' },
      ],
    },
  ];

  const integrationsItems = [
    {
      logo: 'jira.svg',
      name: 'Jira',
      description: 'Project management',
      team: [
        { filename: '300-4.png', variant: 'size-6' },
        { filename: '300-1.png', variant: 'size-6' },
        { filename: '300-2.png', variant: 'size-6' },
        {
          fallback: '+3',
          variant: 'text-white size-6 ring-background bg-green-500',
        },
      ],
    },
    {
      logo: 'inferno.svg',
      name: 'Inferno',
      description: 'Real-time photo sharing app',
      team: [
        { filename: '300-14.png', variant: 'size-6' },
        { filename: '300-12.png', variant: 'size-6' },
        { filename: '300-9.png', variant: 'size-6' },
      ],
    },
    {
      logo: 'evernote.svg',
      name: 'Evernote',
      description: 'Notes management app',
      team: [
        { filename: '300-6.png', variant: 'size-6' },
        { filename: '300-3.png', variant: 'size-6' },
        { filename: '300-1.png', variant: 'size-6' },
        { filename: '300-8.png', variant: 'size-6' },
      ],
    },
    {
      logo: 'gitlab.svg',
      name: 'Gitlab',
      description: 'Version control and CI/CD platform',
      team: [
        { filename: '300-18.png', variant: 'size-6' },
        { filename: '300-17.png', variant: 'size-6' },
      ],
    },
    {
      logo: 'google-webdev.svg',
      name: 'Google Webdev',
      description: 'Building web experiences',
      team: [
        { filename: '300-14.png', variant: 'size-6' },
        { filename: '300-20.png', variant: 'size-6' },
        { filename: '300-21.png', variant: 'size-6' },
      ],
    },
  ];

  const usersItems: SearchUsersItem[] = [
    {
      avatar: '300-3.png',
      name: 'Tyler Hero',
      email: 'tyler.hero@gmail.com',
      label: 'In Office',
      color: 'success',
    },
    {
      avatar: '300-1.png',
      name: 'Esther Howard',
      email: 'esther.howard@gmail.com',
      label: 'On Leave',
      color: 'destructive',
    },
    {
      avatar: '300-11.png',
      name: 'Jacob Jones',
      email: 'jacob.jones@gmail.com',
      label: 'Remote',
      color: 'primary',
    },
    {
      avatar: '300-5.png',
      name: 'Leslie Alexander',
      email: 'leslie.alexander@gmail.com',
      label: 'In Office',
      color: 'success',
    },
    {
      avatar: '300-2.png',
      name: 'Cody Fisher',
      email: 'cody.fisher@gmail.com',
      label: 'Remote',
      color: 'primary',
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="lg:max-w-[600px] lg:top-[15%] lg:translate-y-0 p-0 [&_[data-slot=dialog-close]]:top-5.5 [&_[data-slot=dialog-close]]:end-5.5">
        <DialogHeader className="px-4 py-1 mb-1">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
          <div className="relative">
            <Search className="absolute top-1/2 -translate-y-1/2 size-4" />
            <Input
              type="text"
              name="query"
              value={searchInput}
              className="ps-6 outline-none! ring-0! shadow-none! border-0"
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search..."
            />
          </div>
        </DialogHeader>
        <DialogBody className="p-0 pb-5">
          <Tabs defaultValue="1">
            <TabsList className="justify-between px-5 mb-2.5" variant="line">
              <div className="flex items-center gap-5">
                <TabsTrigger value="1">Mixed</TabsTrigger>
                <TabsTrigger value="2">Settings</TabsTrigger>
                <TabsTrigger value="3">Integrations</TabsTrigger>
                <TabsTrigger value="4">Users</TabsTrigger>
                <TabsTrigger value="5">Docs</TabsTrigger>
                <TabsTrigger value="6">Empty</TabsTrigger>
                <TabsTrigger value="7">No Results</TabsTrigger>
              </div>

              <DropdownMenu4
                trigger={
                  <Button
                    variant="ghost"
                    mode="icon"
                    size="sm"
                    className="mb-1.5 -me-2"
                  >
                    <Settings />
                  </Button>
                }
              />
            </TabsList>
            <ScrollArea className="h-[480px]">
              <TabsContent value="1">
                <SearchMixed
                  settings={mixedSettingsItems}
                  integrations={mixedIntegrationsItems}
                  users={mixedUsersItems}
                />
              </TabsContent>
              <TabsContent value="2">
                <SearchSettings items={settingsItems} />
              </TabsContent>
              <TabsContent value="3">
                <SearchIntegrations items={integrationsItems} more={true} />
              </TabsContent>
              <TabsContent value="4">
                <SearchUsers items={usersItems} more={true} />
              </TabsContent>
              <TabsContent value="5">
                <SearchDocs items={docsItems} />
              </TabsContent>
              <TabsContent value="6">
                <SearchEmpty />
              </TabsContent>
              <TabsContent value="7">
                <SearchNoResults />
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}
