'use client'
import { GetRelatedBlogsBySlug } from '@/app/utils/graphql/apis_gql';
 
import From_following_card from './singleCards/From_following_card'
import { gqlClient } from '@/app/_components/Wrapper';
import { useQuery } from '@tanstack/react-query';


export default function RecommendedBlogs({ slug }) {


     const { data, isLoading } = useQuery({
          queryKey: ["GetRelatedBlogsBySlug"],
          queryFn: async () => await gqlClient.request(GetRelatedBlogsBySlug, { slug }),

     });
     
     console.log("data",data);

     return (

          <div className=' w-full   grid mt-12  grid-cols-1  md:grid-cols-1 xl:grid-cols-2 gap-10 md:gap-8 xl:gap-10 xl:gap-y-5'>
               {
                    data?.getRelatedBlogsBySlug?.map((item, index) => {
                         return (
                              <From_following_card key={index} data={item} />
                         )
                    })
               }
          </div>

     )
}

