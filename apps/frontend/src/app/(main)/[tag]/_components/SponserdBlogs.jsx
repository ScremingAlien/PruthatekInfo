
import FourGrideCard from '@/app/_components/_resusable_components/FourGrideCard'
import FourGridLoadingCard from '@/app/_components/_resusable_components/FourGridLoadingCard'
import Headings from '@/app/_components/_resusable_components/Headings'
import { SponserdBlogsApi } from '@/app/utils/apis/tag_page';
 
import { BsStars } from 'react-icons/bs'

export default function SponserdBlogs({ tag }) {
 
     const { data, isLoading, error } = SponserdBlogsApi({ tag });

     return (
          <>
               <div className=' border-t border-dashed  border-blackish-300/50 dark:border-whiteish-300/50 pt-10 mt-16 '>

                    <div className='  flex   flex-col lg:flex-row justify-between items-end  gap-5 lg:gap-3'>
                         <Headings title={'Widely Explored'} subTitle={'Handpicked Reads, Loved by Our Community'} />
                         <div className='  text-blueish-500  dark:text-yellowish-500  text-[15px] md:text-[16px]    flex flex-row items-center gap-2 capitalize font-medium font-manrope'>
                              <BsStars className='   text-blueish-500  dark:text-yellowish-500 text-[17px] md:text-[20px] ' />  <span className=' text-nowrap'>Sponsored Articles</span>
                         </div>
                    </div>

               </div>

               {/* // loading cards */}
               {
                    isLoading &&
                    <FourGridLoadingCard num={4} />
               }
     
               {
                    !isLoading && data?.TagPageSponserd_Blogs.length != 0 &&

                    <div className='  w-full md:w-[80%] mx-auto lg:w-full grid   mt-4 grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-8 xl:gap-6'>
                         {
                              data?.TagPageSponserd_Blogs?.map((item, index) => {
                                   return (
                                        <FourGrideCard data={item} key={index} />
                                   )
                              })
                         }
                    </div>

               }
          </>
     )
}
