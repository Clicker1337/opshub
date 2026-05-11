import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from '@/app/layouts/MainLayout/MainLayout';
import { AuditPage } from '@/pages/audit/AuditPage';
import { DashboardPage } from '@/pages/dashboard/DashboardPage';
import { InstallationsPage } from '@/pages/installations/InstallationsPage';
import { JobsPage } from '@/pages/jobs/JobsPage';
import { LoginPage } from '@/pages/login/LoginPage';
import { SettingsPage } from '@/pages/settings/SettingsPage';
import { UsersPage } from '@/pages/users/UsersPage';
import { ROUTES } from '@/shared/config/constants';

const router = createBrowserRouter([
  {
    path: ROUTES.login,
    element: <LoginPage />,
  },
  {
    path: ROUTES.root,
    element: <MainLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: ROUTES.installations, element: <InstallationsPage /> },
      { path: ROUTES.users, element: <UsersPage /> },
      { path: ROUTES.jobs, element: <JobsPage /> },
      { path: ROUTES.audit, element: <AuditPage /> },
      { path: ROUTES.settings, element: <SettingsPage /> },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
