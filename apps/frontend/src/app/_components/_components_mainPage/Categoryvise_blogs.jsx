"use client"
import { GetRandom } from '@/app/utils/graphql/apis_gql';
import Headings from '../_resusable_components/Headings'
import Skeleton from '../_resusable_components/Skeleton'
import ThreeColArtical_card from '../_resusable_components/ThreeColArtical_card'
import { useQuery } from '@tanstack/react-query';
import { gqlClient } from '../Wrapper';

export default function Categoryvise_blogs() {
     const { data, isLoading, error } = useQuery({
          queryKey: ["GetRandom"],
          queryFn: () => gqlClient.request(GetRandom),
     });

    

     return (
          <>

               <Headings title={'Latest'} subTitle={'Discover more articles you may like.'} clx='  mb-10 w-full md:w-[80%] mx-auto lg:w-full' />
 

               {
                    isLoading ? <div className='  w-full md:w-[80%] mx-auto lg:w-full grid  grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8'>
                         {
                              [0, 1, 2,3,3,3].map((item, index) => {
                                   return (
                                        <div
                                             key={index}
                                             className=' group w-full '
                                        >
                                             <Skeleton cls={' rounded-md aspect-[16/9]'} />

                                             <div className=' pt-3 md:pt-4'>

                                                  <Skeleton cls={' rounded-md  w-full h-6'} />
                                                  <Skeleton cls={' rounded-md mt-3  w-[80%] h-6'} />
                                                  <Skeleton cls={' rounded-md mt-3  w-1/3 h-6'} />


                                                  <Skeleton cls={' rounded-md mt-3  w-full h-4'} />
                                                  <Skeleton cls={' rounded-md mt-3  w-full h-4'} />

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
                         :
                         (
                              error ? <p>Error: {error.message} </p>
                                   :
                                   <div className='  w-full md:w-[80%] mx-auto lg:w-full grid  grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8'>
                                        {
                                             data?.
                                             getRandomBlogsTemp
                                             ?.map((item, index) => {
                                                  return (
                                                       <ThreeColArtical_card key={index} data={item} />
                                                  )
                                             })
                                        }
                                   </div>
                         )
               }




          </>
     )
}





