import { useState } from 'react';
import { DropdownMenu4 } from '@/app/partials/dropdown-menu/dropdown-menu-4';
import { ApexOptions } from 'apexcharts';
import { EllipsisVertical } from 'lucide-react';
import ApexChart from 'react-apexcharts';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from '@/app/components/ui/toggle-group';

interface IMyBalanceProps {
  className: string;
}

const MyBalance = ({ className }: IMyBalanceProps) => {
  const [activePeriod, setActivePeriod] = useState('Month');

  const getDataForPeriod = (period: string) => {
    switch (period) {
      case 'Today':
        return {
          data: [45, 35, 45, 35, 55, 85, 20, 25, 55],
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
          ],
        };
      case 'Week':
        return {
          data: [25, 55, 65, 45, 25, 65, 50, 40, 60],
          categories: [
            'Oct',
            'Nov',
            'Dec',
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
          ],
        };
      case 'Month':
        return {
          data: [80, 40, 50, 20, 50, 80, 60, 20, 30],
          categories: [
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
            'Jan',
            'Feb',
            'Mar',
          ],
        };
      case 'Year':
        return {
          data: [20, 65, 20, 50, 70, 25, 40, 60, 80],
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
          ],
        };
      default:
        return { data: [], categories: [] };
    }
  };

  const { data, categories } = getDataForPeriod(activePeriod);

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
        formatter: (value) => {
          return `$${value}K`;
        },
      },
    },
    tooltip: {
      enabled: true,
      custom({ series, seriesIndex, dataPointIndex, w }) {
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
            <div class="font-medium text-sm text-secondary-foreground">${monthName}, 2025 Sales</div>
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
      colors: 'var(--color-primary)',
      strokeColors: 'var(--color-primary)',
      strokeWidth: 4,
      strokeOpacity: 1,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: 'circle',
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: 8,
        sizeOffset: 0,
      },
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
    <Card className={className}>
      <CardHeader>
        <CardTitle>My Balance</CardTitle>
        <DropdownMenu4
          trigger={
            <Button variant="ghost" mode="icon">
              <EllipsisVertical />
            </Button>
          }
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-2 px-5 lg:px-7.5 pt-5">
        <span className="text-sm font-normal text-foreground">
          Available balance
        </span>
        <span className="text-3xl font-semibold text-mono mb-3">$9,395.72</span>
        <ToggleGroup
          type="single"
          variant="outline"
          value={activePeriod}
          onValueChange={(value) => {
            if (value) setActivePeriod(value);
          }}
          className="grid grid-cols-4"
        >
          {['Today', 'Week', 'Month', 'Year'].map((period) => (
            <ToggleGroupItem key={period} value={period}>
              {period}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </CardContent>
      <ApexChart
        id="my_balance_chart"
        options={options}
        series={options.series}
        type="area"
        max-width="361"
        height="250"
        className="px-3"
      />
    </Card>
  );
};

export { MyBalance, type IMyBalanceProps };
