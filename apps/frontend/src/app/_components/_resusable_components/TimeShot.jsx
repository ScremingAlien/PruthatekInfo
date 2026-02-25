"use client"
import { timeAgo } from '@/app/utils/BasicFunctions'
import { Dot } from 'lucide-react'
 

export default function TimeShot({data}) {
     return (
          <div className='leading-none flex  items-center  text-[12px] dark:text-whiteish-700 text-blackish-300  md:text-[14px] font-manrope gap-1'>
               <span>{timeAgo(data?.createdAt)}</span>
               <Dot className=" " />
               <span>{data?.timeRequired ? data?.timeRequired : '3'} min read</span>
          </div>
     )
}
