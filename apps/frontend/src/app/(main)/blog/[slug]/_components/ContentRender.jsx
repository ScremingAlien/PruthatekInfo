import parseer from 'html-react-parser'
import { Checkbox } from "@mantine/core";
import { removeNbsp } from "@/app/utils/BasicFunctions";

export default function ContentRender({ content }) {
     const data = JSON.parse(content || "[]");

     const parseWithLinkStyle = (html) =>
          parseer(removeNbsp(html), {
               replace: (domNode) => {
                    if (domNode.name === "a" && domNode.attribs?.href) {
                         return (
                              <a
                                   href={domNode.attribs.href}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="underline  underline-offset-2 text-black dark:text-white hover:text-blueish-500 dark:hover:text-yellowish-500"
                              >
                                   {domNode.children?.[0]?.data}
                              </a>
                         );
                    }
               },
          });

     function RenderUnorderedList(items) {
          return (
               <ul className="list-disc ml-5">
                    {items.map((item, index) => (
                         <li
                              key={index}
                              className="font-sourceSarif text-blackish-500 dark:text-whiteish-400 leading-[28px] md:leading-[31px] text-[18px] md:text-[20px] tracking-[-0.003rem] md:tracking-normal"
                         >
                              {parseWithLinkStyle(item.content)}
                              {item.items?.length > 0 && RenderUnorderedList(item.items)}
                         </li>
                    ))}
               </ul>
          );
     }

     function RenderOrderedList(items, counterType) {
          return (
               <ol className="ml-5" style={{ listStyleType: counterType || "decimal" }}>
                    {items.map((item, index) => (
                         <li
                              key={index}
                              className="font-sourceSarif text-blackish-500 dark:text-whiteish-400 leading-[28px] md:leading-[31px] text-[18px] md:text-[20px] tracking-[-0.003rem] md:tracking-normal"
                         >
                              {parseWithLinkStyle(item.content)}
                              {item.items?.length > 0 && RenderOrderedList(item.items, counterType)}
                         </li>
                    ))}
               </ol>
          );
     }

     return (
          <div className="w-full">
               {data.map((item, index) => {
                    if (item.type === "header") {
                         switch (item.data.level) {
                              case 1:
                                   return (
                                        <h1
                                             key={index}
                                             className="text-[24px] dark:tracking-normal tracking-[-0.04rem] md:text-[30px] pt-10 font-manrope leading-[130%] md:leading-[135%] font-bold md:font-extrabold dark:text-white"
                                        >
                                             {removeNbsp(item.data.text)}
                                        </h1>
                                   );
                              case 2:
                                   return (
                                        <h2
                                             key={index}
                                             className="text-[23px] dark:tracking-normal tracking-[-0.03rem] md:text-[26px] pt-10 font-manrope font-bold md:font-extrabold leading-[130%] dark:text-whiteish-300"
                                        >
                                             {removeNbsp(item.data.text)}
                                        </h2>
                                   );
                              case 3:
                                   return (
                                        <h3
                                             key={index}
                                             className="text-[20px] md:text-[24px] pt-8 font-manrope dark:text-whiteish-400/95 leading-[130%] md:leading-normal text-blackish-400 font-bold md:font-extrabold"
                                        >
                                             {removeNbsp(item.data.text)}
                                        </h3>
                                   );
                              default:
                                   return (
                                        <h4 key={index} className="text-lg dark:text-whiteish-400/95 font-manrope font-bold">
                                             {removeNbsp(item.data.text)}
                                        </h4>
                                   );
                         }
                    } else if (item.type === "paragraph") {
                         return (
                              <p key={index} className="h_p pt-4 md:pt-6">
                                   {parseWithLinkStyle(item.data.text)}
                              </p>
                         );
                    } else if (item.type === "list") {
                         if (item.data.style === "unordered") {
                              return (
                                   <div key={index} className="pt-4 md:pt-6">
                                        {RenderUnorderedList(item.data.items)}
                                   </div>
                              );
                         } else if (item.data.style === "ordered") {
                              return (
                                   <div key={index} className="pt-4 md:pt-6">
                                        {RenderOrderedList(item.data.items, item?.data?.meta?.counterType)}
                                   </div>
                              );
                         } else if (item.data.style === "checklist") {
                              return (
                                   <ul key={index} className="pt-4 md:pt-6">
                                        {item.data.items.map((list, i) => (
                                             <li
                                                  key={i}
                                                  className="font-sourceSarif text-blackish-500 dark:text-whiteish-500/95 leading-[28px] md:leading-[31px] text-[18px] md:text-[20px] tracking-[-0.003rem] md:tracking-normal flex items-center"
                                             >
                                                  <Checkbox className="mr-2" checked={list.meta.checked} readOnly />
                                                  {parseWithLinkStyle(list.content)}
                                             </li>
                                        ))}
                                   </ul>
                              );
                         }
                    }
                    return null;
               })}
          </div>
     );
}
