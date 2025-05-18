import { Fragment } from 'react';
import { DropdownMenu2 } from '@/app/partials/dropdown-menu/dropdown-menu-2';
import { ApexOptions } from 'apexcharts';
import { EllipsisVertical } from 'lucide-react';
import ApexChart from 'react-apexcharts';
import { Button } from '@/app/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/app/components/ui/card';

const MediaUploads = () => {
  const data: number[] = [85, 65, 50, 70, 40, 45, 100, 55, 85, 60, 70, 90];
  const categories: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const options: ApexOptions = {
    series: [
      {
        name: 'series1',
        data: data,
      },
    ],
    chart: {
      height: 250,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: ['var(--color-primary)'],
    },
    xaxis: {
      categories: categories,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: 'var(--color-secondary-foreground)',
          fontSize: '12px',
        },
      },
      crosshairs: {
        position: 'front',
        stroke: {
          color: 'var(--color-primary)',
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: false,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: 'var(--color-secondary-foreground)',
          fontSize: '12px',
        },
        formatter: (defaultValue: number) => `$${defaultValue}K`,
      },
    },
    tooltip: {
      enabled: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      custom: ({ series, seriesIndex, dataPointIndex, w }: any) => {
        const number = parseInt(series[seriesIndex][dataPointIndex]) * 1000;
        const month = w.globals.seriesX[seriesIndex][dataPointIndex];
        const monthName = categories[month];

        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        });

        const formattedNumber = formatter.format(number);

        return `
          <div class="flex flex-col gap-2 p-3.5">
            <div class="font-medium text-sm text-secondary-foreground">${monthName}, 2024 Sales</div>
            <div class="flex items-center gap-1.5">
              <div class="font-semibold text-base text-mono">${formattedNumber}</div>
              <span class="badge badge-outline badge-success badge-xs">+24%</span>
            </div>
          </div>
        `;
      },
    },
    markers: {
      size: 0,
      colors: 'var(--color-white)',
      strokeColors: 'var(--color-primary)',
      strokeWidth: 4,
      strokeOpacity: 1,
      strokeDashArray: 0,
      fillOpacity: 1,
      shape: 'circle',
      showNullDataPoints: true,
      hover: {
        size: 8,
        sizeOffset: 0,
      },
      discrete: [],
      offsetX: 0,
      offsetY: 0,
    },
    fill: {
      gradient: {
        opacityFrom: 0.25,
        opacityTo: 0,
      },
    },
    grid: {
      borderColor: 'var(--color-border)',
      strokeDashArray: 5,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle>Media Uploads</CardTitle>
          <DropdownMenu2
            trigger={
              <Button variant="ghost" mode="icon">
                <EllipsisVertical />
              </Button>
            }
          />
        </CardHeader>
        <div className="px-3 py-1">
          <ApexChart
            id="media_uploads_chart"
            options={options}
            series={options.series}
            type="area"
            max-width="694"
            height="250"
          />
        </div>
      </Card>
    </Fragment>
  );
};

export { MediaUploads };
