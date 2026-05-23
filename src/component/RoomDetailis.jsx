"use client";
import React from "react";
import Image from "next/image";

import { SlLayers } from "react-icons/sl";
import { RxPeople } from "react-icons/rx";
import RoomBookingForm from "./RoomBookingForm";
import { Button,  Modal, Surface  } from "@heroui/react";


const RoomDetailis = ({ room }) => {
  const { name, description, floor, capacity, price, amenities } = room;

  return (
    <div className="flex gap-4">
      <div className="p-4 bg-olive-100 shadow-xl rounded-2xl">
        <Image
          className="rounded-2xl"
          src={room.image}
          alt={room.name}
          width={800}
          height={600}
        />
      </div>
      <div className="  bg-white rounded-2xl shadow-xl p-4 space-y-6">
        <div className="flex justify-between ">
          <h2 className="card-title text-3xl font-bold">{name}</h2>
          <p className="text-xl font-bold">${price}/hr</p>
        </div>
        <p>{description}</p>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <SlLayers size={20} className="text-[#4F5A2A]" />
            <p>{floor}th Floor</p>
          </div>
          <div className="flex items-center gap-1">
            <RxPeople size={20} className="text-[#4F5A2A]" />
            <p> {capacity} Person</p>
          </div>
        </div>

        <div className="card-actions justify-end flex-wrap gap-2">
          {(() => {
            let amenitiesList = [];
            if (Array.isArray(amenities)) amenitiesList = amenities;
            else if (typeof amenities === "string" && amenities.trim())
              amenitiesList = amenities.split(",").map((s) => s.trim());
            const visible = amenitiesList.slice(0, 3);
            const extra = Math.max(0, amenitiesList.length - 3);
            return (
              <>
                {visible.map((a) => (
                  <div
                    key={a}
                    className="badge badge-outline text-sm px-3 py-1 mr-2"
                  >
                    {a}
                  </div>
                ))}
                {extra > 0 && (
                  <div className="badge badge-outline text-sm px-3 py-1">
                    +{extra}
                  </div>
                )}
              </>
            );
          })()}
        </div>
       
        <Modal>
          <Button
            className={"w-full  bg-[#4F5A2A] text-white"}
            variant="outline"
          >
            Book Now
          </Button>
          <Modal.Backdrop>
            <Modal.Container placement="auto">
              <Modal.Dialog className="sm:max-w-md">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading>{name}</Modal.Heading>
                  <p className="mt-1.5 text-sm leading-5 text-muted">
                    Fill the form to book a room with Date and Time.
                  </p>
                </Modal.Header>
                <Modal.Body className="p-6">
                  <Surface variant="default">
                   <div>
                    <RoomBookingForm room={room}/>
                   </div>
                  </Surface>
                </Modal.Body>
                {/* <Modal.Footer>
                  <Button slot="close" variant="secondary">
                    Cancel
                  </Button>
                  <Button slot="close">Send Message</Button>
                </Modal.Footer> */}
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>

        <div className="w-full bg-olive-100 h-40 mt-20 shadow-xl rounded-2xl">
          {room.name}
        </div>
      </div>
    </div>
  );
};

export default RoomDetailis;
