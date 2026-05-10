import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '@/app/providers/MainLayout';
import DashboardPage from '@/pages/dashboard/DashboardPage';
import InstallationsPage from '@/pages/installations/InstallationsPage.tsx';
import UsersPage from '@/pages/users/UsersPage';
import JobsPage from '@/pages/jobs/JobsPage';
import AuditPage from '@/pages/audit/AuditPage';
import SettingsPage from '@/pages/settings/SettingsPage';
import LoginPage from '@/pages/login/LoginPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'installations', element: <InstallationsPage /> },
      { path: 'users', element: <UsersPage /> },
      { path: 'jobs', element: <JobsPage /> },
      { path: 'audit', element: <AuditPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
