"use client"
import { useEffect } from "react";
import { setFollowings, setisVerifying, setUserLoginDetails, setUserLoginStatus } from "../../utils/Redux/slices/HomePage.slice";
 
import { useDispatch, useSelector } from "react-redux";
 
export default function AuthVerfiyerInital() {
     const dispatch = useDispatch();
     const { is_user_logged_in, user_data } = useSelector(state => state.HomeSlice)

     async function checkToken() {

          let token = window.localStorage.getItem('PruthatekINFO_token');

          if (!token) {
               return;
          }
               
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

               setisVerifying(true);
               let user = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/user/followings-less/${response.user_id}`, {
                    method: 'GET',
               })

               let res = await user.json();
               dispatch(setisVerifying(false));
               dispatch(setFollowings(res));

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
          if (!is_user_logged_in) {
               checkToken();
          }
     }, [is_user_logged_in]);





     return null
}
