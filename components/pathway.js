import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// geminiContentGenerator.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = 'AIzaSyAqcNNQ6YBfhUvfYoIRmQ8GgE6KwxG0umw'; // Replace with your actual API key

export const generateGeminiContent = async (input) => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const predefinedPrompt = "give me 10 lines int one sentence without any points and bold letters information on dsa topice with code as example";

  // Combine the predefined prompt with the user's input
  const fullPrompt = `${predefinedPrompt}${input}`;

  try {
    const result = await model.generateContent(fullPrompt);
    const responseText = await result.response.text();
    return responseText;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to generate content');
  }
};




const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-white text-lg font-semibold mb-4">Article Content</h2>
        <div className="text-gray-400 mb-6">{content}</div>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Step = ({ step, index, isExpanded, onToggle, onCheck }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
  
    const handleShowArticle = async (taskTitle, taskDifficulty) => {
      setModalOpen(true);
      setModalContent('Loading content...');
      try {
        const content = await generateGeminiContent(`${taskTitle}. This task is categorized as ${taskDifficulty} difficulty.`);
        setModalContent(content);
      } catch (error) {
        setModalContent('Failed to load content. Please try again.');
      }
    };
  
    return (
      <div className="border-b border-gray-700">
        <div 
          className="flex justify-between items-center p-4 cursor-pointer bg-gray-800 hover:bg-gray-700"
          onClick={() => onToggle(index)}
        >
          <h3 className="text-lg font-semibold text-white">
            {step.title}
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">{step.progress}</span>
            <motion.div 
              className="transform"
              animate={{ rotate: isExpanded ? 180 : 0 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 01.832.445l5 7a1 1 0 11-1.664 1.11L10 5.268 5.832 11.555A1 1 0 114.168 10.445l5-7A1 1 0 0110 3z" clipRule="evenodd" />
              </svg>
            </motion.div>
          </div>
        </div>
        {isExpanded && (
          <div className="p-4 bg-gray-900 text-gray-400">
            <table className="table-auto w-full text-left">
              <thead>
                <tr>
                  <th className="w-1/12"></th>
                  <th className="w-4/12">Task</th>
                  <th className="w-2/12">Article</th>
                  <th className="w-2/12">Video Solution</th>
                  <th className="w-2/12">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {step.tasks.map((task, i) => (
                  <tr key={i} className="border-t border-gray-700">
                    <td className="py-2">
                      <input 
                        type="checkbox" 
                        checked={task.completed} 
                        onChange={() => onCheck(index, i)} 
                      />
                    </td>
                    <td className="py-2">{task.title}</td>
                    <td className="py-2">
                      <button 
                        className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
                        onClick={() => handleShowArticle(task.title, task.difficulty)}
                      >
                        Read Article
                      </button>
                    </td>
                    <td className="py-2">
                      <a 
                        href={task.video} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                      >
                        Watch Video
                      </a>
                    </td>
                    <td className={`py-2 text-${task.difficulty === 'Easy' ? 'green' : 'yellow'}-500 font-bold`}>
                      {task.difficulty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
  
        {/* Modal for displaying the content */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg max-w-lg w-full">
              <h2 className="text-xl font-semibold mb-4">Article Content</h2>
              <p>{modalContent}</p>
              <button 
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

const PathwayToLearn = () => {
  const [steps, setSteps] = useState([
    { 
      title: "Step 1: Learn the basics", 
      progress: "29/31", 
      tasks: [
        { title: "User Input / Output", completed: false, difficulty: "Easy", article: "Content for User Input / Output article", video: "https://example.com/user-input-output-video" },
        { title: "Data Types", completed: false, difficulty: "Easy", article: "Content for Data Types article", video: "https://example.com/data-types-video" }
      ] 
    },
    { 
      title: "Step 2: Learn Important Sorting Techniques", 
      progress: "3/7", 
      tasks: [
        { title: "If Else statements", completed: false, difficulty: "Easy", article: "Content for If Else statements article", video: "https://example.com/if-else-statements-video" },
        { title: "Switch Statement", completed: false, difficulty: "Easy", article: "Content for Switch Statement article", video: "https://example.com/switch-statement-video" }
      ]
    },
    { 
      title: "Step 3: Solve Problems on Arrays [Easy -> Medium -> Hard]", 
      progress: "16/40", 
      tasks: [
        { title: "What are arrays, strings?", completed: false, difficulty: "Easy", article: "Content for What are arrays, strings? article", video: "https://example.com/arrays-strings-video" },
        { title: "For loops", completed: false, difficulty: "Easy", article: "Content for For loops article", video: "https://example.com/for-loops-video" }
      ]
    },
  ]);
  const [expandedStep, setExpandedStep] = useState(null);
  const [totalProgress, setTotalProgress] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  useEffect(() => {
    const totalTasks = steps.reduce((acc, step) => acc + step.tasks.length, 0);
    const completedTasks = steps.reduce((acc, step) => acc + step.tasks.filter(task => task.completed).length, 0);
    setTotalProgress((completedTasks / totalTasks) * 100);
  }, [steps]);

  const toggleStep = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  const handleCheck = (stepIndex, taskIndex) => {
    const newSteps = [...steps];
    newSteps[stepIndex].tasks[taskIndex].completed = !newSteps[stepIndex].tasks[taskIndex].completed;
    setSteps(newSteps);
  };

  const handleShowArticle = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-white">Your Progress:</span>
          <span className="text-white font-semibold">{Math.floor(totalProgress)}%</span>
        </div>
        <div className="text-red-500 font-bold">{Math.floor(totalProgress)}% complete</div>
      </div>
      <div className="h-2 bg-gray-700 rounded-full mb-6">
        <div className="h-full bg-red-500 rounded-full" style={{ width: `${totalProgress}%` }}></div>
      </div>
      {steps.map((step, index) => (
        <Step 
          key={index}
          step={step}
          index={index}
          isExpanded={expandedStep === index}
          onToggle={toggleStep}
          onCheck={handleCheck}
          onShowArticle={handleShowArticle}
          onShowVideo={handleShowArticle} // Reuse the same handler for the video link if you want to display it in a modal
        />
      ))}
      <button className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600">
        Show Revision
      </button>
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        content={modalContent} 
      />
    </div>
  );
};

export default PathwayToLearn;



