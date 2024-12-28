"use client";
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../lib/auth/nextauth';

export default function Loginscreen() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest); // ログインページにリダイレクト
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome! Please Log In</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-600"
      >
        Log In
      </button>
    </main>
  );
}
