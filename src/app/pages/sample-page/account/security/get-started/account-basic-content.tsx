import {
  CloudCog,
  KeySquare,
  LayoutDashboard,
  MapPin,
  MonitorSmartphone,
  Settings,
  ShieldOff,
} from 'lucide-react';
import { IOptionsItems, Options } from '../../home/get-started';

export function AccountSecurityGetStartedContent() {
  const items: IOptionsItems = [
    {
      icon: LayoutDashboard,
      title: 'Overview',
      desc: 'A Broad Perspective on Our Comprehensive Security Features and Policies.',
      path: '/account/security/overview',
    },
    {
      icon: MapPin,
      title: 'Allowed IP Addresses',
      desc: 'Specify and Restrict Access Through Authorized IP Address Filtering.',
      path: '/account/security/allowed-ip-addresses',
    },
    {
      icon: Settings,
      title: 'Privacy Settings',
      desc: 'Customize Your Privacy with User-Controlled Settings and Preferences.',
      path: '/account/security/privacy-settings',
    },
    {
      icon: MonitorSmartphone,
      title: 'Trusted Devices',
      desc: 'Identify and Authorize Devices for Enhanced Account Security.',
      path: '/account/security/device-management',
    },
    {
      icon: CloudCog,
      title: 'Backup & Recovery',
      desc: 'Secure and Efficient Backup Solutions with Reliable Recovery Options.',
      path: '/account/security/backup-and-recovery',
    },
    {
      icon: KeySquare,
      title: 'Login Sessions',
      desc: 'Track and Manage Active User Sessions for Security Purposes.',
      path: '/account/security/current-sessions',
    },
    {
      icon: ShieldOff,
      title: 'Security Log',
      desc: 'Detailed Records of Security Events and Activities for Monitoring.',
      path: '/account/security/security-log',
    },
  ];

  return <Options items={items} dropdown={false} />;
}
