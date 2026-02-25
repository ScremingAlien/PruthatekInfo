 
import FourGrideCard from '../_resusable_components/FourGrideCard'
 
import { HP_BAR_THREE_LIKES_BAR } from '@/app/utils/graphql/homepage_gql'

export default async function HomePage_BarOne_LikedBlogs() {

    
     let data = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API, {
          method: "POST",
          headers: {
               "Content-Type": "application/json",
          },
          body: JSON.stringify({
               operationName: "HomePageHighestFiveBlogs_Likes_Bar",
               query: HP_BAR_THREE_LIKES_BAR,
          }),
                    cache: 'no-store'
     })
     let res = await data.json();

     return (
          <>
               <div className=' '>

                    <div className='  flex   flex-col lg:flex-row justify-between items-end  gap-5 lg:gap-3 '>

                         <div className={' w-full pt-8'}>
                              <div className=' space-y-1 md:space-y-2 flex flex-row justify-start items-center gap-3'>

                                   <h1 className=' text-blue-600 dark:text-yellowish-500 text-[26px] md:text-[28px] capitalize leading-[125%] font-bold font-inter'>
                                        Most Loved Articles by Our Readers
                                   </h1>
                              </div>
                              <p className='  pt-2 text-blackish-200  dark:text-whiteish-700    font-inter font-medium  leading-[125%] text-[14px]  md:text-[17px]'>Stories That Captivate, Words That Inspire</p>
                         </div>

                    </div>

               </div>



               {
                    res?.data?.HomePageHighestFiveBlogs_Likes_Bar?.length != 0 &&

                    <section className='  w-full md:w-[80%] mx-auto lg:w-full grid mt-12  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-8 xl:gap-6'>
                         {
                              res?.data?.HomePageHighestFiveBlogs_Likes_Bar?.map((item, index) => {
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
