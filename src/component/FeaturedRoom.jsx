import React from 'react';
import RoomCard from './RoomCard';
const FeaturedRoom = async () => {
    const res = await fetch('http://localhost:7000/rooms?limit=6');
    // const rooms = (await res.json()).slice(0, 6);
    const rooms = await res.json();

    return (
        <section className="py-10">
            <div className=" max-w-7xl mx-auto grid grid-cols-3 gap-4">
            {
                rooms.map((room) => (
                    <RoomCard key={room._id} room={room} />
                ))
            }
        </div>
        </section>
    );
};

export default FeaturedRoom;