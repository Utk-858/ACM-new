import React from 'react';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-cover bg-center" style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNjAiPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJuYXZHcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNERCNEU3O3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3Q0NCRUU7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPHBhdHRlcm4gaWQ9InN1YnRsZVBhdHRlcm4iIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAuMiIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ1cmwoI25hdkdyYWRpZW50KSIvPgogIDxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAiIGZpbGw9InVybCgjc3VidGxlUGF0dGVybikiLz4KICA8cGF0aCBkPSJNMCA1OSBRIDQwMCA0MCA4MDAgNTkiIHN0cm9rZT0id2hpdGUiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC4zIi8+Cjwvc3ZnPgo=")' }}>
      {/* Logo */}
      <img
        src="https://www.lib.montana.edu/cats_images/support-for-open-collections/ACM.png"
        alt="ACM Lnmiit Logo"
        className="h-16 w-auto" // Slightly reduced the logo size
      />
      
      {/* Navigation */}
      <nav className="flex-grow flex justify-center"> {/* Center the nav and make it grow to push logo and button apart */}
        <ul className="flex space-x-12"> {/* Increased space between links */}
          <li><a href="/features" className="text-black text-xl hover:text-gray-700 transition duration-300">Features</a></li>
          <li><a href="/about" className="text-black text-xl hover:text-gray-700 transition duration-300">About</a></li>
          <li><a href="/contact" className="text-black text-xl hover:text-gray-700 transition duration-300">Contact</a></li>
          <li><a href="/gallery" className="text-black text-xl hover:text-gray-700 transition duration-300">Gallery</a></li>

        </ul>
      </nav>
      
      {/* Add a button or additional element to balance the layout */}
      <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
        Join Now
      </button>
    </header>
  );
};

export default Navbar;