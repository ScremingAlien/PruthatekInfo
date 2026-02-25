"use client"
import { Avatar } from "@mantine/core";
import { EllipsisVertical } from "lucide-react";
import { useSelector } from "react-redux";


export default function page() {

     const { user_data, is_user_logged_in } = useSelector(state => state.HomeSlice);
     

     return (
          <div className=" flex flex-row justify-between items-start ">

               <div>
                    <h1 className=" font-manrope  font-bold text-blackish-200 text-[32px]">Hello, <span className=" capitalize text-blueish-500 dark:text-yellow-500">{user_data.username}</span></h1>
               </div>
               <div className="   w-[250px]">


                    {
                         is_user_logged_in &&
                         <>
                              <div className='  bg-gray-50  flex  flex-col items-center py-4 relative  rounded-3xl   w-full'>
                                   <div className=" absolute top-3 right-3">
                                        <button className=" rounded-full p-2 bg-white">
                                             <EllipsisVertical size={20} />
                                        </button>
                                   </div>
                                   <Avatar
                                        variant='outline'
                                        size={'xl'}
                                        radius={'xl'}
                                        name={user_data.username || ''} src={user_data?.avatar || null} />

                                   <span className=' font-inter font-semibold text-[18px] pt-4 pb-1'>
                                        {user_data.username}
                                   </span>
                                   <span className=" font-inter  text-blue-500 dark:text-yellow-500 font-medium text-[13px]">
                                        {user_data.accountType}
                                   </span>
                              </div>

                         </>
                    }
               </div>
          </div>
     )
}
