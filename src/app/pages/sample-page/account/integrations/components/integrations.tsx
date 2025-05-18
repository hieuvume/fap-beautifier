import { ReactNode } from 'react';
import { CardIntegration } from '@/app/partials/cards';
import { Switch } from '@/app/components/ui/switch';

interface IIntegrationsItem {
  logo: string;
  path: string;
  name: string;
  description: string;
  actions: ReactNode;
}
type IIntegrationsItems = Array<IIntegrationsItem>;

const Integrations = () => {
  const items: IIntegrationsItems = [
    {
      logo: 'jira.svg',
      path: '/account/billing/basic',
      name: 'Jira',
      description:
        'Project management for agile teams, tracking issues and tasks.',
      actions: <Switch id="size-sm" size="sm" defaultChecked />,
    },
    {
      logo: 'inferno.svg',
      path: '/account/billing/enterprise',
      name: 'Inferno',
      description: 'Ensures healthcare app compatibility with FHIR standards.',
      actions: <Switch id="size-sm" size="sm" />,
    },
    {
      logo: 'evernote.svg',
      path: '/account/billing/plans',
      name: 'Evernote',
      description:
        'Organizes personal and professional documents, ideas, tasks.',
      actions: <Switch id="size-sm" size="sm" defaultChecked />,
    },
    {
      logo: 'gitlab.svg',
      path: '/account/billing/history',
      name: 'Gitlab',
      description:
        'DevOps platform for code control, project management, CI/CD.',
      actions: <Switch id="size-sm" size="sm" defaultChecked />,
    },
    {
      logo: 'google-webdev.svg',
      path: '/account/security/get-started',
      name: 'Google webdev',
      description:
        'Tools for building quality web experiences, focusing on performance.',
      actions: <Switch id="size-sm" size="sm" defaultChecked />,
    },
    {
      logo: 'invision.svg',
      path: '/account/security/overview',
      name: 'Invision',
      description:
        'Digital design platform for prototyping and design workflow.',
      actions: <Switch id="size-sm" size="sm" />,
    },
    {
      logo: 'duolingo.svg',
      path: '/account/security/allowed-ip-addresses',
      name: 'Duolingo',
      description:
        'Interactive exercises for fun, effective language learning.',
      actions: <Switch id="size-sm" size="sm" />,
    },
    {
      logo: 'google-analytics-2.svg',
      path: '/account/security/privacy-settings',
      name: 'Google Analytics',
      description: 'Insights into website traffic and marketing effectiveness.',
      actions: <Switch id="size-sm" size="sm" />,
    },
  ];

  const renderItem = (item: IIntegrationsItem, index: number) => {
    return (
      <CardIntegration
        logo={item.logo}
        path={item.path}
        name={item.name}
        description={item.description}
        actions={item.actions}
        key={index}
      />
    );
  };

  return (
    <div id="integrations_cards">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7.5">
        {items.map((item, index) => {
          return renderItem(item, index);
        })}
      </div>
    </div>
  );
};

export { Integrations, type IIntegrationsItem, type IIntegrationsItems };
