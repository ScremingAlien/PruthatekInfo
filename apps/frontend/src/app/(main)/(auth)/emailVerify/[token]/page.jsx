"use client"
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

export default function () {
     const { token } = useParams();
     const dispatch = useDispatch();
     const [loading, setLoading] = useState(true);
     const [ShowPassInp, setShowPassInp] = useState(false);

     const [inp, setInp] = useState({ pass: '' });

     async function verifyToken() {
          let request = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/auth/emailVerify/${token}`, {
               method: 'GET',
          })
          let response = await request.json();
          if (response.status == true) {
               console.log('-----------------------')
               console.log(response)
               setLoading(false)
               setShowPassInp(true)
          } else {
               console.log('-----------------------')
               console.log(response)
          }
     }
     useEffect(() => {

          verifyToken();
     })

     async function passHandler() {
          let request = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/auth/setPassword`, {
               method: 'POST',
               headers: {
                    "Content-Type": "application/json"
               },
               body: JSON.stringify({
                    token: token,
                    password: inp.pass
               })
          })
          let response = await request.json();
          if (response.status == true) {
               alert(response.message)
               window.location.replace('/login')

          } else {
               alert(response.message)
          }
     }

     return (
          <div className=' py-16 text-black'>

               {
                    loading ?
                         <>
                              Please wait
                         </>
                         :
                         ''

               }
                    
               {
                    ShowPassInp ? <>
                         <input type='password'
                              placeholder='Create Password'
                              value={inp.pass}
                              className=' px-4 py-2 bg-gray-100 rounded-lg'
                              onChange={(e) => setInp({ ...inp, pass: e.target.value })} />

                         <button onClick={passHandler}>Set Password</button>

                    </> : ''
               }

               {/* 
               first showloading ui for sending token verification request
               if true then show create password input

                     
               */}



          </div >
     )
}

