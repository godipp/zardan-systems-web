import React from 'react';
import { Outlet } from 'react-router-dom';
import { RootLayout } from '@/layouts';

const AppLayout: React.FC = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};

export default AppLayout;
