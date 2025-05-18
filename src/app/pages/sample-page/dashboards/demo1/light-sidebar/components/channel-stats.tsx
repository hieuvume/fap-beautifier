import { Fragment } from 'react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Card, CardContent } from '@/app/components/ui/card';

interface IChannelStatsItem {
  logo: string;
  logoDark?: string;
  info: string;
  desc: string;
  path: string;
}
type IChannelStatsItems = Array<IChannelStatsItem>;

const ChannelStats = () => {
  const items: IChannelStatsItems = [
    { logo: 'linkedin-2.svg', info: '9.3k', desc: 'Amazing mates', path: '' },
    { logo: 'youtube-2.svg', info: '24k', desc: 'Lessons Views', path: '' },
    {
      logo: 'instagram-03.svg',
      info: '608',
      desc: 'New subscribers',
      path: '',
    },
    {
      logo: 'tiktok.svg',
      logoDark: 'tiktok-dark.svg',
      info: '2.5k',
      desc: 'Stream audience',
      path: '',
    },
  ];

  const renderItem = (item: IChannelStatsItem, index: number) => {
    return (
      <Card key={index}>
        <CardContent className="p-0 flex flex-col justify-between gap-6 h-full bg-cover rtl:bg-[left_top_-1.7rem] bg-[right_top_-1.7rem] bg-no-repeat channel-stats-bg">
          {item.logoDark ? (
            <>
              <img
                src={toAbsoluteUrl(`/media/brand-logos/${item.logo}`)}
                className="dark:hidden w-7 mt-4 ms-5"
                alt="image"
              />
              <img
                src={toAbsoluteUrl(`/media/brand-logos/${item.logoDark}`)}
                className="light:hidden w-7 mt-4 ms-5"
                alt="image"
              />
            </>
          ) : (
            <img
              src={toAbsoluteUrl(`/media/brand-logos/${item.logo}`)}
              className="w-7 mt-4 ms-5"
              alt="image"
            />
          )}
          <div className="flex flex-col gap-1 pb-4 px-5">
            <span className="text-3xl font-semibold text-mono">
              {item.info}
            </span>
            <span className="text-sm font-normal text-muted-forehead">
              {item.desc}
            </span>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Fragment>
      <style>
        {`
          .channel-stats-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/bg-3.png')}');
          }
          .dark .channel-stats-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/bg-3-dark.png')}');
          }
        `}
      </style>

      {items.map((item, index) => {
        return renderItem(item, index);
      })}
    </Fragment>
  );
};

export { ChannelStats, type IChannelStatsItem, type IChannelStatsItems };
