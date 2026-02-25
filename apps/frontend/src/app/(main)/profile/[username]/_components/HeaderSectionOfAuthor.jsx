import FollowAndUnFollow from '@/app/_components/_important_components/FollowAndUnFollow'
import IImage from '@/app/_components/_resusable_components/IImage'
import React from 'react'

export default function HeaderSectionOfAuthor({ data }) {
     console.log(data);

     return (
          <>
               <div className=' mt-16 w-full flex  flex-col  gap-6 md:flex-row justify-between items-center'>

                    <div className="  overflow-hidden rounded-3xl     w-[120px]  lg:w-[150px] aspect-square   relative">
                         <IImage url={data?.avatar} alt={data?.username} />
                    </div>
          
                    <div className=' space-y-4 w-full md:w-fit  lg:space-y-8'>

                         <div className=' flex flex-row font-inter    text-[14px] md:text-[16px] lg:text-[18px]   md:justify-center   w-full   justify-between gap-6 lg:gap-12'>
                              <div className=' flex flex-col items-center'>
                                   <span className=' text-[20px] font-semibold'>{data?.TotalFollowers || '0'}</span>
                                   <span>Followers</span></div>
                              <div className=' flex flex-col items-center'>
                                   <span className=' text-[20px] font-semibold'>{data?.TotalFollowing || '0'}</span>
                                   <span>Followings</span></div>
                              <div className=' flex flex-col items-center'>
                                   <span className=' text-[20px] font-semibold'>{data?.followers || '0'}</span>
                                   <span>Articals Writted</span></div>
                         </div>


                         <div className=' flex flex-row justify-end'>
                             <FollowAndUnFollow type='author_profile' user_id={data?._id} />
                         </div>
                    </div>


               </div>


               <div className="  pt-8 md:pt-5   w-full  ">
                    <h1 className="  text-[24px] md:text-[30px] text-blueish-500 dark:text-yellowish-500 font-inter font-[700] capitalize">{data?.username}</h1>
                    <p className="  text-[16px]  md:text-[18px]  md:font-medium font-manrope text-blackish-600 dark:text-whiteish-700">{data?.bio}</p>
               </div>
          </>

     )
}
