import { CircleCheck } from 'lucide-react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Switch } from '@/app/components/ui/switch';

interface IAdvancedSettingsAppearanceItem {
  image: string;
  logo?: string;
  label: string;
  checked: boolean;
}
type IAdvancedSettingsAppearanceItems = Array<IAdvancedSettingsAppearanceItem>;

interface IAdvancedSettingsAppearanceProps {
  title: string;
}

const AdvancedSettingsAppearance = ({
  title,
}: IAdvancedSettingsAppearanceProps) => {
  const items: IAdvancedSettingsAppearanceItems = [
    {
      image: '28.jpg',
      logo: 'azure.svg',
      label: 'Dark',
      checked: true,
    },
    {
      image: '32.jpg',
      logo: 'google.svg',
      label: 'Light',
      checked: false,
    },
    {
      image: '30.jpg',
      logo: 'openid.svg',
      label: 'Sistem',
      checked: false,
    },
  ];

  const renderItem = (item: IAdvancedSettingsAppearanceItem, index: number) => {
    return (
      <div key={index}>
        <Label
          className="flex items-end border bg-no-repeat bg-cover border-input rounded-xl has-checked:border-green-500 has-checked:border-3 has-checked:[&_.checked]:flex h-[170px] mb-0.5"
          style={{
            backgroundImage: `url(${toAbsoluteUrl(`/media/images/600x400/${item.image}`)})`,
          }}
        >
          <Input
            className="absolute opacity-0 w-0 h-0"
            type="radio"
            name="appearance_option"
            defaultChecked={item.checked}
            defaultValue="2"
          />
          <CircleCheck
            size={20}
            className="checked ms-5 mb-5 text-xl text-green-500 leading-none hidden"
          />
        </Label>
        <span className="text-sm font-medium text-mono">{item.label}</span>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader id="advanced_settings_appearance">
        <CardTitle>{title || 'Appearance'}</CardTitle>
      </CardHeader>
      <CardContent className="lg:py-7.5">
        <div className="mb-5">
          <h3 className="text-base font-medium text-mono">Theme mode</h3>
          <span className="text-sm text-secondary-foreground">
            Select or customize your ui theme
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
        <div className="border-t border-border mt-7 mb-8"></div>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-8">
          <Label className="flex w-full max-w-48 text-foreground font-normal">
            Transparent sidebar
          </Label>
          <div className="flex items-center gap-7.5 grow">
            <Label htmlFor="auto-update" className="text-sm">
              Active
            </Label>
            <Switch defaultChecked size="sm" />
            <span className="form-info text-foreground font-normal">
              Toggle the transparent sidebar for a sleek interface.Switch it on
              for transparency or off for a solid background.
            </span>
          </div>
        </div>
        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export {
  AdvancedSettingsAppearance,
  type IAdvancedSettingsAppearanceItem,
  type IAdvancedSettingsAppearanceItems,
  type IAdvancedSettingsAppearanceProps,
};
