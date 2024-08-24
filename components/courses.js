import React from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    title: 'Introduction to Data Structures',
    description: 'Learn the fundamentals of data structures including arrays, linked lists, and stacks.',
    image: '/img/data-structures.jpg',
    author: 'Alice Smith',
    date: 'Sep 1',
  },
  {
    title: 'Mastering Algorithms',
    description: 'Dive deep into algorithms like sorting, searching, and dynamic programming.',
    image: '/img/algorithms.jpg',
    author: 'Bob Johnson',
    date: 'Sep 5',
  },
  {
    title: 'Advanced Graph Theory',
    description: 'Explore complex graph algorithms and their applications in computer science.',
    image: '/img/graph-theory.jpg',
    author: 'Carol White',
    date: 'Sep 10',
  },
  {
    title: 'Data Structures in Practice',
    description: 'Hands-on approach to implementing and optimizing data structures.',
    image: '/img/data-practice.jpg',
    author: 'David Lee',
    date: 'Sep 15',
  },
  {
    title: 'Algorithmic Thinking',
    description: 'Develop the mindset to solve problems efficiently with algorithms.',
    image: '/img/algorithmic-thinking.jpg',
    author: 'Eve Martin',
    date: 'Sep 20',
  },
  {
    title: 'Graph Theory Applications',
    description: 'Understand the practical applications of graph theory in networking.',
    image: '/img/graph-applications.jpg',
    author: 'Frank Green',
    date: 'Sep 25',
  },
];

const CourseCard = ({ course }) => {
  return (
    <motion.div
      className="w-full lg:w-1/3 p-4"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="max-w-sm w-full lg:max-w-full lg:flex mb-4 border border-orange-500 rounded-lg bg-black text-white hover:shadow-lg">
        <div className="p-6 flex flex-col justify-between leading-normal">
          <div>
            <h2 className="text-orange-500 font-bold text-xl mb-2">{course.title}</h2>
            <p className="text-gray-400 text-base">{course.description}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <a href="#" className="text-orange-500 font-bold text-sm hover:underline">View all &rarr;</a>
            {/* Optional decorative pattern or icon */}
            <div className="w-16 h-16 bg-orange-500 rounded-full opacity-25"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CoursesPage = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-white mb-6">DSA Courses</h1>
      <div className="flex flex-wrap -mx-4">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
