import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'James Lockman',
      position: 'Head Operations Coordinator',
      text: "If you are a business owner, and you don't have Xailor in your toolkit just yet, I highly recommend that you check it out.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      offset: 'lg:translate-y-0'
    },
    {
      id: 2,
      name: 'Karina Lockman',
      position: 'Lead Operations Coordinator',
      text: "If you are a business owner, and you don't have Xailor in your toolkit just yet, I highly recommend that you check it out.",
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      offset: 'lg:translate-y-12'
    },
    {
      id: 3,
      name: 'Sarah Martinez',
      position: 'Lead Operations Coordinator',
      text: "If you are a business owner, and you don't have Xailor in your toolkit just yet, I highly recommend that you check it out.",
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      offset: 'lg:translate-y-0'
    }
  ];

  return (
    <div className="relative  overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/testimonialsbackground.svg"
          alt="Event Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Diagonal Yellow Accent */}
        <div className="absolute bottom-0 left-0  ">
            <img src="/Group 3.svg" alt="" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 sm:py-20 lg:py-23.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1240px] mx-auto">
          
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`transform transition-all duration-300 hover:scale-105 ${testimonial.offset}`}
              >
                <div className="bg-gradient-to-br from-[#3b4d8f] to-[#2c3a6f] rounded-2xl p-6 shadow-2xl">
                  
                  {/* Header */}
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <div className="w-6 h-6  rounded-full flex items-center justify-center">
                      <img src="/Vector (7).svg" alt="" />
                    </div>
                    <span className="text-white text-sm font-medium">Testimonial</span>
                  </div>

                  {/* White Content Card */}
                  <div className="bg-white rounded-xl p-6">
                    
                    {/* Profile Image */}
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-orange-500"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-white"></div>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-black fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-center text-sm leading-relaxed mb-4">
                      {testimonial.text}
                    </p>

                    {/* Name and Position */}
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900 text-base mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-xs">
                        {testimonial.position}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;