"use client"

import { useRouter } from "next/navigation";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notifications } from '@mantine/notifications';
import { setFollowings, setisVerifying } from "@/app/utils/Redux/slices/HomePage.slice";

export default function FollowAndUnFollow({ type, user_id }) {

     const router = useRouter();
     const [loading, setLoading] = useState(false)
     const { user_data, isVerifying, is_user_logged_in, followings } = useSelector(state => state.HomeSlice);
     const dispatch = useDispatch();

     async function FollowHandler(e) {

          e.stopPropagation();

          if (!is_user_logged_in) {
               notifications.show({
                    title: `Please Login to Follow anyone.`,
                    message: 'We are redirecting you. please wait',
                    color: "blue"
               })
               router.push("/login");
          } else {

               try {

                    setLoading(true)

                    let data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/user/followUnfollow`, {
                         method: 'POST',
                         headers: {
                              "Content-Type": "application/json"
                         },
                         body: JSON.stringify({
                              followerId: user_data.user_id,
                              followingId: user_id
                         })
                    })
                    let res = await data.json();
                  
                    if(res.message == "Followed successfully!"){
                          dispatch(setFollowings([...followings, user_id]));
                    }else{
                         dispatch(setFollowings(followings.filter((id) => id !== user_id)));
                    }
                     


               } catch (error) {
                    console.log(error);
                    notifications.show({
                         title: `Please try again.`,
                         message: 'We are trying to solve problem.',
                         color: "red"
                    })
               } finally {
                    setLoading(false)
               }
          }
     }

     return (
          <>
               {
                    type == 'Author_card' ?
                         <button onClick={FollowHandler} className=" text-[13px] md:text-[15px] font-manrope bg-blackish-500  dark:bg-whiteish-400/10 text-white font-normal px-5  py-1.5 md:py-2 rounded-full tracking-[0.03rem]  border border-blackish-500 dark:border-whiteish-400/0 ">
                              <span className='  '>{isVerifying ? "Loading" : loading ? "Loading" : Array.isArray(followings) && followings.includes(user_id)
                                   ? "Following" : "Follow"}</span>
                         </button> : null
               }
               {
                    type == "Author_Hover" ?
                         <button onClick={FollowHandler} className=" text-[14px] font-manrope bg-blackish-500 text-white font-normal px-3.5 py-2 rounded-full tracking-wide">{isVerifying ? "Loading" : loading ? "Loading" : Array.isArray(followings) && followings.includes(user_id)
                              ? "Following" : "Follow"}</button> : null
               }
               {
                    type == "Blog_page" ?
                         <button onClick={FollowHandler} className=" font-manrope text-[14px] md:text-[16px] font-medium text-green-600">{isVerifying ? "Loading" : loading ? "Loading" : Array.isArray(followings) && followings.includes(user_id)
                              ? "Following" : "Follow"}</button> : null
               }
               {
                    type == "top_Writer" ?
                         <button onClick={FollowHandler} className=" text-[13px] md:text-[14px] font-manrope bg-blackish-500  dark:bg-whiteish-400/20 text-white font-normal px-3.5  py-1.5 md:py-2 rounded-full absolute top-0 right-0 tracking-[0.03rem]  ">
                              <span className='  '>{isVerifying ? "Loading" : loading ? "Loading" : Array.isArray(followings) && followings.includes(user_id)
                                   ? "Following" : "Follow"}</span>

                         </button>
                         : null
               }
               {
                    type == "author_profile" ?

                         <button onClick={FollowHandler} className=" text-[13px] md:text-[15px] font-manrope bg-blackish-500  dark:bg-whiteish-400/10 text-white font-normal px-5  py-1.5 md:py-2 rounded-full tracking-[0.03rem]  border border-blackish-500 dark:border-whiteish-400/0 ">
                              <span className='  '>{isVerifying ? "Loading" : loading ? "Loading" : Array.isArray(followings) && followings.includes(user_id)
                                   ? "Following" : "Follow"}</span>
                         </button>
                         : null
               }

          </>
     )

}