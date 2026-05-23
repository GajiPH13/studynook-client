import React from 'react';
import RoomSearchPanel from '@/component/RoomSearchPanel';

const page = async () => {
    const res = await fetch('http://localhost:7000/rooms');
    const rooms = await res.json();
    // console.log(rooms);

    return <RoomSearchPanel rooms={rooms} />;
};

export default page;