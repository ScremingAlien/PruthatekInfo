 
export default function Headings({ title, subTitle, clx = ' w-full' }) {
     return (
          <div className={clx}>

               <div className=' space-y-1 md:space-y-2 flex flex-row justify-start items-center gap-3'>
                    {/* <div className=' size-3.5 dark:bg-yellowish-500 bg-blueish-500'></div> */}
                    <h2 className=' text-blue-600 dark:text-yellowish-500 text-[26px] md:text-[28px] capitalize leading-[125%] font-bold font-inter'>
                         {title}
                    </h2>
               </div>    

               <p className='  pt-2 text-blackish-200  dark:text-whiteish-700    font-inter font-medium  leading-[125%] text-[14px] md:text-[17px]'>{subTitle}</p>



          </div>
     )
}
