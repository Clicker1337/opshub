import {
  CloudServerOutlined,
  DashboardOutlined,
  FileSearchOutlined,
  SettingOutlined,
  TeamOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import type { ReactNode } from 'react';

import { ROUTES } from '@/shared/config/constants';

export interface NavItem {
  key: string;
  path: string;
  label: string;
  icon: ReactNode;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { key: 'dashboard', path: ROUTES.dashboard, label: 'Dashboard', icon: <DashboardOutlined /> },
  {
    key: 'installations',
    path: ROUTES.installations,
    label: 'Installations',
    icon: <CloudServerOutlined />,
  },
  { key: 'users', path: ROUTES.users, label: 'Users', icon: <TeamOutlined /> },
  { key: 'jobs', path: ROUTES.jobs, label: 'Jobs', icon: <ThunderboltOutlined /> },
  { key: 'audit', path: ROUTES.audit, label: 'Audit Log', icon: <FileSearchOutlined /> },
  { key: 'settings', path: ROUTES.settings, label: 'Settings', icon: <SettingOutlined /> },
];
