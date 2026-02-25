
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


const linkData = {

     "trending": "Latest hot topics, viral news, and popular discussions making waves across the internet and social media platforms.",

     "ai": "Exploring the future of artificial intelligence, machine learning, and how they're transforming industries and everyday life.",

     "entertainment": "Movies, TV shows, celebrity news, and everything you need to stay updated in the world of entertainment.",

     "tech": "Breaking technology news, gadget reviews, and insights into innovations shaping our digital future.",

     "homes": "Inspiration, trends, and tips for home improvement, real estate, interior design, and modern living.",

     "education": "Resources and news on learning, schools, online courses, academic success, and educational technology.",

     "money": "Advice on budgeting, investing, personal finance tips, and strategies to grow and manage your wealth.",

     "wellness": "Health, fitness, mental well-being, nutrition tips, and self-care strategies for a balanced life.",

     "home": "Creative ideas, décor tips, and practical guides to making your home more comfortable and beautiful.",

     "deals": "Latest discounts, sales, and shopping deals to help you save on top products and services.",

     "gift-guide": "Curated gift ideas for every occasion, budget, and recipient—making thoughtful gifting easier than ever.",

     "cover-stories": "In-depth features and exclusive stories covering influential figures, major events, and cultural trends."
}



export default function DropDown({ setIsOpen, isOpen, dropData, handleMouseLeave, isLoading }) {


     return (

          <div onMouseLeave={handleMouseLeave} className={`  absolute ${isOpen ? 'translate-y-0 ' : 'translate-y-[-140%]  '}  overflow-hidden duration-300  text-blackish-600 bg-whiteish-500 z-50   py-6  w-full  h-[350px] `} >
               {
                    isLoading ? <></> :

                         <div className="    max-w-screen-2xl  w-[87%] md:w-[85%]  flex flex-row justify-between items-start duration-100 z-50 left-0   mx-auto ">

                              <div className=" flex flex-col  w-[25%] ">

                                   <div className=" pl-1">
                                        <h2 className=" text-[26px] font-bold font-manrope">{dropData?.name}</h2>
                                        <p className=" font-semibold leading-[125%]  pt-5 text-black/60 text-[16px] font-manrope mt-1">{linkData[dropData?.slug]}</p>
                                   </div>

                                   <div className=" mt-8">
                                        <Link href={String(dropData?.slug)} className="select-none font-nunito  bg-[#30302e] font-medium group  text-[14px] md:text-[16px] w-[65%]  flex justify-center items-center gap-2 rounded-full px-4 py-2 text-[#ffffff]"> <span>Explore More</span>
                                             <div className="   overflow-hidden rounded-lg   relative">
                                                  <ArrowUpRight size={20} className=" group-hover:-translate-y-5 group-hover:translate-x-5 duration-300" />
                                                  <ArrowUpRight size={20} className=" absolute group-hover:-translate-y-0  translate-y-5 -translate-x-5 top-0 left-0 group-hover:translate-x-0 duration-300" />

                                             </div>
                                        </Link>
                                   </div>
                              </div>
                              <div className=" w-[65%]  grid grid-cols-2 grid-rows-6 gap-x-12 gap-y-2 ">

                                   {
                                        dropData?.subTags?.map((item, index) => {
                                             return (
                                                  <Link href={"/" + String(item?.slug).toLowerCase().replace(/ /g, '-')} key={index} className=" cursor-pointer border rounded-lg bg-whiteish-600/20 px-4 py-3 group relative flex-row flex items-start gap-2">
                                                       <p className=" text-[18px]  font-semibold font-manrope ">{item?.name}
                                                       </p>
                                                       <div className="   overflow-hidden rounded-lg   relative">
                                                            <ArrowUpRight size={20} className=" group-hover:-translate-y-5 group-hover:translate-x-5 duration-300" />
                                                            <ArrowUpRight size={20} className=" absolute group-hover:-translate-y-0  translate-y-5 -translate-x-5 top-0 left-0 group-hover:translate-x-0 duration-300" />

                                                       </div>
                                                  </Link>
                                             )
                                        })
                                   }


                              </div>
                         </div>
               }
          </div >
     )
}
