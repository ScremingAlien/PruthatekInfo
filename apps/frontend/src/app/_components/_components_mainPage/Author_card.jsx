import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FollowAndUnFollow from '../_important_components/FollowAndUnFollow'

export default function Author_card({ data }) {

     return (
          <div className=' group  flex flex-col justify-between h-full '>

               <div className=' w-full'>

                    <div className=' relative h-[100px] aspect-square '>
                         <Image fill placeholder='blur' blurDataURL={data?.avatar ? data.avatar : null} src={data?.avatar ? data.avatar : null} alt='temp' className=' object-cover rounded-3xl' />
                    </div>

                    <div className=' pt-3'>
                         <Link href={`/profile/${data?.slug}`} className=' group-hover:underline  underline-offset-2 font-manrope text-[22px] tracking-[0.02rem] font-bold dark:text-whiteish-400 group-hover:text-blueish-500 dark:group-hover:text-yellowish-500'>{data?.username}</Link>
                         <p className='pb-2  font-inter'>{data?.followers} followers</p>
                         <p className=' font-inter dark:text-whiteish-700 text-[16px] line-clamp-4'>{data?.bio}</p>

                    </div>
               </div>

               <div className=' flex flex-row justify-start items-center gap-3 pt-6'>

                    <FollowAndUnFollow type='Author_card' user_id={data?._id} />


               </div>
          </div>
     )
}
