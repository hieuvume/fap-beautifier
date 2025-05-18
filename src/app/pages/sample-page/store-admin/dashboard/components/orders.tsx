import { useState } from 'react';
import { ApexOptions } from 'apexcharts';
import ApexCharts from 'react-apexcharts';
import { Link } from 'react-router';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from '@/app/components/ui/toggle-group';

export function Orders() {
  const data = {
    '1H': [30, 40, 35, 50, 45, 60, 55, 60, 50, 65, 70, 75],
    '1D': [70, 60, 75, 55, 35, 80, 100, 70, 90, 65, 50, 85],
    '14D': [70, 60, 75, 55, 35, 80, 100, 70, 90, 65, 50, 85],
    '1M': [50, 60, 70, 80, 55, 65, 45, 85, 95, 75, 85, 90],
    '3M': [60, 65, 70, 80, 85, 90, 100, 110, 120, 130, 140, 150],
    '1Y': [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600],
  };

  const categories = {
    '1H': [
      '9:00',
      '10:00',
      '11:00',
      '12:00',
      '1:00',
      '2:00',
      '3:00',
      '4:00',
      '5:00',
      '6:00',
      '7:00',
      '8:00',
    ],
    '1D': [
      '12 AM',
      '2 AM',
      '4 AM',
      '6 AM',
      '8 AM',
      '10 AM',
      '12 PM',
      '2 PM',
      '4 PM',
      '6 PM',
      '8 PM',
      '10 PM',
    ],
    '14D': [
      'Sep 8',
      '',
      '',
      '',
      'Sep 13',
      '',
      '',
      '',
      'Sep 18',
      '',
      '',
      'Sep 23',
    ],
    '1M': [
      'Mar 1',
      'Mar 3',
      'Mar 6',
      'Mar 9',
      'Mar 12',
      'Mar 15',
      'Mar 18',
      'Mar 21',
      'Mar 24',
      'Mar 27',
      'Mar 30',
      'Apr 2',
    ],
    '3M': [
      'Feb W1',
      'Feb W2',
      'Feb W3',
      'Feb W4',
      'Mar W1',
      'Mar W2',
      'Mar W3',
      'Mar W4',
      'Apr W1',
      'Apr W2',
      'Apr W3',
      'Apr W4',
    ],
    '1Y': [
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
    ],
  };

  const [selectedTimeRange, setSelectedTimeRange] = useState<
    '1H' | '1D' | '14D' | '1M' | '3M' | '1Y'
  >('14D');

  const options: ApexOptions = {
    series: [
      {
        name: 'series1',
        data: data[selectedTimeRange],
      },
    ],
    chart: {
      height: 200,
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
      categories: categories[selectedTimeRange],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        rotate: 0,
        style: {
          colors: 'var(--color-secondary-foreground)',
          fontSize: '12px',
          fontWeight: '400',
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
      tickAmount: 3,
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    tooltip: {
      enabled: true,
      custom({ series, seriesIndex, dataPointIndex, w }) {
        const number = parseInt(series[seriesIndex][dataPointIndex]) * 1000;
        const month = w.globals.seriesX[seriesIndex][dataPointIndex];
        const monthName = categories[selectedTimeRange][month];

        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        });

        const formattedNumber = formatter.format(number);

        return `
          <div class="flex flex-col gap-2 p-3.5">
            <div class="font-medium text-2sm text-secondary-foreground">${monthName}, 2024 Sales</div>
            <div class="flex items-center gap-1.5">
              <div class="font-semibold text-md text-mono">${formattedNumber}</div>
              <span class="kt-badge kt-badge-outline kt-badge-success kt-badge-xs">+24%</span>
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
      strokeDashArray: 3,
      yaxis: { lines: { show: true } },
      xaxis: { lines: { show: false } },
    },
  };

  const handleToggleChange = (value: string) => {
    setSelectedTimeRange(value as '1H' | '1D' | '14D' | '1M' | '3M' | '1Y');
  };

  return (
    <Card>
      <CardHeader className="gap-2">
        <CardTitle>Orders</CardTitle>

        <Button mode="link" asChild>
          <Link to="#">See All</Link>
        </Button>
      </CardHeader>

      <CardContent className="px-0 pt-5 lg:pt-7.5">
        <ToggleGroup
          type="single"
          variant="outline"
          value={selectedTimeRange}
          onValueChange={handleToggleChange}
          className="flex flex-row px-5 lg:px-7.5 mb-8"
        >
          <ToggleGroupItem className="basis-1/6 justify-center" value="1H">
            1H
          </ToggleGroupItem>
          <ToggleGroupItem className="basis-1/6 justify-center" value="1D">
            1D
          </ToggleGroupItem>
          <ToggleGroupItem className="basis-1/6 justify-center" value="14D">
            14D
          </ToggleGroupItem>
          <ToggleGroupItem className="basis-1/6 justify-center" value="1M">
            1M
          </ToggleGroupItem>
          <ToggleGroupItem className="basis-1/6 justify-center" value="3M">
            3M
          </ToggleGroupItem>
          <ToggleGroupItem className="basis-1/6 justify-center" value="1Y">
            1Y
          </ToggleGroupItem>
        </ToggleGroup>

        <div className="flex items-center gap-2.5 px-5 lg:px-7.5 mb-3">
          <span className="text-3xl font-semibold text-mono">$329.7k</span>
          <Badge variant="success" appearance="outline">
            +4.7%
          </Badge>
        </div>

        <ApexCharts
          options={options}
          series={options.series}
          height={200}
          type="area"
          className="ml-2"
        />
      </CardContent>
    </Card>
  );
}
