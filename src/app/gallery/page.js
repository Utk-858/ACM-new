"use client";
import Navbar from '@/components/navbar';
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
      imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853390/Copy_of_DSC00074_q10htw.jpg', // replace with your image path
      description: 'A beautiful landscape.',
    },
    {
      title: 'Image 2',
      imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853387/Copy_of_DSC00078_wycabt.jpg', // replace with your image path
      description: 'City skyline at night.',
    },
    {
      title: 'Image 3',
      imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853385/Copy_of_DSC00093_qpo7ad.jpg', // replace with your image path
      description: 'A tranquil beach view.',
    },
    {
      title: 'Image 4',
      imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853376/Copy_of_DSC00141_brjcdq.jpg', // replace with your image path
      description: 'Mountains during sunset.',
    },
    {
      title: 'Image 5',
      imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853363/Copy_of_DSC_1911_dezqok.jpg', // replace with your image path
      description: 'Modern architecture.',
    },
    {
      title: 'Image 6',
      imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853408/Copy_of_DSC00230_nyh4tx.jpg', // replace with your image path
      description: 'Snowy winter landscape.',
    },
    {
        title: 'Image 6',
        imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853402/Copy_of_DSC00248_yb3nvc.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853396/Copy_of_DSC00319_wr9e9z.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853392/Copy_of_DSC00343_iwtfxs.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853390/Copy_of_DSC00086_sqiacn.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853383/Copy_of_DSC00096_jzrzxb.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853382/Copy_of_DSC00122_garu5p.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853380/Copy_of_DSC00159_weyc4d.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853180/DSC_0918_ajs8ei.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853419/Copy_of_DSC00206_tvthei.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853418/Copy_of_DSC00197_dyqcfz.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853417/Copy_of_DSC00210_mbbpu0.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },{
        title: 'Image 6',
        imageUrl: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1728853413/Copy_of_DSC00224_w0rdcq.jpg', // replace with your image path
        description: 'Snowy winter landscape.',
      },
  ];

  return (
    <>
    <Navbar/>
      <div className="min-h-screen py-12 bg-white">
      
      <h2 className="text-5xl text-gray-900 font-extrabold text-center mb-16" data-aos="fade-down">
        Our Gallery
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 rounded-xl overflow-hidden transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index} // Delayed animation for each image
            >
              <img
                src={image.imageUrl}
                alt={image.title}
                className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{image.title}</h3>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Gallery;
