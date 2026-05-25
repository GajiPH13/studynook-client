import { Button } from "@heroui/react";
import React, { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
const RoomBookingForm = ({ room}) => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  // console.log(user);
  const { price,_id,image,name } = room;

  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const [note, setNote] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // console.log(data);
    const bookingData = {
      ...data, 
      roomId: _id,
      roomName: name,
      roomPrice: price,
      roomImage: image, 
      userId: user?.id,
      userName: user?.name,
      userEmail: user?.email,
      userImage: user?.image
    };
    // console.log(bookingData);

    try {
      const res = await fetch("http://localhost:7000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const result = await res.json();
      console.log(result);

      alert("Room Booked Successfully");
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };
  // Calculated hourly rate based on the image ($108 for 9 hours = $12/hr)
  const HOURLY_RATE = price;

  useEffect(() => {
    
    const [startHours, startMinutes] = startTime.split(":").map(Number);
    const [endHours, endMinutes] = endTime.split(":").map(Number);

    const startTotalMinutes = startHours * 60 + startMinutes;
    const endTotalMinutes = endHours * 60 + endMinutes;

    if (endTotalMinutes > startTotalMinutes) {
      const totalHours = (endTotalMinutes - startTotalMinutes) / 60;
      setTotalCost(totalHours * HOURLY_RATE);
    } else {
      setTotalCost(0);
    }
  }, [startTime, endTime]);

  // Generate 24-hour options
  const timeOptions = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, "0");
    return `${hour}:00`;
  });

  return (
    <div className="w-full mx-auto p-6 bg-olive-100 rounded-[16px] text-[#2D312E] font-sans">
      <form onSubmit={onSubmit} className="space-y-5">
        {/* Date Input */}
        <div>
          <label className="block text-sm font-semibold mb-1.5 text-[#2D312E]">
            Date
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 pointer-events-none text-[#2D312E]">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-transparent border border-[#E6E2DA] rounded-[12px] text-base outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
        </div>

        {/* Start / End Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1.5 text-[#2D312E]">
              Start
            </label>
            <div className="relative">
              <select
                value={startTime}
                name="startTime"
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-transparent border border-[#E6E2DA] rounded-[12px] text-base outline-none appearance-none cursor-pointer focus:ring-1 focus:ring-gray-400"
              >
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 text-[#2D312E]">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1.5 text-[#2D312E]">
              End
            </label>
            <div className="relative">
              <select
                value={endTime}
                name="endTime"
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-transparent border border-[#E6E2DA] rounded-[12px] text-base outline-none appearance-none cursor-pointer focus:ring-1 focus:ring-gray-400"
              >
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 text-[#2D312E]">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Special Note */}
        <div>
          <label className="block text-sm font-semibold mb-1.5 text-[#2D312E]">
            Special note{" "}
            <span className="text-[#8A8F8B] font-normal">(optional)</span>
          </label>
          <textarea
            placeholder="Any setup needed?"
            value={note}
            name="note"
            onChange={(e) => setNote(e.target.value)}
            className="w-full px-4 py-3 bg-transparent border border-[#E6E2DA] rounded-[12px] text-[15px] outline-none resize-y min-h-[80px] placeholder-gray-400/70 focus:ring-1 focus:ring-gray-400"
          />
        </div>

        {/* Cost Summary Box */}
        <div className="flex justify-between items-center bg-[#F2EDE4] p-4 rounded-[12px] mt-6">
          <span className="text-[#606662] font-medium">Total cost</span>
          <span className="text-2xl font-bold text-[#1A3A2B]">
            ${totalCost}
          </span>
        </div>

        <Button type="submit">Book Room</Button>
      </form>
    </div>
  );
};
export default RoomBookingForm;
