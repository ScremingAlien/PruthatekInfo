'use client'



import BoxWrapper from '@/app/_components/_resusable_components/BoxWrapper'
import { Button, Checkbox, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { ArrowUpRight } from 'lucide-react';

import React, { useState } from 'react'

import Image from 'next/image';
import Link from 'next/link';
import { notifications } from '@mantine/notifications';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setFollowings, setisVerifying, setUserLoginDetails, setUserLoginStatus } from '@/app/utils/Redux/slices/HomePage.slice';
import { useAuthRedirect } from '../useAuthRedirect';

export default function page() {

  useAuthRedirect();

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch();


  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',

    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 6 ? 'Password should be at least 8 characters' : null),
    },
  });

  const handleSubmit = async (values) => {

    try {
      setLoading(true)
      let request = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password
        }),
      })
      let response = await request.json();

      if (response.status) {
        window.localStorage.setItem('PruthatekINFO_token', response.token);

        setisVerifying(true);
        let user = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/user/followings-less/${response.user_id}`, {
          method: 'GET',
        })
        
        let ress = await user.json();
        dispatch(setisVerifying(false));
        dispatch(setFollowings(ress));

        dispatch(setUserLoginStatus(true));
        dispatch(setUserLoginDetails({
          user_id: response.user_id,
          username: response.username,
          avatar: response.avatar,
          accountType: response.accountType
        }));
        notifications.show({
          title: `${response.username} Logged In Successfully`,
          message: 'We are redirecting you. please wait',
          color: "blue"

        })
        router.push('/');
      } else {

        dispatch(setUserLoginStatus(false));
        dispatch(setUserLoginDetails({
          username: '',
          user_id: '',
          avatar: '',
          accountType: ''
        }));
        notifications.show({
          title: response.message || 'Something went wrong . Please try again',
          message: 'Something went wrong . Please try again',
          color: "red",
        })
        window.localStorage.removeItem('PruthatekINFO_token');

      }

    }
    catch (error) {
      window.localStorage.removeItem('PruthatekINFO_token');
      dispatch(setUserLoginStatus(false));
      dispatch(setUserLoginDetails({
        username: '',
        avatar: '',
        accountType: '',
        user_id: "",
      }));

      notifications.show({
        title: 'Something went wrong . Please try again',
        message: 'We are working on that fast. please wait',
        color: "red",

      })
    }
    finally {
      setLoading(false)
    }

  }
  async function googleAuthHandler() {

    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_API}/v1/auth/google/auth`
  }


  return (

    <BoxWrapper>

      <div className='     w-full flex  flex-col-reverse lg:flex-row justify-center gap-12 items-center'>
        <div className='  w-full   md:w-[65%] lg:w-[40%]'>


          <form onSubmit={form.onSubmit(handleSubmit)} className=' space-y-6'>

            <div className=' text-center text-[30px] font-medium font-sourceSarif'>
              Welcome Again !
            </div>


            {/* // google button */}
            <div className=' flex w-full justify-center items-center'>
              <button type='button' onClick={googleAuthHandler} className='px-2.5 py-2.5   rounded-full duration-300  flex flex-row w-fit gap-5 items-center'>
                <div className=' size-[30px] relative'>
                  <Image src={'/images/google.svg'} fill alt='google' className=' object-contain' />
                </div>
                <span className=' font-medium font-manrope  text-[17px]'>Sign In with Google</span>
              </button>
            </div>
            <p className='font-manrope  text-[17px] py-2 text-blackish-200  text-center'>or </p>


            <TextInput
              classNames={{
                input: "  bg-transparent text-blackish-500 dark:text-whiteish-400 font-manrope text-[18px] md:text-[19px] h-[45px]  border-blackish-400 dark:bg-blackish-100/10 dark:border-whiteish-400/20",
                label: " font-sourceSarif text-blackish-500 dark:text-whiteish-400 font-manrope  text-[17px] md:text-[18px] ",
                error: " text-red-600 dark:text-red-400 tracking-wide font-nunito  text-[16px] ",
                root: ""
              }}
              radius={'md'}
              withAsterisk
              label="Email"
              placeholder=""
              key={form.key('email')}
              {...form.getInputProps('email')}
            />

            <TextInput
              classNames={{
                input: "  bg-transparent text-blackish-500 dark:text-whiteish-400 font-manrope text-[18px] md:text-[19px] h-[45px]  border-blackish-400 dark:bg-blackish-100/10 dark:border-whiteish-400/20",
                label: " font-sourceSarif text-blackish-500 dark:text-whiteish-400 font-manrope  text-[17px] md:text-[18px] ",
                error: " text-red-600 dark:text-red-400 tracking-wide font-nunito  text-[16px] ",
                root: ""
              }}
              radius={'md'}
              withAsterisk
              label="Password"
              placeholder=""
              key={form.key('password')}
              {...form.getInputProps('password')}
            />

            <div className='  py-4 flex justify-center items-center  flex-col'>

              <Button loading={loading} type="submit" size='lg' classNames={{ root: "select-none font-nunito  bg-blackish-600 dark:bg-whiteish-400 font-medium group  text-[16px] md:text-[18px] w-full md:w-[200px]  leading-[30px] flex justify-center items-center gap-4 rounded-full px-4 py-2 dark:text-blackish-500 text-[#ffffff] hover:bg-blackish-600 dark:hover:bg-whiteish-400 " }}>Login Now

                <div className="  ml-3   overflow-hidden rounded-lg   relative">
                  <ArrowUpRight size={20} className=" group-hover:-translate-y-5 group-hover:translate-x-5 duration-300" />

                  <ArrowUpRight size={20} className=" absolute group-hover:-translate-y-0  translate-y-5 -translate-x-5 top-0 left-0 group-hover:translate-x-0 duration-300" />

                </div>
              </Button>

              <p className=' mt-4 group font-manrope font-medium'>Don't have an account ? <Link href={'/register'} className=' duration-300 group-hover:underline underline-offset-2  text-blueish-500 dark:text-yellowish-500'>Create New !</Link></p>


            </div>
          </form>
        </div>

        <div className=' w-full  hidden lg:block  md:w-[85%] lg:w-[60%]'>

          <div className=' relative w-full  aspect-square lg:h-[650px]'>
            <Image src={'/images/authImage.png'} fill alt='google' className=' object-contain' />
          </div>


        </div>
      </div>

    </BoxWrapper>

  )
}
