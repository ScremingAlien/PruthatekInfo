

import { setUserLoginDetails, setUserLoginStatus } from '@/app/utils/Redux/slices/HomePage.slice';
import { BookmarkSimple, SquaresFour, PencilSimple, UserPlus, Megaphone, SignOut, Info } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux';


export default function Sidebar() {

  const dispatch = useDispatch();

  return (
    <div className=' p-2  pb-4 w-[300px] flex flex-col justify-between  h-screen border-r border-blackish-100 '>
      {/* <Link href="/" className=" mt-2 ml-3 font-manrope text-xl flex flex-row items-center">
        <div className=" relative w-[170px]  h-[15px] md:w-[220px]  md:h-[20px] bottom-[-0.5px] right-[0.5px] ">
          <Image src="/images/PruthatekinfologoBlack.png" fill className=" w-full h-full" alt="Pruthatek" />
        </div>
      </Link> */}
      <div>

      </div>



      <div className=''>
        {sliderLink.map((item, index) => (
          <Link key={index} href={item.link} className={` text-blackish-200/70  hover:bg-blackish-100/30 duration-300 rounded-xl flex flex-row items-center gap-4 px-4 py-3 `}>
            {item.icon}
            <span className={` font-inter font-medium  text-[17px]`}>
              {item.name}
            </span>
          </Link>
        )
        )}
      </div>


      <div>
        <Link href={'/'} className=' text-blackish-500  hover:bg-blackish-100/30 duration-300 rounded-xl flex flex-row items-center gap-4 px-4 py-3'>
          <Info size={28} weight='regular' />

          <span className={` font-inter font-medium  text-[17px]`}>
            Help
          </span>

        </Link>



        <button
          onClick={() => {
            dispatch(setUserLoginStatus(false));
            dispatch(setUserLoginDetails({ user_id: '', username: '', avatar: '', accountType: '' }));
            window.localStorage.removeItem('PruthatekINFO_token');
            window.location.replace('/');
          }}
          className=' w-full text-red-500  hover:bg-red-100/50 duration-300 rounded-xl flex flex-row items-center gap-4 px-4 py-3'>
          <SignOut size={30} weight='regular' />

          <span className={` font-inter font-medium  text-[17px]`}>
            Logout
          </span>
        </button>
      </div>

    </div>
  )
}


const sliderLink = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <SquaresFour size={30} weight='regular' />
  },
  {
    name: "Bookmarks",
    link: "/dashboard/bookmark",
    icon: < BookmarkSimple size={28} weight='regular' />

  },
  {
    name: "Your Articals",
    link: "/dashboard/articals",
    icon: < PencilSimple size={28} weight='regular' />
  },
  {
    name: "Followings",
    link: "/dashboard/following",
    icon: <UserPlus size={30} weight='regular' />
  },
  {
    name: "Advertise",
    link: "/dashboard/ads",
    icon: <Megaphone size={28} weight='regular' />
  }
]





