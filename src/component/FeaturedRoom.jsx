import React from "react";
import RoomCard from "./RoomCard";
const FeaturedRoom = async () => {
  const res = await fetch("http://localhost:7000/rooms?limit=6");
  // const rooms = (await res.json()).slice(0, 6);
  const rooms = await res.json();

  return (
    <section className=" max-w-7xl mx-auto pt-15">
      <div className="space-y-2 mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight  text-neutral-900 sm:text-4xl">
          Explore Featured Nooks
        </h2>
        <p className="text-lg text-center text-neutral-500 ">
          Handpicked study spaces designed for absolute focus and productivity.
        </p>
      </div>
      <div className="  grid grid-cols-3 gap-4">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedRoom;
