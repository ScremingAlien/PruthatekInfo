import AuthorHoverCard from '@/app/_components/_resusable_components/AuthorHoverCard'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Reccomended_card() {
  return (
    <div
   
      className=' group w-full '
    >
      <div className='  rounded-md  aspect-[16/9] relative overflow-hidden'>
        <Image placeholder='blur' blurDataURL='https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080' src={'https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080'} alt={'dsfd'} fill className=' object-cover' />

      </div>
      <div className=' pt-3 md:pt-4'>
        <Link href={'/blog/this-is-a-test'} className='  line-clamp-3 font-manrope dark:font-semibold font-bold   text-blackish-600  group-hover:text-blueish-500 dark:text-whiteish-500    dark:group-hover:text-yellowish-500  text-[20px] md:text-[19px] dark:tracking-normal tracking-[-0.03rem] leading-[120%] md:leading-[125%] group-hover:underline group-hover:underline-offset-2  '>
          Lorem ipsum dolor sit amet, consectetur ssdf  adipisicing elit. Blanditiis, quisquam.
        </Link>

        <div className=' flex mt-2 md:mt-3 flex-row justify-between gap-3 items-center pt-2'>
          <div className=' bg-blackish-200/20 rounded-full overflow-hidden relative   size-[36px] md:size-[40px]'>
            <Image placeholder='blur' blurDataURL='https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080' src={'https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHw4fHxwaGFybWF8ZW58MHx8fHwxNzM5OTc1MzUzfDA&ixlib=rb-4.0.3&q=80&w=1080'} quality={30} alt='sdf' fill={true} className=' object-cover aspect-square' />
          </div>

          <div className='w-[calc(100%-37px)] md:w-[calc(100%-40px)] flex flex-col  '>

            <Link href={'/'} className=' font-semibold hover:underline hover:underline-offset-2 leading-none text-[14px] md:text-[16px] font-manrope relative text-blackish-400 dark:text-whiteish-300/90  group/author'>Pruthatek.info

              <AuthorHoverCard clx={' z-[110] w-[300px] h-[200px] dark:backdrop-blur-xl'} />
            </Link>

            <div className='leading-none flex  items-center  text-[12px] dark:text-whiteish-700 text-blackish-300 font-manrope  md:text-[14px] gap-1'>
              <span>2 days ago</span>
              <Dot className="  " />
              <span>6 min Read</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
