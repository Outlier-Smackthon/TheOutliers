// import { useRouter } from 'next/router';
// import React, {useState, useEffect} from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Input = ({user}) => {
//   const [strengths, setStrengths] = useState([]);
//   const [weaknesses, setWeaknesses] = useState([]);
//   const [currentStrength, setCurrentStrength] = useState('');
//   const [currentWeakness, setCurrentWeakness] = useState('');
//   const [subject, setSubject] = useState('');
//   const [currentLevel, setCurrentLevel] = useState('');
//   const [goal, setGoal] = useState('');
//   const [days, setDays] = useState('');

//   const router = useRouter()

//   useEffect(() => {
//     if (!localStorage.getItem("myuser")) {
//       router.push("/");
//     }
  
//   }, [router])
  

//   const handleChange = (e) =>{
//     if(e.target.name == "subject"){
//       setSubject(e.target.value)
//     } else if(e.target.name == "currentlevel"){
//       setCurrentLevel(e.target.value)
//     } else if(e.target.name == "goal"){
//       setGoal(e.target.value)
//     } else if(e.target.name == "days"){
//       setDays(e.target.value)
//     }
//   }

//   const handleSubmit = async (e) =>{
//     e.preventDefault()
//     if(subject == '' || currentLevel == '' || goal == '' || days == ''){
//       toast.error("Enter all the required fields!", {
//         position: "bottom-center",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         });
//     }
//     let data = {user: user, subject: subject, currentLevel: currentLevel, goal: goal, days: days, weaknesses: weaknesses, strengths: strengths};
//       let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/userinfo`, {
//         method: "POST", // or 'PUT'
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       a = await a.json();
//   }

//   const addStrength = () => {
//     if (currentStrength) {
//       setStrengths([...strengths, currentStrength]);
//       setCurrentStrength('');
//     }
//   };

//   const addWeakness = () => {
//     if (currentWeakness) {
//       setWeaknesses([...weaknesses, currentWeakness]);
//       setCurrentWeakness('');
//     }
//   };

//   const removeStrength = (index) => {
//     setStrengths(strengths.filter((_, i) => i !== index));
//   };

//   const removeWeakness = (index) => {
//     setWeaknesses(weaknesses.filter((_, i) => i !== index));
//   };

//   return (
   
//     <div className="w-3/4 mx-auto p-6 bg-white shadow-lg rounded-lg">
//        <ToastContainer
//         position="bottom-center"
//         autoClose={2000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//       <form className="space-y-6">
//         <div>
//           <label className="block text-gray-800 font-semibold">Subject</label>
//           <select value={subject} name="subject" onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105 hover:border-blue-400 focus:scale-105">
//             <option></option>
//             <option>Aptitude</option>
//             <option>DSA</option>
//             <option>OOPS</option>
//             <option>Computer Science</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-gray-800 font-semibold">Current Level</label>
//           <select value={currentLevel} onChange={handleChange} name="currentlevel" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105 hover:border-blue-400 focus:scale-105">
//             <option></option>
//             <option>Beginner</option>
//             <option>Intermediate</option>
//             <option>Advanced</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-gray-800 font-semibold">Strengths</label>
//           <input
//             type="text"
//             value={currentStrength}
//             onChange={(e) => setCurrentStrength(e.target.value)}
//             onKeyPress={(e) => {
//               if (e.key === 'Enter') {
//                 e.preventDefault();
//                 addStrength();
//               }
//             }}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
//           />
//           <div className="mt-2 space-y-1">
//             {strengths.map((strength, index) => (
//               <div key={index} className="flex items-center">
//                 <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full mr-2">
//                   {strength}
//                 </span>
//                 <button
//                   onClick={() => removeStrength(index)}
//                   className="text-red-500 hover:text-red-700 focus:outline-none"
//                 >
//                   &#x2716;
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className="block text-gray-800 font-semibold">Weaknesses</label>
//           <input
//             type="text"
//             value={currentWeakness}
//             onChange={(e) => setCurrentWeakness(e.target.value)}
//             onKeyPress={(e) => {
//               if (e.key === 'Enter') {
//                 e.preventDefault();
//                 addWeakness();
//               }
//             }}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
//           />
//           <div className="mt-2 space-y-1">
//             {weaknesses.map((weakness, index) => (
//               <div key={index} className="flex items-center">
//                 <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded-full mr-2">
//                   {weakness}
//                 </span>
//                 <button
//                   onClick={() => removeWeakness(index)}
//                   className="text-red-500 hover:text-red-700 focus:outline-none"
//                 >
//                   &#x2716;
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className="block text-gray-800 font-semibold">Goal</label>
//           <select value={goal} onChange={handleChange} name="goal" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105 hover:border-blue-400 focus:scale-105">
//             <option></option>
//             <option>Basic Idea</option>
//             <option>Intermediate</option>
//             <option>Advanced</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-gray-800 font-semibold">Days to Achieve Goal</label>
//           <input
//             value={days}
//             onChange={handleChange}
//             name="days"
//             type="number"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
//           />
//         </div>

