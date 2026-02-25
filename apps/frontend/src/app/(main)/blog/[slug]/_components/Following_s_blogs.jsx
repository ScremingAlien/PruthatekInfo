"use client"
import { GetTopBlogsByTopAuthor } from '@/app/utils/graphql/apis_gql';
import From_following_card from './singleCards/From_following_card'
import { useQuery } from '@tanstack/react-query';
import { gqlClient } from '@/app/_components/Wrapper';



export default function Following_s_blogs( ) {

     const { data, isLoading } = useQuery({
          queryKey: ["GetTopBlogsByTopAuthor"],
          queryFn: async () => await gqlClient.request(GetTopBlogsByTopAuthor),

     });
  
     return (

          <div className=' w-full   flex flex-col gap-5   mt-8'>
               {
                    data?.getTopBlogsByTopAuthor?.map((item, index) => {
                         return (
                              <From_following_card key={index} data={item} isComp={true} />
                         )
                    })
               }
          </div>

     )
}

