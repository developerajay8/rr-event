import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-[#FCF8ED] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#121212] text-center mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Discover the magic we've created for our clients across different event categories
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 max-w-[1220px] mx-auto shadow-2xl rounded-3xl overflow-hidden">
          
          {/* Left Side - Contact Information */}
          <div className="bg-[#2D3A67] p-8 sm:p-10 lg:p-12 text-white relative overflow-hidden col-span-2">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Contact Information
              </h2>
              <p className="text-blue-200 mb-12">
                Say something to start a live chat!
              </p>

              {/* Contact Details */}
              <div className="space-y-8 mb-16">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-base sm:text-lg">+1012 3456 789</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-base sm:text-lg">demo@gmail.com</span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-base sm:text-lg leading-relaxed">
                    132 Dartmouth Street Boston,<br />
                    Massachusetts 02156 United States
                  </span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>

                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>

                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full -mb-20 -mr-20"></div>
            <div className="absolute bottom-18 right-18 z-10 w-32 h-32 bg-[#FFF1C4]/30 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48">
              <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-tl-full"></div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white p-8 sm:p-10 col-span-3 lg:p-12">
            <div className="space-y-6">
              
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 px-1 text-gray-900"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 px-1 text-gray-900"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 px-1 text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 px-1 text-gray-900"
                    placeholder="+1 012 3456 789"
                  />
                </div>
              </div>

              {/* Select Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-4">
                  Select Subject?
                </label>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {['General Inquiry', 'General Inquiry', 'General Inquiry', 'General Inquiry'].map((subject, index) => (
                    <label key={index} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="subject"
                        value={subject}
                        checked={formData.subject === subject && index === 0}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{subject}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 px-1 text-gray-900 resize-none"
                  placeholder="Write your message.."
                  style={{ height: '100px' }}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-b from-[#A27806] to-[#D19B06] hover:bg-[#a07700] text-[#FFFFFF] px-[38.5px] py-[11px] rounded-full font-medium text-[16px] transition cursor-pointer"
                >
                  Submit
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactUsSection;