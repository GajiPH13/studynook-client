import React from "react";
import RoomSearchPanel from "@/component/RoomSearchPanel";
export const metadata = {
  title: "StudyNook-Rooms",
  description: "A Library Room Booking System for Students",
};
const page = async () => {
  const res = await fetch("http://localhost:7000/rooms");
  const rooms = await res.json();
  // console.log(rooms);

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <RoomSearchPanel rooms={rooms} />
    </div>
  );
};

export default page;
