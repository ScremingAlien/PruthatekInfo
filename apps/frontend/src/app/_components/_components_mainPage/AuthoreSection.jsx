
import Headings from '../_resusable_components/Headings'
import Author_card from './Author_card'
import { GET_TOP_AUTHOR_OF_WEEK } from '@/app/utils/graphql/apis_gql';



export default async function AuthoreSection() {
     
     let request = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API, {
          method: "POST",
          headers: {
               "Content-Type": "application/json",
          },
          body: JSON.stringify({
               operationName: "GET_TOP_AUTHOR_OF_WEEK",
               query: GET_TOP_AUTHOR_OF_WEEK,
          }),
                    cache: 'no-store'
     })
     let { data } = await request.json();
     
     return (
          <>
               <Headings title={'Featured Voices'} subTitle={'Top class authors of the week.'} clx=' border-t border-dashed  border-blackish-300/50 dark:border-whiteish-300/50 pt-10 my-16 w-full md:w-[80%]  mx-auto lg:w-full' />

               <section className='  w-full md:w-[80%] mx-auto lg:w-full grid  grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-12'>
                    {
                         data?.getTopAuthorOfWeek?.map((item, index) => {
                              return (
                                   <Author_card key={index} data={item} />
                              )
                         })
                    }
               </section>



          </>
     )
}
