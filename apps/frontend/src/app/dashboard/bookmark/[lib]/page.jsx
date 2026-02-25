"use client"

import FourGrideCard from "@/app/_components/_resusable_components/FourGrideCard";
import FourGridLoadingCard from "@/app/_components/_resusable_components/FourGridLoadingCard";
import Headings from "@/app/_components/_resusable_components/Headings";
import IImage from "@/app/_components/_resusable_components/IImage";
import { queryClient } from "@/app/_components/Wrapper";
import { useQuery } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback } from 'react';



export default function page() {

     const { lib } = useParams();
     const { data, isLoading } = useQuery({
          queryKey: [lib + "-lib"],
          queryFn: async () => await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/user/lib/blog/${lib}`).then(res => res.json()),
          enabled: true,
     });


     const handleDelete = useCallback(async (id) => {
          await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/user/lib/${lib}/blog/${id}`, {
               method: 'PUT',
          });

          queryClient.refetchQueries([lib + "-lib"]);
          queryClient.refetchQueries(['bookmarks']);
     }, [lib]);

 

     return (
          <div className=" p-4">

               <Headings title={data?.data?.title} subTitle='' />
               {
                    isLoading &&
                    <FourGridLoadingCard />
               }

               {
                    !isLoading && data?.data?.blogs?.length != 0 &&

                    <section className='  w-full md:w-[80%] mx-auto lg:w-full grid mt-12  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-8 xl:gap-6'>
                         {
                              data?.data?.blogs?.map((item, index) => {
                                   return (
                                        <div key={item?._id || index}
                                             className=' group w-full  relative '
                                        >

                                             <button onClick={() => handleDelete(item?._id)} className=' absolute top-2 right-2 z-50 bg-red-500 p-1.5 rounded-full hover:bg-red-600 transition-all duration-200 ease-in-out'>
                                                  <Trash2 strokeWidth={1.5} size={20} className=' text-white' />
                                             </button>


                                             <div className='  rounded-md  aspect-[16/9] relative overflow-hidden'>
                                                  {
                                                       item?.thumbnail &&
                                                       <IImage url={item?.thumbnail} alt={item?.title} />
                                                  }
                                             </div>

                                             <Link href={'/blog/' + item?.slug} className=' pt-3 md:pt-4 flex flex-col justify-between h-[140px] md:h-[145px] items-start  '>
                                                  <h3 className=' line-clamp-3 font-manrope dark:font-semibold font-bold   text-blackish-600  group-hover:text-blueish-500 dark:text-whiteish-500    dark:group-hover:text-yellowish-500  text-[20px] md:text-[20px] dark:tracking-normal tracking-[-0.03rem] leading-[120%] md:leading-[125%] group-hover:underline group-hover:underline-offset-2 '>
                                                       {item?.title}
                                                  </h3>

                                             </Link>
                                        </div>

                                   )
                              })
                         }
                    </section>

               }

          </div>
     )
}
