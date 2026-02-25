
import Skeleton from './Skeleton'

export default function FourGridLoadingCard({ num = 8 }) {

     let arr = Array.from({ length: num }, (_, i) => i)
     return (
          <div className='  w-full mx-auto lg:w-full grid mt-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-8 xl:gap-6'>
               {
                    arr.map((item, index) => {
                         return (
                              <div
                                   key={index}

                                   className=' group w-full '
                              >
                                   <Skeleton cls={'  rounded-md  aspect-[16/9]'} />


                                   <div className=' pt-3 md:pt-4'>
                                        <Skeleton cls={' rounded-md  w-full h-6'} />
                                        <Skeleton cls={' rounded-md mt-3  w-[80%] h-6'} />

                                        <div className=' flex mt-2 md:mt-3 flex-row justify-between gap-3 items-center'>


                                             <Skeleton cls={'  rounded-full   size-[37px] md:size-[40px]'}>

                                             </Skeleton>


                                             <div className='w-[calc(100%-37px)] md:w-[calc(100%-40px)] flex flex-col space-y-1 '>

                                                  <Skeleton cls={' rounded-md   w-1/2 h-5'} />
                                                  <Skeleton cls={' rounded-md   w-1/2 h-3'} />


                                             </div>
                                        </div>
                                   </div>
                              </div>
                         )
                    })
               }
          </div>
     )
}
