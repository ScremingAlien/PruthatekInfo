import Headings from '@/app/_components/_resusable_components/Headings'
import FourGridLoadingCard from '@/app/_components/_resusable_components/FourGridLoadingCard'
import FourGrideCard from '@/app/_components/_resusable_components/FourGrideCard'
import { LatestBlogsByTagApi } from '@/app/utils/apis/tag_page'


export default function LatestBlogsByTag({ tag }) {


     const { data, isLoading, error } = LatestBlogsByTagApi({ tag });
     
     
     return (
          <>
               <div className=' border-t border-dashed  border-blackish-300/50 dark:border-whiteish-300/50 pt-10 my-16'>

                    <div className='  flex   flex-col lg:flex-row justify-between items-end  gap-5 lg:gap-3'>
                         <Headings title={'Trending Articles'} subTitle={'Hot Topics, Fresh Insights, Must-Read Stories'} />

                    </div>

               </div>


               {/* // loading cards */}
               {
                    isLoading &&
                    <FourGridLoadingCard />
               }

               {
                    !isLoading && data?.TagPageLatestBlogsBar.length != 0 &&

                    <div className='  w-full md:w-[80%] mx-auto lg:w-full grid mt-12  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-8 xl:gap-6'>
                         {
                              data?.TagPageLatestBlogsBar?.map((item, index) => {
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
