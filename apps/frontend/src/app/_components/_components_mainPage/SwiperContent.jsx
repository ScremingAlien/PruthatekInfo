'use client';

 
import { Autoplay, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Swiper_Card from "./main_swiper/Swiper_Card";
import { useMemo, useState } from "react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

function SwiperContent({ data }) {

     const [activeIndex, setActiveIndex] = useState(0);
     const [swiperInstance, setSwiperInstance] = useState(null); // Store Swiper instance


     const slides = useMemo(() => {
          return data?.HomePageSliderLeftSide?.map((_, index) => index) || [0];
     }, [data]);


     return (

          <div className='relative w-full lg:w-[70%]'>
               <Swiper
                    grabCursor={true}
                    effect={'creative'}
                    loop={true}
                    autoplay={{
                         delay: 3000,
                         disableOnInteraction: false,
                    }}
                    creativeEffect={{
                         prev: {
                              shadow: true,
                              translate: [0, 0, -400],
                         },
                         next: {
                              translate: ['100%', 0, 0],
                         },
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    modules={[Autoplay, EffectCreative]}
                    className='h-[420px] md:h-auto md:aspect-[16/9] bg-transparent'
                    onSwiper={(swiper) => setSwiperInstance(swiper)} // Capture Swiper instance
               >
                    {data?.HomePageSliderLeftSide?.map((item, index) => (
                         <SwiperSlide key={index} className='w-full h-full'>
                              <Swiper_Card data={item} />
                         </SwiperSlide>
                    ))}
               </Swiper>

               {/* Custom Pagination */}
               <div className="absolute z-[120] -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {slides.map((_, index) => (
                         <button
                              key={index}
                              className={`h-2 md:h-2.5 rounded-full transition-all ${activeIndex === index ? 'bg-blue-500 dark:bg-yellowish-500 w-4 md:w-6 scale-125' : 'w-2 md:w-2.5 bg-blackish-200/50'}`}
                              onClick={() => {
                                   if (swiperInstance) {
                                        swiperInstance.slideToLoop(index); // Move to selected slide
                                   }
                              }}
                         />
                    ))}
               </div>

          </div>

     );
}

export default SwiperContent;
