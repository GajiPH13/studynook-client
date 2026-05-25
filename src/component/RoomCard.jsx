import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { Card } from "@heroui/react";
import { SlLayers } from "react-icons/sl";
import { RxPeople } from "react-icons/rx";
import Link from "next/link";

const RoomCard = ({ room }) => {
  const { name, description, image, floor, capacity, price, amenities } = room || {};

  return (
    <div className="w-full max-w-[400px]">
      <Card className="bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-0 group overflow-hidden rounded-2xl">
        
        {/* Aspect Ratio Image Wrapper */}
        <figure className="m-0 relative w-full h-56 overflow-hidden bg-neutral-100">
          <Image
            src={image}
            alt={name || 'room image'}
            fill
            className="object-cover w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 33vw"
            priority={false}
          />
        </figure>

        {/* Card Content Elements */}
        <div className="p-5 space-y-4">
          
          {/* Header Title & Pricing */}
          <div className="flex justify-between items-start gap-4">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight line-clamp-1">
              {name}
            </h2>
            <p className="text-lg font-extrabold text-[#4F5A2A] whitespace-nowrap">
              ${price}<span className="text-xs font-medium text-neutral-500">/hr</span>
            </p>
          </div>

          {/* Room Description with Height Constraints */}
          <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed min-h-[40px]">
            {description}
          </p>

          {/* Floor & Capacity Specifications */}
          <div className="flex items-center gap-6 text-sm font-medium text-neutral-700 pt-1">
            <div className="flex items-center gap-2">
              <SlLayers size={18} className="text-[#4F5A2A]" /> 
              <span>{floor}th Floor</span>
            </div>
            <div className="flex items-center gap-2">
              <RxPeople size={18} className="text-[#4F5A2A]" /> 
              <span>{capacity} Person{capacity > 1 ? 's' : ''}</span>
            </div>
          </div>
          
          {/* Amenities Badges Block */}
          <div className="flex flex-wrap items-center gap-2 pt-1 min-h-[32px]">
            {(() => {
              let amenitiesList = [];
              if (Array.isArray(amenities)) amenitiesList = amenities;
              else if (typeof amenities === 'string' && amenities.trim()) {
                amenitiesList = amenities.split(',').map(s => s.trim());
              }
              const visible = amenitiesList.slice(0, 3);
              const extra = Math.max(0, amenitiesList.length - 3);
              
              return (
                <>
                  {visible.map((a) => (
                    <span 
                      key={a} 
                      className="inline-flex items-center bg-neutral-50 border border-neutral-200 text-neutral-700 text-xs font-medium px-2.5 py-1 rounded-md"
                    >
                      {a}
                    </span>
                  ))}
                  {extra > 0 && (
                    <span className="inline-flex items-center bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-semibold px-2 py-1 rounded-md">
                      +{extra}
                    </span>
                  )}
                </>
              );
            })()}
          </div>

          {/* Action Call To Action Button */}
          <div className="pt-2">
            <Link href={`/rooms/${room._id}`} >
              <Button 
                variant="outline" 
                className="w-full bg-neutral-100 text-neutral-800 hover:bg-[#4F5A2A] hover:text-white font-semibold py-2.5 rounded-xl border-0 shadow-sm transition-all duration-300"
              >
                View Details
              </Button>
            </Link>
          </div>

        </div>
      </Card>
    </div>
  );
};

export default RoomCard;