"use client"

import Headings from '@/app/_components/_resusable_components/Headings'
import { queryClient } from '@/app/_components/Wrapper';
import { Avatar } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

export default function page() {

  const { user_data } = useSelector(state => state.HomeSlice);
 
  const { data, isLoading } = useQuery({
    queryKey: ["followings"],
    queryFn: async () => await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/user/followings/${user_data.user_id}`).then(res => res.json()),
    enabled: true,
  });



  return (
    <div className='p-4'>
      <Headings title='Your Followings' subTitle='' />


      <div className=' space-y-2 py-5'>
        {
          data?.data?.map((item, index) => (
            <SingleUser user_data={user_data} key={index} data={item} />
          ))
        }
      </div>
    </div>
  )
}


function SingleUser({ data ,user_data }) {
  return (
    <div className=' flex w-full flex-row justify-between  border-b border-blackish-200/30   pb-2 items-center    duration-100'>
      <Link href={`/profile/${data?.following?.slug}`} className=' flex  flex-row  items-center gap-4'>
        <Avatar radius='lg' name={data?.following?.username} src={data?.following?.avatar}
        />
        <p className=' font-manrope tracking-wide font-semibold text-[15px]'>
          {data?.following?.username}
        </p>
      </Link>
      <div className=' pr-4'>

        <button onClick={async () => {

          let response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/user/followUnfollow`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              followerId: user_data.user_id,
              followingId: data?.following?._id
            })
          })
          let res = await response.json();
          queryClient.refetchQueries(["followings"]);


        }} className=' font-medium font-inter text-red-600 text-[13px]'>
          unfollow
        </button>
      </div>
    </div>
  )
}