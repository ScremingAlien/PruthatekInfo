"use client";
import dynamic from "next/dynamic";
import Headings from "@/app/_components/_resusable_components/Headings";
import { BsStars } from "react-icons/bs";
import { Suspense } from "react";
import Skeleton from "@/app/_components/_resusable_components/Skeleton";

const SponserdBlogs = dynamic(() => import("../_components/SponserdBlogs"), { ssr: false, loading: () => <Skeleton cls="w-full h-24" /> });
const RecommendedBlogs = dynamic(() => import("../_components/RecommendedBlogs"), { ssr: false, loading: () => <Skeleton cls="w-full h-24" /> });
const Authors = dynamic(() => import("../_components/Authors"), { ssr: false, loading: () => <Skeleton cls="w-full h-24" /> });
const Following_s_blogs = dynamic(() => import("../_components/Following_s_blogs"), { ssr: false, loading: () => <Skeleton cls="w-full h-24" /> });

export default function RelatedBlogs_Section({ slug }) {
  return (
    <>
      <div className="w-full hidden lg:block">
        <Headings title="Related Articles" subTitle="Discover more articles you may like." />
        <Suspense fallback={<Skeleton cls="w-full h-24" />}>
          <RecommendedBlogs slug={slug} />
        </Suspense>
      </div>

      <div className="w-full lg:hidden">
        <Section title="Sponsored Articles">
          <Suspense fallback={<Skeleton cls="w-full h-24" />}>
            <SponserdBlogs />
          </Suspense>
        </Section>

        <Section title="Related Articles" subTitle="Discover more articles you may like.">
          <Suspense fallback={<Skeleton cls="w-full h-24" />}>
            <RecommendedBlogs slug={slug} />
          </Suspense>
        </Section>

        <Section title="Top Writers" subTitle="Some top of the line writers.">
          <Suspense fallback={<Skeleton cls="w-full h-24" />}>
            <Authors />
          </Suspense>
        </Section>

        <Section title="Best from Author" subTitle="Best Articles from Top Authors">
          <Suspense fallback={<Skeleton cls="w-full h-24" />}>
            <Following_s_blogs />
          </Suspense>
        </Section>
      </div>
    </>
  );
}

function Section({ title, subTitle, children }) {
  return (
    <div className="border-t border-dashed border-blackish-300/50 dark:border-whiteish-300/50 pb-10 mt-10">
      <Headings title={title} subTitle={subTitle || ""} clx="mt-10" />
      {children}
    </div>
  );
}





// "use client"

// import SponserdBlogs from '../_components/SponserdBlogs'
// import { BsStars } from 'react-icons/bs'
// import RecommendedBlogs from '../_components/RecommendedBlogs'
// import Headings from '@/app/_components/_resusable_components/Headings'
// import Authors from '../_components/Authors'
// import Following_s_blogs from '../_components/Following_s_blogs'


// export default function RelatedBlogs_Section({ slug }) {
//      return (
//           <>

//                <div className=' w-full  hidden lg:block'>

//                     <div className=' border-t border-dashed    pb-10   border-blackish-300/50 dark:border-whiteish-300/50   w-full   mx-auto lg:w-full'>

//                          <Headings title={' Related Articles'} subTitle={'Discover more articles you may like.'} clx=' mt-10' />

//                          <RecommendedBlogs slug={slug} />


//                     </div>
//                </div>

//                <div className=' w-full   lg:hidden   '>

//                     <div className='   pb-10 mt-10 md:mt-0    border-blackish-300/50 dark:border-whiteish-300/50   w-full   mx-auto lg:w-full'>
//                          <div className=' '>
//                               <div className='  flex flex-row justify-start items-center gap-3'>

//                                    <button className='  text-blueish-500  dark:text-yellowish-500  text-[20px] md:text-[22px] flex flex-row items-center gap-2 capitalize font-extrabold font-manrope'>
//                                         <BsStars className='   text-blueish-500  dark:text-yellowish-500 text-[26px] ' />  Sponsored Articles
//                                    </button>
//                               </div>


//                               <SponserdBlogs />



//                          </div>
//                     </div>

//                     <div className=' border-t border-dashed    pb-10   border-blackish-300/50 dark:border-whiteish-300/50   w-full   mx-auto lg:w-full'>

//                          <Headings title={' Related Articles'} subTitle={'Discover more articles you may like.'} clx=' mt-10' />



//                          <RecommendedBlogs slug={slug} />


//                     </div>


//                     <div className=' border-t border-dashed  pb-10     border-blackish-300/50 dark:border-whiteish-300/50   w-full   mx-auto lg:w-full'>

//                          <Headings title={'Top Writers'} subTitle={'Some top of the line writers.'} clx=' mt-10' />



//                          <Authors  />


//                     </div>

             
//                     <div className=' border-t border-dashed  pb-10    border-blackish-300/50 dark:border-whiteish-300/50   w-full   mx-auto lg:w-full'>

//                          <Headings title={'Best from Author'} subTitle={'Best Articles from Top Authors'} clx=' mt-10' />


//                          <Following_s_blogs   />


//                     </div>
                   
//                </div>


//           </>
//      )
// }


