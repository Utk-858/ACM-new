import React, { useEffect } from 'react';
import Navbar from "@/components/navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutPage() {

  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div
        className="max-w-7xl mx-auto w-[70%] md:w-[80%] bg-white p-8 rounded-xl shadow-2xl mt-10"
        data-aos="fade-up" // Animation for outer container
      >
        {/* Main Title */}
        <h3 className="text-4xl font-bold mb-8 text-black" data-aos="fade-down">
          About ACM
        </h3>
        <p className="text-lg mb-12 max-w-2xl mx-auto text-black" data-aos="fade-right">
          The Association for Computing Machinery (ACM) stands at the forefront of the computing world 
          as the world’s largest educational and scientific computing society. With a rich history and 
          expansive network, ACM is dedicated to advancing computing as a discipline and profession. 
          Through its commitment to research, education, and collaboration, ACM serves as a vital hub 
          for connecting computing professionals, fostering innovation, and promoting ethical practices.
        </p>

        {/* Main Bold Text */}
        <h2 className="text-5xl font-bold mb-12 text-white" data-aos="fade-left">
          INNOVATE. ACHIEVE. EMPOWER.
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About MUJ */}
          <div
            className="bg-blue-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            style={{
              backgroundImage: "",
              backgroundSize: "cover",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.2)" // Black box-shadow
            }}
            data-aos="fade-up" // Animation for each card
          >
            <h4 className="text-2xl font-semibold mb-4 text-white">About MUJ</h4>
            <p className="text-sm text-white">
              Built on academic excellence and innovation, Manipal University Jaipur offers a range of undergraduate, 
              postgraduate, and doctoral programs. Our campus is a hub of learning, ideas, collaborations, and cultural exchange. 
              We embrace sportsmanship and create unforgettable experiences.
            </p>
          </div>

          {/* Our Aim */}
          <div className="bg-blue-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" 
               style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.2)" }} 
               data-aos="fade-right">
            <h4 className="text-2xl font-semibold mb-4 text-white">Our Aim</h4>
            <p className="text-sm text-white">
              Our aim is to create a dynamic and collaborative space where technology enthusiasts come together to explore, 
              learn, and innovate. Through workshops, projects, and knowledge-sharing sessions, we strive to enhance our members' 
              technical skills and foster a culture of continuous learning.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-blue-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" 
               style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.2)" }} 
               data-aos="fade-left">
            <h4 className="text-2xl font-semibold mb-4 text-white">Our Mission</h4>
            <p className="text-sm text-white">
              Bridging academia and industry, we unite theory and application, nurturing holistic professionals. 
              Through teamwork, leadership, and ethics, we develop individuals who grasp work's broader impact, blending 
              technical prowess with a wider perspective for a more comprehensive approach.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
