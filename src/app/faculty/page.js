"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/navbar';
export default function Faculty() {
  const mentor = {
    name: 'Dr. Mohd Kashif Alam',
    title: 'Associate Professor',
    department: 'Computer Science Department',
    imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853190/DSC_0852_kyncpa.jpg', // Replace with your image path
    bio: 'Dr. Alam specializes in artificial intelligence and machine learning. He has over 15 years of experience in academia and industry, working on cutting-edge AI solutions and mentoring students.',
  };

  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div 
      className="min-h-screen flex items-center justify-center mt-20 bg-white" 
      style={{
        background: '', // Darker gradient background
      }}
    >
      
      <div 
        className="bg-white shadow-2xl rounded-lg flex flex-col items-center p-10 max-w-4xl w-full h-auto"
        style={{
          backgroundImage: "url('')",
          backgroundSize: "cover",
        }}
        data-aos="fade-up" // Added animation to the outer card
      >
        <div className="text-center mb-8" data-aos="fade-down"> {/* Scroll animation */}
          <h2 className="text-5xl font-extrabold text-black mb-4">Meet Our Faculty Mentor</h2>
        </div>
        
        <div className="text-center mb-8" data-aos="fade-right"> {/* Scroll animation */}
          <img
            src={mentor.imageUrl}
            alt={mentor.name}
            className="w-full h-80 rounded-xl object-cover mx-auto shadow-lg"
          />
        </div>

        <div className="mt-6 md:mt-0 flex flex-col justify-center text-center" data-aos="fade-left"> {/* Scroll animation */}
          <h3 className="text-4xl font-bold text-gray-400">{mentor.name}</h3>
          <p className="text-xl text-black">{mentor.title}</p>
          <p className="text-xl text-gray-600">{mentor.department}</p>
          <p className="mt-6 text-lg text-gray-700">{mentor.bio}</p>
        </div>
      </div>
    </div>
    </>
    
  );
}
