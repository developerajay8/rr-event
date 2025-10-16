import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null); // track hovered card index

  const cards = [
    {
      title: "Event Planning",
      description:
        "Complete event management from concept to execution - weddings, corporate events, cultural programs, and destination celebrations.",
      features: [
        "Wedding Planning",
        "Corporate Events",
        "Cultural Programs",
        "Destination Events",
      ],
      icon: <img src="/Calendar clock.svg" alt="" />,
      defaultBg: "bg-[#FDEFDF]",
      hoverBg: "bg-[#2D3A67]",
      textColor: "text-[#5E5952]",
      hoverTextColor: "text-white",
    },
    {
      title: "Hospitality Services",
      description:
        "Premium hospitality solutions including accommodation, catering, venue sourcing, and guest management services.",
      features: ["Accommodation Arrangements", "Catering & Venues", "Guest Management", "Concierge Services"],
      icon: <img src="/Calendar clock.svg" alt="" />,
      defaultBg: "bg-[#FDEFDF]",
      hoverBg: "bg-[#2D3A67]",
      textColor: "text-[#5E5952]",
      hoverTextColor: "text-white",
    },
    {
      title: "Consultancy",
      description:
        "Strategic advisory and turnkey solutions for event management, hospitality, and travel experiences.",
      features: ["Event Strategy", "Hospitality Advisory", "Travel Experiences", "Turnkey Solutions"],
      icon: <img src="/Calendar clock.svg" alt="" />,
      defaultBg: "bg-[#FDEFDF]",
      hoverBg: "bg-[#2D3A67]",
      textColor: "text-[#5E5952]",
      hoverTextColor: "text-white",
    },
  ];

  return (
    <section className="py-10 ">
      <h2 className="text-3xl font-bold text-[#121212] text-center mb-12">Our Services</h2>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6 px-4">
        {cards.map((card, index) => {
          const isHovered = hoveredIndex === index; // only hovered card
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`p-7  hover:shadow transition-all duration-300 cursor-pointer ${
                isHovered ? card.hoverBg : card.defaultBg
              }`}
            >
              <div className="mb-4">
                <div
                  className={"bg-[#A26B00] w-11 h-11 rounded-full flex items-center justify-center "}
                >
                  {card.icon}
                </div>
              </div>
              <h3 className={`font-bold text-[20px] mb-2 ${isHovered ? "text-white" : card.textColor}`}>
                {card.title}
              </h3>
              <p className={`text-[16px] mb-4 ${isHovered ? "text-white" : "text-[#5E5952]"}`}>
                {card.description}
              </p>
              <ul className="space-y-1">
                {card.features.map((feat, i) => (
                  <li
                    key={i}
                    className={`flex items-center text-[16px] ${isHovered ? "text-white" : card.textColor}`}
                  >
                    <span className={`flex mr-2 items-center text-[16px] text-[#AB5B00] ${isHovered ? "text-white" : card.textColor}`}><FaCheck />
</span> {feat}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
