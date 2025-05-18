import React from 'react';
import { CardTournament } from '@/app/partials/cards';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';

interface ITournamentsItem {
  image: string;
  logo: string;
  title: string;
  time: string;
  labels: string[];
  progress: {
    variant: string;
    value: number;
    slotNumber: number;
    leftNumber: number;
  };
}
type ITournamentsItems = Array<ITournamentsItem>;

const Tournaments = () => {
  const items: ITournamentsItems = [
    {
      image: '9.jpg',
      logo: 'clusterhq.svg',
      title: 'CyberStorm Cup',
      time: 'WED, FEB 16, 12:30 CET',
      labels: ['CS 2', 'PUBG', 'RAID', 'COD', 'Fortnite'],
      progress: {
        variant: 'progress-primary',
        value: 80,
        slotNumber: 76,
        leftNumber: 9,
      },
    },
    {
      image: '33.jpg',
      logo: 'jira.svg',
      title: 'PixelPulse Showdown',
      time: 'MON, MAR 2, 16:00 CET',
      labels: ['TERA', 'MK11', 'PUBG', 'HOTS', 'R6'],
      progress: {
        variant: 'progress-primary',
        value: 20,
        slotNumber: 520,
        leftNumber: 27,
      },
    },
    {
      image: '34.jpg',
      logo: 'xostme-ltd.svg',
      title: 'NexusRift Masters',
      time: 'SUN, APR 29, 11:00 CET',
      labels: ['HS', 'Valorant', 'Dota 2', 'PUBG', 'COD'],
      progress: {
        variant: 'progress-primary',
        value: 42,
        slotNumber: 18,
        leftNumber: 21,
      },
    },
    {
      image: '11.jpg',
      logo: 'tezos.svg',
      title: 'CyberStorm Cup',
      time: 'WED, FEB 16, 12:30 CET',
      labels: ['CS 2', 'PUBG', 'RAID', 'COD', 'Fortnite'],
      progress: {
        variant: 'progress-primary',
        value: 80,
        slotNumber: 98,
        leftNumber: 44,
      },
    },
    {
      image: '12.jpg',
      logo: 'paccion.svg',
      title: 'PixelPulse Showdown',
      time: 'MON, MAR 2, 16:00 CET',
      labels: ['TERA', 'MK11', 'PUBG', 'HOTS', 'R6'],
      progress: {
        variant: 'progress-primary',
        value: 60,
        slotNumber: 324,
        leftNumber: 15,
      },
    },
  ];

  const renderItems = (item: ITournamentsItem, index: number) => {
    return (
      <React.Fragment key={index}>
        <CardTournament
          image={item.image}
          logo={item.logo}
          title={item.title}
          time={item.time}
          labels={item.labels}
          progress={item.progress}
        />
      </React.Fragment>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Floyd's Tournaments</CardTitle>
        <Button mode="link" underlined="dashed" asChild>
          <Link to="#">View All</Link>
        </Button>
      </CardHeader>
      <CardContent className="p-5 lg:p-7.5 lg:pb-7">
        <ScrollArea>
          <div className="flex flex-no-wrap gap-5">
            {items.map((item, index) => {
              return renderItems(item, index);
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export { Tournaments, type ITournamentsItem, type ITournamentsItems };
