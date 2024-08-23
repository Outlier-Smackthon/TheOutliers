import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Input = () => {
    const router = useRouter();
  const [subject, setSubject] = useState('');
  const [currentLevel, setCurrentLevel] = useState('');
  

  const handleChange = (e) => {
    if (e.target.name === 'subject') {
      setSubject(e.target.value);
    } else if (e.target.name === 'currentlevel') {
      setCurrentLevel(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      subject,
      currentLevel
    }).toString();
  
    router.push(`/AssessmentForm?${queryParams}`);
  };
  
  return (
    <div className="w-3/4 mx-auto p-6 bg-white shadow-lg rounded-lg">
      <form className="space-y-6" onSubmit={handleSubmit}>
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
            <option>Computer_Science</option>
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
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
