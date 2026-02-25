"use client";
import { useDisclosure } from '@mantine/hooks';
import { Button, Modal } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { queryClient } from '@/app/_components/Wrapper';

export default function DeleteButton({ data }) {
     const [opened, { open, close }] = useDisclosure(false);

     return (
          <>
               <Modal opened={opened} onClose={close} title="Are you sure?">
                    <div>
                         <p>Are you sure you want to delete this article</p>
                    </div>

                    <div className=' pt-12 flex  justify-end gap-2'>
                         <Button   variant='outline' onClick={() => { close() }} className=' font-medium font-inter text-black text-[13px]'>
                              cancle
                         </Button>
                         <Button variant="filled" color="red" onClick={async () => {

                              try {
                                   let request = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/blog/blogs/${data}`, {
                                        method: 'DELETE',
                                        headers: {
                                             'Content-Type': 'application/json',
                                        }

                                   })

                                   let response = await request.json();

                                   notifications.show({
                                        title: 'Successfully Deleted',
                                        message: 'blog deleted successfully',
                                        color: "green",
                                   })
                              } catch (error) {
                                   console.log(error);
                                   notifications.show({
                                        title: 'Something went wrong . Please try again',
                                        message: 'Something went wrong . Please try again',
                                        color: "red",
                                   })
                              } finally {
                                   close();
                                   queryClient.invalidateQueries(['articalsByuser']);
                              }


                         }}  >
                              Delete
                         </Button>
                    </div>


               </Modal>

               <button onClick={() => { open() }} className=' font-medium font-inter text-red-600 text-[13px]'>
                    Delete
                    {/* <TrashSimple size={22} weight="fill" /> */}
               </button>
          </>
     )
}
