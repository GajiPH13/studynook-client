
export const metadata = {
  title: "StudyNook-Room Details",
  description: "A Library Room Booking System for Students",
};
import { BsArrowLeftCircle } from "react-icons/bs";
import Link from "next/link";
// import RoomCard from "@/component/RoomCard";
import RoomDetailis from "@/component/RoomDetailis";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import DeleteRoom from "@/component/DeleteRoom";
import EditRoom from "@/component/EditRoom";

// import { authClient } from "@/lib/auth-client";

const RoomDetailsPage = async ({ params }) => {
  // const userData = authClient.useSession();
  //   const user = userData.data?.user;
    // console.log("Current User",user);
  
  const { id } = await params;
  const {token} = await  auth.api.getToken({
    headers: await headers(),
  })
  // console.log(token);
  const res = await fetch(`http://localhost:7000/rooms/${id}`,{
    headers: {
      authorization: `Bearer ${token}`,
    }
  });

  const room = await res.json();
    // console.log("ROOM",room);
  return (
    <div className="max-w-7xl mx-auto mt-15 px-4 ">
      <div className=" flex justify-between items-center  mb-4 ">
        <p className="text-[#4F5A2A] cursor-pointer flex  mb-4">
          <Link href= "/rooms" className="flex gap-4 items-center">
            <BsArrowLeftCircle
              size={20}
              className="text-[#4F5A2A] cursor-pointer"
            />
            <span>Back</span>
          </Link>
        </p>
        <div className="flex gap-4">
          <EditRoom room={room} />
          {/* <Button variant="outline" className={"bg-[#4F5A2A] text-white"}>Edit</Button> */}
          {/* <Button variant="danger">Delete</Button> */}
          <DeleteRoom id={id} />
        </div>
      </div>
      <div>
        <RoomDetailis room={room} />
      </div>
    </div>
  );
};

export default RoomDetailsPage;
