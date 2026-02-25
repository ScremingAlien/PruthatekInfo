export async function generateMetadata({  params }) {
     const slug = (await params)?.slug;

     // Fetch the blog data from your API
     const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/blog/${slug}`, {
          // You can adjust headers here if needed (e.g., Authorization)
          cache: "no-cache" // Ensure fresh data if needed
     });

     if (!res.ok) {
          return {
               title: "Blog Not Found | PruthaTek.info",
               description: "This blog post could not be found.",
          };
     }

     const blog = await res.json();

     const title = blog.title || "Blog | PruthaTek.info";
     const description =
          blog.subTitle?.slice(0, 160) ||
          "Explore deep insights and discussions on future tech, innovation, and ideas.";

     const ogImage = blog.thumbnail || "https://pruthatek.info/images/error_image.png";
     
     return {
          title: `${title} | PruthaTek.info`,
          description,
          openGraph: {
               title: `${title} | PruthaTek.info`,
               description,
               url: `https://pruthatek.info/blog/${slug}`,
               siteName: "PruthaTek.info",
               images: [
                    {
                         url: ogImage,
                         width: 1200,
                         height: 630,
                         alt: title
                    }
               ],
               type: "article",
               publishedTime: blog.createdAt || new Date().toISOString(),
               authors: [blog.author?.username || "PruthaTek"]
          },
          twitter: {
               card: "summary_large_image",
               title: `${title} | PruthaTek.info`,
               description,
               images: [ogImage]
          },
          alternates: {
               canonical: `https://pruthatek.info/blog/${slug}`
          }
     };
}

export default function Layout({ children }) {
     return <>{children}</>;
}
