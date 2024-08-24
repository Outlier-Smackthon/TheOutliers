import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FinalAssessment = () => {
  const router = useRouter();
  const { subject } = router.query;

  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [error, setError] = useState(null);
  const [currentLevel, setCurrentLevel] = useState('Beginner');

  // Function to shuffle array
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  useEffect(() => {
    if (currentLevel) {
      const fetchQuestions = async () => {
        try {
          const fileName = 'final.json'; // Assuming final.json is in the public folder
          const response = await fetch(`/${fileName}`);

          if (!response.ok) {
            throw new Error(`Could not load file: ${fileName}`);
          }

          const data = await response.json();
          const levelData = data.Engineering_Computer_Science.find(
            (item) => item.level === currentLevel
          );

          if (levelData && Array.isArray(levelData.questions)) {
            const selectedQuestions = shuffleArray(levelData.questions).slice(0, 10); // Selecting 10 questions
            setQuestions(selectedQuestions);
          } else {
            throw new Error('Unexpected data format');
          }
        } catch (err) {
          setError(err.message);
        }
      };

      fetchQuestions();
    }
  }, [currentLevel]);

  const handleAnswerChange = (question, selectedAnswer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question.question]: selectedAnswer,
    }));
  };

  const handleSubmitQuiz = () => {
    let calculatedScore = 0;
    questions.forEach((question) => {
      if (userAnswers[question.question] === question.answer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!questions.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-8 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-8">
        Quiz: {subject} ({currentLevel})
      </h1>

      {/* Dropdown to select level */}
      <div className="mb-6">
        <label htmlFor="level" className="block text-lg font-medium text-gray-700">
          Select Level:
        </label>
        <select
          id="level"
          value={currentLevel}
          onChange={(e) => setCurrentLevel(e.target.value)}
          className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="Beginner">Beginner</option>
          <option value="Moderate">Moderate</option>
          <option value="Expert">Expert</option>
        </select>
      </div>

      {score === null ? (
        <div
          className="h-96 overflow-y-scroll border border-gray-300 rounded-lg"
        >
          {questions.map((question, index) => (
            <motion.div
              key={index}
              className="mb-6 p-6 bg-white rounded-lg shadow-md border border-gray-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-lg font-semibold text-gray-800 mb-4">{`Q${index + 1}: ${question.question}`}</p>
              <ul className="space-y-2">
                {question.options.map((choice, optIndex) => (
                  <li key={optIndex}>
                    <label className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors duration-150 ease-in-out cursor-pointer">
                      <input
                        type="radio"
                        name={`question_${index}`}
                        value={choice}
                        onChange={() => handleAnswerChange(question, choice)}
                        className="mr-3 accent-blue-600"
                      />
                      <span className="text-gray-700">{choice}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center">
  <motion.h2
    className={`text-3xl font-bold ${
      score > 8 ? 'text-green-600' : 'text-red-600'
    }`}
    initial={{ scale: 0.5 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    {score > 8 ? (
      <>
        Pass! Your Score: {score} / 10
        <p className="mt-4 text-xl">
          Well done! {currentLevel === 'Beginner' && 'Now go for the Intermediate level.'}
          {currentLevel === 'Moderate' && 'Now go for the Expert level.'}
          {currentLevel === 'Expert' && 'You have mastered the quiz!'}
        </p>
      </>
    ) : (
      <>
        Fail! Your Score: {score} / 10
        <p className="mt-4 text-xl">
          Don`t worry! You can revise and try the quiz again.
        </p>
      </>
    )}
  </motion.h2>
</div>

      )}
      <button
            onClick={handleSubmitQuiz}
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:scale-105 mt-6"
          >
            Submit Quiz
          </button>
    </div>
  );
};

export default FinalAssessment;
