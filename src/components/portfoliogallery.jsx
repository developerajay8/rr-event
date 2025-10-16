import React, { useState } from 'react';

const PortfolioGallery = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const tabs = ['All', 'Events', 'Weddings', 'Corporate', 'Cultural'];

  const portfolioItems = [
    {
      id: 1,
      category: 'Weddings',
      title: 'Royal Wedding Celebration',
      description: 'Destination Wedding • 300 Guests',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      category: 'Events',
      title: 'Corporate Gala Night',
      description: 'Annual Conference • 500 Attendees',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      category: 'Cultural',
      title: 'Festival Celebration',
      description: 'Cultural Event • 1000+ Visitors',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      category: 'Corporate',
      title: 'Product Launch Event',
      description: 'Tech Summit • 250 Guests',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      category: 'Weddings',
      title: 'Beachside Wedding',
      description: 'Intimate Ceremony • 150 Guests',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      category: 'Events',
      title: 'Charity Fundraiser',
      description: 'Gala Dinner • 400 Attendees',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop'
    }
  ];

  const filteredItems = activeTab === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-[#FCF8ED] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#121212] text-center mb-4">Our Portfolio</h2>

          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Discover the magic we've created for our clients across different event categories
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-11 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#2D3A67] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 ${
                  hoveredCard === item.id
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-200">
                  {item.description}
                </p>
              </div>

              {/* Static Title (visible on mobile) */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No items found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioGallery;