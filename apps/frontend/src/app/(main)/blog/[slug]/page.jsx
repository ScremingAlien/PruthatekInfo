 
// app/blog/[slug]/page.tsx
import dynamic from "next/dynamic";
 
import BlogsSection from "./_modules/BlogsSection"; // Server component

// Lazy-load heavy client-side components
const RelatedBlogs_Section = dynamic(
  () => import("./_modules/RelatedBlogs_Section"),
  {  loading: () => <p>Loading related articles...</p> }
);

const RightSide_Section = dynamic(
  () => import("./_modules/RightSide_Section"),
  {  loading: () => <p>Loading sidebar...</p> }
);

// Server-side fetching
import { fetchGraphQL } from "./fetch";
import { BLOG_BY_SLUG } from "@/app/utils/graphql/apis_gql";

export default async function Page({ params }) {
 const slug = (await params)?.slug;
  const response = await fetchGraphQL({
    operationName: "blogBySlug",
    query: BLOG_BY_SLUG,
    variables: { slug },
  });

  const data = response;

  return (
    <div className="w-full">
      <div className="max-w-screen-2xl gap-10 lg:gap-28 py-7 flex flex-col lg:flex-row justify-start items-start w-[87%] md:w-[70%] lg:w-[85%] mx-auto">
        <div className="w-full lg:w-[60%]">
          
          <BlogsSection data={data} error={false} slug={slug} />
          <RelatedBlogs_Section slug={slug} />
        </div>

        <RightSide_Section />
      </div>
    </div>
  );
}



// "use client"
// import { BLOG_BY_SLUG } from "@/app/utils/graphql/apis_gql";
// import BlogsSection from "./_modules/BlogsSection";
// import RightSide_Section from "./_modules/RightSide_Section";
// import RelatedBlogs_Section from "./_modules/RelatedBlogs_Section";
// import { fetchGraphQL } from "./fetch";

// export default async function Page({ params }) {

//   const { slug } = await params

//   const response = await fetchGraphQL({
//     operationName: 'blogBySlug',
//     query: BLOG_BY_SLUG,
//     variables: { slug },
//   });

//   const data = response

//   return (
//     <div className="w-full">
       
      
//       <div className="max-w-screen-2xl gap-10 lg:gap-28 py-7 flex flex-col lg:flex-row justify-start items-start w-[87%] md:w-[70%] lg:w-[85%] mx-auto">
//         <div className=" w-full lg:w-[60%] ">

//           <BlogsSection data={data} error={false} slug={slug} />

//           <RelatedBlogs_Section slug={slug} />

//         </div>

//         <RightSide_Section />
 

//       </div>
//     </div>
//   );
// }




