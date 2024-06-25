import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <div>
      User Layout
      <Outlet />
    </div>
  );
};

export default UserLayout;
