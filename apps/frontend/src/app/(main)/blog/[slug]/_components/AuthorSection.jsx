import FollowAndUnFollow from '@/app/_components/_important_components/FollowAndUnFollow'
import AuthorHoverCard from '@/app/_components/_resusable_components/AuthorHoverCard'
import { timeAgo } from '@/app/utils/BasicFunctions'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AuthorSection({ data }) {
     return (
          <>
               <div className=' flex mt-2 md:mt-3 flex-row justify-between gap-3 items-center'>
                    <div className='bg-blackish-200/20  rounded-full overflow-hidden relative  aspect-square w-[42px] md:w-[40px]'>
                         {
                              data?.author?.avatar &&
                              <Image quality={20} placeholder='blur' blurDataURL={data?.author?.avatar} src={data?.author?.avatar} alt={data?.author?.username} fill={true} className=' object-cover aspect-square' />
                         }

                    </div>
                    <div className='w-[calc(100%-44px)]   md:w-[calc(100%-42px)] flex flex-col '>

                         <div className=" gap-1 flex   items-center">
                              <Link href={'/'} className=' font-semibold hover:underline hover:underline-offset-2 leading-none text-[14px] md:text-[17px] relative group/author font-manrope text-blackish-400 dark:text-whiteish-300/90'>
                                   {data?.author?.username}

                                   <AuthorHoverCard id={'1'} data={data?.author}
                                        clx={' w-[300px] h-[200px] dark:backdrop-blur-xl'} />

                              </Link>
 

                              <Dot className=" dark:text-whiteish-700 text-blackish-300  " />
                             <FollowAndUnFollow type='Blog_page' user_id={data?.author?._id} />
                         </div>

                         <div className='leading-none flex  items-center  text-[12px] dark:text-whiteish-700 text-blackish-300  md:text-[15px] font-manrope gap-1'>
                              <span>{timeAgo(data?.createdAt)}</span>
                              <Dot className="  " />
                              <span>{data?.timeRequired ? data?.timeRequired : '3'} min read</span>
                         </div>

                    </div>
               </div>
          </>
     )
}
