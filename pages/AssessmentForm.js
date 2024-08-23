import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AssessmentForm = ({ user }) => {
  const router = useRouter();
  const { subject, currentLevel } = router.query;

  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [error, setError] = useState(null);

  // Function to shuffle array
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  useEffect(() => {
    if (subject && currentLevel) {
      const fetchQuestions = async () => {
        try {
          const fileName = `${currentLevel}_${subject}_MCQ_Questions.json`;
          const response = await fetch(`/json/${subject}/${fileName}`);

          if (!response.ok) {
            throw new Error(`Could not load file: ${fileName}`);
          }

          const data = await response.json();
          const key = `${currentLevel}_${subject}_MCQ_Questions`;

          if (data[key] && Array.isArray(data[key])) {
            const selectedQuestions = shuffleArray(data[key]).slice(0, 5);
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
  }, [subject, currentLevel]);

  const handleAnswerChange = (questionId, selectedAnswer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedAnswer,
    }));
  };

  const handleSubmitQuiz = async () => {
    let calculatedScore = 0;
    questions.forEach((question) => {
      if (userAnswers[question.question_id] === question.correct_answer) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);
    const data = { user: user, score: calculatedScore }
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/setuserscore`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    a = await a.json();
    if (!a.success) {
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
    } else {
      toast.success("Score Updated", {
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

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!questions.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
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
        theme="light" />

      <div className="w-full max-w-3xl mx-auto p-8 bg-gray-100 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-8">
          Quiz: {subject} ({currentLevel})
        </h1>
        {score === null ? (
          <div>
            {questions.map((question, index) => (
              <motion.div
                key={question.question_id}
                className="mb-6 p-6 bg-white rounded-lg shadow-md border border-gray-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className="text-lg font-semibold text-gray-800 mb-4">{`Q${index + 1}: ${question.question_text}`}</p>
                <ul className="space-y-2">
                  {question.choices.map((choice, optIndex) => (
                    <li key={optIndex}>
                      <label className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors duration-150 ease-in-out cursor-pointer">
                        <input
                          type="radio"
                          name={`question_${question.question_id}`}
                          value={choice}
                          onChange={() => handleAnswerChange(question.question_id, choice)}
                          className="mr-3 accent-blue-600"
                        />
                        <span className="text-gray-700">{choice}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <button
              onClick={handleSubmitQuiz}
              className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:scale-105 mt-6"
            >
              Submit Quiz
            </button>
          </div>
        ) : (
          <div className="text-center">
            <motion.h2
              className="text-3xl font-bold text-green-600"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Your Score: {score} / 5
            </motion.h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssessmentForm;
