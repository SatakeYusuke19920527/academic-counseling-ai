//Provider.tsx
'use client';
import { msalConfig } from "@/lib/auth/nextauth";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import React from "react";
import { store } from '@/store/store';
import { Provider as ReduxProvider  } from 'react-redux';

const msalInstance = new PublicClientApplication(msalConfig);

export function Providers({ children }:{ children: React.ReactNode} ){
    return <MsalProvider instance={msalInstance}>
      <ReduxProvider store={store}> 
         { children }
         </ReduxProvider>
    </MsalProvider>;
}
