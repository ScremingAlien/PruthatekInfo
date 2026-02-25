import { Bell, SlidersHorizontal } from '@phosphor-icons/react/dist/ssr'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { setUserLoginDetails, setUserLoginStatus } from "@/app/utils/Redux/slices/HomePage.slice";
import { useDispatch, useSelector } from 'react-redux';
 


export default function Navbar() {


     const router = useRouter();
     const dispatch = useDispatch();
   


     async function verify(token) {
          let request = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/auth/verify`, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                    token: token
               }),
          })
          let response = await request.json();


          if (response.status == true) {

               dispatch(setUserLoginStatus(true));
               dispatch(setUserLoginDetails({
                    user_id: response.user_id,
                    username: response.username,
                    avatar: response.avatar,
                    accountType: response.accountType
               }));

          } else {
               dispatch(setUserLoginDetails({
                    user_id: null,
                    username: null,
                    avatar: null,
                    accountType: null
               }));
               window.localStorage.removeItem('PruthatekINFO_token');
          }

     }
     useEffect(() => {

          const token = localStorage.getItem('PruthatekINFO_token');

          if (token) {
               router.push('/dashboard');
               verify(token);
          } else {
               router.push('/');
          }

     }, []);



     return (
          <div className=' flex   flex-row justify-end items-center p-3'>

               <button className='   px-1'>
                    <Bell size={28} weight="regular" />
               </button>

               <div className=' w-[1px] h-6 mx-4 bg-blackish-200/30'>
               </div>

               <button className='   px-1'>
                    <SlidersHorizontal size={31} weight="regular" />
               </button>

          
           
          </div>
     )
}


