import { Nunito, Source_Serif_4, Manrope, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import '@mantine/notifications/styles.css';
import Wrapper from "./_components/Wrapper";

// Font Imports 
const source4 = Source_Serif_4({ variable: "--font-SourceSarif4", subsets: ["latin"] });
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const bebas = Bebas_Neue({ variable: "--font-Bebas", subsets: ["latin"], weight: "400" });


export default function RootLayout({ children }) {
     return (
          <html lang="en" className="scrollBarMain">
               <head>
                    {/* ✅ Google AdSense */}
                    <script
                         async
                         src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9509857034277750"
                         crossOrigin="anonymous"
                         strategy="afterInteractive"
                    />
               </head>
               <body className={`  dark:bg-[#10100f] dark:text-[#fff] bg-[#fffffff5] text-[#10100f]  ${nunito.variable}  ${inter.variable}   ${source4.variable} ${manrope.variable} ${bebas.variable}   antialiased`}>
                    <Wrapper>

                         {children}
                    </Wrapper>

               </body>
          </html>
     );
}
