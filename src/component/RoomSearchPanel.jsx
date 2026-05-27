"use client";

import React, { useMemo, useState } from 'react';
import RoomCardGrid from './RoomCardGrid';

const normalizeAmenities = (amenities) => {
  if (Array.isArray(amenities)) return amenities.map((a) => a?.trim()).filter(Boolean);
  if (typeof amenities === 'string') return amenities.split(',').map((a) => a.trim()).filter(Boolean);
  return [];
};

const RoomSearchPanel = ({ rooms = [] }) => {
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
    <div className="flex w-full h-screen bg-neutral-50/50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 overflow-hidden transition-colors duration-200">
      
      {/* Left Sidebar Filters */}
      <aside className="w-80 bg-olive-200 dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 sticky top-0 h-full overflow-y-auto shrink-0 z-10 shadow-sm transition-colors duration-200">
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-2xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight">Search rooms</h1>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Filter available rooms by matching name descriptors and integrated amenities.
            </p>
          </div>

          {/* Room Name Input Group */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
              Room name
            </label>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search by name..."
              className="w-full bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 placeholder-neutral-400 dark:placeholder-neutral-500 text-sm border border-neutral-300 dark:border-neutral-800 rounded-xl px-3.5 py-2.5 shadow-sm focus:outline-none focus:border-[#4F5A2A] dark:focus:border-[#4F5A2A] focus:ring-1 focus:ring-[#4F5A2A] transition-all"
            />
          </div>

          {/* Amenities Selector Grid */}
          <div className="space-y-2.5">
            <p className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
              Amenities
            </p>
            <div className="flex flex-wrap gap-2">
              {allAmenities.map((amenity) => {
                const active = selectedAmenities.includes(amenity);
                return (
                  <button
                    key={amenity}
                    type="button"
                    onClick={() => toggleAmenity(amenity)}
                    className={`inline-flex items-center text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                      active 
                        ? 'bg-[#4F5A2A] text-white shadow-md shadow-[#4F5A2A]/10 border border-[#4F5A2A]' 
                        : 'bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                    }`}
                  >
                    {amenity}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reset Action Control */}
          <button
            type="button"
            onClick={() => {
              setSearchText('');
              setSelectedAmenities([]);
            }}
            className="w-full text-center text-sm font-semibold text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all py-2.5 rounded-xl cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      </aside>

      {/* Main Content Grid Area */}
      <main className="flex-1 overflow-y-auto bg-neutral-50 dark:bg-neutral-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto py-8 px-6 lg:px-8">
          
          {/* Card Engine Integration */}
          {filteredRooms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredRooms.map((room) => (
                <RoomCardGrid key={room._id} room={room} />
              ))}
            </div>
          ) : (
            /* Enhanced Empty State Design */
            <div className="w-full max-w-xl mx-auto mt-12 rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-12 text-center shadow-sm transition-colors duration-200">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-950">
                <svg className="h-6 w-6 text-neutral-400 dark:text-neutral-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-neutral-900 dark:text-neutral-100">No rooms match criteria</h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                We couldn't find matches. Try adjusting keywords or loosening filter selections.
              </p>
            </div>
          )}
          
        </div>
      </main>
      
    </div>
  );
};

export default RoomSearchPanel;