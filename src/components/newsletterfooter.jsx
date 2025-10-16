import React, { useState } from 'react';
import { Twitter, Facebook, Linkedin } from 'lucide-react';

export default function NewsletterFooter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <div  className=" text-white" style={{backgroundImage: 'url("/bg.svg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {/* Newsletter Section */}
      <div className="relative px-4 py-16 md:py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="opacity-60">
            <path d="M20 25 Q30 15, 45 20 T65 35" stroke="#818cf8" strokeWidth="2" fill="none"/>
            <circle cx="25" cy="30" r="8" stroke="#818cf8" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        <div className="absolute right-8 top-1/4 hidden lg:block">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="opacity-60">
            <path d="M30 10 L35 25 L50 30 L35 35 L30 50 L25 35 L10 30 L25 25 Z" fill="#fbbf24" stroke="#fbbf24" strokeWidth="1.5"/>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Never miss a single news
          </h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-8 md:mb-10 max-w-2xl mx-auto px-4">
            Stay informed with all the latest updates and news about our events. Never miss a moment of our exciting and innovative gatherings in the world of technology and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your email address"
              className="w-full sm:w-80 md:w-96 px-6 py-3 md:py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              onClick={handleSubscribe}
              className="w-full sm:w-auto cursor-pointer px-8 py-3 md:py-4 font-semibold rounded-lg  duration-300 bg-gradient-to-b from-[#A27806] to-[#D19B06] hover:bg-[#a07700] text-[#FFFFFF] text-[16px] transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
            {/* Brand */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold">Rove & Revel</h3>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base">
              <a href="#about" className="hover:text-yellow-500 transition-colors">About</a>
              <a href="#tickets" className="hover:text-yellow-500 transition-colors">Tickets</a>
              <a href="#speakers" className="hover:text-yellow-500 transition-colors">Speakers</a>
              <a href="#gallery" className="hover:text-yellow-500 transition-colors">Gallery</a>
              <a href="#pricing" className="hover:text-yellow-500 transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-yellow-500 transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
            </nav>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#twitter" className="w-10 h-10 md:w-12 md:h-12 rounded-full  bg-gradient-to-b from-[#A27806] to-[#D19B06] font-bold text-white flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#facebook" className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-b from-[#A27806] to-[#D19B06] rounded-full  flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#linkedin" className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-b from-[#A27806] to-[#D19B06] rounded-full  flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#vimeo" className="w-10 h-10 md:w-12 bg-gradient-to-b from-[#A27806] to-[#D19B06] md:h-12 rounded-full  flex items-center justify-center transition-colors">
                <span className="text-lg font-bold">V</span>
              </a>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-700 text-sm text-gray-400">
            <p className="text-center md:text-left">Copyright © Designmonks All Rights Reserved</p>
            <div className="flex gap-6">
              <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}