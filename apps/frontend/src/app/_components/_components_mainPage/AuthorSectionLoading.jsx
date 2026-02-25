import React from 'react'
import Skeleton from '../_resusable_components/Skeleton'

export default function AuthorSectionLoading() {
  return (
    <div className='  w-full md:w-[80%] mx-auto lg:w-full grid  grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8'>
                         {
                              [0, 2, 23].map(e => (<div key={e} className=' group '>

                                   <Skeleton cls={'relative rounded-full h-[100px] aspect-square '} />
                                        

                                   <div className=' pt-3 space-y-2'>
                                        <Skeleton cls={'relative rounded-md w-full h-6 aspect-square '} />
                                        <Skeleton cls={'relative rounded-md w-full h-4 aspect-square '} />
                                        <Skeleton cls={'relative rounded-md w-1/2 h-4 aspect-square '} />

                                   </div>

                                   <div className=' flex flex-row justify-start items-center gap-3 pt-4'>
                                        <Skeleton cls={'relative rounded-full w-[100px] h-10    aspect-square '} />
                                        <Skeleton cls={'relative rounded-full w-[100px] h-10    aspect-square '} />
                                   </div>
                              </div>))
                         }

                    </div>
  )
}
