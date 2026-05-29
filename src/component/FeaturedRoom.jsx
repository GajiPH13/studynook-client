import React from "react";
import RoomCard from "./RoomCard";
const FeaturedRoom = async () => {
  const res = await fetch("http://localhost:7000/rooms?limit=6");
  // const rooms = (await res.json()).slice(0, 6);
  const rooms = await res.json();

  return (
    // <section className=" max-w-7xl mx-auto pt-15">
    //   <div className="space-y-2 mb-8 text-center">
    //     <h2 className="text-3xl font-bold tracking-tight  text-neutral-900 sm:text-4xl">
    //       Explore Featured Nooks
    //     </h2>
    //     <p className="text-lg text-center text-neutral-500 ">
    //       Handpicked study spaces designed for absolute focus and productivity.
    //     </p>
    //   </div>
    //   <div className="  grid grid-cols-3 gap-4">
    //     {rooms.map((room) => (
    //       <RoomCard key={room._id} room={room} />
    //     ))}
    //   </div>
    // </section>
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16">
  {/* Header */}
  <div className="space-y-2 mb-8 text-center">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900">
      Explore Featured Nooks
    </h2>

    <p className="text-sm sm:text-base lg:text-lg text-neutral-500 max-w-2xl mx-auto">
      Handpicked study spaces designed for absolute focus and productivity.
    </p>
  </div>

  {/* Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
    {rooms.map((room) => (
      <RoomCard key={room._id} room={room} />
    ))}
  </div>
</section>
  );
};

export default FeaturedRoom;
