import { useEffect } from 'react';
import { redirect, useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';

export const useAuthRedirect = () => {
     
     const router = useRouter();

     useEffect(() => {
          const token = localStorage.getItem('PruthatekINFO_token');

          if (token) {
               // looged in so 
               router.push('/dashboard');

          }
               
          // eat 5 star

     }, []);
};


// const decoded  = jwt.decode(token);
// const currentTime = Math.floor(Date.now() / 1000);

// if (!decoded?.exp || decoded.exp < currentTime) {
//      // Token has expired
//      localStorage.removeItem('PruthatekINFO_token');
     
//      if (isProtected) router.push(redirectTo);

     
//      return;
// }

// // Redirect from /login or /register if already logged in
// if (!isProtected) {
//      router.push(loggedInRedirect);
// }


/* 
if i am not logged in then i can able to see login page and register page and Not dashboard page
if i am  logged in then i can able to see dashboard page But not login and register page 

*/