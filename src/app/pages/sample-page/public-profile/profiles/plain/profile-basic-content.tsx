import {
  RiFacebookCircleLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from '@remixicon/react';
import { Dribbble, LoaderPinwheel, Mail } from 'lucide-react';
import {
  INetworkItems,
  IStatisticsItems,
  Network,
  Statistics,
} from '../company';
import { Tags } from '../default';
import { AboutMe, GettingStarted, OpenToWork } from './components';

export function ProfilePlainContent() {
  const items: IStatisticsItems = [
    { number: '249', label: 'Connections' },
    { number: '1.2k', label: 'Uploads' },
    { number: '1M+', label: 'Gross Sales' },
    { number: '27', label: 'Author Rank' },
  ];

  const data: INetworkItems = [
    { icon: Dribbble, link: 'KeenThemes' },
    { icon: Mail, link: 'Author Level 100' },
    { icon: LoaderPinwheel, link: 'UI/UX Desiger' },
    { icon: RiTwitterXLine, link: 'jenny@kteam.com' },
    { icon: RiYoutubeLine, link: 'https://keenthemes.com' },
    { icon: RiFacebookCircleLine, link: 'keenthemes' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
      <div className="col-span-2">
        <Statistics items={items} />
      </div>
      <div className="col-span-2">
        <GettingStarted />
      </div>
      <div className="col-span-1 flex">
        <Network className="pb-3 grow" title="Profile" data={data} />
      </div>
      <div className="col-span-1 flex">
        <AboutMe className="grow" />
      </div>
      <div className="col-span-1 flex">
        <OpenToWork className="grow" title="Open to work" />
      </div>
      <div className="col-span-1 flex">
        <Tags title="Skills" className="grow" />
      </div>
    </div>
  );
}
