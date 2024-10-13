"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Sample gallery images (replace with your actual image URLs)
  const galleryImages = [
    {
      title: 'Image 1',
      imageUrl: '/images/gallery1.jpg', // replace with your image path
      description: 'A beautiful landscape.',
    },
    {
      title: 'Image 2',
      imageUrl: '/images/gallery2.jpg', // replace with your image path
      description: 'City skyline at night.',
    },
    {
      title: 'Image 3',
      imageUrl: '/images/gallery3.jpg', // replace with your image path
      description: 'A tranquil beach view.',
    },
    {
      title: 'Image 4',
      imageUrl: '/images/gallery4.jpg', // replace with your image path
      description: 'Mountains during sunset.',
    },
    {
      title: 'Image 5',
      imageUrl: '/images/gallery5.jpg', // replace with your image path
      description: 'Modern architecture.',
    },
    {
      title: 'Image 6',
      imageUrl: '/images/gallery6.jpg', // replace with your image path
      description: 'Snowy winter landscape.',
    },
    {
        title: 'Image 6',
        imageUrl: '/images/gallery6.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: '/images/gallery6.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: '/images/gallery6.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: '/images/gallery6.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: '/images/gallery6.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: '/images/gallery6.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: '/images/gallery6.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: '/images/gallery6.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: '/images/gallery6.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: '/images/gallery6.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: '/images/gallery6.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: '/images/gallery6.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-down">
        Our Gallery
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg p-6 text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Delayed animation for each image
            >
              <img
                src={image.imageUrl}
                alt={image.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
              <p className="text-gray-700">{image.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
