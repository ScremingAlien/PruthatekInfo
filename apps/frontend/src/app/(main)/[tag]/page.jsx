"use client"
import dynamic from "next/dynamic";
import Headings from "@/app/_components/_resusable_components/Headings";
import FourGridLoadingCard from "@/app/_components/_resusable_components/FourGridLoadingCard";
import { useParams } from "next/navigation";
import { Suspense } from "react";

// Lazy load heavy components
const MainSwiper = dynamic(() => import("./_components/MainSwiper"), {
     // browser-only due to Swiper
     loading: () => <FourGridLoadingCard num={2} />, // skeleton placeholder
});

const LatestBlogsByTag = dynamic(() => import("./_components/LatestBlogsByTag"), {

     loading: () => <FourGridLoadingCard num={4} />,
});

const SponserdBlogs = dynamic(() => import("./_components/SponserdBlogs"), {

     loading: () => <FourGridLoadingCard num={4} />,
});

export default function Page() {
     const { tag } = useParams();

     return (
          <div className="w-full">
               <div className="max-w-screen-2xl gap-10 lg:gap-28 py-10 md:py-16 w-[87%] md:w-[70%] lg:w-[85%] mx-auto">
                    <Headings clx=" " title={String(tag).toLocaleLowerCase().replace(/-/g, " ")} subTitle={""} />

                    <Suspense fallback={<FourGridLoadingCard num={2} />}>
                         <MainSwiper tag={tag} />
                    </Suspense>

                    <Suspense fallback={<FourGridLoadingCard num={4} />}>
                         <LatestBlogsByTag tag={tag} />
                    </Suspense>

                    <Suspense fallback={<FourGridLoadingCard num={4} />}>
                         <SponserdBlogs tag={tag} />
                    </Suspense>
               </div>
          </div>
     );
}
