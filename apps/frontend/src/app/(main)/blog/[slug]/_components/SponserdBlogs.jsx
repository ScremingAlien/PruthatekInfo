"use client";

import { gqlClient } from "@/app/_components/Wrapper";
 
import { useQuery } from "@tanstack/react-query";
import { GetTopBlogsByTopAuthor } from "@/app/utils/graphql/apis_gql";
import Skeleton from "@/app/_components/_resusable_components/Skeleton";
import { Suspense, useMemo } from "react";
import dynamic from "next/dynamic";

// Lazy load the card component (client-only heavy component)
const LazyFromFollowingCard = dynamic(
     () => import("./singleCards/From_following_card"),
     { ssr: false }
);

export default function SponserdBlogs() {
     const { data, isLoading } = useQuery({
          queryKey: ["GetTopBlogsByTopAuthor"],
          queryFn: async () => gqlClient.request(GetTopBlogsByTopAuthor),
          staleTime: 1000 * 60 * 5, // cache for 5 mins
     });

     // Memoize top 4 blogs to prevent recalculation
     const topBlogs = useMemo(() => data?.getTopBlogsByTopAuthor?.slice(0, 4) || [], [data]);

     if (isLoading) return <SponserdBlogsLoading />;

     if (!topBlogs.length) return <p className="text-gray-400">No blogs found</p>;

     return (
          <div className="w-full flex flex-col gap-5 mt-8">
               {topBlogs.map((item, index) => (
                    <LazyFromFollowingCard key={index} isComp={true} data={item} />
               ))}
          </div>
     );
}

// Reusable skeleton loading component
function SponserdBlogsLoading() {
     return (
          <div className="w-full flex flex-col gap-5 mt-8">
               {[0, 1, 2, 3].map((i) => (
                    <Skeleton key={i} cls="rounded-md aspect-[16/9] w-full" />
               ))}
          </div>
     );
}
