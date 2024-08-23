import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) =>{
      if(e.target.name == "email"){
        setEmail(e.target.value)
      } else if(e.target.name == "password"){
        setPassword(e.target.value)
      } else if(e.target.name == "name"){
        setName(e.target.value)
      }
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const data = { name, email, password }
        try {
          let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
    
          const result = await res.json();
          toast.success('Your account has been created!', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          localStorage.setItem("myuser", JSON.stringify({token: result.token, email: result.email}))
          setTimeout(()=>{
            router.push(process.env.NEXT_PUBLIC_HOST)
          }, 2000)
          setEmail('')
          setName('')
          setPassword('')
        } catch (e) {
          toast.error('An error occured while creating your account!', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
           <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div
            className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
          </div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
            <div className="flex justify-center">
                <Image src="/loginpage.png" width={40} height={40} className="" alt="Icon">

                </Image>
            </div>
              <div>
                <h1 className="text-2xl font-semibold text-center">Register</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7 ">
                  <div className="relative">
                    <input onChange={handleChange} value={name} autocomplete="off" id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Name" />
                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                  </div>
                  <div className="relative">
                    <input onChange={handleChange} value={email} autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                  </div>
                  <div className="relative">
                    <input onChange={handleChange} value={password} autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" />
                    <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                  </div>
                  <div className="relative pt-3 flex justify-center">
                  <button onClick={handleRegister} className="bg-gradient-to-r  from-pink-500 via-red-500 to-yellow-500 text-white font-semibold rounded-full px-6 py-2 shadow-lg transform transition-transform duration-300 ease-out hover:scale-110 hover:rotate-1 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 animate-gradient">
                    Register
                  </button>
                </div>
                  <div className="relative text-center">
                    <span className="text-sm">Click here to <Link className="text-blue-500 underline" href="/login">login</Link></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;
