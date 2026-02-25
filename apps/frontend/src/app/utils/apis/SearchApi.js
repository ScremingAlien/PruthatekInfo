
import { useQuery } from '@tanstack/react-query'


export const useSearch = (query) => {
     return useQuery({
          queryKey: ['search', query],
          queryFn: async () => {
               let data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/blog/search/${query}`, {
                    method: 'GET',

               })
               let res = await data.json();
               
               return res
          },
          enabled: query.length > 1, // start only after 2+ chars
            // optional cache
     });
};