//         <div>
//           <button
//             onClick={handleSubmit}
//             type="submit"
//             className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition duration-200 ease-in-out transform hover:scale-105"
//           >
//             Start Assesment
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Input


import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const Input = ({ user }) => {
  const [strengths, setStrengths] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]);
  const [currentStrength, setCurrentStrength] = useState('');
  const [currentWeakness, setCurrentWeakness] = useState('');
  const [subject, setSubject] = useState('');
  const [currentLevel, setCurrentLevel] = useState('');
  const [goal, setGoal] = useState('');
  const [days, setDays] = useState('');

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('myuser')) {
      router.push('/');
    }


    const getData = async () =>{
      const data = {user:user}
      let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getdashboardinfo`, {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        a = await a.json();
        if(!a.success){
          toast.error("An error occured while fetching data!", {
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
        setStrengths(a.strengths)
        setCurrentLevel(a.currentLevel)
        setSubject(a.subject)
        setWeaknesses(a.weaknesses)
        setGoal(a.goal)
        setDays(a.days)
      }
      getData();
  }, [router, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'subject') setSubject(value);
    else if (name === 'currentlevel') setCurrentLevel(value);
    else if (name === 'goal') setGoal(value);
    else if (name === 'days') setDays(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!subject || !currentLevel || !goal || !days) {
      toast.error('Enter all the required fields!', {
        position: 'bottom-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }

    const data = {
      user,
      subject,
      currentLevel,
      goal,
      days,
      weaknesses,
      strengths,
    };

    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/setuserinfo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    a = await a.json();
    const queryParams = new URLSearchParams({
      subject,
      currentLevel
    }).toString();
  
    router.push(`/AssessmentForm?${queryParams}`);
  };

  const addStrength = () => {
    if (currentStrength) {
      setStrengths([...strengths, currentStrength]);
      setCurrentStrength('');
    }
  };

  const addWeakness = () => {
    if (currentWeakness) {
      setWeaknesses([...weaknesses, currentWeakness]);
      setCurrentWeakness('');
    }
  };

  const removeStrength = (index) => {
    setStrengths(strengths.filter((_, i) => i !== index));
  };

  const removeWeakness = (index) => {
    setWeaknesses(weaknesses.filter((_, i) => i !== index));
  };

  return (
    <div className="py-5">
    <motion.div
      className="w-3/4 mx-auto p-6 bg-white shadow-lg rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
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
      <form className="space-y-6">
        <div>
          <label className="block text-gray-800 font-semibold">Subject</label>
          <select
            value={subject}
            name="subject"
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105 hover:border-blue-400 focus:scale-105"
          >
            <option></option>
            <option>Aptitude</option>
            <option>DSA</option>
            <option>OOP</option>
            <option>Computer Science</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-800 font-semibold">Current Level</label>
          <select
            value={currentLevel}
            onChange={handleChange}
            name="currentlevel"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105 hover:border-blue-400 focus:scale-105"
          >
            <option></option>
            <option>Beginner</option>
            <option>Moderate</option>
            <option>Expert</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-800 font-semibold">Strengths</label>
          <input
            type="text"
            value={currentStrength}
            onChange={(e) => setCurrentStrength(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addStrength();
              }
            }}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
          />
          <div className="mt-2 space-y-1">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full mr-2">
                  {strength}
                </span>
                <button
                  onClick={() => removeStrength(index)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  &#x2716;
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-800 font-semibold">Weaknesses</label>
          <input
            type="text"
            value={currentWeakness}
            onChange={(e) => setCurrentWeakness(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addWeakness();
              }
            }}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
          />
          <div className="mt-2 space-y-1">
            {weaknesses.map((weakness, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded-full mr-2">
                  {weakness}
                </span>
                <button
                  onClick={() => removeWeakness(index)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  &#x2716;
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-800 font-semibold">Goal</label>
          <select
            value={goal}
            onChange={handleChange}
            name="goal"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105 hover:border-blue-400 focus:scale-105"
          >
            <option></option>
            <option>Basic Idea</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-800 font-semibold">Days to Achieve Goal</label>
          <input
            value={days}
            onChange={handleChange}
            name="days"
            type="number"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
          />
        </div>

        <div>
          <motion.button
            onClick={handleSubmit}
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition duration-200 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Start Assessment
          </motion.button>
        </div>
      </form>
    </motion.div>
    </div>
  );
};

export default Input;
