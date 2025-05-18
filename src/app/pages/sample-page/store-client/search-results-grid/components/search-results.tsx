import { useState } from 'react';
import { Funnel, LayoutGrid, List, Search as SearchIcon } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/app/components/ui/toggle-group';
import { Card2 } from '../../components/common/card2';
import { Card3 } from '../../components/common/card3';
import { StoreClientFiltersSheet } from '../../components/sheets/filters-sheet';

interface ISearchResultsGridContentItem {
  logo: string;
  title: string;
  total: string;
  label?: string;
  badge?: boolean;
  star: string;
  sku: string;
  category1: string;
  category2: string;
}
type ISearchResultsGridContentItems = Array<ISearchResultsGridContentItem>;

type SearchResultsType = 'card' | 'list';

export function SearchResults({ mode }: { mode: SearchResultsType }) {
  const [searchInput, setSearchInput] = useState('');
  const [activePeriod, setActivePeriod] = useState('Week');
  const [activeTab, setActiveTab] = useState<SearchResultsType>(mode);

  const items: ISearchResultsGridContentItems = [
    {
      logo: '11.png',
      title: 'Cloud Shift Lightweight Runner Pro Edition',
      total: '99.00',
      star: '5.0',
      sku: 'SH-001-BLK-42',
      category1: 'Nike',
      category2: 'Sneakers',
    },
    {
      logo: '12.png',
      title: 'Titan Edge High Impact Stability Lightweight Trainers',
      total: '65.99',
      star: '3.5',
      sku: 'SNK-XY-WHT-10',
      category1: 'Adidas',
      category2: 'Running Shoes',
    },
    {
      logo: '13.png',
      title: 'Wave Strike Dynamic Boost Sneaker',
      total: '120.00',
      star: '4.7',
      sku: 'BT-A1-YLW-8',
      category1: 'Timberland',
      category2: 'Boots',
    },
    {
      logo: '15.png',
      title: 'Wave Strike Dynamic Boost Sneaker',
      total: '140.00',
      label: '$179.00',
      badge: true,
      star: '3.2',
      sku: 'SD-Z9-BRN-39',
      category1: 'Birkenstock',
      category2: 'Sandals',
    },
    {
      logo: '5.png',
      title: 'Cloud Shift Lightweight Runner Pro Edition',
      total: '99.00',
      label: '$140.00',
      badge: true,
      star: '4.1',
      sku: 'WRK-77-BLK-9',
      category1: 'Dr. Martens',
      category2: 'Work Shoes',
    },
    {
      logo: '3.png',
      title: 'Titan Edge High Impact Stability Lightweight Trainers',
      total: '65.99',
      star: '3.5',
      sku: 'SNK-555-GRY-11',
      category1: 'New Balance',
      category2: 'Sneakers',
    },
    {
      logo: '2.png',
      title: 'Velocity Boost Xtreme High  Shock Absorbers',
      total: '280.00',
      label: '$315.00',
      badge: true,
      star: '4.9',
      sku: 'SH-222-BLU-40',
      category1: 'Puma',
      category2: 'Sneakers',
    },
    {
      logo: '14.png',
      title: 'Velocity Boost Xtreme High  Shock Absorbers',
      total: '110.00',
      star: '4.9',
      sku: 'BT-777-BLK-9',
      category1: 'UGG',
      category2: 'Boots',
    },
    {
      logo: '8.png',
      title: 'Cloud Shift Lightweight Runner Pro Edition',
      total: '99.00',
      star: '5.0',
      sku: 'SD-999-TAN-38',
      category1: 'Crocs',
      category2: 'Sandals',
    },
    {
      logo: '4.png',
      title: 'Titan Edge High Impact Stability Lightweight Trainers',
      total: '46.00',
      label: '$110.00',
      badge: true,
      star: '3.5',
      sku: 'WRK-333-GRN-10',
      category1: 'Caterpillar',
      category2: 'Work Shoes',
    },
    {
      logo: '9.png',
      title: 'Wave Strike Dynamic Boost Sneaker',
      total: '120.00',
      star: '4.7',
      sku: 'SNK-888-RED-42',
      category1: 'Reebok',
      category2: 'Sneakers',
    },
    {
      logo: '10.png',
      title: 'Velocity Boost Xtreme High  Shock Absorbers',
      total: '110.00',
      star: '4.9',
      sku: 'BT-444-BRN-7',
      category1: 'Columbia',
      category2: 'Hiking Boots',
    },
  ];

  const renderItem = (item: ISearchResultsGridContentItem, index: number) => {
    const props = {
      logo: item.logo,
      star: item.star,
      sku: item.sku,
      title: item.title,
      total: item.total,
      label: item.label,
      badge: item.badge,
      category1: item.category1,
      category2: item.category2,
    };
    return activeTab === 'card' ? (
      <Card2 key={index} {...props} />
    ) : (
      <Card3 key={index} {...props} />
    );
  };

  return (
    <div className="flex flex-col items-stretch gap-7">
      <div className="flex items-center gap-3 w-full">
        <div className="relative flex items-center w-full mx-auto  z-1">
          <SearchIcon
            className="absolute start-4 text-muted-foreground"
            size={16}
          />

          <Input
            id="search-input"
            value={searchInput}
            placeholder="Nike"
            onChange={(e) => setSearchInput(e.target.value)}
            className="ps-9 pe-10 w-full"
          />

          <Badge
            className="absolute end-2 gap-1"
            appearance="outline"
            size="sm"
          >
            ⌘ K
          </Badge>
        </div>

        <StoreClientFiltersSheet
          trigger={
            <Button>
              <Funnel /> Filter
            </Button>
          }
        />
      </div>

      <div className="flex flex-wrap items-center gap-5 justify-between mt-3">
        <h3 className="text-sm text-mono font-medium">
          1 - {items.length} over 280 results for
          <span className="text-destructive"> Nike</span>
        </h3>

        <div className="flex items-center gap-2.5">
          <Select defaultValue="high-to-low">
            <SelectTrigger className="w-[175px]">
              <SelectValue placeholder="Price Hight to Low" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low-to-high">Price: Low to High</SelectItem>
              <SelectItem value="high-to-low">Price: High to Low</SelectItem>
              <SelectItem value="0-50">$0 - $50</SelectItem>
              <SelectItem value="50-100">$50 - $100</SelectItem>
              <SelectItem value="100-200">$100 - $200</SelectItem>
              <SelectItem value="200-500">$200 - $500</SelectItem>
              <SelectItem value="500+">$500+</SelectItem>
            </SelectContent>
          </Select>

          <ToggleGroup
            type="single"
            variant="outline"
            value={activePeriod}
            onValueChange={(value) => {
              if (value) setActivePeriod(value);
            }}
            className="grid grid-cols-4"
          >
            {['Today', 'Week', 'Month', 'All'].map((period) => (
              <ToggleGroupItem key={period} value={period}>
                {period}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>

          <ToggleGroup
            type="single"
            variant="outline"
            value={activeTab}
            onValueChange={(value) => {
              if (value === 'card' || value === 'list') setActiveTab(value);
            }}
          >
            <ToggleGroupItem value="card">
              <LayoutGrid size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem value="list">
              <List size={16} />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div
        className={
          activeTab === 'card'
            ? 'grid sm:grid-cols-4 gap-5 mb-2'
            : 'grid grid-cols-1 gap-5'
        }
      >
        {items.map((item, index) => {
          return renderItem(item, index);
        })}
      </div>
    </div>
  );
}
