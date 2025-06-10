import { Fragment, useState } from 'react';
import { Check } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Label } from '@/app/components/ui/label';
import { Switch } from '@/app/components/ui/switch';
import { Table, TableBody, TableCell, TableRow } from '@/app/components/ui/table';

interface IPlanPrice {
  regular: string;
  annual?: string;
}

interface IPlanInfo {
  title: string;
  description: string;
  free?: boolean;
  price?: IPlanPrice;
}

interface IFeaturePlans {
  basic: string | boolean;
  pro: string | boolean;
  premium: string | boolean;
  enterprise: string | boolean;
}

interface IFeature {
  title: string;
  plans: IFeaturePlans;
}

interface IPlansInfo {
  basic: IPlanInfo;
  pro: IPlanInfo;
  premium: IPlanInfo;
  enterprise: IPlanInfo;
}

interface IPlansItem {
  title: string;
  plans: IFeaturePlans;
}

interface IPlansItems {
  info: IPlansInfo;
  features: IFeature[];
}

const Plans = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const handleToggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

  const plans: IPlansItems = {
    info: {
      basic: {
        title: 'Basic',
        description: 'Essential features for startups individuals',
        free: true,
      },
      pro: {
        title: 'Pro',
        description: 'Advanced tools for growing businesses',
        price: {
          regular: '$99',
          annual: '$79',
        },
      },
      premium: {
        title: 'Premium',
        description: 'Comprehensive suite for large-scale operations',
        price: {
          regular: '$199',
          annual: '$179',
        },
      },
      enterprise: {
        title: 'Enterprise',
        description: 'Tailored solutions for enterprise needs',
        price: {
          regular: '$1,299',
          annual: '$1,079',
        },
      },
    },
    features: [
      {
        title: 'User Accounts',
        plans: {
          basic: 'Up to 5',
          pro: 'Up to 20',
          premium: 'Up to 50',
          enterprise: 'Unlimited',
        },
      },
      {
        title: 'Data Storage',
        plans: {
          basic: '10 GB',
          pro: '50 GB',
          premium: '200 GB',
          enterprise: 'Custom',
        },
      },
      {
        title: 'CAPI Calls',
        plans: {
          basic: '1,000/month',
          pro: '10,000/month',
          premium: '50,000/month',
          enterprise: 'Unlimited',
        },
      },
      {
        title: 'Support',
        plans: {
          basic: 'Email',
          pro: 'Email + Chat',
          premium: 'Priority',
          enterprise: '24/7 Live Support',
        },
      },
      {
        title: 'Data Backup',
        plans: {
          basic: 'Weekly',
          pro: 'Daily',
          premium: 'Hourly',
          enterprise: 'Real-time',
        },
      },
      {
        title: 'Analytics Tools',
        plans: {
          basic: 'Basic',
          pro: 'Advanced',
          premium: 'Comprehensive',
          enterprise: 'Custom',
        },
      },
      {
        title: 'Integration Options',
        plans: {
          basic: 'Limited',
          pro: 'Standard',
          premium: 'Extended',
          enterprise: 'Full Suite',
        },
      },
      {
        title: 'Uptime Guarantee',
        plans: {
          basic: '99%',
          pro: '99.9%',
          premium: '99.99%',
          enterprise: '99.999%',
        },
      },
      {
        title: 'Custom Reports',
        plans: {
          basic: false,
          pro: true,
          premium: true,
          enterprise: true,
        },
      },
      {
        title: 'Mobile Access',
        plans: {
          basic: false,
          pro: false,
          premium: true,
          enterprise: true,
        },
      },
      {
        title: 'Custom Branding',
        plans: {
          basic: false,
          pro: false,
          premium: false,
          enterprise: true,
        },
      },
    ],
  };

  const renderPlanInfo = (type: string, info: IPlanInfo) => (
    <Fragment>
      <h3 className="text-lg text-mono font-medium pb-2">{info.title}</h3>
      <div className="text-secondary-foreground text-sm">
        {info.description}
      </div>
      <div className="py-4">
        {info.free ? (
          <h4 className="text-2xl text-mono font-semibold leading-none">
            Free
          </h4>
        ) : (
          <div className="flex items-end gap-1.5" data-plan-type={type}>
            <div
              className="text-2xl text-mono font-semibold leading-none"
              data-plan-price-regular={info.price?.regular}
              data-plan-price-annual={info.price?.annual}
            >
              {isAnnual ? info.price?.regular : info.price?.annual}
            </div>
            <div className="text-secondary-foreground text-xs">
              {isAnnual ? 'per month' : 'per year'}
            </div>
          </div>
        )}
      </div>
      <div>
        <Button
          variant={info.free ? 'outline' : 'primary'}
          className="w-full justify-center"
        >
          {info.free ? 'Switch to Team' : 'Upgrade'}
        </Button>
      </div>
    </Fragment>
  );

  const renderFeatureDetail = (detail: string | boolean) => {
    if (typeof detail === 'boolean') {
      return detail ? <Check className="text-green-500 text-lg" /> : null;
    }
    return <div className="text-foreground text-sm">{detail}</div>;
  };

  const renderItem = (feature: IPlansItem, index: number) => {
    return (
      <TableRow key={index} className="*:border-border hover:bg-transparent">
        <TableCell className="border-s border-b px-5! py-3.5!">
          <div className="text-mono text-sm leading-none font-medium">
            {feature.title}
          </div>
        </TableCell>
        <TableCell className="bg-muted/40 border-b border-s px-5! py-3.5!">
          <div className="text-mono text-sm">
            {renderFeatureDetail(feature.plans.basic)}
          </div>
        </TableCell>
        <TableCell className="border-b border-s px-5! py-3.5!">
          {renderFeatureDetail(feature.plans.pro)}
        </TableCell>
        <TableCell className="border-b border-s px-5! py-3.5!">
          {renderFeatureDetail(feature.plans.premium)}
        </TableCell>
        <TableCell className="border-b border-s border-e px-5! py-3.5!">
          {renderFeatureDetail(feature.plans.enterprise)}
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Table
      className="table-fixed border-separate border-spacing-0 mt-3 min-w-[1000px] rounded-xl 
      rtl:[&_tr:nth-of-type(12)>td:last-child]:rounded-bl-xl 
      [&_tr:nth-of-type(2)>td]:border-t 
      ltr:[&_tr:nth-of-type(12)>td:last-child]:rounded-br-xl 
      ltr:[&_tr:nth-of-type(12)>td:first-child]:rounded-bl-xl 
      rtl:[&_tr:nth-of-type(12)>td:first-child]:rounded-br-xl 
      ltr:[&_tr:nth-of-type(2)>td:first-child]:rounded-tl-xl
      rtl:[&_tr:nth-of-type(2)>td:first-child]:rounded-tr-xl"
    >
      <TableBody>
        <TableRow className="*:border-border">
          <TableCell className="border-b-0! align-bottom p-5! pt-7.5! pb-6!">
            <div className="flex items-center space-x-2">
              <Switch
                size="sm"
                defaultChecked={isAnnual}
                onCheckedChange={handleToggleBilling}
              />
              <Label className="text-sm">Annual Billing</Label>
            </div>
          </TableCell>
          <TableCell className="relative! border-b-0! border-t ltr:border-l rtl:border-s ltr:rounded-tl-xl rtl:rounded-tr-xl bg-muted/40 dark:bg-coal-100 p-5! pt-7.5!">
            <Badge
              variant="success"
              appearance="outline"
              className="absolute top-0 start-1/2 rtl:translate-x-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              Current Plan
            </Badge>
            {renderPlanInfo('basic', plans.info.basic)}
          </TableCell>
          <TableCell className="border-b-0! border-t ltr:border-l rtl:border-s p-5! pt-7.5!">
            {renderPlanInfo('pro', plans.info.pro)}
          </TableCell>
          <TableCell className="border-b-0! border-t ltr:border-l rtl:border-s p-5! pt-7.5!">
            {renderPlanInfo('premium', plans.info.premium)}
          </TableCell>
          <TableCell className="border-b-0! border-t ltr:border-l rtl:border-s ltr:rounded-tr-xl rtl:rounded-tl-xl border-e p-5! pt-7.5!">
            {renderPlanInfo('enterprise', plans.info.enterprise)}
          </TableCell>
        </TableRow>
        {plans.features.map((feature: IPlansItem, index: number) =>
          renderItem(feature, index),
        )}
      </TableBody>
    </Table>
  );
};

export { Plans, type IPlansItem, type IPlansItems };
