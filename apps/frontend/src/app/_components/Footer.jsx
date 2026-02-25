
import Link from 'next/link'

import FooterTwo from './FooterTwo'
import { ArrowUpRight } from 'lucide-react'
import Blogs_List_footer from './_resusable_components/Blogs_List_footer'
import Image from 'next/image'
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {



  return (
    <div className=" w-full    bg-blackish-500 text-whiteish-600   sticky  top-0 z-[100]">



      <div className=" py-8     max-w-screen-2xl w-[87%] md:w-[85%] flex flex-row items-center justify-between mx-auto  ">


        <Link href="/" className=" font-manrope text-xl flex flex-row items-center">
          <div className=" relative w-[170px]  h-[15px] md:w-[210px]  md:h-[18px] bottom-[-0.5px] right-[0.5px] ">
            <Image src="/images/Pruthatekinfologo.png" fill className=" w-full h-full" alt="Pruthatek" />
          </div>
        </Link>

        {/* newslater */}

      </div>

      <div className=" py-4 grid  grid-cols-2  lg:grid-cols-9  max-w-screen-2xl w-[87%] md:w-[85%] gap-10 lg:gap-12 xl:gap-20  mx-auto  ">
        <div className=' font-manrope col-span-1 lg:col-span-2 flex flex-col justify-start items-start'>
          <h2 className=' font-bold text-[17px]  text-whiteish-500/50 pb-4 tracking-[0.05rem] '>Services</h2>
          <div className=' space-y-0.5 md:space-y-1'>
            {
              FooterData.service.map((item, index) => {
                return (
                  <Link
                    target='_blank'
                    href={item.href}
                    key={index}
                    className=' flex flex-row items-center  gap-1'
                  >
                    <span className='hf'>{item.name}</span>
                    <ArrowUpRight className=' hidden md:block size-[15px] md:size-[18px]' strokeWidth={1.8} />
                  </Link>
                )
              })
            }


          </div>
          <h2 className=' font-bold text-[17px]  text-whiteish-500/50 pb-4  pt-10 tracking-[0.05rem] '>Contacts</h2>
          <div className=' space-y-0.5 md:space-y-1 flex flex-col    '>
             
            <Link href="/contact-us" className='underline underline-offset-2  decoration-dotted'>Contact Us</Link> 
            <Link href="/about-us" className='underline underline-offset-2  decoration-dotted'>About Us</Link> 
            <a href="phone: +91 9909918930" className=' text-nowrap hf'>+91 99099-18930</a>
            <a href="mailto:info@pruthatek.com" className='hf'>info@pruthatek.com</a>
            <a href="mailto:VN@pruthatek.com" className='hf'>VN@pruthatek.com</a>

          </div>
        </div>
        <div className=' font-manrope col-span-1 lg:col-span-2 flex flex-col justify-start items-start'>
          <h2 className=' font-bold text-[17px]  text-whiteish-500/50 pb-4 tracking-[0.05rem] '>Products</h2>
          <div className=' space-y-0.5 md:space-y-1  '>
            {
              FooterData.products.map((item, index) => {
                return (
                  <Link
                    target='_blank'
                    href={item.href}
                    key={index}
                    className='  flex flex-row items-center   gap-1'
                  >
                    <span className='hf'>{item.name}</span>
                    <ArrowUpRight className=' hidden md:block size-[15px] md:size-[18px]' strokeWidth={1.8} />
                  </Link>
                )
              })
            }


          </div>
          <h2 className=' font-bold text-[17px]  text-whiteish-500/50 pb-4 tracking-[0.05rem]  pt-10'>Follow</h2>
          <div className='  flex flex-row  gap-2  items-center '>

            <Link href={'https://twitter.com/pruthatek'} target='_blank' className={' flex flex-row items-center  gap-1'} >
              <FaXTwitter className='   text-[17px]' />
            </Link>

            <Link href={'https://www.linkedin.com/company/pruthatek/'} target='_blank' className={' flex flex-row items-center  gap-1'} >
              <FaLinkedinIn className='  text-[18px]' />
            </Link>
            <Link href={'https://www.facebook.com/pruthatek/'} target='_blank' className={' flex flex-row items-center  gap-1'} >
              <RiFacebookCircleFill className='text-[19px]  ' />
            </Link>




          </div>
        </div>
        <div className=' font-manrope col-span-2 lg:col-span-5 flex flex-col justify-start items-start'>
          <h2 className=' font-bold text-[17px]  text-whiteish-500/50 pb-4 tracking-[0.05rem] '>May be interesting</h2>

          <div className=' flex flex-col text-white/90 gap-3'>


            <Blogs_List_footer />

          </div>
        </div>
      </div>

      <FooterTwo />

    </div >
  )
}



const FooterData = {

  service: [

    {
      name: 'Cloud Services',
      href: 'https://pruthatek.com/ui-ux'
    },
    {
      name: 'Machine Learning',
      href: 'https://pruthatek.com/underdevelopment'
    },
    {
      name: 'Artificial Intelligence',
      href: 'https://pruthatek.com/underdevelopment'
    },
    {
      name: 'Ecommerce',
      href: 'https://pruthatek.com/underdevelopment'
    },
    {
      name: 'Custom Software',
      href: 'https://pruthatek.com/customsoftware'
    },
    {
      name: 'Web & App Development',
      href: 'https://pruthatek.com/underdevelopment'
    },
    {
      name: 'Blockchain',
      href: 'https://pruthatek.com/underdevelopment'
    }
  ],
  products: [
    {
      name: 'ERP system',
      href: ''
    },
    {
      name: 'Accounting Software',
      href: ''
    },
    {
      name: 'Doctor Schedule',
      href: ''
    },
    {
      name: 'Thetiger.live',
      href: 'https://thetiger.live'
    },
    {
      name: 'Ieltsvisa.in',
      href: 'https://ieltsvisa.in'
    },
    {
      name: 'Walk & Earn',
      href: ''
    },
    {
      name: 'Jyotishshastram',
      href: ''

    },
    {
      name: 'Thekuka.com',
      href: 'https://thekuka.com'
    }


  ],

}
