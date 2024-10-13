"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Navbar from "@/components/navbar";
const events = [
  {
    id: 1,
    title: "Event 1",
    description: "Join us for the exciting event 1 happening soon.",
    image: "https://res.cloudinary.com/dqskebjcf/image/upload/v1724657128/samples/cup-on-a-table.jpg",
    date: "October 20, 2024",
  },
  {
    id: 2,
    title: "Event 2",
    description: "Event 2 is packed with fun activities.",
    image: "https://res.cloudinary.com/dqskebjcf/image/upload/v1724657121/samples/landscapes/landscape-panorama.jpg",
    date: "November 15, 2024",
  },
  {
    id: 3,
    title: "Event 3",
    description: "Don't miss out on Event 3. Book your tickets now!",
    image: "https://res.cloudinary.com/dqskebjcf/image/upload/v1724657120/samples/imagecon-group.jpg",
    date: "December 5, 2024",
  },
  {
    id: 2,
    title: "Event 2",
    description: "Event 2 is packed with fun activities.",
    image: "https://res.cloudinary.com/dqskebjcf/image/upload/v1724657121/samples/landscapes/landscape-panorama.jpg",
    date: "November 15, 2024",
  },
  {
    id: 2,
    title: "Event 2",
    description: "Event 2 is packed with fun activities.",
    image: "https://res.cloudinary.com/dqskebjcf/image/upload/v1724657121/samples/landscapes/landscape-panorama.jpg",
    date: "November 15, 2024",
  },
  {
    id: 2,
    title: "Event 2",
    description: "Event 2 is packed with fun activities.",
    image: "https://res.cloudinary.com/dqskebjcf/image/upload/v1724657121/samples/landscapes/landscape-panorama.jpg",
    date: "November 15, 2024",
  },
  {
    id: 2,
    title: "Event 2",
    description: "Event 2 is packed with fun activities.",
    image: "https://res.cloudinary.com/dqskebjcf/image/upload/v1724657121/samples/landscapes/landscape-panorama.jpg",
    date: "November 15, 2024",
  },
  // Add more events as needed
];

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out" });
  }, []);

  return (
    <>
    <Navbar/>
        <div className="max-w-screen-xl mx-auto p-6 mt-12">
        
      {/* Navbar */}
      {/* <Navbar /> */}
      
      {/* Selected Event Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 h-[50vh] w-full bg-gray-100 rounded-xl shadow-md p-6" data-aos="fade-up">
        <div className="md:w-1/2 w-full h-full flex items-center justify-center">
          <img
            src={selectedEvent.image}
            alt={selectedEvent.title}
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>
        <div className="md:w-1/2 w-full h-full flex flex-col justify-center p-6">
          <h1 className="text-4xl font-bold mb-3 text-blue-900">{selectedEvent.title}</h1>
          <p className="text-lg text-gray-800 mb-2">{selectedEvent.description}</p>
          <p className="text-md text-gray-600">{selectedEvent.date}</p>
        </div>
      </div>

      {/* Carousel of Events */}
      <h2 className="text-3xl font-bold mb-6 text-blue-900" data-aos="fade-right">
        Upcoming Events
      </h2>
      <div className="flex space-x-6 overflow-x-auto pb-6 text-black">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => setSelectedEvent(event)}
            className="cursor-pointer w-60 flex-shrink-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg p-5 transition-transform transform hover:scale-110"
            data-aos="fade-left"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 object-cover rounded-lg mb-3 shadow-md"
            />
            <h3 className="font-semibold text-white text-lg mb-2">{event.title}</h3>
            <p className="text-white text-sm">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default EventsPage;
