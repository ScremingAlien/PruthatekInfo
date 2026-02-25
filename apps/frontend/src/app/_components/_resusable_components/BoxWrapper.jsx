import React from 'react'

export default function BoxWrapper({ children }) {
     return (
          <div className=" text-blackish-600 dark:text-whiteish-400 w-full  relative ">

               <div className=" max-w-screen-2xl   gap-10 lg:gap-28  py-7 flex flex-col lg:flex-row justify-start items-start  w-[87%] md:w-[70%] lg:w-[85%] mx-auto  ">

                    {children}


               </div>
          </div>
     )
}
