import Marquee from "react-fast-marquee";

export default function MarqueeLogos() {
 

  return (
    <section className="py-[40px]  bg-[#FFF5D9]">
        <Marquee direction="left" autoFill pauseOnHover className="">
          <img src="/logo-9.svg" alt="FortiX Logo" className="mx-[40px]  " />
          <img src="/Frame (3).svg" alt="FortiX Logo" className="mx-[40px]  " />
          <img src="/logo-8.svg" alt="FortiX Logo" className="mx-[40px]  " />
          <img src="/logo-6.svg" alt="FortiX Logo" className="mx-[40px]  " />
          <img src="/logo-30.svg" alt="FortiX Logo" className="mx-[40px]  " />
        </Marquee>
      </section>
  );
}
