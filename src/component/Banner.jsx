import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { FaBookOpen } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";
const Banner = () => {
  return (
    <section className="bg-olive-50 py-15">
      <div className="max-w-7xl mx-auto mt-10 mb-10 relative">
      <div
        className="mx-auto relative rounded-2xl overflow-hidden"
        style={{
          width: "1280px",
          height: "600px",
          backgroundImage: "url('/HeroBanner.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "auto",
        }}
      />
      <div className="absolute top-55 left-40 space-y-6">
        <div>
          <h2 className="text-5xl font-bold text-black ">StudyNook</h2>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-bold leading-tight text-white">
            Find Your Perfect <br />
            <span className="text-[#A3B68C]">Study Room</span>
          </h2>

          <p className="text-xl text-shadow-gray-950 max-w-2xl">
            Browse and book quiet, private study rooms in your library.
            <br />
            List your own room and earn.
          </p>
        </div>
        <div>
          {/* <Link href="/rooms"><Button 
              size="md"
              className="bg-[#4F5A2A] hover:bg-[#66705A] text-white text-lg px-10 py-7 rounded-xl font-semibold transition-all duration-300"
            >
              Explore Rooms
            </Button></Link> */}
           
<Link href="/rooms">
  <Button
    size="lg"
    className="
      group relative overflow-hidden
      bg-gradient-to-r from-[#4F5A2A] to-[#66705A]
      text-white text-lg font-semibold
      px-10 py-6 rounded-2xl
      shadow-lg hover:shadow-2xl
      transition-all duration-300
      hover:scale-[1.03]
      active:scale-95
    "
  >
    {/* Shine effect */}
    <span className="absolute inset-0 bg-white/10 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 skew-x-12" />

    {/* Content */}
    <span className="relative flex items-center gap-2">
      Explore Rooms
      <HiArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
    </span>
  </Button>
</Link>
         
        </div>
      </div>
    </div>
    </section>
  );
};

export default Banner;
