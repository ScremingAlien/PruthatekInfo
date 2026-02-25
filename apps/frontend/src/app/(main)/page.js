
// app/page.tsx
import dynamic from "next/dynamic";
import { Suspense } from "react";
import FourGridLoadingCard from "../_components/_resusable_components/FourGridLoadingCard";
import AuthorSectionLoading from "../_components/_components_mainPage/AuthorSectionLoading";

// 🧠 Lazy load components
const SwiperMainBlogs = dynamic(() => import("../_components/_components_mainPage/SwiperMainBlogs"), {
  ssr: true, // keep SSR for SEO important section
  loading: () => <FourGridLoadingCard num={4} />,
});

const HomePage_BarOne_LikedBlogs = dynamic(
  () => import("../_components/_components_mainPage/HomePage_BarOne_LikedBlogs"),
  {
    ssr: true,
    loading: () => <FourGridLoadingCard />,
  }
);

const HomePage_BarOne_ViewBased = dynamic(
  () => import("../_components/_components_mainPage/HomePage_BarOne_ViewBased"),
  {
    ssr: true,
    loading: () => <FourGridLoadingCard />,
  }
);

const HomePage_BarOne_LatestBlogs = dynamic(
  () => import("../_components/_components_mainPage/HomePage_BarOne_LatestBlogs"),
  {
    ssr: true,
    loading: () => <FourGridLoadingCard />,
  }
);

const AuthoreSection = dynamic(
  () => import("../_components/_components_mainPage/AuthoreSection"),
  {
    ssr: true, // purely client-side
    loading: () => <AuthorSectionLoading />,
  }
);

const SponserdBlogsHome = dynamic(
  () => import("../_components/_components_mainPage/SponserdBlogsHome"),
  {
    ssr: true, // not critical for SEO
    loading: () => <FourGridLoadingCard num={4} />,
  }
);


export default async function Home() {

  return (

    <div className=" max-w-screen-2xl   py-10  md:py-16   w-[87%] md:w-[85%] mx-auto">

      <SwiperMainBlogs />
      <Suspense fallback={<FourGridLoadingCard />}>
        <HomePage_BarOne_LikedBlogs />
      </Suspense>

      <Suspense fallback={<FourGridLoadingCard />}>
        <HomePage_BarOne_ViewBased />
      </Suspense>

      <Suspense fallback={<FourGridLoadingCard />}>
        <HomePage_BarOne_LatestBlogs />
      </Suspense>

      <Suspense fallback={<AuthorSectionLoading />}>
        <AuthoreSection />
      </Suspense>

      <Suspense fallback={<FourGridLoadingCard num={4} />}>
        <SponserdBlogsHome />
      </Suspense>



    </div>
  );
}
