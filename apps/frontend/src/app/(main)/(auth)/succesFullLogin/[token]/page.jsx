"use client"
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import jwt from 'jsonwebtoken';
import { notifications } from '@mantine/notifications';
import { useDispatch } from 'react-redux';
import { setFollowings, setisVerifying, setUserLoginDetails, setUserLoginStatus } from '@/app/utils/Redux/slices/HomePage.slice';
import { useAuthRedirect } from '../../useAuthRedirect';


export default function page() {

     const router = useRouter();

     const dispatch = useDispatch();

     const { token } = useParams();
     async function fetchFollowings(user_id) {
          setisVerifying(true);
          let user = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/user/followings-less/${user_id}`, {
               method: 'GET',
          })

          let ress = await user.json();
          dispatch(setisVerifying(false));
          dispatch(setFollowings(ress));

     }
     useEffect(() => {

          let temp_token = window.localStorage.getItem('PruthatekINFO_token');
          if (temp_token) {
               router.push('/dashboard');
          } else {
               if (token) {

                    window.localStorage.removeItem('PruthatekINFO_token');

                    try {
                         const decoded = jwt.decode(token, process.env.NEXT_PUBLIC_JWT);

                         if (decoded.avatar == '' || decoded.username == '' || decoded.accountType == '') {

                              dispatch(setUserLoginStatus(false));
                              dispatch(setUserLoginDetails({
                                   user_id: '',
                                   username: '',
                                   avatar: '',
                                   accountType: ''
                              }));

                              notifications.show({
                                   title: decoded.message || 'Something went wrong . Please try again',
                                   message: 'Something went wrong . Please try again',
                                   color: "red",
                              })


                         } else {

                              // if token is valid
                              window.localStorage.setItem('PruthatekINFO_token', token);


                              fetchFollowings(decoded.user_id);
                              dispatch(setUserLoginStatus(true));
                              dispatch(setUserLoginDetails({
                                   user_id: decoded.user_id,
                                   username: decoded.username,
                                   avatar: decoded.avatar,
                                   accountType: decoded.accountType
                              }));
                              notifications.show({
                                   title: `${decoded.username} Logged In Successfully`,
                                   message: 'We are redirecting you. please wait',
                                   color: "blue"

                              })

                              router.push('/');
                         }


                    } catch (error) {
                         window.localStorage.removeItem('PruthatekINFO_token');

                         dispatch(setUserLoginStatus(false));
                         dispatch(setUserLoginDetails({
                              user_id: '',
                              username: '',
                              avatar: '',
                              accountType: ''
                         }));

                         notifications.show({
                              title: 'Something went wrong . Please try again',
                              message: 'We are redirecting you. please wait',
                              color: "red",

                         })

                         console.error("Invalid token:", error);
                         router.push('/login');

                    }


               }

          }


     }, [])

     return (
          <div className=' p-5  text-4xl text-center' >


               login succesFull

          </div>
     )
}
