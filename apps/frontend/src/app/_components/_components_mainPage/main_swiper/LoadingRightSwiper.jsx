 
import Skeleton from '../../_resusable_components/Skeleton'

export default function LoadingRightSwiper() {
     return (

          <div className='  w-full  lg:w-[30%]  lg:h-[340px] xl:h-[550px] overflow-auto'>
               <div className=' text-blueish-500 leading-none dark:text-yellowish-500 text-[24px] font-bold font-manrope  '>
                    <span>Most Popular</span>

               </div>
               <div className=' mt-5 space-y-3'>
                    {
                         [0, 1, 2, 3, 4].map((item, index) => {
                              return (
                                   <div key={index} className='flex flex-row justify-between items-start '>
                                        <div className=' w-[75%] '>
                                             <Skeleton cls={'  h-6 rounded-md w-[90%] '}  >
                                             </Skeleton>
                                             <Skeleton cls={'  h-6 rounded-md w-[60%]  mt-2'}  >
                                             </Skeleton>
                                        </div>
                                        <Skeleton cls={' relative h-[63px] md:h-[70px] w-[90px] '}  >
                                        </Skeleton>
                                   </div>
                              )
                         })
                    }
               </div>
          </div>

     )
}
