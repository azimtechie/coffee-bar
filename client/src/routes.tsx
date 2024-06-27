import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Dashboard from './components/dashboard/Dashboard';
import AdminLayout from './layout/AdminLayout';
import UserLayout from './layout/UserLayout';

const routes = [
  {
    path: '/',
    element: <UserLayout>
               <Dashboard /> 
             </UserLayout>, // Wrap Dashboard in UserLayout
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [{ path: '/admin', element: <AdminDashboard /> }],
  },
];

export default routes;
