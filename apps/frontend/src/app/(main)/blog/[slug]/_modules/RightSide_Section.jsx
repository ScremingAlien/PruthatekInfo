"use client";
import dynamic from "next/dynamic";
import Headings from "@/app/_components/_resusable_components/Headings";
import Skeleton from "@/app/_components/_resusable_components/Skeleton";
import { Suspense } from "react";
import { BsStars } from "react-icons/bs";

// Lazy-load heavy components
const SponserdBlogs = dynamic(() => import("../_components/SponserdBlogs"), {
  ssr: false,
  loading: () => <LoadingUI />,
});
const Authors = dynamic(() => import("../_components/Authors"), {
  ssr: false,
  loading: () => <Skeleton cls="w-full h-24" />,
});
const Following_s_blogs = dynamic(() => import("../_components/Following_s_blogs"), {
  ssr: false,
  loading: () => <Skeleton cls="w-full h-24" />,
});


export default function RightSide_Section() {

  return (
    <div className=" w-full lg:w-[40%] hidden lg:block lg:pl-10">

      <div className='   pb-10 mt-10 md:mt-0    border-blackish-300/50 dark:border-whiteish-300/50   w-full   mx-auto lg:w-full'>
        <div className=' '>
          <div className='  flex flex-row justify-start items-center gap-3'>

            <button className='  text-blueish-500  dark:text-yellowish-500  text-[20px] md:text-[22px] flex flex-row items-center gap-2 capitalize font-extrabold font-manrope'>
              <BsStars className='   text-blueish-500  dark:text-yellowish-500 text-[26px] ' />  Sponsored Articles
            </button>
          </div>

          <Suspense fallback={<LoadingUI />}>
            <SponserdBlogs />
          </Suspense>

        </div>
      </div>


      <div className=' border-t border-dashed  pb-10     border-blackish-300/50 dark:border-whiteish-300/50   w-full   mx-auto lg:w-full'>

        <Section title="Top Writers" subTitle="Some top of the line writers.">
          <Suspense fallback={<Skeleton cls="w-full h-24" />}>
            <Authors />
          </Suspense>
        </Section>



      </div>

      <div className=' border-t border-dashed  pb-10    border-blackish-300/50 dark:border-whiteish-300/50   w-full   mx-auto lg:w-full'>
 
        <Section title="Best from Author" subTitle="Best Articles from Top Authors">
          <Suspense fallback={<LoadingUI />}>
            <Following_s_blogs />
          </Suspense>
        </Section>


      </div>


    </div>
  )
}
function Section({ title, subTitle, children }) {
  return (
    <div className="  border-dashed border-blackish-300/50 dark:border-whiteish-300/50 pb-10 mt-10">
      <Headings title={title} subTitle={subTitle || ""} clx="mt-10" />
      {children}
    </div>
  );
}

function LoadingUI() {
  return (
    <div className="w-full space-y-8 mt-8">
      {[0, 1, 2, 3].map((item) => (
        <Skeleton key={item} cls="rounded-md aspect-[16/9]" />
      ))}
    </div>
  );
}


