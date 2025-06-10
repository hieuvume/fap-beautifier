import { useState } from 'react';
import { CardProject, CardProjectRow } from '@/app/partials/cards';
import { LayoutGrid, List } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/app/components/ui/toggle-group';

interface IProjects2Item {
  logo: string;
  name: string;
  description: string;
  startDate?: string;
  endDate?: string;
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
  progress: {
    variant: string;
    value: number;
  };
  team: {
    size?: string;
    group: Array<{ filename?: string; variant?: string; fallback?: string }>;
    more?: {
      variant?: string;
      number?: number;
    };
  };
}

type IProjects2Items = Array<IProjects2Item>;

const Projects2 = () => {
  const [activeView, setActiveView] = useState('cards');

  const projects: IProjects2Items = [
    {
      logo: 'plurk.svg',
      name: 'Phoenix SaaS',
      description: 'Real-time photo sharing app',
      startDate: 'Mar 06',
      endDate: 'Dec 21',
      status: {
        label: 'In Progress',
        variant: 'primary',
      },
      progress: {
        variant: 'bg-primary',
        value: 55,
      },
      team: {
        size: 'size-[30px]',
        group: [
          { filename: '300-4.png' },
          { filename: '300-2.png' },
          {
            fallback: 'S',
            variant: 'text-primary-foreground ring-background bg-primary',
          },
        ],
      },
    },
    {
      logo: 'telegram.svg',
      name: 'Radiant Wave',
      description: 'Short-term accommodation marketplace',
      startDate: 'Mar 09',
      endDate: 'Dec 23',
      status: {
        label: 'Completed',
        variant: 'success',
      },
      progress: {
        variant: 'bg-green-500',
        value: 100,
      },
      team: {
        size: 'size-[30px]',
        group: [{ filename: '300-24.png' }, { filename: '300-7.png' }],
      },
    },
    {
      logo: 'kickstarter.svg',
      name: 'Dreamweaver',
      description: 'Social media photo sharing',
      startDate: 'Mar 05',
      endDate: 'Dec 12',
      status: {
        label: 'Upcoming',
        variant: 'secondary',
      },
      progress: {
        variant: 'bg-input',
        value: 100,
      },
      team: {
        size: 'size-[30px]',
        group: [
          { filename: '300-21.png' },
          { filename: '300-1.png' },
          { filename: '300-2.png' },
        ],
        more: {
          number: 10,
          variant: 'text-white ring-background bg-green-500',
        },
      },
    },
    {
      logo: 'quickbooks.svg',
      name: 'Horizon Quest',
      description: 'Team communication and collaboration',
      startDate: 'Mar 03',
      endDate: 'Dec 11',
      status: {
        label: 'In Progress',
        variant: 'primary',
      },
      progress: {
        variant: 'bg-primary',
        value: 19,
      },
      team: {
        size: 'size-[30px]',
        group: [
          { filename: '300-1.png' },
          { filename: '300-2.png' },
          {
            fallback: 'M',
            variant:
              'text-destructive-foreground ring-background bg-destructive',
          },
        ],
      },
    },
    {
      logo: 'google-analytics.svg',
      name: 'Golden Gate Analytics',
      description: 'Note-taking and organization app',
      startDate: 'Mar 22',
      endDate: 'Dec 14',
      status: {
        label: 'Upcoming',
        variant: 'secondary',
      },
      progress: {
        variant: 'bg-input',
        value: 100,
      },
      team: {
        size: 'size-[30px]',
        group: [
          { filename: '300-5.png' },
          { filename: '300-17.png' },
          { filename: '300-16.png' },
        ],
      },
    },
    {
      logo: 'google-webdev.svg',
      name: 'Celestial SaaS',
      description: 'CRM App application to HR efficienty',
      startDate: 'Mar 14',
      endDate: 'Dec 25',
      status: {
        label: 'Completed',
        variant: 'success',
      },
      progress: {
        variant: 'bg-green-500',
        value: 100,
      },
      team: {
        size: 'size-[30px]',
        group: [
          { filename: '300-6.png' },
          { filename: '300-23.png' },
          { filename: '300-12.png' },
        ],
        more: {
          number: 10,
          variant: 'text-primary-foreground ring-background bg-primary',
        },
      },
    },
    {
      logo: 'figma.svg',
      name: 'Nexus Design System',
      description: 'Online discussion and forum platform',
      startDate: 'Mar 17',
      endDate: 'Dec 08',
      status: {
        label: 'Upcoming',
        variant: 'secondary',
      },
      progress: {
        variant: 'bg-input',
        value: 100,
      },
      team: {
        size: 'size-[30px]',
        group: [
          { filename: '300-14.png' },
          { filename: '300-3.png' },
          { filename: '300-19.png' },
          { filename: '300-9.png' },
        ],
      },
    },
    {
      logo: 'btcchina.svg',
      name: 'Neptune App',
      description: 'Team messaging and collaboration',
      startDate: 'Mar 09',
      endDate: 'Dec 23',
      status: {
        label: 'In Progress',
        variant: 'primary',
      },
      progress: {
        variant: 'bg-primary',
        value: 35,
      },
      team: {
        size: 'size-[30px]',
        group: [
          { filename: '300-21.png' },
          { filename: '300-32.png' },
          { filename: '300-2.png' },
        ],
        more: {
          number: 1,
          variant: 'text-white ring-background bg-green-500',
        },
      },
    },
    {
      logo: 'patientory.svg',
      name: 'SparkleTech',
      description: 'Meditation and relaxation app',
      startDate: 'Mar 14',
      endDate: 'Dec 21',
      status: {
        label: 'Upcoming',
        variant: 'secondary',
      },
      progress: {
        variant: 'bg-input',
        value: 100,
      },
      team: {
        size: 'size-[30px]',
        group: [
          { filename: '300-4.png' },
          { filename: '300-2.png' },
          {
            fallback: 'K',
            variant: 'text-white ring-background bg-green-500',
          },
        ],
      },
    },
    {
      logo: 'jira.svg',
      name: 'EmberX CRM',
      description: 'Commission-free stock trading',
      startDate: 'Mar 01',
      endDate: 'Dec 13',
      status: {
        label: 'Completed',
        variant: 'success',
      },
      progress: {
        variant: 'bg-green-500',
        value: 100,
      },
      team: {
        size: 'size-[30px]',
        group: [
          { filename: '300-12.png' },
          { filename: '300-20.png' },
          { filename: '300-3.png' },
        ],
        more: {
          number: 5,
          variant: 'text-white ring-background bg-green-500',
        },
      },
    },
    {
      logo: 'plastic-scm.svg',
      name: 'LunaLink',
      description: 'Meditation and relaxation app',
      startDate: 'Mar 14',
      endDate: 'Dec 21',
      status: {
        label: 'Upcoming',
        variant: 'secondary',
      },
      progress: {
        variant: 'bg-input',
        value: 100,
      },
      team: {
        size: 'size-[30px]',
        group: [{ filename: '300-16.png' }],
      },
    },
    {
      logo: 'perrier.svg',
      name: 'TerraCrest App',
      description: 'Video conferencing software',
      startDate: 'Mar 22',
      endDate: 'Dec 28',
      status: {
        label: 'In Progress',
        variant: 'primary',
      },
      progress: {
        variant: 'bg-primary',
        value: 55,
      },
      team: {
        size: 'size-[30px]',
        group: [
          { filename: '300-4.png' },
          { filename: '300-9.png' },
          {
            fallback: 'F',
            variant: 'text-primary-foreground ring-background bg-primary',
          },
        ],
      },
    },
  ];

  const renderProject = (project: IProjects2Item, index: number) => {
    return (
      <CardProject
        logo={project.logo}
        name={project.name}
        description={project.description}
        startDate={project.startDate}
        endDate={project.endDate}
        status={project.status}
        progress={project.progress}
        team={project.team}
        key={index}
      />
    );
  };

  const renderItem = (item: IProjects2Item, index: number) => {
    return (
      <CardProjectRow
        logo={item.logo}
        name={item.name}
        description={item.description}
        status={item.status}
        progress={item.progress}
        team={item.team}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7.5">
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

export { Projects2, type IProjects2Item, type IProjects2Items };
