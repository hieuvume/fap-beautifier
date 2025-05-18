import { useState } from 'react';
import { CardProjectExtended, CardProjectExtendedRow } from '@/app/partials/cards';
import { LayoutGrid, List } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/app/components/ui/toggle-group';

interface IProjectsItem {
  status: {
    variant?:
      | 'primary'
      | 'mono'
      | 'destructive'
      | 'secondary'
      | 'info'
      | 'success'
      | 'warning'
      | null
      | undefined;
    label: string;
  };
  logo: string;
  title: string;
  description: string;
  team: {
    size: string;
    group: Array<{ filename?: string; variant?: string; fallback?: string }>;
  };
  statistics: Array<{ total: string; description: string }>;
  progress: {
    variant: string;
    value: number;
  };
}

type IProjectsItems = Array<IProjectsItem>;

const Projects = () => {
  const [activeView, setActiveView] = useState('cards');

  const projects: IProjectsItems = [
    {
      status: {
        variant: 'primary',
        label: 'In Progress',
      },
      logo: 'office.svg',
      title: 'Phoenix SaaS',
      description: 'Cloud storage and file sharing',
      team: {
        size: 'size-7',
        group: [
          { filename: '300-4.png' },
          { filename: '300-1.png' },
          { filename: '300-2.png' },
          {
            fallback: 'S',
            variant: 'text-primary-foreground ring-background bg-primary',
          },
        ],
      },
      statistics: [
        {
          total: '1-3 months',
          description: 'Duration',
        },
        {
          total: 'Flexible',
          description: 'Location',
        },
        {
          total: '$65 hour',
          description: 'Rate',
        },
      ],
      progress: {
        variant: 'bg-primary',
        value: 60,
      },
    },
    {
      status: {
        variant: 'secondary',
        label: 'Upcoming',
      },
      logo: 'btcchina.svg',
      title: 'Golden Gate Analytics',
      description: 'Team communication and collaboration tool',
      team: {
        size: 'size-7',
        group: [
          { filename: '300-5.png' },
          { filename: '300-17.png' },
          { filename: '300-16.png' },
        ],
      },
      statistics: [
        {
          total: '2-4 months',
          description: 'Duration',
        },
        {
          total: 'Global',
          description: 'Location',
        },
        {
          total: '$25 hour',
          description: 'Rate',
        },
      ],
      progress: {
        variant: 'bg-primary',
        value: 20,
      },
    },
    {
      status: {
        variant: 'secondary',
        label: 'Upcoming',
      },
      logo: 'jira.svg',
      title: 'SparkleTech',
      description: 'Short-term accommodation marketplace',
      team: {
        size: 'size-7',
        group: [{ filename: '300-19.png' }, { filename: '300-9.png' }],
      },
      statistics: [
        {
          total: '3-5 months',
          description: 'Duration',
        },
        {
          total: 'Remote',
          description: 'Location',
        },
        {
          total: '$16 hour',
          description: 'Rate',
        },
      ],
      progress: {
        variant: 'bg-primary',
        value: 25,
      },
    },
    {
      status: {
        variant: 'success',
        label: 'Completed',
      },
      logo: 'equacoin.svg',
      title: 'Nexus Design System',
      description: 'Visual discovery and inspiration',
      team: {
        size: 'size-7',
        group: [
          { filename: '300-5.png' },
          { filename: '300-11.png' },
          {
            fallback: 'W',
            variant: 'text-white ring-background bg-yellow-400',
          },
        ],
      },
      statistics: [
        {
          total: '2-6 months',
          description: 'Duration',
        },
        {
          total: 'Onsite',
          description: 'Location',
        },
        {
          total: '$45 hour',
          description: 'Rate',
        },
      ],
      progress: {
        variant: 'bg-green-500',
        value: 100,
      },
    },
    {
      status: {
        variant: 'success',
        label: 'Completed',
      },
      logo: 'slack.svg',
      title: 'Neptune App',
      description: 'Peer-to-peer mobile payment service',
      team: {
        size: 'size-7',
        group: [
          { filename: '300-17.png' },
          { filename: '300-1.png' },
          { filename: '300-19.png' },
          {
            fallback: 'P',
            variant: 'text-white ring-background bg-violet-500',
          },
        ],
      },
      statistics: [
        {
          total: '3-8 months',
          description: 'Duration',
        },
        {
          total: 'Flexible',
          description: 'Location',
        },
        {
          total: '$34 hour',
          description: 'Rate',
        },
      ],
      progress: {
        variant: 'bg-green-500',
        value: 100,
      },
    },
    {
      status: {
        variant: 'primary',
        label: 'In Progress',
      },
      logo: 'grab.svg',
      title: 'Radiant Wave',
      description: 'Team communication and collaboration',
      team: {
        size: 'size-7',
        group: [
          { filename: '300-24.png' },
          { filename: '300-7.png' },
          { filename: '300-9.png' },
          {
            fallback: 'S',
            variant: 'text-primary-foreground ring-background bg-primary',
          },
        ],
      },
      statistics: [
        {
          total: '2-5 months',
          description: 'Duration',
        },
        {
          total: 'Remote',
          description: 'Location',
        },
        {
          total: '$33 hour',
          description: 'Rate',
        },
      ],
      progress: {
        variant: 'bg-primary',
        value: 20,
      },
    },
  ];

  const renderProject = (project: IProjectsItem, index: number) => {
    return (
      <CardProjectExtended
        status={project.status}
        logo={project.logo}
        title={project.title}
        description={project.description}
        team={project.team}
        statistics={project.statistics}
        progress={project.progress}
        url="#"
        key={index}
      />
    );
  };

  const renderItem = (item: IProjectsItem, index: number) => {
    return (
      <CardProjectExtendedRow
        status={item.status}
        logo={item.logo}
        title={item.title}
        description={item.description}
        team={item.team}
        statistics={item.statistics}
        url="#"
        key={index}
      />
    );
  };

  return (
    <div className="flex flex-col items-stretch gap-5 lg:gap-7.5">
      <div className="flex flex-wrap items-center gap-5 justify-between">
        <h3 className="text-lg text-mono font-semibold">
          {projects.length} Projects
        </h3>
        <ToggleGroup
          type="single"
          variant="outline"
          value={activeView}
          onValueChange={(value) => {
            if (value) setActiveView(value);
          }}
        >
          <ToggleGroupItem value="cards">
            <LayoutGrid size={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value="list">
            <List size={16} />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      {activeView === 'cards' && (
        <div id="projects_cards">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
            {projects.map((project, index) => {
              return renderProject(project, index);
            })}
          </div>
          <div className="flex grow justify-center pt-5 lg:pt-7.5">
            <Button mode="link" underlined="dashed" asChild>
              <Link to="#">Show more projects</Link>
            </Button>
          </div>
        </div>
      )}
      {activeView === 'list' && (
        <div id="projects_list">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            {projects.map((item, index) => {
              return renderItem(item, index);
            })}
          </div>
          <div className="flex grow justify-center pt-5 lg:pt-7.5">
            <Button mode="link" underlined="dashed" asChild>
              <Link to="#">Show more projects</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export { Projects, type IProjectsItem, type IProjectsItems };
