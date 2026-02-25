import FollowAndUnFollow from '@/app/_components/_important_components/FollowAndUnFollow'
import Image from 'next/image'
import React from 'react'

export default function Author_card({ data }) {
 
  return (
    <div

      className=' group flex flex-row justify-between items-start w-full  gap-3'
    >
      <div className=' rounded-full  size-[50px] relative overflow-hidden'>
        <Image placeholder='blur' quality={30} blurDataURL={data?.avatar} src={data?.avatar} alt={data?.username} fill className=' object-cover' />

      </div>
    
      <div className=' w-[calc(100%-55px)] flex flex-row justify-between items-start'>
        <div className=' relative w-full'>
          <h3 className=' font-manrope text-blackish-600 dark:text-whiteish-400 font-bold text-[16px] md:text-[19px]'>{data?.username}</h3>

          <p className="  font-manrope text-blackish-600 dark:text-whiteish-500 font-semibold text-[14px] md:text-[15px]"> {data?.followers} <span className=" text-[14px]"> followers</span> </p>
    
          <p className="  line-clamp-3 text-[13px] md:text-[15px] leading-[130%] font-manrope font-medium mt-1  dark:text-whiteish-600 dark:tracking-wide text-blackish-300">{data?.bio}</p>

          <FollowAndUnFollow type='top_Writer' user_id={data?._id} />
        </div>

      </div>

    </div>
  )
}
