"use client"

import { queryClient } from '@/app/_components/Wrapper';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('../createNew/_components/Editor'), { ssr: false });
 
import { useForm } from '@mantine/form';
import ImageUploading from 'react-images-uploading';
import { Button, TextInput } from '@mantine/core';
import { uploadFile } from '@/utils/HelperFunctions';
import { notifications } from '@mantine/notifications';
export default function page() {

     const router = useRouter();
     const { user_data, updateBlogData } = useSelector(state => state.HomeSlice);
     const [loading, setLoading] = useState(false)

     // const [selectedTags, setSelectedTags] = useState([...updateBlogData?.tags]);
     const [selectedTags, setSelectedTags] = useState([]);
     const [editorContent, setEditorContent] = useState(updateBlogData.content ? {
          blocks: JSON.parse(updateBlogData.content),
     } : null);
     const [images, setImages] = useState(() =>
          updateBlogData?.thumbnail
               ? [{ data_url: updateBlogData.thumbnail, file: null }]
               : []
     );

     const maxNumber = 1;


     const form = useForm({
          mode: 'uncontrolled',
          initialValues: {
               title: updateBlogData?.title ? updateBlogData?.title : "",
               subTitle: updateBlogData?.subTitle ? updateBlogData?.subTitle : "",
               timeRequired: updateBlogData?.timeRequired ? String(updateBlogData?.timeRequired) : '1'
          },
          validate: {
               title: (value) => (value.trim().length < 3 ? "Title too short" : null),
               subTitle: (value) => (value.trim().length < 5 ? "subTitle too short" : null),
               timeRequired: (value) => (value <= 0 ? "Time too short" : null),
          },
     })

     async function onSubmit(values) {

          try {
               setLoading(true)
               // validations


               if (editorContent?.blocks?.length == 0 || editorContent == undefined) {
                    throw new Error('Please write some content for the blog')
               }

               let imageId = updateBlogData.thumbnail; // default to existing

               if (images.length && images[0].file) {
                    imageId = await uploadFile(images[0].file);
               }

               let request = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/blog/blogs/${updateBlogData._id}`, {
                    method: 'PUT',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                         title: values.title,
                         thumbnail: imageId ? imageId : null,
                         subTitle: values.subTitle,
                         content: JSON.stringify(editorContent?.blocks),
                         tags: selectedTags,
                         timeRequired: values.timeRequired
                    }),
               })

               let response = await request.json();

               notifications.show({
                    title: 'Success',
                    message: 'Blog Updated Successfully',
                    color: 'green',
               })

               // toast.success("Blog updated Successfully")


          } catch (error) {
               notifications.show({
                    title: error.message || 'Error',
                    message: 'Something went wrong',
                    color: 'red',
               })

          } finally {
               router.push('/dashboard/articals')
               form.reset()
               setEditorContent({})
               setImages([])
               setSelectedTags([])
               queryClient.invalidateQueries(['articalsByuser']);
               setLoading(false)
          }

     }

     const onChange = (imageList, addUpdateIndex) => {
          // data for submit
          console.log(imageList, addUpdateIndex);
          setImages(imageList);
     };



     return (
          <div className='overflow-auto   h-full '>
               <h3 className='  px-3 pt-2 pb-5   text-2xl font-bold text-PRI'>Create Blog</h3>

               <div className='p-3 flex gap-10  flex-row w-full   h-full  '>


                    <div className='  w-[40%]   h-fit pb-28'>
                         <p className=' text-[14px] pb-1 font-medium tracking-wide'>Thumbnail</p>
                         <div className="App mb-8 ">
                              <ImageUploading
                                   multiple
                                   value={images}
                                   onChange={onChange}
                                   maxNumber={maxNumber}
                                   dataURLKey="data_url"
                              >
                                   {({
                                        imageList,
                                        onImageUpload,
                                        onImageRemoveAll,
                                        onImageUpdate,
                                        onImageRemove,
                                        isDragging,
                                        dragProps,
                                   }) => (
                                        // write your building UI
                                        <div className="upload__image-wrapper">

                                             {
                                                  imageList.length == 0 &&
                                                  <div
                                                       className=' bg-gray-100 w-full aspect-[16/8] flex items-center justify-center'
                                                       style={isDragging ? { color: 'red' } : undefined}
                                                       onClick={onImageUpload}
                                                       {...dragProps}
                                                  >
                                                       Click or Drop here
                                                  </div>
                                             }


                                             {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}


                                             {imageList.map((image, index) => (
                                                  <div key={index} className="image-item relative">
                                                       <img src={image['data_url']} alt="" className=' w-full aspect-[16/8] object-cover ' />
                                                       {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                                                       <button className=' absolute top-2  bg-white border border-gray-200 px-2 text-red-600 right-2' onClick={() => onImageRemove(index)}>Remove</button>
                                                  </div>
                                             ))}
                                        </div>
                                   )}
                              </ImageUploading>
                         </div>

                         <form onSubmit={form.onSubmit(onSubmit)}
                              className='space-y-4'
                         >
                              <TextInput
                                   withAsterisk
                                   label="title"
                                   placeholder="Approx 10-15 words"
                                   key={form.key('title')}
                                   {...form.getInputProps('title')}
                              />
                              <TextInput
                                   withAsterisk
                                   label="Sub Title"
                                   placeholder="Approx 70-80 words"
                                   key={form.key('subTitle')}
                                   {...form.getInputProps('subTitle')}
                              />
                              <TextInput
                                   withAsterisk
                                   label="Time Required to Read"
                                   key={form.key('timeRequired')}
                                   {...form.getInputProps('timeRequired')}
                              />


                              <Button disabled={loading} loading={loading} type="submit">Done</Button>

                         </form>

                    </div>

                    <div className='  w-[60%]   '>

                         <Editor initialContent={editorContent} setEditorContent={setEditorContent} />
                    </div>
               </div>
          </div>
     )
}
