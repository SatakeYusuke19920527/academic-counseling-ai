//Layout.tsx
'use client';
import React from 'react';
import { Provider } from 'react-redux';
import SideMenu from '../../components/SideMenu/SideMenu';
import { store } from '../../store/store'; 
import { subscribe } from 'diagnostics_channel';
import { describe } from 'node:test';
import { Providers } from '@/components/Providers'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
    <div className={inter.className}>{children}</div>
  </Providers>
  );
}
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Provider store={store}>
  
        <SideMenu />
        <main className="bg-slate-50 flex-1 overflow-auto">{children}</main>
      </Provider>
    </div>
  );
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RootLayout>
      <MainLayout>{children}</MainLayout>
    </RootLayout>
  );
};

export default Layout;
