import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <header
      
    >
      <div className="max-w-[1310px] mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-34">
        <div className="flex items-center space-x-2">
          <img
            src="/new-logo 2.svg" // replace with your logo path
            alt="Logo"
            className=" object-contain"
          />
          
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-17 text-[16px] font-medium text-[#121212]">
          <Link to="/" className="hover:text-yellow-700 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-700 transition">
            About
          </Link>
          <Link to="/services" className="hover:text-yellow-700 transition">
            Services
          </Link>
          <Link to="/portfolio" className="hover:text-yellow-700 transition">
            Portfolio
          </Link>
          <Link to="/contact" className="hover:text-yellow-700 transition">
            Contact
          </Link>
        </nav>
        </div>

        {/* Enquire Button */}
        <div className="hidden md:block">
          <Link
            to="/enquire"
            className="bg-gradient-to-b from-[#A27806] to-[#D19B06] hover:bg-[#a07700] text-[#FFFFFF] px-[38.5px] py-[11px] rounded-full font-medium text-[16px] transition"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
  {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
</button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#fffaf0] border-t border-gray-200 flex flex-col items-center space-y-4 py-4">
          <Link to="/" className="hover:text-yellow-700 text-[16px] font-bold transition" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-700 text-[16px] font-bold transition" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/services" className="hover:text-yellow-700 text-[16px] font-bold transition" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="/portfolio" className="hover:text-yellow-700 text-[16px] font-bold transition" onClick={() => setIsOpen(false)}>
            Portfolio
          </Link>
          <Link to="/contact" className="hover:text-yellow-700 text-[16px] font-bold transition" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          
          <Link
            to="/enquire"
            onClick={() => setIsOpen(false)}
            className="bg-gradient-to-b from-[#A27806] to-[#D19B06] hover:bg-[#a07700] text-[#FFFFFF] px-[38.5px] py-[11px] rounded-full font-medium text-[16px] transition"
          >
            Enquire Now
          </Link>
          
        </div>
      )}
    </header>
  );
}
