

import { useQuery } from '@tanstack/react-query';

import { gqlClient } from '@/app/_components/Wrapper';
import { GET_TOP_AUTHOR_OF_WEEK, GetRelatedBlogsBySlug, GetTopBlogsByTopAuthor } from '../graphql/apis_gql';


export const SponserdBlogsAPi = () => {
     return useQuery({

          queryKey: ["GetTopBlogsByTopAuthor"],
          queryFn: async () => { return await gqlClient.request(GetTopBlogsByTopAuthor) },
          staleTime: 1000 * 60 * 5,

     });
};

export const TopAuthorAPi = () => {
     return useQuery({

          queryKey: ["GET_TOP_AUTHOR_OF_WEEK"],

          queryFn: async () => { return await gqlClient.request(GET_TOP_AUTHOR_OF_WEEK) },
          staleTime: 1000 * 60 * 5,
     });
};
export const BlogsFromTopAuthorAPi = () => {
     return useQuery({

          queryKey: ["GetTopBlogsByTopAuthor"],
          queryFn: async () => { return await gqlClient.request(GetTopBlogsByTopAuthor) },
          staleTime: 1000 * 60 * 5,
     });
};



export const RelatedBlogsAPi = ({ slug }) => {

     return useQuery({
          queryKey: ["GetRelatedBlogsBySlug"],
          queryFn: async () => { return await gqlClient.request(GetRelatedBlogsBySlug, { slug: slug }) },
          enabled: !!slug,

     });
};

