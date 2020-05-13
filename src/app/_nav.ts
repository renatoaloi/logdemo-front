import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Logs'
  },
  {
    name: 'New',
    url: '/log/form',
    icon: 'icon-plus',
    badge: {
      variant: 'success',
      text: '+'
    }
  },
  {
    name: 'Manage',
    url: '/log/manage',
    icon: 'icon-layers'
  },
  {
    title: true,
    name: 'Files'
  },
  {
    name: 'Manage',
    url: '/file/manage',
    icon: 'icon-layers'
  },
  {
    name: 'Upload',
    url: '/file/upload',
    icon: 'icon-cloud-upload'
  }
];
