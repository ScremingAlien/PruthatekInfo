import Headings from '../_resusable_components/Headings'
import { BsStars } from 'react-icons/bs'
import { HP_SPONSERD_BLOGS } from '@/app/utils/graphql/homepage_gql'
import FourGrideCard from '../_resusable_components/FourGrideCard'

export default async function SponserdBlogsHome() {


     let request = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API, {
          method: "POST",
          headers: {
               "Content-Type": "application/json",
          },
          body: JSON.stringify({
               operationName: "HomePageSponserd_Blogs",
               query: HP_SPONSERD_BLOGS,
          }),
                    cache: 'no-store'
     })
     let { data } = await request.json();

     return (
          <>
               <div className=' border-t border-dashed  border-blackish-300/50 dark:border-whiteish-300/50 pt-10 mt-16 '>

                    <div className='  flex   flex-col lg:flex-row justify-between items-end  gap-5 lg:gap-3'>
                         <Headings title={'Top Recommended'} subTitle={'Handpicked Reads, Loved by Our Community'} />
                         <div className='  text-blueish-500  dark:text-yellowish-500  text-[15px] md:text-[16px]    flex flex-row items-center gap-2 capitalize font-medium font-manrope'>
                              <BsStars className='   text-blueish-500  dark:text-yellowish-500 text-[17px] md:text-[20px] ' />  <span className=' text-nowrap'>Sponsored Articles</span>
                         </div>
                    </div>

               </div>
          

               {
                    data?.HomePageSponserd_Blogs?.length != 0 &&

                    <section className='  w-full md:w-[80%] mx-auto lg:w-full grid   mt-4 grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-8 xl:gap-6'>
                         {
                              data?.HomePageSponserd_Blogs?.map((item, index) => {
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
