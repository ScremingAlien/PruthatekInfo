import { Accordion, Group, Text } from '@mantine/core'
import React from 'react'

export default function Accordian({data}) {
     return (
          <div className=" w-full my-10">
               <Accordion
                    

                    classNames={{
                         panel:" bg-whiteish-200 dark:bg-blackish-600",
                         item:" border-blackish-200/30  bg-whiteish-200 dark:bg-blackish-600   dark:border-blackish-200/20",
                         chevron:" dark:text-whiteish-500/90 "
                    }}

                    chevronPosition="right" variant="contained">
                    {
                         data?.items?.map((item) => (
                              <Accordion.Item value={item?.answer} key={item?.answer}>
                                   <Accordion.Control className=" dark:hover:bg-blackish-400  bg-whiteish-200 hover:bg-blackish-300/10">
                                        <Group wrap="nowrap">
                                             <div>
                                                  <Text className=" font-manrope  text-[16px] md:text-[18px] font-medium  dark:text-whiteish-500/90  ">{item?.question}</Text>
                                             </div>
                                        </Group>
                                   </Accordion.Control>
                                   <Accordion.Panel>
                                        <Text className="text-[15px] dark:text-whiteish-400/80 md:text-[17px] font-sourceSarif     ">{item?.answer}</Text>
                                   </Accordion.Panel>
                              </Accordion.Item>
                         ))
                    }
               </Accordion>
          </div>
     )
}
