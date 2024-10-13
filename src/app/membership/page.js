"use client";
import Navbar from '@/components/navbar';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MembershipCard = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
     <Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-white">
       
      <div 
        className="w-full max-w-full bg-gray-200 shadow-lg rounded-lg overflow-hidden h-[60vh] flex flex-col justify-center items-center p-6" 
        data-aos="fade-up" // Add AOS animation effect
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4" data-aos="fade-up" data-aos-delay="100">Join Our Membership</h3>
        <p className="text-gray-600 mb-2" data-aos="fade-up" data-aos-delay="200">Become a part of our community.</p>
        <p className="text-gray-600 mb-2" data-aos="fade-up" data-aos-delay="300">Enjoy exclusive benefits and resources.</p>
        <p className="text-gray-600 mb-2" data-aos="fade-up" data-aos-delay="400">Stay updated with our latest news.</p>
        <p className="text-gray-600 mb-4" data-aos="fade-up" data-aos-delay="500">Sign up now and be a part of something great!</p>
        <a 
          href="https://www.acm.org/membership" 
          className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg transition duration-300 hover:bg-blue-700" 
          data-aos="fade-up" data-aos-delay="600"
        >
          Join Now
        </a>
      </div>
    </div></>
    
  );
};

export default MembershipCard;
