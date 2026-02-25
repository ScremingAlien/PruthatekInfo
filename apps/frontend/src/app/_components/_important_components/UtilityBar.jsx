"use client"
import { notifications } from '@mantine/notifications';
import { Bookmark, Eye, Heart, LockKeyhole } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useDisclosure } from '@mantine/hooks';
import { Menu } from '@mantine/core';
import { queryClient } from '../Wrapper';

export default function UtilityBar({ data }) {

     const { user_data, is_user_logged_in } = useSelector(state => state.HomeSlice);
     const [opened, setOpened] = useState(false);

     const [likes, setLikes] = useState([]);
     const [stat, setStat] = useState(null);
     const [libs, setLibs] = useState([]);
     const [libsUser, setLibsUser] = useState(null);

     async function fetchLikes() {
          try {
               const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/blog/statistics/${data._id}`, { method: 'GET' });
               const result = await response.json();
               setLikes(result.likes);
               setStat(result);

          } catch (error) {
               console.error('Error fetching likes:', error);
          }
     }
     async function fetchLibs() {
          try {
               if (!is_user_logged_in || !user_data) { return; }
               const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/user/all-bookmarks/${user_data?.user_id}`, { method: 'GET' });
               const result = await response.json();
               setLibs(result.data);

          } catch (error) {
               console.error('Error fetching likes:', error);
          }
     }

     async function fetchLibsUser() {
          try {
               if (!is_user_logged_in || !user_data) { return; }
               const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/user/lib/${user_data?.user_id}`, { method: 'GET' });
               const result = await response.json();
               setLibsUser(result.data);

               console.log("Fetched Librs: ", result.data);
          } catch (error) {
               console.error('Error fetching likes:', error);
          }
     }

     async function handleLike() {
          if (!is_user_logged_in || !user_data) {
               notifications.show({
                    title: 'Please Login',
                    message: 'You need to login to like this blog.',
                    color: 'red',
                    autoClose: 3000,
               });
               return;
          }

          try {
               if (user_data.user_id === undefined) {
                    notifications.show({
                         title: 'Error',
                         message: 'User ID is not available.',
                         color: 'red',
                         autoClose: 3000,
                    });
                    return;
               }
               const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/blog/likeUnlike/${user_data?.user_id}/${stat?._id}`, {
                    method: 'GET',
               });

               const result = await response.json();
               if (result.status) {
                    if (result.message === "Unliked successfully") {
                         setLikes(prevLikes => prevLikes.filter(like => like !== user_data.user_id));
                    } else {
                         setLikes(prevLikes => [...prevLikes, user_data.user_id]);
                    }
               }
          } catch (error) {
               console.error('Error liking the blog:', error);
          }
     }
     async function incrementViews() {
          try {
               const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/blog/incView/${data?.statistic}`, {
                    method: 'GET',
               });
               const result = await response.json();

          } catch (error) {
               console.error('Error incrementing views:', error);
          }
     }

     async function handleBookmark() {
          if (!is_user_logged_in || !user_data) {
               notifications.show({
                    title: 'Please Login',
                    message: 'You need to login to bookmark this blog.',
                    color: 'red',
                    autoClose: 3000,
               });
               return;
          }
          try {
               if (user_data.user_id === undefined) {
                    notifications.show({
                         title: 'Error',
                         message: 'User ID is not available.',
                         color: 'red',
                         autoClose: 3000,
                    });
                    return;
               }
               setOpened(!opened);


          } catch (error) {
               console.error('Error liking the blog:', error);
          }

     }


     useEffect(() => {
          if (data) {
               incrementViews();
          }
          fetchLikes();
          fetchLibs();
          fetchLibsUser()
     }, []);


     return (
          <div className=' w-full  flex flex-row justify-between items-center  py-2 mt-6   '>
               <div className=' flex flex-row justify-start items-center gap-2 '>
                    {/* <span className='  text-[22px] font-inter '> 0 </span>
                    <Eye strokeWidth={1.5} size={26} /> */}
               </div>
               <div className=' flex flex-row justify-start items-center gap-6 '>
                    <div className=' flex flex-row justify-start items-center gap-2 '>
                         <span className='  text-[22px] font-inter '> {likes.length} </span>
                         <Heart onClick={handleLike} className={` cursor-pointer ${likes.includes(user_data.user_id) ? "text-red-500 fill-red-500" : ""} `} strokeWidth={1.5} size={26} />
                    </div>
                    <div className=' flex flex-row justify-start items-center gap-2 '>

                         <Menu opened={opened} onChange={handleBookmark} width={200}>
                              <Menu.Target>
                                   {
                                        libsUser?.find(lib => lib?.blogs?.includes(data._id)) ?
                                             <Bookmark strokeWidth={1.5} size={26} className=' text-blue-500 fill-blue-500 cursor-pointer' /> :
                                             <Bookmark strokeWidth={1.5} size={26} className=' cursor-pointer' />
                                   }

                              </Menu.Target>

                              <Menu.Dropdown>
                                   <Menu.Label className=' font-inter'>Libraries</Menu.Label>
                                   {
                                        libsUser ? libsUser.map((lib, index) => (
                                             <Menu.Item

                                                  rightSection={lib?.type == "private" ? <LockKeyhole strokeWidth={1.5} size={18} /> : null}

                                                  key={index}

                                                  onClick={async () => {
                                                       console.log("Bookmarking to library: ", lib);
                                                       let req = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/user/lib/${lib._id}/blog/${data._id}`, {
                                                            method: 'PUT',
                                                       });
                                                       let res = await req.json();
                                                       if (res.status) {

                                                            if (res.message === "Removed") {
                                                               

                                                                 setLibsUser(prevLibs => prevLibs.map(libItem => libItem._id === lib._id ? { ...libItem, blogs: libItem.blogs.filter(blogId => blogId !== data._id) } : libItem));

                                                                 notifications.show({
                                                                      title: 'Success',
                                                                      message: `Bookmarked  Removed from ${lib.title}`,
                                                                      color: 'green',
                                                                      autoClose: 3000,
                                                                 });
                                                            } else if (res.message === "added") {
                                                           
                                                                 setLibsUser(prevLibs => prevLibs.map(libItem => libItem._id === lib._id ? { ...libItem, blogs: [...libItem.blogs, data._id] } : libItem));
                                                                 notifications.show({
                                                                      title: 'Success',
                                                                      message: `Bookmarked to ${lib.title}`,
                                                                      color: 'green',
                                                                      autoClose: 3000,
                                                                 });
                                                            }

                                                       }
                                                       else {
                                                            notifications.show({
                                                                 title: 'Error',
                                                                 message: res.message,
                                                                 color: 'red',
                                                                 autoClose: 3000,
                                                            });
                                                       }
                                                       setOpened(!opened);
                                                       queryClient.refetchQueries('bookmarks');
                                                  }}
                                                  className=' font-inter  '
                                                  style={{
                                                       backgroundColor: lib?.blogs?.includes(data._id) ? "blue" : "transparent",
                                                  }}
                                             >
                                                  {lib?.title}
                                             </Menu.Item>
                                        )) : null
                                   }


                              </Menu.Dropdown>
                         </Menu>

                    </div>
               </div>
          </div>
     )
}


