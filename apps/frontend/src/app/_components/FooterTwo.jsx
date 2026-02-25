 
import Image from 'next/image'
import Link from 'next/link'


export default function FooterTwo() {
     return (
          <>
               <div className=' border-dashed  mt-8 text-white/90 border-y    border-whiteish-300/40   font-manrope py-3    text-balance text-center  max-w-screen-2xl w-[87%] md:w-[85%] mx-auto  tracking-wide text-[11px] md:text-[13px]'>
                    <p className=' '>
                         The information provided on this publication is for general informational purposes only. While we strive to keep the information up to date, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability for your business, of the information provided or the views expressed herein. For specific advice applicable to your business, please contact a professional.
                    </p>
               </div>

               <div className=' font-manrope py-4 pt-5 pb-5  flex  flex-col lg:flex-row justify-between items-center  max-w-screen-2xl w-[87%] md:w-[85%]  mx-auto '>

                    <div className=' flex  flex-col md:flex-row   gap-3 md:gap-5  items-center justify-start  tracking-wide  '>

                         <h3 className='  w-full md:w-auto text-[11px] md:text-[15px] '>
                              © {new Date().getFullYear()} Pruthatek, A Software company. All rights reserved.
                         </h3>
                         {/* <Tally1 className=' hidden md:block' size={22} strokeWidth={1.5} /> */}


                    </div>

                    <div className=' flex flex-row  items-center  '>

                           <div className=' flex flex-row  items-center gap-x-5   '>
                        <Link href="/terms-and-conditions" className='text-[11px] md:text-[15px]'>Terms & Conditions</Link>
                        <Link href="/privacy-policy" className='text-[11px] md:text-[15px]'>Privacy Policy</Link>
                        </div>

                         <p className='text-[11px] md:text-[15px] ml-5'>Design and Developed by</p>
                         <Link href={'https://pruthatek.com/'} className='  hover:bg-black px-1 rounded-md flex flex-row items-center  '>
                              <div className=' inline-block  relative   w-[80px] md:w-[100px]  h-[9px] md:h-[12px] '>
                                   <Image src={'/images/PruthatekLogo2025.png'} alt='Pruthatek' fill className=' w-full h-full' />
                              </div>
                           
                         </Link>
                    </div>

               </div>

          </>
     )
}
