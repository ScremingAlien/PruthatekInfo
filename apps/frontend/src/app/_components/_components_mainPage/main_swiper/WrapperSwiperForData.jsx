import { LEFT_SWIPER_BLOGS } from "@/app/utils/graphql/homepage_gql";
import SwiperContent from "../SwiperContent";


export default async function WrapperSwiperForData() {

     let request = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API, {
          method: "POST",
          headers: {
               "Content-Type": "application/json",
          },
          body: JSON.stringify({
               operationName: "HomeLeftSwiperBlogs",
               query: LEFT_SWIPER_BLOGS,
          }),
          cache: 'no-store'
          
     })
     let { data } = await request.json();

     return (
          <>
               <SwiperContent data={data} />
          </>
     )
}
