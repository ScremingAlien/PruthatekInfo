/** @type {import('next').NextConfig} */
const nextConfig = {

     images: {
          qualities: [25, 50, 75, 15, 80, 5],
          remotePatterns: [
               {
                    protocol: 'https',
                    hostname: 'images.unsplash.com'
               },
               {
                    protocol: 'https',
                    hostname: 'loremflickr.com'
               },

               {
                    protocol: 'https',
                    hostname: 'lh3.googleusercontent.com'
               },
               {
                    protocol: 'https',
                    hostname: 'res.cloudinary.com'
               },
               {
                    protocol: 'https',
                    hostname: 'img.freepik.com'
               },
               {
                    protocol: 'http',
                    hostname: 'res.cloudinary.com'
               },
               {
                    protocol: 'https',
                    hostname: 'th.bing.com'
               },
               {
                    protocol: 'https',
                    hostname: 'picsum.photos'
               },
               {
                    protocol: 'https',
                    hostname: 'image.pngaaa.com'
               },


          ]
     }
};

export default nextConfig;
