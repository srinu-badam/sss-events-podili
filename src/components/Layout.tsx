import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white-50">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;