

import { useQuery } from '@tanstack/react-query';

import { gqlClient } from '@/app/_components/Wrapper';
import { TP_BAR_ONE_LATEST_BLOGS, TP_SPONSERD_BLOGS } from '../graphql/Tagpage_gql';


export const LatestBlogsByTagApi = ({ tag }) => {

     return useQuery({
          queryKey: ["TP_BAR_ONE_LATEST_BLOGS"],
          queryFn: async () => {
               return await gqlClient.request(TP_BAR_ONE_LATEST_BLOGS, {
                    tag: String(tag)
               })
          },
            staleTime: 1000 * 60 * 5,
     });
};

export const SponserdBlogsApi = ({ tag }) => {
     
     return useQuery({

          queryKey: ["TP_SPONSERD_BLOGS"],
          queryFn: async () => {
               return await gqlClient.request(TP_SPONSERD_BLOGS, {
                    tag: String(tag)
               })
          },
            staleTime: 1000 * 60 * 5,
     });
};

