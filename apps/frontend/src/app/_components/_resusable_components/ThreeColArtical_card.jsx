import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthorHoverCard from './AuthorHoverCard'
import { Dot } from 'lucide-react'
import IImage from './IImage'
import { timeAgo } from '@/app/utils/BasicFunctions'

export default function ThreeColArtical_card({ data }) {

     return (
          <div
               className=' group w-full '
          >
               <div className='  rounded-md  aspect-[16/9] relative overflow-hidden'>
                    {data?.thumbnail && (
                         <IImage url={data?.thumbnail} alt={data?.title}/>
                    )}
                
               </div>
               <div className=' pt-4 md:pt-5'>
                    <Link href={`/blog/${data?.slug}`} className=' line-clamp-3 font-manrope dark:font-semibold font-bold  text-[20px] md:text-[22px] dark:tracking-normal   leading-[130%] md:leading-[125%] group-hover:underline text-blackish-600  group-hover:text-blueish-500 dark:text-whiteish-500    dark:group-hover:text-yellowish-500 group-hover:underline-offset-2 '>
                         {data?.title}
                    </Link>

                    <h3 className=' tracking-[-0.03rem] mt-2 md:mt-3    font-sourceSarif leading-[130%] text-[16px] md:text-[18px] line-clamp-3  text-blackish-200 dark:text-whiteish-700'>
                         {data?.subTitle}
                    </h3>


                    <div className=' flex mt-3 md:mt-4 flex-row justify-between gap-3 items-center'>
                         <div className=' bg-blackish-200/20 rounded-full overflow-hidden relative  size-[37px] md:size-[40px]'>


                              {data?.author?.avatar && (
                                   <Image
                                        placeholder="blur"
                                        blurDataURL={data.author.avatar}
                                        src={data.author.avatar}
                                        alt={data?.title ?? 'Article Image'}
                                        fill
                                        className="object-cover"
                                   />
                              )}
 
                         </div>


                         <div className='w-[calc(100%-37px)] md:w-[calc(100%-40px)] flex flex-col pt-1'>

                              <Link href={'/'} className=' font-semibold hover:underline hover:underline-offset-2 leading-none text-[14px] relative md:text-[16px] text-blackish-400 dark:text-whiteish-300/90 font-manrope  group/author'>{data?.author?.username}

                                   <AuthorHoverCard id={'1'}
                                        clx={' w-[300px] h-[200px] z-[200]'} data={data?.author} />

                              </Link>

                              <div className='leading-none flex  items-center  text-[12px] dark:text-whiteish-700 text-blackish-300  md:text-[14px] font-manrope gap-1'>
                                   <span>{timeAgo(data?.createdAt)}</span>
                                   <Dot className=" " />
                                   <span>{data?.timeRequired ? data?.timeRequired : '3'} min Read</span>
                              </div>

                         </div>
                    </div>
               </div>
          </div>
     )
}
