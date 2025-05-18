import {
  RiFacebookCircleLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from '@remixicon/react';
import { Dribbble } from 'lucide-react';
import { INetworkItems, Network } from '../company';
import { IUsersItems, Users } from '../creator';
import { CommunityBadges } from '../default';
import {
  About,
  Activity,
  FavoriteGames,
  IStatisticsItems,
  NowPlaying,
  Statistics,
  Tournaments,
} from './components';

export function ProfileGamerContent() {
  const details: IStatisticsItems = [
    { image: 'online-game.svg', number: '164', label: 'Tournaments' },
    { image: 'gamer-coin.svg', number: '73.2%', label: 'Game Win-rate' },
    { image: 'gamer-diamond.svg', number: '257', label: 'Duels Played' },
    { image: 'gamer-trophy.svg', number: '19', label: 'Trophies' },
  ];

  const items: IUsersItems = [
    { image: '300-27.png' },
    { image: '300-1.png' },
    { image: '300-2.png' },
    { image: '300-3.png' },
    { image: '300-5.png' },
    { image: '300-23.png' },
    { image: '300-6.png' },
    { image: '300-11.png' },
    { image: '300-12.png' },
  ];

  const data: INetworkItems = [
    { icon: Dribbble, link: 'jennynft' },
    { icon: RiFacebookCircleLine, link: 'nftmania' },
    { icon: RiTwitterXLine, link: 'jennynft' },
    { icon: RiYoutubeLine, link: 'jennyklabber' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-7.5">
      <div className="col-span-2 lg:col-span-3">
        <Statistics details={details} />
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <FavoriteGames />
          <About />
          <CommunityBadges title="Badges" />
          <Users title="Floyd’s Team" items={items} />
          <Network title="Network" data={data} />
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <Tournaments />
          <NowPlaying />
          <Activity />
        </div>
      </div>
    </div>
  );
}
