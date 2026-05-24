import BookingTable from '@/component/BookingTable';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user;
    console.log(user);

    const res = await fetch(`http://localhost:7000/my-bookings/${user?.id}`);
    const data = await res.json();
    console.log(data);
    return (
        <div className="max-w-7xl mx-auto mt-15 ">
            <h2 className="text-2xl font-bold ">My Bookings</h2>
            
            <BookingTable data={data} />
        </div>
    );
};

export default  MyBookingPage;