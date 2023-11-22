import { useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

export default function DashBoard() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/current');
    }
  }, [pathname]);

  return (
    <>
      <Outlet />
    </>
  );
}
