import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { FaBookOpen } from "react-icons/fa6";
const Banner = () => {
  return (
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
          <Link href="/rooms"><Button 
              size="md"
              className="bg-[#4F5A2A] hover:bg-[#66705A] text-white text-lg px-10 py-7 rounded-xl font-semibold transition-all duration-300"
            >
              Explore Rooms
            </Button></Link>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;
