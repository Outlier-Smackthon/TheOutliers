import React from 'react';
import Link from 'next/link';

const mentoring = () => {
  const teachers = [
    {
      name: 'Alice Smith',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      subject: 'Mathematics',
    },
    {
      name: 'John Doe',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      subject: 'Physics',
    },
    {
      name: 'Emily Johnson',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      subject: 'Chemistry',
    },
    {
      name: 'Michael Brown',
      image: 'https://randomuser.me/api/portraits/men/73.jpg',
      subject: 'Biology',
    },
    // Add more teachers as needed
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-6">Our Mentors</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{teacher.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{teacher.subject}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                <Link href={"http://localhost:8080/videoSession"} >Book a Slot</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default mentoring;
