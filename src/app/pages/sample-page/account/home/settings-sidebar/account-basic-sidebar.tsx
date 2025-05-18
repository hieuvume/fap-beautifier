import {
  ScrollspyMenu,
  ScrollspyMenuItems,
} from '@/app/partials/navbar/scrollspy-menu';

export function AccountSettingsSidebar() {
  const items: ScrollspyMenuItems = [
    {
      title: 'Basic Settings',
      target: 'basic_settings',
      active: true,
    },
    {
      title: 'Authentication',
      children: [
        {
          title: 'Email',
          target: 'auth_email',
          active: false,
        },
        {
          title: 'Password',
          target: 'auth_password',
        },
        {
          title: 'Social Sign in',
          target: 'auth_social_sign_in',
        },
        {
          title: 'Single Sign On(SSO)',
          target: 'auth_social_sign_in_sso',
        },
        {
          title: 'Two-Factor auth(2FA)',
          target: 'auth_two_factor',
        },
      ],
    },
    {
      title: 'Advanced Settings',
      children: [
        {
          title: 'Preferences',
          target: 'advanced_settings_preferences',
        },
        {
          title: 'Appearance',
          target: 'advanced_settings_appearance',
        },
        {
          title: 'Notifications',
          target: 'advanced_settings_notifications',
        },
        {
          title: 'Address',
          target: 'advanced_settings_address',
        },
      ],
    },
    {
      title: 'External Services',
      children: [
        {
          title: 'Manage API',
          target: 'external_services_manage_api',
        },
        {
          title: 'Integrations',
          target: 'external_services_integrations',
        },
      ],
    },
    {
      title: 'Delete Account',
      target: 'delete_account',
    },
  ];

  return <ScrollspyMenu items={items} />;
}
