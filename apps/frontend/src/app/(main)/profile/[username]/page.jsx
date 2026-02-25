"use client"

import FourGridLoadingCard from "@/app/_components/_resusable_components/FourGridLoadingCard"
import Headings from "@/app/_components/_resusable_components/Headings"
import IImage from "@/app/_components/_resusable_components/IImage"
 
import { useBlogsByUserSlug, useUserBySlug } from "@/app/utils/apis/Profile_page"
 
import { Pagination } from "@mantine/core"
import { ChevronRight, Dot, Heading } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"
import HeaderSectionOfAuthor from "./_components/HeaderSectionOfAuthor"

export default function page() {


  const { username } = useParams();
  const [page, setPage] = useState(1);
  const limit = 16;

  const { data: user, isLoading: userLoading } = useUserBySlug(username);
  const { data: blogsData, isLoading: blogsLoading } = useBlogsByUserSlug(username, page, limit);
  const blogs = blogsData?.blog || [];
  const totalPages = blogsData?.totalPages || 1;
  
  
  return (
    <div className=" max-w-screen-2xl   gap-10 lg:gap-28  py-7 flex flex-col lg:flex-row justify-start items-start  w-[87%] md:w-[70%] lg:w-[85%] mx-auto">


      <div className=" w-full   ">


        <div className=" flex flex-row  font-medium capitalize font-manrope items-center flex-wrap justify-start text-blackish-600 dark:text-whiteish-700 gap-1 md:gap-2  text-[13px] md:text-[14px]">

          <Link href={'/'} className="   hover:underline hover:underline-offset-2   hover:text-blueish-500 dark:hover:text-yellowish-500">Home</Link>
          <ChevronRight className=" size-[16px] md:size-[18px]" />
          <p className="   hover:underline hover:underline-offset-2   hover:text-blueish-500 dark:hover:text-yellowish-500">Profile</p>

          <ChevronRight className=" size-[16px] md:size-[18px]" />

          <Link href={'/profile/' + username} className="   hover:underline hover:underline-offset-2  md:inline-block hidden   hover:text-blueish-500 dark:hover:text-yellowish-500">{String(user?.username).length > 80 ? String(user?.username).slice(0, 80) + "..." : user?.username}</Link>

          <Link href={'/blog/' + username} className="   hover:underline hover:underline-offset-2 md:hidden   hover:text-blueish-500 dark:hover:text-yellowish-500">{String(user?.username).length > 30 ? String(user?.username).slice(0, 30) + "..." : user?.username}</Link>

        </div>


        {userLoading ?
          <>
            loading
          </> :
          <>
         

            {/* <div className=" flex mt-8  bg-whiteish-500 dark:bg-blackish-400 flex-row  justify-start  items-start h-[220px]  rounded-lg">
              <div className=" w-[25%] h-full border-r-2 border-white dark:border-blackish-700  ">a</div>
              <div className=" w-[25%] h-full border-r-2 border-white dark:border-blackish-700 ">a</div>
              <div className=" w-[25%] h-full border-r-2 border-white dark:border-blackish-700 ">a</div>
              <div className=" w-[25%] h-full ">a</div>
            </div> */}
  
            <HeaderSectionOfAuthor data={user} />

          </>
        }


        


        <div className="  w-full pt-[120px]">
          <Headings title={'Latest From ' + user?.username} subTitle={'Latest From ' + username} />
        </div>


        {blogsLoading ? (
          <FourGridLoadingCard num={8} />
        ) : (
          <div className="w-full mx-auto lg:w-full grid mt-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-8 xl:gap-6">
            {blogs.map((item, index) => (
              <Link
                href={'/blog/' + item?.slug}
                key={index}
                className='group w-full'
              >
                <div className='rounded-md aspect-[16/9] relative overflow-hidden'>
                  <IImage alt={item?.title} url={item?.thumbnail} quality={80} />
                </div>
                <div className='pt-3 md:pt-4'>
                  <Link href={'/blog/' + item?.slug} className='line-clamp-3 font-manrope dark:font-semibold font-bold text-blackish-600 group-hover:text-blueish-500 dark:text-whiteish-500 dark:group-hover:text-yellowish-500 text-[20px] md:text-[20px] dark:tracking-normal tracking-[-0.03rem] leading-[120%] md:leading-[125%] group-hover:underline group-hover:underline-offset-2'>
                    {item?.title}
                  </Link>
                </div>
              </Link>
            ))}
          </div>
        )}


        <div className="flex w-full justify-center items-center my-8 mt-16">
          <Pagination
            total={totalPages}
            value={page}
            onChange={setPage}
            color="rgb(31, 31, 29)"
            size="lg"
          />
        </div>


      </div>
    </div>
  )
}


/*

followers , following


follow button,

// links from the user like insta


joining date in 4 cards



*/