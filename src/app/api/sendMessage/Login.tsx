//Login.tsx
'use client';
import { msalConfig } from '@/lib/auth/nextauth';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pca = new PublicClientApplication(msalConfig);
  return (
    <div className="flex h-screen">
        <MsalProvider instance={pca}>
          <main className="bg-slate-50 flex-1 overflow-auto">{children}</main>
        </MsalProvider>
    </div>
  );
};

export default MainLayout;

