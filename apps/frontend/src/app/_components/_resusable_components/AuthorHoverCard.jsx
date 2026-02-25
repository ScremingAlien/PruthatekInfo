
import Image from 'next/image'
import React from 'react'
import FollowAndUnFollow from '../_important_components/FollowAndUnFollow'
import Link from 'next/link'


export default function AuthorHoverCard({ id, clx, data }) {

     return (
          <div className={` hidden md:block  absolute z-20 top-6 duration-300 rounded-lg -translate-x-[25%] origin-top opacity-0 group-hover/author:opacity-100 shadow-[#5555555e_0px_2px_9px_1px]  scale-y-0 group-hover/author:scale-y-100  p-4  bg-white dark:bg-white/80  dark:backdrop-blur-md  ${clx} `}>

               <div className=" flex flex-row justify-between items-end">

                    <div className='bg-blackish-200/20  rounded-full overflow-hidden relative   md:size-[50px]'>

                         {data?.avatar && (
                              <Image
                                   quality={5}
                                   placeholder="blur"
                                   blurDataURL={data.avatar}
                                   src={data.avatar}
                                   alt={data?.username ?? 'Article Image'}
                                   fill
                                   className="object-cover"
                              />
                         )}


                    </div>

                    <FollowAndUnFollow type='Author_Hover' user_id={data?._id} />

               </div>

               <Link href={`/profile/${data?.slug}`} className=" pt-2   block font-manrope text-blackish-700 font-semibold text-[19px] hover:underline underline-offset-2">{data?.username} </Link>
 

               <p className=" mt-2 text-black/60     font-manrope text-[15px]"> {data?.followers} <span className=" text-[14px]"> followers</span> </p>
               <p className=" tracking-[-0.02rem] dark:tracking-normal  line-clamp-3 text-[15px] leading-[130%] font-manrope   mt-2 text-black/80">{data?.bio}</p>
          </div>
     )
}
