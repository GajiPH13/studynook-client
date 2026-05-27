import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { Card } from "@heroui/react";
import { SlLayers } from "react-icons/sl";
import { RxPeople } from "react-icons/rx";
import Link from "next/link";

const RoomCardGrid = ({ room }) => {
  const { name, description, image, floor, capacity, price, amenities } = room;

  return (
    <div className="w-full">
      <Card className="bg-base-100 w-full shadow-sm p-0 group">
        <figure className="m-0 relative w-full h-60 overflow-hidden transform transition duration-500 group-hover:scale-103">
          <Image
            src={image}
            alt={name || "room image"}
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </figure>
        <div className="card-body p-4 space-y-4">
          <div className="flex justify-between">
            <h2 className="card-title text-xl font-bold">{name}</h2>
            <p className="text-xl font-bold">${price}/hr</p>
          </div>
          {/* <p className="truncate-100">{description}</p> */}
          <p>
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <SlLayers size={20} className="text-[#4F5A2A]" />
              <p>{floor}th Floor</p>
            </div>
            <div className="flex items-center gap-1">
              <RxPeople size={20} className="text-[#4F5A2A]" />
              <p>{capacity} Person</p>
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
          <Link href={`/rooms/${room._id}`}>
            <Button
              variant="outline"
              className="hover:bg-[#4F5A2A] hover:text-white w-full"
            >
              View Details
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default RoomCardGrid;
