import { Suspense } from "react";
import LoadingLeftSwiper from "./main_swiper/LoadingLeftSwiper";
import LoadingRightSwiper from "./main_swiper/LoadingRightSwiper";
import MostPopular from "./MostPopular";
import WrapperSwiperForData from "./main_swiper/WrapperSwiperForData";


export default function SwiperMainBlogs() {



  return (

    <div className='w-full md:w-[80%] mx-auto lg:w-full pb-16  flex flex-col lg:flex-row  items-start  gap-20 md:gap-8'>
      <Suspense fallback={<LoadingLeftSwiper />}>
         <WrapperSwiperForData/>
      </Suspense>

      <Suspense fallback={<LoadingRightSwiper />}>
        <MostPopular />
      </Suspense>

    </div>
  );
}

