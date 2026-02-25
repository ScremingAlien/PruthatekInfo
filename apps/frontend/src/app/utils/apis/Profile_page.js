
import { useQuery } from '@tanstack/react-query';
import { GET_BLOG_OF_USER, GET_USER_BY_SLUG } from '../graphql/profile_gql';
import { gqlClient } from '@/app/_components/Wrapper';

export const useUserBySlug = (slug) => {
     return useQuery({
          queryKey: ['GET_USER_BY_SLUG', slug],
          queryFn: async () => {
               const data = await gqlClient.request(GET_USER_BY_SLUG, { slug });
               return data.getUserBySlug;
          },
          enabled: !!slug,
          staleTime: 1000 * 60 * 5,
     });
};



export const useBlogsByUserSlug = (slug, page, limit) => {
     return useQuery({
          queryKey: ['GET_BLOG_OF_USER', slug, page, limit],
          queryFn: async () => {
               const data = await gqlClient.request(GET_BLOG_OF_USER, {
                    slug,
                    page,
                    limit,
               });
               return data.getBlogsBySlugOfUser;
          },
          enabled: !!slug,
             staleTime: 1000 * 60 * 5,
     });
};