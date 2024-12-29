// 'use client';
// import FormInput from '@/components/FormInput/FormInput';
// import MessageArea from '@/components/MessageArea/MessageArea';

// export default function Home() {
//   return (
//     <main className="flex flex-col text-gray-800 w-full h-full overflow-y-auto">
//       <div className="flex bg-slate-300 h-5/6 p-4 justify-center">
//         <MessageArea />
//       </div>
//       <div className="flex h-1/6 p-4 justify-center items-center">
//         <FormInput />
//       </div>
//     </main>
//   );
// }




'use client';

import FormInput from '@/components/FormInput/FormInput';
import MessageArea from '@/components/MessageArea/MessageArea';
import { useMsal } from '@azure/msal-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useCurrentUser from '../../hooks/useCurrentUser';
import { loginRequest } from '@/lib/auth/nextauth';


export default function Home() {
  const { instance, accounts } = useMsal();
  const user = useCurrentUser();
  const router = useRouter();
  useEffect(() => {
    console.log('🚀 ~ SideMenu ~ user:', user);
    console.log('🚀 ~ SideMenu ~ accounts:', accounts);
  }, [ accounts,user]);
  const handleAuthClick = () => {
    if (user === null) if(!user)
       {
     
      instance.loginRedirect(loginRequest);
    } else {
      instance.logout();
    }
  };

  return (
    <main className="flex flex-col text-gray-800 w-full h-full overflow-y-auto">
      <h1
        onClick={handleAuthClick}
        className="flex justify-center px-4 text-2xl font-bold cursor-pointer"
      >
        {user === null ? 'Login' : 'Logout'}
      </h1>
      <h1>
        {user === null||user === undefined
          ? 'Please login to see your profile'
          : `Welcome ${user.user_name}! 🚀 Your email: ${user.email}`}
      </h1>
        
        <div className="flex bg-slate-300 h-5/6 p-4 justify-center">
          <MessageArea />
        </div>
        <div className="flex h-1/6 p-4 justify-center items-center">
          <FormInput />
        </div>
      <div>
        <Link href="/result">Go to Result Page</Link>
      </div>
  </main>
  );
}
