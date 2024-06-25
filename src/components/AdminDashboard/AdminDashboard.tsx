import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      Admin Layout
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
