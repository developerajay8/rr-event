import React, { useEffect, useState } from 'react';

const AboutRoveRevel = () => {
  const stats = [
    { number: 500, label: 'Events Crafted', color: 'text-orange-500' },
    { number: 50, label: 'Destinations', color: 'text-blue-500' },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[index] < stat.number) {
            newCounters[index] += Math.ceil(stat.number / 100); // increment smoothly
            if (newCounters[index] > stat.number) newCounters[index] = stat.number;
          } else {
            clearInterval(intervals[index]);
          }
          return newCounters;
        });
      }, 20); // update every 20ms
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, []);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-3xl font-serif sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              About Rove & Revel
            </h1>
            
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We are passionate storytellers who believe every event is an opportunity to create magic. Our name embodies our philosophy - "Rove" represents our spirit of exploration and discovery, while "Revel" captures the joy of celebration.
            </p>
            
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              With expertise spanning event planning, hospitality, and consultancy, we transform ordinary moments into extraordinary memories through travel-inspired creativity and premium service delivery.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 sm:gap-12 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl sm:text-5xl font-bold ${stat.color} mb-2`}>
                    {counters[index]}+
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop"
                alt="Event Setup"
                className="w-full h-[300px] sm:h-[340px] lg:h-[400px] object-cover"
              />
              
              {/* Orange Badge */}
              <div className="absolute bottom-3 right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-2xl shadow-xl">
                <div className="text-3xl sm:text-4xl font-bold mb-1">15+</div>
                <div className="text-sm sm:text-base font-medium">Years Experience</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="hidden lg:block absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="hidden lg:block absolute -top-4 -right-4 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutRoveRevel;
