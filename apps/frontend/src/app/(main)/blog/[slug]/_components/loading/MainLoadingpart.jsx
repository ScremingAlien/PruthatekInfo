import Skeleton from '@/app/_components/_resusable_components/Skeleton'
import { Dot } from 'lucide-react'
import React from 'react'

export default function MainLoadingpart() {
     return (

          <div className=" w-full lg:w-[60%] ">

               <Skeleton cls={' w-full rounded-md h-5'} />


               <div className=" flex mt-8 flex-row flex-wrap gap-2">

                    <Skeleton cls={' rounded-md h-6 w-[80px]'} />
                    <Skeleton cls={' rounded-md h-6 w-[80px]'} />
                    <Skeleton cls={' rounded-md h-6 w-[80px]'} />

               </div>

               <div className=" mt-5">
                    <Skeleton cls={' rounded-md h-10 w-full'} />

                    <Skeleton cls={' rounded-md mt-3  h-5 w-full'} />
                    <Skeleton cls={' rounded-md mt-2  h-5 w-1/2'} />
                    <Skeleton cls={' rounded-md mt-2  h-5 w-1/2'} />
                    <div className=' flex mt-2 md:mt-3 flex-row justify-between gap-3 items-center'>


                         <Skeleton cls={'  rounded-full   size-[44px] md:size-[42px]'}>

                         </Skeleton>


                         <div className='w-[calc(100%-44px)] md:w-[calc(100%-42px)] flex flex-col pt-1 '>

                              <Skeleton cls={' rounded-md   w-1/2 h-5'} />
                              <Skeleton cls={' rounded-md  mt-1  w-1/3 h-4'} />


                         </div>
                    </div>


               </div>

               <Skeleton cls={' aspect-[16/9] mt-10 rounded-lg'} />

               <div className="  mt-10 space-y-2">
                    <Skeleton cls={' rounded-md   w-full h-6'} />
                    <Skeleton cls={' rounded-md   w-1/2 h-6'} />
                    <Skeleton cls={' rounded-md   w-full h-6'} />
                    <Skeleton cls={' rounded-md   w-1/2 h-6'} />
                    <Skeleton cls={' rounded-md   w-full h-6'} />
                    <Skeleton cls={' rounded-md   w-1/2 h-6'} />
                    <Skeleton cls={' rounded-md   w-full h-6'} />

               </div>



               <div className=" mb-10  dark:text-whiteish-700 text-blackish-300  w-full flex justify-center items-center gap-0.5">
                    <Dot className="  " />
                    <Dot className="  " />
                    <Dot className="  " />

               </div>



               {/* // for mobil and tabs */}
               {
                    typeof window !== "undefined" && window?.innerWidth > 880 ? "" :

                         <div className='   pb-10 mt-10 md:mt-0    border-blackish-300/50 dark:border-whiteish-300/50   w-full   mx-auto lg:w-full'>
                              <div className=' '>
                                   <div className='  flex flex-row justify-start items-center gap-3'>

                                        <button className='  text-blueish-500  dark:text-yellowish-500  text-[20px] md:text-[22px] flex flex-row items-center gap-2 capitalize font-extrabold font-manrope'>
                                             <BsStars className='   text-blueish-500  dark:text-yellowish-500 text-[26px] ' />  Sponsored Articles
                                        </button>
                                   </div>

                              </div>
                              <div className=' w-full space-y-8 mt-8'>
                                   {
                                        [0, 1, 2].map((item, index) => {
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
                              </div>

                         </div>


               }

          </div>
     )
}
