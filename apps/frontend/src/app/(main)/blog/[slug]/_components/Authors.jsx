"use client"

import { GET_TOP_AUTHOR_OF_WEEK } from '@/app/utils/graphql/apis_gql';
import Author_card from './singleCards/Author_card'
import { useQuery } from '@tanstack/react-query';
import { gqlClient } from '@/app/_components/Wrapper';

export default   function Authors( ) {


     const { data, isLoading } = useQuery({
          queryKey: ["GET_TOP_AUTHOR_OF_WEEK"],
          queryFn: async () => await gqlClient.request(GET_TOP_AUTHOR_OF_WEEK),

     });
 

     return (

          <div className=' w-full space-y-6 mt-8'>
               {
                    data?.getTopAuthorOfWeek?.map((item, index) => {
                         return (
                              <Author_card key={index} data={item} />
                         )
                    })
               }
          </div>

     )
}

