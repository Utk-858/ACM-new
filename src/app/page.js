"use client";
import React from "react";
import { useState } from "react";
import Navbar from "../components/navbar";
import AboutPage from "./about/page";
import Team from "./team/page";
import Faculty from "./faculty/page";


export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Background Video and Crystal Cube */}
      <section className="relative flex flex-col justify-center items-center text-center min-h-[80vh] bg-black">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://lnmiit.ac.in/wp-content/uploads/2024/02/lnmiit_view.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 text-white flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-4">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-scale text-shadow">
              Welcome to ACM Lnmiit
            </h2>
            <p className="text-lg mb-6 text-shadow">
              The best app to enhance your productivity and streamline your
              workflow.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center z-20"></div>
        </div>
      </section>

 
    <AboutPage/>
    <Faculty/>
    <Team/>
      {/* Features Section */}
      <section id="features" className="py-16 px-8 bg-white text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-8">Features</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <li className="p-4 border rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Easy to Use
            </h4>
            <p className="text-gray-600">
              Our intuitive design ensures a smooth user experience.
            </p>
          </li>
          <li className="p-4 border rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Highly Customizable
            </h4>
            <p className="text-gray-600">
              Tailor the app to fit your unique needs.
            </p>
          </li>
          <li className="p-4 border rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Lightning Fast Performance
            </h4>
            <p className="text-gray-600">
              Optimized for speed to save you time.
            </p>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© 2024 MyAwesomeApp. All rights reserved.</p>
      </footer>
    </div>
  );
}
