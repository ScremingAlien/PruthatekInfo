'use client'

import { AlignJustify, Grid2x2Plus } from 'lucide-react'
import React, { useState } from 'react'
import DarkMode from '../DarkMode'
import Link from 'next/link'
import { Avatar } from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux'

import { MdOutlineClose } from "react-icons/md";
import { setUserLoginDetails, setUserLoginStatus } from '@/app/utils/Redux/slices/HomePage.slice'
import SearchBar from './SearchBar'

export default function MainNav_sideButton({ data, showSearch, setShowSearch }) {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

     const { is_user_logged_in, user_data } = useSelector(state => state.HomeSlice)
     const dispatch = useDispatch()
     const [isOpen, setisOpen] = useState(false);

 
     return (
          <div className=" flex justify-center items-center gap-3 md:gap-8">
               <SearchBar setShowSearch={setShowSearch} showSearch={showSearch} />
             


               <DarkMode />

               {
                    is_user_logged_in ?
                         <>
                              <div className=' relative'>

                                   <button onBlur={() => { setisOpen(false) }} className={` absolute top-0 -right-1 rounded-2xl  bg-white shadow-lg  ${isOpen ? " scale-y-100    opacity-100" : " opacity-0 scale-y-0   "} duration-150  h-[300px]  ease-in z-50 w-[300px] px-4 py-3  text-black origin-top-right flex flex-col justify-between`}>

                                        <div className=' w-full  flex justify-between border-b border-blackish-200/40 pb-3 items-center'>
                                             <div className='  flex flex-row items-center gap-3'>

                                                  <Avatar
                                                       styles={{
                                                            root: {
                                                                 width: '35px',
                                                                 height: '35px',
                                                                 borderRadius: "14px"
                                                            }
                                                       }}
                                                       variant='outline'
                                                       name={user_data.username || ''} src={user_data?.avatar || null} />
                                                  <div className=' '>
                                                       <p className=' font-manrope font-semibold tracking-wide text-[14px]'>{user_data.username}</p>
                                                       <p className=' text-start font-manrope tracking-wide text-blueish-500 dark:text-yellow-500 text-[13px]'>{user_data.accountType}</p>
                                                  </div>
                                             </div>
                                             <div className='  p-1.5' onClick={() => { setisOpen(false) }}>
                                                  <MdOutlineClose className=' text-xl' />
                                             </div>

                                        </div>
                                        <div className=' w-full flex flex-col justify-between h-full  font-inter  pt-3'>
                                             <div className=' w-full space-y-0 '>


                                                  <Link onClick={() => { setisOpen(false) }} href={'/dashboard'} className=' w-full hover:border-blackish-100 border border-transparent py-2 hover:bg-blackish-100/20 rounded-lg  flex gap-3 p-1  items-center'>
                                                       <Grid2x2Plus size={20} strokeWidth={1.4} />
                                                       Dashboard</Link>

                                             </div>

                                             <button
                                                  onClick={() => {
                                                       dispatch(setUserLoginStatus(false));
                                                       dispatch(setUserLoginDetails({ user_id: '', username: '', avatar: '', accountType: '' }));
                                                       window.localStorage.removeItem('PruthatekINFO_token');
                                                       window.location.replace('/');
                                                  }}

                                                  className=' w-full bg-red-500  rounded-lg py-2 text-white'>Logout</button>

                                        </div>
                                   </button>

                                   <Avatar
                                        onClick={() => { setisOpen(true) }}
                                        styles={{
                                             root: {
                                                  width: '35px',
                                                  height: '35px',
                                                  borderRadius: "14px"
                                             }
                                        }}
                                        name={user_data.username || ''} src={user_data?.avatar || null} />

                              </div>

                         </> :
                         <>
                              <Link href={'/login'} className="  hidden lg:block select-none font-nunito  bg-whiteish-400 font-medium  text-[12px] md:text-[16px]  rounded-full  px-2.5 md:px-4 py-1.5 text-blackish-700">
                                   Get Started
                              </Link>
                         </>
               }



               <AlignJustify
                    size={26}
                    className="lg:hidden cursor-pointer text-white/90 z-50"
                    onClick={() => setMobileMenuOpen(true)}
                    absoluteStrokeWidth
                    strokeWidth={1.5}
               />
               {mobileMenuOpen && (
                    <div className=" fixed  h-screen  top-0 left-0  w-full z-[999] bg-black text-white flex flex-col p-6 px-8 overflow-y-auto transition-all duration-300 animate-fade-slide-down">

                         {/* Top Close Row */}
                         <div className="flex justify-between items-center mb-8">
                              <h2 className="text-xl font-normal font-inter  opacity-70">Menu</h2>
                              <MdOutlineClose
                                   size={28}
                                   onClick={() => setMobileMenuOpen(false)}
                                   className="cursor-pointer"
                              />
                         </div>

                         {/* Navigation Links */}
                         <nav className="space-y-6 text-lg font-inter font-medium">
                              {data?.map((item, index) => (
                                   <div key={index}>
                                        <Link
                                             href={item.slug}
                                             onClick={() => setMobileMenuOpen(false)}
                                             className="block hover:text-blueish-500 transition"
                                        >
                                             {item.name}
                                        </Link>

                                        {item.subcategory && (
                                             <Link
                                                  href={item.subcategory.slug}
                                                  onClick={() => setMobileMenuOpen(false)}
                                                  className="block ml-4 mt-1 text-sm text-gray-400 hover:text-yellow-400 transition"
                                             >
                                                  {item.subcategory.name}
                                             </Link>
                                        )}
                                   </div>
                              ))}
                         </nav>


                    </div>
               )}

          </div>
     )
}
