function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export default async function sitemap() {
  const blogDocs = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/blog/getStaticBlogs`).then(res => res.json());
  const tagsDocs = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/blog/getStaticTags`).then(res => res.json());
  
  const staticPages = [
    { url: `https://pruthatek.info/`, lastModified: new Date().toISOString(), priority: 1 },
    { url: `https://pruthatek.info/blog`, lastModified: new Date().toISOString(), priority: 1 },
    { url: `https://pruthatek.info/login`, lastModified: new Date().toISOString(), priority: 1 },
    { url: `https://pruthatek.info/profile/PruthaTek.info`, lastModified: new Date().toISOString(), priority: 1 },
    { url: `https://pruthatek.info/register`, lastModified: new Date().toISOString(), priority: 1 },
  ];

  const blogPages = blogDocs.map(post => {
    const date = new Date(post.updatedAt || post.createdAt);
    return {
      url: `https://pruthatek.info/blog/${post.slug}`,
      lastModified: !isNaN(date) ? date.toISOString() : new Date().toISOString(),
      priority: 0.8,
      changefreq: 'weekly',
    };
  });

  const tagPages = tagsDocs.map(post => {
    const date = new Date(post.updatedAt || post.createdAt);
    return {
      url: `https://pruthatek.info/${slugify(post?.name)}`,
      lastModified: !isNaN(date) ? date.toISOString() : new Date().toISOString(),
      priority: 0.7,
      changefreq: 'monthly',
    };
  });

  return [...staticPages, ...blogPages, ...tagPages];
}
