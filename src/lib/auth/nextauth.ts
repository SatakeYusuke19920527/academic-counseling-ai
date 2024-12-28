//nextauth.ts
import { Configuration } from '@azure/msal-browser';

export const msalConfig = {

    auth: {
      clientId: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID ||'',
      authority: process.env.NEXT_PUBLIC_AZURE_AD_AUTHORITY||'', 
      redirectUri: process.env.NEXT_PUBLIC_AZURE_AD_REDIRECT_URI ||'/' , 
    },
    cache: {
      cacheLocation: 'localStorage', // 必要に応じて変更
      storeAuthStateInCookie: false,
    },
  };

export const loginRequest = {
  scopes: ['User.Read'],
};
