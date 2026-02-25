"use client"

import { FOOTER_BLOGS } from '@/app/utils/graphql/apis_gql';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { gqlClient } from '../Wrapper';
import Link from 'next/link';
import Skeleton from './Skeleton';

export default function Blogs_List_footer() {

     const { data, isLoading, error } = useQuery({
          queryKey: ["FOOTER_BLOGS"],
          queryFn: () => gqlClient.request(FOOTER_BLOGS),
     });


     return (
          <>
               {
                    isLoading ? <>  <Skeleton cls={'w-full h-4 rounded-md'} />
                         <Skeleton cls={'w-full h-4 rounded-md'} />
                         <Skeleton cls={'w-full h-4 rounded-md'} />
                         <Skeleton cls={'w-full h-4 rounded-md'} />
                         <Skeleton cls={'w-full h-4 rounded-md'} />
                         <Skeleton cls={'w-full h-4 rounded-md'} />
                         <Skeleton cls={'w-full h-4 rounded-md'} /></>
                         :
                         <>
                              {
                                   data?.getRandomBlogsFooterBlogs?.map((item, index) => {
                                        return (
                                             <div key={index} className=" w-full text-whiteish-600  leading-[110%] relative flex justify-between flex-row">
                                                  <div className='    w-8  text-[15px] md:text-[16px] '>
                                                        { index + 1 > 9 ? index + 1 : "0" + (index + 1) }
                                                  </div>
                                                  <Link href={"/blog/"+item?.slug} className=" md:tracking-wide   w-[95%]     hf ">
                                                       {item?.title}
                                                  </Link>

                                             </div>
                                        )
                                   })
                              }
                         </>
               }





          </>
     )
}
