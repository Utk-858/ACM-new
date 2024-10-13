"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/navbar';
const MyTeam = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const teamMembers = [
    {
      name: 'Alice Johnson',
      role: 'Software Engineer',
      imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724657126/samples/smile.jpg', // replace with your image path
      description: 'Specializes in front-end development and UX design.',
    },
    {
      name: 'Bob Smith',
      role: 'Project Manager',
      imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724657119/samples/people/smiling-man.jpg', // replace with your image path
      description: 'Experienced in managing agile teams and software projects.',
    },
    {
      name: 'Charlie Brown',
      role: 'DevOps Engineer',
      imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724657119/samples/people/kitchen-bar.jpg', // replace with your image path
      description: 'Focuses on infrastructure automation and cloud solutions.',
    },{
      name: 'Alice Johnson',
      role: 'Software Engineer',
      imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853180/DSC_0913_gdfazm.jpg', // replace with your image path
      description: 'Specializes in front-end development and UX design.',
    },
    {
      name: 'Alice Johnson',
      role: 'Software Engineer',
      imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853185/DSC_0885_x5tpk6.jpg', // replace with your image path
      description: 'Specializes in front-end development and UX design.',
    },
    {
      name: 'Alice Johnson',
      role: 'Software Engineer',
      imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853418/Copy_of_DSC00201_s6bajt.jpg', // replace with your image path
      description: 'Specializes in front-end development and UX design.',
    },
  ];

  return (
    <>
      <div className="min-h-screen py-12 bg-gray-100">
      
      <h2 className="text-4xl font-bold text-center text-gray-600 mb-12" data-aos="fade-down">
        Meet Our Team
      </h2>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg p-6 text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Animation delay for each card
              
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-45 h-45 mx-auto rounded-3xl object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default MyTeam;
