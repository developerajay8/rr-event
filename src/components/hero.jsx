import React from "react";

export default function Hero() {
  return (
    <section aria-label="Hero" className="">
    
        <div className="w-full relative bg-cover bg-center h-screen " style={{ backgroundImage: 'url("/heroimahe.svg")',  }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="max-w-[1240px]  mx-auto h-full px-4 md:px-6 pt-[128px]">
            <div className="max-w-2xl absolute text-white">
              <h1 className="font-serif text-4xl md:text-5xl text-[#FFF5D9] lg:text-6xl ">
                Crafting Unforgettable
                <br />
                Experiences
              </h1>
              <p className="mt-8 max-w-xl leading-relaxed text-[#FFF5D9]">
                Where wanderlust meets celebration. Premium event planning and hospitality services that transform
                moments into memories.
              </p>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="bg-gradient-to-b from-[#A27806] to-[#D19B06] hover:bg-[#a07700] text-[#FFFFFF] px-[38.5px] py-[11px] rounded-full font-medium text-[16px] transition"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>

      
    </section>
  );
}
