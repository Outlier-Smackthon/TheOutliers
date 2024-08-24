import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Discussion = () => {
  const [discussions, setDiscussions] = useState([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch existing discussions
    const fetchDiscussions = async () => {
      try {
        const response = await fetch('/api/discussion');
        const data = await response.json();
        setDiscussions(data);
      } catch (err) {
        setError('Failed to load discussions');
      }
    };

    fetchDiscussions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      name,
      content,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    try {
      const response = await fetch('/api/discussion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        setDiscussions([newPost, ...discussions]); // Add new post at the top
        setName('');
        setContent('');
      } else {
        setError('Failed to post your discussion');
      }
    } catch (err) {
      setError('Failed to post your discussion');
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Discussion Forum</h1>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <h2 className="text-3xl font-bold text-white mb-4">All Discussions</h2>
        <div className="space-y-4">
          {discussions.map((discussion, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg border border-gray-300 transform transition-transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-gray-800 text-2xl font-semibold mb-2">{discussion.name}</p>
              <p className="text-gray-600 text-sm mb-2">
                {discussion.date} at {discussion.time}
              </p>
              <p className="text-gray-900 text-lg font-medium mt-2 leading-relaxed">
                {discussion.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="mb-4">
          <label className="block text-white font-semibold mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-semibold mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition duration-300"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Discussion;
