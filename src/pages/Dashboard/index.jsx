import styled from 'styled-components';
import { useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { Menu } from '../../components/Dashboard';

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
      <Wrapper>
        <Menu />
        <Content>
          <Outlet />
        </Content>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 2em;
  background-color: #f1f1f1;
`;
