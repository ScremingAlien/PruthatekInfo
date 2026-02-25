
import Link from "next/link";
import IImage from "../../_resusable_components/IImage";


export default function Swiper_Card({ data }) {
  return (
    <Link href={'/blog/' + data?.slug} className=' group relative  block  w-full h-full rounded-lg overflow-hidden  dark:bg-blackish-500 bg-whiteish-500 lg:bg-black'>

      <div className='  relative w-full  aspect-[16/9]  z-0 '>
        {data?.thumbnail &&
          <IImage alt={data?.title} url={data?.thumbnail} quality={80} />
        }
      </div>
      <div className='   w-full    h-[220px]  md:h-[200px] flex flex-col  md:justify-end  justify-between  z-20   absolute bottom-0  md:dark:bg-[linear-gradient(0deg,_#252523_0%,_#252523_30%,_rgba(0,212,255,0)_100%)]  md:bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(0,0,0,1)_10%,_rgba(0,212,255,0)_100%)]  py-5 px-3 md:p-5 ' >

        <p  className='     underline-offset-2  line-clamp-3 mb-2 text-[17px]  md:text-[24px]  font-bold   dark:text-whiteish-500  text-black md:text-white font-manrope leading-[130%] '>
          {data?.title}
        </p>
        <p className=" md:hidden  tracking-[-0.03rem]       font-sourceSarif leading-[135%] text-[16px]    line-clamp-3     text-blackish-200 dark:text-whiteish-700">{data?.subTitle}</p>

        <div className=' mt-4  group/auth dark:text-whiteish-500  font-manrope space-x-1 clear-start text-black md:text-white text-[13px] md:text-[16px] '>
          <span>by </span>
          <p  className='  inline group-hover/auth:underline underline-offset-2 text-[14px] md:text-[17px] font-bold tracking-[-0.003rem]'>{data?.authorDetails?.username}</p>
        </div>
      </div>


    </Link>
  )
}
