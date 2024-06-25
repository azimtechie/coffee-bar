import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Dashboard from './components/dashboard/Dashboard';
import AdminLayout from './layout/AdminLayout';
import UserLayout from './layout/UserLayout';

const routes = [
  {
    path: '/',
    element: <UserLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [{ path: '/admin', element: <AdminDashboard /> }],
  },
];

export default routes;
