
export async function generateStaticParams() {
     // Fetch all available slugs from your database or API
     let posts = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/blog/getStaticParams`, {
          method: 'GET',
     });

     posts = await posts.json();

     return posts.map(item => ({ slug: item?.slug }));
}

export async function generateMetadata({ params }) {
     // Format the title: remove hyphens and capitalize each word

     const formatTitle = (slug) =>
          slug
               .split('-')
               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
               .join(' ');

     const title = formatTitle((await params).tag);

     // Fetch product details (ensure `product` is defined)
     // const product = await fetchProductDetails(params.slug); // You need to define this function

     return {
          title: `${title} | PruthaTek.info`,
          description: "Read this insightful blog post.",
          openGraph: {
               title: `${title} | PruthaTek.info`,
               description: "Read this insightful blog post.",
               url: `https://pruthatek.info/${(await params).tag}`,
               siteName: "PruthaTek.info",

               type: "article",
               publishedTime: new Date().toISOString(),
               authors: ["PruthaTek"],
          },
     };
}

export default function Layout({ children }) {
     return <>{children}</>;
}
