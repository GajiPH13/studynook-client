// import { Button } from "@heroui/react";
// import Link from "next/link";
// import React from "react";
// import { FaBookOpen } from "react-icons/fa6";
// import { HiArrowRight } from "react-icons/hi2";
// const Banner = () => {
//   return (
//     <section className="bg-olive-50 py-15">
//       <div className="max-w-7xl mx-auto mt-10 mb-10 relative">
//       <div
//         className="mx-auto relative rounded-2xl overflow-hidden"
//         style={{
//           width: "1280px",
//           height: "600px",
//           backgroundImage: "url('/HeroBanner.png')",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           backgroundSize: "auto",
//         }}
//       />
//       <div className="absolute top-55 left-40 space-y-6">
//         <div>
//           <h2 className="text-5xl font-bold text-black ">StudyNook</h2>
//         </div>
//         <div className="space-y-4">
//           <h2 className="text-4xl font-bold leading-tight text-white">
//             Find Your Perfect <br />
//             <span className="text-[#A3B68C]">Study Room</span>
//           </h2>

//           <p className="text-xl text-shadow-gray-950 max-w-2xl">
//             Browse and book quiet, private study rooms in your library.
//             <br />
//             List your own room and earn.
//           </p>
//         </div>
//         <div>
//           {/* <Link href="/rooms"><Button 
//               size="md"
//               className="bg-[#4F5A2A] hover:bg-[#66705A] text-white text-lg px-10 py-7 rounded-xl font-semibold transition-all duration-300"
//             >
//               Explore Rooms
//             </Button></Link> */}
           
// <Link href="/rooms">
//   <Button
//     size="lg"
//     className="
//       group relative overflow-hidden
//       bg-gradient-to-r from-[#4F5A2A] to-[#66705A]
//       text-white text-lg font-semibold
//       px-10 py-6 rounded-2xl
//       shadow-lg hover:shadow-2xl
//       transition-all duration-300
//       hover:scale-[1.03]
//       active:scale-95
//     "
//   >
//     {/* Shine effect */}
//     <span className="absolute inset-0 bg-white/10 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 skew-x-12" />

//     {/* Content */}
//     <span className="relative flex items-center gap-2">
//       Explore Rooms
//       <HiArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
//     </span>
//   </Button>
// </Link>
         
//         </div>
//       </div>
//     </div>
//     </section>
//   );
// };

// export default Banner;
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";

const Banner = () => {
  return (
    <section className="bg-olive-50 py-1 md:py-20  lg:px-8">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden shadow-xl group/banner">
        
        {/* Background Image Container with Responsive Sizing */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover transition-transform duration-700 group-hover/banner:scale-102"
          style={{
            backgroundImage: "url('/HeroBanner.png')",
          }}
        />

        {/* Modern Dark/Gradient Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent sm:from-black/60" />

        {/* Content Container */}
        <div className="relative z-10 min-h-[500px] md:min-h-[600px] flex flex-col justify-center items-start p-8 sm:p-16 lg:p-24 max-w-3xl space-y-6 md:space-y-8">
          
          {/* Tag / Branding */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm">
              StudyNook
            </h2>
          </div>

          {/* Value Proposition */}
          <div className="space-y-4">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white tracking-tight">
              Find Your Perfect <br />
              <span className="text-[#A3B68C] bg-gradient-to-r from-[#A3B68C] to-[#c1d1ad] bg-clip-text text-transparent">
                Study Room
              </span>
            </h3>

            <p className="text-base sm:text-lg md:text-xl text-zinc-200 font-medium max-w-xl leading-relaxed drop-shadow">
              Browse and book quiet, private study rooms in your library.
              <br />
              List your own room and earn.
            </p>
          </div>

          {/* Interactive CTA */}
          <div>
            <Link href="/rooms" className="inline-block">
              <Button
                size="lg"
                className="
                  group relative overflow-hidden
                  bg-gradient-to-r from-[#4F5A2A] to-[#66705A]
                  text-white text-base md:text-lg font-semibold
                  px-8 md:px-10 py-5 md:py-6 rounded-2xl
                  shadow-lg hover:shadow-2xl hover:shadow-[#4f5a2a]/30
                  transition-all duration-300
                  hover:scale-[1.03]
                  active:scale-95
                  w-full sm:w-auto
                "
              >
                {/* Shine effect */}
                <span className="absolute inset-0 bg-white/20 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 skew-x-12" />

                {/* Content */}
                <span className="relative flex items-center justify-center gap-2">
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