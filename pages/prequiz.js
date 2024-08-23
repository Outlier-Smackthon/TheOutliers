import React, {useState} from 'react'

const Input = () => {
  const [strengths, setStrengths] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]);
  const [currentStrength, setCurrentStrength] = useState('');
  const [currentWeakness, setCurrentWeakness] = useState('');
  const [subject, setSubject] = useState('');
  const [currentLevel, setCurrentLevel] = useState('');
  const [goal, setGoal] = useState('');


  const handleChange = (e) =>{
    if(e.target.name == "subject"){
      setSubject(e.target.value)
    } else if(e.target.name == "currentlevel"){
      setCurrentLevel(e.target.value)
    } else if(e.target.name == "goal"){
      setGoal(e.target.value)
    }
  }

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
   
    <div className="w-3/4 mx-auto p-6 bg-white shadow-lg rounded-lg">
      <form className="space-y-6">
        <div>
          <label className="block text-gray-800 font-semibold">Subject</label>
          <select value={subject} name="subject" onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105 hover:border-blue-400 focus:scale-105">
            <option></option>
            <option>Aptitude</option>
            <option>DSA</option>
            <option>OOPS</option>
            <option>Computer Networks</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-800 font-semibold">Current Level</label>
          <select value={currentLevel} name="currentlevel" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105 hover:border-blue-400 focus:scale-105">
            <option></option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
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
              <div key={index} className="flex items-center">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full mr-2">
                  {strength}
                </span>
                <button
                  onClick={() => removeStrength(index)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  &#x2716;
                </button>
              </div>
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
              <div key={index} className="flex items-center">
                <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded-full mr-2">
                  {weakness}
                </span>
                <button
                  onClick={() => removeWeakness(index)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  &#x2716;
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-800 font-semibold">Goal</label>
          <select value={goal} name="goal" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105 hover:border-blue-400 focus:scale-105">
            <option></option>
            <option>Basic Idea</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-800 font-semibold">Days to Achieve Goal</label>
          <input
            type="number"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input