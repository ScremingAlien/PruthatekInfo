

import { useQuery } from '@tanstack/react-query';

import { gqlClient } from '@/app/_components/Wrapper';
import { HP_BAR_THREE_LIKES_BAR, HP_SLIDER } from '../graphql/homepage_gql';


export const HP_SLIDER_API = () => {
     return useQuery({
          queryKey: ["HP_SLIDER"],
          queryFn: async () => { return await gqlClient.request(HP_SLIDER) },
          staleTime: 1000 * 60 * 2, // Cache data for 2 minutes

     });
};



export const hp_bar_three_likes_bar_api = () => {
     return useQuery({
          queryKey: ["HP_BAR_THREE_LIKES_BAR"],

          queryFn: async () => { return await gqlClient.request(HP_BAR_THREE_LIKES_BAR) },
          staleTime: 1000 * 60 * 2, // Cache data for 2 minutes

     });
};

