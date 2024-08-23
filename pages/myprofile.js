import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Myaccount = ({ user }) => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [oldPassword, setOldpassword] = useState("");
  const [newPassword, setNewpassword] = useState("");
  const [pincode, setPincode] = useState("");

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    }
    if (e.target.name == "address") {
      setAddress(e.target.value);
    }
    if (e.target.name == "phone") {
      setPhone(e.target.value);
    }
    if (e.target.name == "pincode") {
      setPincode(e.target.value);
    }
    if (e.target.name == "oldpassword") {
      setOldpassword(e.target.value);
    }
    if (e.target.name == "newpassword") {
      setNewpassword(e.target.value);
    }
    if (e.target.name == "age") {
        setAge(e.target.value);
      }
    
  };

  useEffect(() => {
    const fun = async()=>{
      let token = {token: user.token}
      let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(token),
      });
      a = await a.json();
      console.log(a)
      setName(a.name);
      setAddress(a.address);
      setPhone(a.phoneno);
      setPincode(a.pincode);
      setAge(a.age)
    }
    fun()
  }, [user.token])
  

  const changePassword = async()=>{
    let data = {token: user.token, oldpassword: oldPassword, newpassword: newPassword}
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updatepassword`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    a = await a.json();
    if(a.success){
      toast.success("Password Updated!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      toast.error(a.message, {
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
  }
  
  const updateUserDetails = async () =>{
    let data = {token: user.token, phoneno: phone,name: name,address: address,pincode: pincode, age: age}
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateuser`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    a = await a.json();
    if(a.success){
      toast.success("User Details Updated!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      toast.error("An error occured!", {
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

  }

  useEffect(() => {
    if (!localStorage.getItem("myuser")) {
      router.push("/");
    }
    if (user && user.token) {
      setEmail(user.email);
    }
  }, [router, user,name, pincode, address, phone]);

  return (
    <div className="container">
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
          theme="light"/>
      <h1 className="my-8 text-xl text-center font-bold">My Profile</h1>
      <h2 className="mx-auto w-3/4 text-lg font-semibold mb-4">
        1. Personal Details
      </h2>
      <div className="mx-auto w-3/4 md:flex md:space-x-2">
        <div className="mb-4 w-full">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            onChange={handleChange}
            value={name}
            type="text"
            id="name"
            name="name"
            className=" w-full bg-white rounded border border-blue-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email (Cannot be updated)
          </label>
          {user.token ? (
            <input
              value={email}
              type="email"
              id="email"
              name="email"
              readOnly={true}
              className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          ) : (
            <input
              onChange={handleChange}
              value={email}
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          )}
        </div>
      </div>
      <div className="mx-auto w-3/4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Address
        </label>
        <textarea
          type="text"
          onChange={handleChange}
          value={address}
          id="address"
          name="address"
          className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <div className="mx-auto w-3/4 md:flex md:space-x-2">
        <div className="mb-4 w-full">
          <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
            Phone No
          </label>
          <input
            onChange={handleChange}
            value={phone}
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your 10 digit phone number"
            className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">
            Pincode
          </label>
          <input
            onChange={handleChange}
            value={pincode}
            type="text"
            id="pincode"
            name="pincode"
            className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>

      <div className="mx-auto w-3/4 md:flex md:space-x-2">
        <div className="mb-4 w-full">
          <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
            Age
          </label>
          <input
            onChange={handleChange}
            value={age}
            type="number"
            id="age"
            name="age"
            placeholder=""
            className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        
      </div>

      <div className="mx-auto w-3/4">
        <button onClick={updateUserDetails}
          className="flex text-white bg-blue-400 border-0 py-1 px-2 focus:outline-none hover:bg-blue-500 rounded text-lg"
        >
          Update Details
        </button>
      </div>

      <h2 className="mx-auto w-3/4 text-lg font-semibold mb-4 mt-8">
        2. Change Password
      </h2>
      <div className="mx-auto w-3/4 md:flex md:space-x-2">
        <div className="mb-4 w-full">
          <label
            htmlFor="oldpassword"
            className="leading-7 text-sm text-gray-600"
          >
            Previous Password
          </label>
          <input
            onChange={handleChange}
            value={oldPassword}
            type="text"
            id="oldpassword"
            name="oldpassword"
            className=" w-full bg-white rounded border border-blue-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="newpassword"
            className="leading-7 text-sm text-gray-600"
          >
            New Password
          </label>

          <input
            onChange={handleChange}
            value={newPassword}
            type="text"
            id="newpassword"
            name="newpassword"
            className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="mx-auto w-3/4">
        <button onClick={changePassword}
          className="flex text-white bg-blue-400 border-0 py-1 px-2 focus:outline-none hover:bg-blue-500 rounded text-lg"
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default Myaccount;

