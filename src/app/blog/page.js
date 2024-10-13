"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Navbar from "@/components/navbar";
const blogs = [
  {
    id: 1,
    title: "Blog Post 1",
    content: "This is the content for blog post 1.",
    image: "https://res.cloudinary.com/dqskebjcf/image/upload/v1724657128/samples/cup-on-a-table.jpg",
  },
  {
    id: 2,
    title: "Blog Post 2",
    content: "This is the content for blog post 2.",
    image: "https://res.cloudinary.com/dqskebjcf/image/upload/v1724657120/samples/landscapes/architecture-signs.jpg",
  },
  {
    id: 3,
    title: "Blog Post 3",
    content: "This is the content for blog post 3.",
    image: "https://res.cloudinary.com/dqskebjcf/image/upload/v1724657120/samples/imagecon-group.jpg",
  },
  {
    id: 4,
    title: "Blog Post 4",
    content: "This is the content for blog post 4.",
    image: "https://res.cloudinary.com/dqskebjcf/image/upload/v1724657120/samples/ecommerce/accessories-bag.jpg",
  },
  {
    id: 5,
    title: "Blog Post 5",
    content: "This is the content for blog post 5.",
    image: "https://res.cloudinary.com/dqskebjcf/image/upload/v1724657120/samples/people/jazz.jpg",
  },
  {
    id: 6,
    title: "Blog Post 6",
    content: "This is the content for blog post 6.",
    image: "https://res.cloudinary.com/dqskebjcf/image/upload/v1724657119/samples/people/kitchen-bar.jpg",
  },
  {
    id: 7,
    title: "Blog Post 7",
    content: "This is the content for blog post 7.",
    image: "https://res.cloudinary.com/dqskebjcf/image/upload/v1724657118/samples/ecommerce/analog-classic.jpg",
  },
  // Add more blogs as needed
];

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(blogs[0]);

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <>
    <Navbar/>
        <div className="max-w-screen-xl mx-auto p-4 mt-10">
        
      {/* Selected Blog Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 h-[55vh] w-full" data-aos="fade-up">
        <div className="md:w-1/2 w-full h-full flex items-center justify-center">
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 w-full h-full flex flex-col justify-center p-4">
          <h1 className="text-3xl font-bold mb-4 text-black">{selectedBlog.title}</h1>
          <p className="text-lg text-black">{selectedBlog.content}</p>
        </div>
      </div>

      {/* Carousel of Blogs */}
      <h2 className="text-2xl font-bold mb-4 text-black" data-aos="fade-right">
        All Blogs
      </h2>
      <div className="flex space-x-4 overflow-x-auto pb-4 text-black">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => setSelectedBlog(blog)}
            className="cursor-pointer w-64 flex-shrink-0 bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
            data-aos="fade-left"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full rounded-lg mb-2 shadow-lg"
            />
            <h3 className="font-semibold text-black">{blog.title}</h3>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default BlogPage;
