import Headings from '../_resusable_components/Headings'
import { HP_BAR_ONE_LATEST_BLOGS } from '@/app/utils/graphql/homepage_gql'
import FourGrideCard from '../_resusable_components/FourGrideCard'


export default async function HomePage_BarOne_LatestBlogs() {



     let request = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API, {
          method: "POST",
          headers: {
               "Content-Type": "application/json",
          },
          body: JSON.stringify({
               operationName: "HomePageLatestBlogsBar",
               query: HP_BAR_ONE_LATEST_BLOGS,
          }),
                    cache: 'no-store'
     })
     let { data } = await request.json();


     return (
          <>
               <div className=' border-t border-dashed  border-blackish-300/50 dark:border-whiteish-300/50 pt-10 my-16'>

                    <div className='  flex   flex-col lg:flex-row justify-between items-end  gap-5 lg:gap-3'>
                         <Headings title={'Trending Articles'} subTitle={'Hot Topics, Fresh Insights, Must-Read Stories'} />

                    </div>

               </div>
 
               {
                    data?.HomePageLatestBlogsBar?.length != 0 &&

                    <section className='  w-full md:w-[80%] mx-auto lg:w-full grid mt-12  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-8 xl:gap-6'>
                         {
                              data?.HomePageLatestBlogsBar?.map((item, index) => {
                                   return (
                                        <FourGrideCard data={item} key={index} />
                                   )
                              })
                         }
                    </section>

               }
          </>
     )
}
