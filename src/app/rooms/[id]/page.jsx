export const metadata = {
  title: "StudyNook-Room Details",
  description: "A Library Room Booking System for Students",
};
import { BsArrowLeftCircle } from "react-icons/bs";
import Link from "next/link";
import RoomCard from "@/component/RoomCard";
import RoomDetailis from "@/component/RoomDetailis";
const RoomDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:7000/rooms/${id}`);
  const room = await res.json();
  // console.log(room);
  return (
    <div className="max-w-7xl mx-auto mt-15 ">
      <div className=" ">
        <p className="text-[#4F5A2A] cursor-pointer flex  mb-4">
          <Link href={"/rooms"} className="flex gap-4 items-center">
            <BsArrowLeftCircle
              size={20}
              className="text-[#4F5A2A] cursor-pointer"
            />
            <span>Back</span>
          </Link>
        </p>
      </div>
      <div>
        <RoomDetailis room={room} />
      </div>
    </div>
  );
};

export default RoomDetailsPage;
