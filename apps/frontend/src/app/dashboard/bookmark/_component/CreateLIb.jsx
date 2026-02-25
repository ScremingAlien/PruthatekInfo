"use client";
import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
     Modal,
     Button,
     TextInput,
     Select,
     Group,
     Loader,
     Notification,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useSelector } from "react-redux";

// import { IconCheck, IconX } from "@tabler/icons-react";
import { notifications } from '@mantine/notifications';
import { queryClient } from "@/app/_components/Wrapper";
export default function CreateLib() {
     const [opened, { open, close }] = useDisclosure(false);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState("");
     const [success, setSuccess] = useState(false);
     const { user_data } = useSelector(state => state.HomeSlice);
     const form = useForm({
          initialValues: {
               title: "",
               type: "private",
               owner: user_data.user_id, // You can pass this from props if needed
          },

          validate: {
               title: (value) => (value.trim().length < 3 ? "Title too short" : null),

          },
     });

     const handleSubmit = async (values) => {
          setLoading(true);
          setError("");
          try {
               const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/user/lib`, {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
               });

               const data = await res.json();

               if (!data.status) {
                    throw new Error("Failed to create library");
               }
               notifications.show({
                    title: 'Success',
                    message: 'Library created successfully',
                    color: 'green',
               })
               setSuccess(true);
               queryClient.refetchQueries('bookmarks');
               form.reset();
               close();

               setTimeout(() => setSuccess(false), 3000);
          } catch (err) {
               setError(err.message || "Something went wrong");
          } finally {
               setLoading(false);
          }
     };

     return (
          <div>
               <div className="w-full py-3 flex flex-row justify-end">
                    <button
                         onClick={open}
                         className="font-inter font-medium text-green-500"
                    >
                         + create library
                    </button>
               </div>

               <Modal opened={opened} onClose={close} centered title="Create Library">
                    <form
                         onSubmit={form.onSubmit((values) => handleSubmit(values))}
                         className="space-y-4"
                    >
                         <TextInput
                              label="Library Title"
                              placeholder="Enter title"
                              {...form.getInputProps("title")}
                              required
                         />

                         <Select
                              label="Type"
                              placeholder="Pick one"
                              data={[
                                   { value: "private", label: "Private" },
                                   { value: "public", label: "Public" },
                              ]}
                              {...form.getInputProps("type")}
                         />

                         {error && (
                              <Notification color="red"
                                   // icon={<IconX />} 
                                   withCloseButton={false}>
                                   {error}
                              </Notification>
                         )}

                         <Group position="right">
                              <Button type="submit" disabled={loading}>
                                   {loading ? <Loader size="xs" color="white" /> : "Create"}
                              </Button>
                         </Group>
                    </form>
               </Modal>


          </div>
     );
}
