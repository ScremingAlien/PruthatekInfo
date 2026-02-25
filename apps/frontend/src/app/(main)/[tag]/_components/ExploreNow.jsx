"use client"
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ExploreNow({ data }) {
    
     return (  
          <div className='  mt-16 md:mt-6 lg:mt-20 flex  flex-col lg:flex-row justify-start items-start  gap-3 md:gap-5'>
               <p className=' text-nowrap  pt-3  text-blackish-400 dark:text-whiteish-600  text-[16px] font-manrope font-medium tracking-wide'>
                    Explore More
               </p>

          
               <div className=' flex flex-row  gap-2  md:gap-4 flex-wrap  md:mt-4'>

                    {
                         data?.foreach((item, index) => {

                              item?.tags?.map((ttt, index) => {
                                   return (
                                        <Link
                                             key={index}
                                             href={`/tags/${ttt?.replace(/ /g, "-")}`}
                                             className='flex items-center gap-2 text-[14px] md:text-[16px] font-manrope font-medium text-blackish-400 dark:text-whiteish-600 hover:text-blue-500 dark:hover:text-yellowish-500 transition-all duration-300'
                                        >
                                             {ttt}
                                             <ArrowUpRight className='w-3 h-3' />
                                        </Link>
                                   )
                              })
                                   

                         })
                    }

               </div>



          </div>
     )
}
