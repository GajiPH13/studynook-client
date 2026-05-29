"use client";
import React from "react";
import Image from "next/image";
// import { authClient } from "@/lib/auth-client";
import { SlLayers } from "react-icons/sl";
import { RxPeople } from "react-icons/rx";
import RoomBookingForm from "./RoomBookingForm";
import { Button, Modal, Surface } from "@heroui/react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const RoomDetailis = ({ room }) => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  if (!user) {
    return <p>Loading...</p>; // or null
  }
  const { name: userName, email, image } = user;
  console.log(user);
  // const router = useRouter();
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   router.push(`/rooms/${_id}`);
  // };
  const { name, description, floor, capacity, price, amenities } = room;

  return (
    // <div className="flex gap-4">
    //   <div className="flex justify-center items-center p-4 bg-white shadow-xl rounded-2xl">
    //     <Image
    //       className="rounded-2xl"
    //       src={room.image}
    //       alt={room.name}
    //       width={800}
    //       height={600}
    //       priority
    //     />
    //   </div>
    //   <div className="  bg-white rounded-2xl shadow-xl p-4 space-y-6">
    //     <div className="flex justify-between ">
    //       <h2 className="card-title text-3xl font-bold">{name}</h2>
    //       <p className="text-xl font-bold">${price}/hr</p>
    //     </div>
    //     <p>{description}</p>
    //     <div className="flex justify-between">
    //       <div className="flex items-center gap-1">
    //         <SlLayers size={20} className="text-[#4F5A2A]" />
    //         <p>{floor}th Floor</p>
    //       </div>
    //       <div className="flex items-center gap-1">
    //         <RxPeople size={20} className="text-[#4F5A2A]" />
    //         <p> {capacity} Person</p>
    //       </div>
    //     </div>

    //     <div className="card-actions justify-end flex-wrap gap-2">
    //       {(() => {
    //         let amenitiesList = [];
    //         if (Array.isArray(amenities)) amenitiesList = amenities;
    //         else if (typeof amenities === "string" && amenities.trim())
    //           amenitiesList = amenities.split(",").map((s) => s.trim());
    //         // const visible = amenitiesList.slice(0, 3);
    //         // const extra = Math.max(0, amenitiesList.length - 3);
    //         const visible = amenitiesList;

    //         return (
    //           <>
    //             {visible.map((a) => (
    //               <div
    //                 key={a}
    //                 className="badge badge-outline text-sm px-3 py-1 mr-2 mb-2"
    //               >
    //                 {a}
    //               </div>
    //             ))}
    //             {/* {extra > 0 && (
    //               <div className="badge badge-outline text-sm px-3 py-1">
    //                 +{extra}
    //               </div>
    //             )} */}
    //           </>
    //         );
    //       })()}
    //     </div>

    //     <Modal>
    //       <Button
    //         className={"w-full  bg-[#4F5A2A] text-white"}
    //         variant="outline"
    //       >
    //         Book Now
    //       </Button>
    //       <Modal.Backdrop>
    //         <Modal.Container placement="auto">
    //           <Modal.Dialog className="sm:max-w-md">
    //             <Modal.CloseTrigger />
    //             <Modal.Header>
    //               <Modal.Heading>{name}</Modal.Heading>
    //               <p className="mt-1.5 text-sm leading-5 text-muted">
    //                 Fill the form to book a room with Date and Time.
    //               </p>
    //             </Modal.Header>
    //             <Modal.Body className="p-6">
    //               <Surface variant="default">
    //                 <div>
    //                   <RoomBookingForm room={room} />
    //                 </div>
    //               </Surface>
    //             </Modal.Body>
    //           </Modal.Dialog>
    //         </Modal.Container>
    //       </Modal.Backdrop>
    //     </Modal>

    //     {user == user && (
    //       <>
    //         {/* <div className="flex justify-center gap-4 items-center flex-col "></div> */}
    //         <div className=" flex justify-center gap-4 items-center flex-col py-4 w-full bg-olive-100 h-auto mt-20 shadow-xl rounded-2xl">
    //           <Image src={image} alt={userName} width={100} height={100} className="rounded-full" />
    //           <div>
    //             <h2 className="text-2xl font-bold">{userName}</h2>
    //             <p>{email}</p>
    //           </div>
    //         </div>
    //       </>
    //     )}
    //     {!user && (
    //       <div>
    //         <p className="text-2xl font-bold">Login to Book a Room</p>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="flex flex-col lg:flex-row gap-4 w-full">

  {/* ================= IMAGE SECTION ================= */}
  <div className="flex justify-center items-center p-3 sm:p-4 bg-olive-50 shadow-xl rounded-2xl w-full lg:w-1/2">
    <Image
      className="rounded-2xl w-full h-auto object-cover"
      src={room.image}
      alt={room.name}
      width={800}
      height={600}
      priority
    />
  </div>

  {/* ================= DETAILS SECTION ================= */}
  <div className="bg-olive-50 rounded-2xl shadow-xl p-4 sm:p-5 lg:p-6 space-y-5 sm:space-y-6 w-full lg:w-1/2">

    {/* Title + Price */}
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
      <h2 className="card-title text-2xl sm:text-3xl font-bold break-words">
        {name}
      </h2>

      <p className="text-lg sm:text-xl font-bold whitespace-nowrap">
        ${price}/hr
      </p>
    </div>

    {/* Description */}
    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
      {description}
    </p>

    {/* Floor + Capacity */}
    <div className="flex flex-col sm:flex-row justify-between gap-3">
      <div className="flex items-center gap-1">
        <SlLayers size={20} className="text-[#4F5A2A]" />
        <p>{floor}th Floor</p>
      </div>

      <div className="flex items-center gap-1">
        <RxPeople size={20} className="text-[#4F5A2A]" />
        <p>{capacity} Person</p>
      </div>
    </div>

    {/* Amenities */}
    <div className="flex flex-wrap gap-2">
      {(() => {
        let amenitiesList = [];

        if (Array.isArray(amenities)) {
          amenitiesList = amenities;
        } else if (typeof amenities === "string" && amenities.trim()) {
          amenitiesList = amenities.split(",").map((s) => s.trim());
        }

        return (
          <>
            {amenitiesList.map((a) => (
              <div
                key={a}
                className="badge badge-outline text-xs sm:text-sm px-2 sm:px-3 py-1"
              >
                {a}
              </div>
            ))}
          </>
        );
      })()}
    </div>

    {/* ================= BOOKING MODAL ================= */}
    <Modal>
      <Button
        className="w-full bg-[#4F5A2A] text-white"
        variant="outline"
      >
        Book Now
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="w-[95%] sm:max-w-md mx-auto rounded-xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>{name}</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill the form to book a room with Date and Time.
              </p>
            </Modal.Header>

            <Modal.Body className="p-4 sm:p-6">
              <Surface variant="default">
                <RoomBookingForm room={room} />
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>

    {/* ================= USER SECTION ================= */}
    {user == user && (
      <div className="flex flex-col items-center gap-3 py-4 w-full bg-olive-100 shadow-xl rounded-2xl mt-6 sm:mt-10">
        <Image
          src={image}
          alt={userName}
          width={80}
          height={80}
          className="rounded-full"
        />

        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold">{userName}</h2>
          <p className="text-sm sm:text-base">{email}</p>
        </div>
      </div>
    )}

    {/* ================= LOGIN FALLBACK ================= */}
    {!user && (
      <div className="text-center">
        <p className="text-xl sm:text-2xl font-bold">
          Login to Book a Room
        </p>
      </div>
    )}

  </div>
</div>
  );
};

export default RoomDetailis;
