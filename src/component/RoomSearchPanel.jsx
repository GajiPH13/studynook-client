"use client";

import React, { useMemo, useState } from 'react';
import RoomCardGrid from './RoomCardGrid';

const normalizeAmenities = (amenities) => {
  if (Array.isArray(amenities)) return amenities.map((a) => a?.trim()).filter(Boolean);
  if (typeof amenities === 'string') return amenities.split(',').map((a) => a.trim()).filter(Boolean);
  return [];
};

const RoomSearchPanel = ({ rooms }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const allAmenities = useMemo(() => {
    const set = new Set();
    rooms.forEach((room) => {
      normalizeAmenities(room.amenities).forEach((amenity) => set.add(amenity));
    });
    return Array.from(set).sort();
  }, [rooms]);

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((current) =>
      current.includes(amenity)
        ? current.filter((item) => item !== amenity)
        : [...current, amenity]
    );
  };

  const filteredRooms = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    return rooms.filter((room) => {
      const matchesName = room.name?.toLowerCase().includes(query);
      const roomAmenities = normalizeAmenities(room.amenities).map((item) => item.toLowerCase());
      const matchesAmenities = selectedAmenities.every((amenity) =>
        roomAmenities.includes(amenity.toLowerCase())
      );
      return matchesName && matchesAmenities;
    });
  }, [rooms, searchText, selectedAmenities]);

  return (
    <div className="flex w-full h-full mt-1">
      {/* Left Sidebar */}
      <aside className="w-80  shadow-2xl sticky top-0 h-screen overflow-y-auto shrink-0">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-3">Search rooms</h1>
          <p className="mb-6 text-sm text-base-content/70">
            Filter rooms by name and amenities.
          </p>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Room name</span>
            </label>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search by name..."
              className="input input-bordered w-full"
            />
          </div>

          <div className="mb-4">
            <p className="font-semibold mb-2">Amenities</p>
            <div className="flex flex-wrap gap-2">
              {allAmenities.map((amenity) => {
                const active = selectedAmenities.includes(amenity);
                return (
                  <button
                    key={amenity}
                    type="button"
                    onClick={() => toggleAmenity(amenity)}
                    className={`btn btn-sm rounded-full border-2 px-4 py-2 ${
                      active ? 'btn-primary text-white bg-[#4F5A2A]' : 'btn-outline'
                    }`}
                  >
                    {amenity}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setSearchText('');
              setSelectedAmenities([]);
            }}
            className="btn btn-ghost btn-sm w-full bg-[#4F5A2A] border-2 border-base-300 mt-4 px-4 py-2 rounded-2xl text-white hover:bg-[#66705A]"
          >
            Clear filters
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room) => <RoomCardGrid key={room._id} room={room} />)
            ) : (
              <div className="col-span-full rounded-3xl border border-base-300 bg-base-100 p-8 text-center">
                <p className="text-lg font-medium">No rooms match your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RoomSearchPanel;
