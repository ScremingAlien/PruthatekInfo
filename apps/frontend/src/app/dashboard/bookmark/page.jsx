"use client"
import Headings from '@/app/_components/_resusable_components/Headings'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import CreateLIb from './_component/CreateLIb'
import IImage from '@/app/_components/_resusable_components/IImage'
 
export default function page() {

     const { user_data } = useSelector(state => state.HomeSlice);

     const { data, isLoading } = useQuery({
          queryKey: ["bookmarks"],
          queryFn: async () => await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/user/lib/${user_data.user_id}`).then(res => res.json()),
          enabled: true,
     });

     return (
          <div className=' p-4   '>

               <Headings title='Your Bookmarks' subTitle='All the bookmark at one place' />
               <CreateLIb />

               {
                    isLoading &&
                    <div className=' w-full pt-5 grid grid-cols-4 gap-4'>
                         {
                              [0, 1, 2, 3].map((item, index) => (
                                   <SingleCard key={index} data={item} />
                              ))
                         }
                    </div>

               }
               {
                    !isLoading && data?.data?.length != 0 &&
                    <div className=' w-full pt-5 grid grid-cols-4 gap-4'>
                         {
                              data?.data?.map((item, index) => (
                                   <SingleCard key={index} data={item} />
                              ))
                         }
                    </div>

               }
          </div>
     )
}


function SingleCard({ data }) {
     return (
          <Link href={'/dashboard/bookmark/' + data?._id} className=' w-full relative pt-5 flex flex-col justify-between '>

             
               <div className=' relative w-full  h-[150px]  '>

                    {data?.thumbnail ?

                         <IImage url={data?.thumbnail} alt={data?.title} cls='  absolute top-0 left-0 w-full z-40   h-full  rounded-xl  bg-gray-50' /> :
                         <>

                              <div className=' absolute top-0 left-0 w-full z-40   h-full  rounded-xl  bg-gray-50'>
                              </div>
                         </>

                    }
                    <div className=' absolute -top-1.5 z-30 left-1/2 w-[85%]   h-[50%] bg-[#cbcbcb] rounded-xl -translate-x-1/2'></div>
                    <div className=' absolute z-20 -top-2.5 left-1/2 w-[75%]   h-[50%] bg-gray-200 rounded-xl -translate-x-1/2'></div>

               </div>

               <p className=' font-manrope capitalize font-medium text-[16px] pt-2 '>
                    {data?.title}
               </p>
          </Link>
     )
}