import AuthorHoverCard from '@/app/_components/_resusable_components/AuthorHoverCard'
import IImage from '@/app/_components/_resusable_components/IImage'
import { timeAgo } from '@/app/utils/BasicFunctions'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function From_following_card({ data, isComp = false }) {

  return (
    <Link
      href={'/blog/' + data?.slug}
      className='  group w-full  '
    >
      <div className='  rounded-md  aspect-[16/9] relative overflow-hidden'>
        {
          data?.thumbnail &&
          <IImage url={data?.thumbnail} alt={data?.title} />

        }

      </div>

      <div className={` ${isComp ? " pt-3 md:pt-4 w-full" : "pt-3 md:pt-4  flex flex-col justify-between h-[140px] md:h-[145px] items-start "}  `}>
        <Link href={'/blog/' + data?.slug} className=' line-clamp-3 font-manrope   text-[20px] md:text-[20px] tracking-[-0.03rem] leading-[120%] md:leading-[125%] group-hover:underline group-hover:underline-offset-2  dark:font-semibold font-bold text-blackish-600  group-hover:text-blueish-500 dark:text-whiteish-500    dark:group-hover:text-yellowish-500'>
          {data?.title}
        </Link>

        {/* // author section */}
        <div className=' flex mt-2 md:mt-3 w-full flex-row justify-between gap-3 items-center'>

          <div className=' bg-blackish-200/20 rounded-full overflow-hidden aspect-square relative  w-[36px] md:w-[40px]'>
            {
              data?.author?.avatar && <Image placeholder='blur' blurDataURL={data?.author?.avatar} src={data?.author?.avatar} alt={data?.title} fill={true} className=' aspect-square object-cover' quality={20} />
            }

          </div>

          <div className='w-[calc(100%-40px)] md:w-[calc(100%-50px)] flex flex-col pt-1'>

            <Link href={`/profile/${data?.author?.slug}`} className='text-blackish-400 dark:text-whiteish-300/90  font-semibold hover:underline hover:underline-offset-2 leading-none text-[14px] relative md:text-[16px] font-manrope  group/author'>{data?.author?.username}

              <AuthorHoverCard id={'1'} data={data?.author}
                clx={' w-[300px] h-[200px] z-[200]'} />

            </Link>
            
            <div className='leading-none flex  items-center  text-[12px] dark:text-whiteish-700 text-blackish-300 font-manrope  md:text-[14px] gap-1'>
              <span>{timeAgo(data?.createdAt)}</span>
              <Dot className="  " />
              <span>{data?.timeRequired ? data?.timeRequired : '3'} min read</span>
            </div>

          </div>
        </div>
      </div>
    </Link>
  )
}
