'use client'

 
import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react'
import ImageUploading from 'react-images-uploading';
// import Editor from './_components/Editor';
import { notifications } from '@mantine/notifications';

import { useRouter } from 'next/navigation'
import { queryClient } from '@/app/_components/Wrapper';
import { uploadFile } from '@/utils/HelperFunctions';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('./_components/Editor'), { ssr: false });

export default function page() {

  const { user_data } = useSelector(state => state.HomeSlice)

  const [loading, setLoading] = useState(false)

  const [editorContent, setEditorContent] = useState(null);
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const router = useRouter()


  const form = useForm({

    mode: 'uncontrolled',
    initialValues: {
      Title: "",
      subTitle: "",
      timeRequired: 1
    },

    validate: {
      Title: (value) => (value.trim().length < 3 ? "Title too short" : null),
      subTitle: (value) => (value.trim().length < 5 ? "subTitle too short" : null),
      timeRequired: (value) => (value <= 0 ? "Time too short" : null),
    },


  })

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
  
    setImages(imageList);
  };


  async function onSubmit(values) {

    try {
      setLoading(true)
      // validations

      if (editorContent?.blocks?.length == 0 || editorContent == undefined) {
        throw new Error('Please write some content for the blog')
      }

      let imageId = null
      if (images.length != 0) {
        imageId = await uploadFile(images[0].file);
      }

      let request = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/blog/blogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: values.Title,

          thumbnail: imageId ? imageId : null,
          subTitle: values.subTitle,
          content: JSON.stringify(editorContent?.blocks),
          author: user_data.user_id, // for production

          // tags: selectedTags,
          timeRequired: values.timeRequired
        }),
      })

      let response = await request.json();
 
      notifications.show({
        title: 'Success',
        message: 'Blog Created Successfully',
        color: 'green',
      })


    } catch (error) {
      notifications.show({
        title: 'Error',
        message: error.message,
        color: 'red',
      })


    } finally {
      router.push('/dashboard/articals')
      form.reset()
      setEditorContent({})
      setImages([])

      queryClient.invalidateQueries(['articalsByuser']);
      setLoading(false)
    }

  }



  return (

    <div className='p-3 flex gap-10   flex-row w-full   h-[92vh]  '>


      <div className='  w-[40%]     h-full  pb-10'>
        {/* <Headings title='Create New Artical' subTitle='' /> */}
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
            label="Title"
            placeholder="Approx 10-15 words"
            key={form.key('Title')}
            {...form.getInputProps('Title')}
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

            
          <Button loading={loading} type="submit">Done</Button>

        </form>

      </div>

      <div className='  w-[60%]  h-full  overflow-auto  '>
        <Editor setEditorContent={setEditorContent} />
      </div>
    </div>



  )
}




