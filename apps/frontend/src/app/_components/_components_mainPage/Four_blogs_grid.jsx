
import { Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthorHoverCard from '../_resusable_components/AuthorHoverCard'
import Headings from '../_resusable_components/Headings'
import Skeleton from '../_resusable_components/Skeleton'

export default function Four_blogs_grid() {
     return (
          <>

               <Headings title={' Related Articles'} subTitle={'Discover more articles you may like.'} clx='   mb-8  mt-14 pt-10 border-t border-dashed  border-blackish-300/50 dark:border-whiteish-300/50  w-full md:w-[80%] mx-auto lg:w-full' />

               {/* // loading cards */}
               {/* <div className='  w-full md:w-[80%] mx-auto lg:w-full grid mt-12  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-8 xl:gap-6'>
                    {
                         [0, 1, 2, 3].map((item, index) => {
                              return (
                                   <div
                                        key={index}

                                        className=' group w-full '
                                   >
                                        <Skeleton cls={'  rounded-md  aspect-[16/9]'} />


                                        <div className=' pt-3 md:pt-4'>
                                             <Skeleton cls={' rounded-md  w-full h-6'} />
                                             <Skeleton cls={' rounded-md mt-3  w-[80%] h-6'} />

                                             <div className=' flex mt-2 md:mt-3 flex-row justify-between gap-3 items-center'>


                                                  <Skeleton cls={'  rounded-full   size-[37px] md:size-[40px]'}>

                                                  </Skeleton>


                                                  <div className='w-[calc(100%-37px)] md:w-[calc(100%-40px)] flex flex-col space-y-1 '>

                                                       <Skeleton cls={' rounded-md   w-1/2 h-5'} />
                                                       <Skeleton cls={' rounded-md   w-1/2 h-3'} />


                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              )
                         })
                    }
               </div> */}



               <div className='  w-full md:w-[80%] mx-auto lg:w-full grid mt-12  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-8 xl:gap-6'>
                    {
                         [0, 1, 2, 3].map((item, index) => {
                              return (
                                   <div
                                        key={index}
                                        className=' group w-full '
                                   >
                                        <div className='  rounded-md  aspect-[16/9] relative overflow-hidden'>
                                             <Image placeholder='blur' blurDataURL='https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080' src={'https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080'} alt={'dsfd'} fill className=' object-cover' />

                                        </div>
                                        <div className=' pt-3 md:pt-4'>
                                             <Link href={'/blog/this-is-a-test'} className=' line-clamp-3 font-manrope dark:font-semibold font-bold   text-blackish-600  group-hover:text-blueish-500 dark:text-whiteish-500    dark:group-hover:text-yellowish-500  text-[20px] md:text-[20px] dark:tracking-normal tracking-[-0.03rem] leading-[120%] md:leading-[125%] group-hover:underline group-hover:underline-offset-2 '>
                                                  Lorem ipsum dolor sit amet, consectetur ssdf  adipisicing elit. Blanditiis, quisquam.
                                             </Link>

                                             <div className=' flex mt-2 md:mt-3 flex-row justify-between gap-3 items-center'>
                                                  <div className=' bg-blackish-200/20 rounded-full overflow-hidden relative  size-[37px] md:size-[40px]'>
                                                       <Image placeholder='blur' blurDataURL='https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080' src={'https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080'} alt='sdf' fill={true} className=' object-cover' />
                                                  </div>
                                                  <div className='w-[calc(100%-37px)] md:w-[calc(100%-40px)] flex flex-col pt-1'>

                                                       <Link href={'/'} className=' font-semibold hover:underline hover:underline-offset-2 leading-none text-[14px] relative md:text-[16px] text-blackish-400 dark:text-whiteish-300/90 font-manrope  group/author'>Pruthatek.info

                                                            <AuthorHoverCard id={'1'}
                                                                 clx={' w-[300px] h-[200px] z-[110]'} />

                                                       </Link>

                                                       <div className='leading-none flex  items-center  text-[12px] dark:text-whiteish-700 text-blackish-300  md:text-[14px] font-manrope gap-1'>
                                                            <span>2 days ago</span>
                                                            <Dot className=" " />
                                                            <span>6 min Read</span>
                                                       </div>

                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              )
                         })
                    }
               </div>
          </>
     )
}

