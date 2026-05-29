import BookingTable from '@/component/BookingTable';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const {token} = await  auth.api.getToken({
        headers: await headers(),
      })
    const user = session?.user;
    // console.log(user);

    const res = await fetch(`http://localhost:7000/my-bookings/${user?.id}`,{
        headers: {
            authorization: `Bearer ${token}`,
        }
    });
    const data = await res.json();
    // console.log(data);
    return (
        <div className="max-w-7xl mx-auto mt-15 ">
            <h2 className="text-2xl font-bold mb-6 ">My Bookings</h2>
            
           {data.length > 0 && <BookingTable data={data} />} 
            {data.length === 0 && <div className="min-h-125 flex items-center justify-center px-4">
  <div className="w-full   max-w-7xl rounded-3xl border border-default-200 bg-white/70 backdrop-blur-md shadow-2xl p-10 text-center">
    
    {/* Icon */}
    <div className="flex justify-center mb-6">
      <div className="w-20 h-20 rounded-full bg-[#586235] flex items-center justify-center text-white shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-10 h-10 text-[##586235]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7.5l9-4.5 9 4.5M4.5 10.5v7.125A2.25 2.25 0 006.75 19.875h10.5A2.25 2.25 0 0019.5 17.625V10.5M9 22.5h6"
          />
        </svg>
      </div>
    </div>

    {/* Heading */}
    <h2 className="text-3xl font-bold text-gray-800 mb-3">
      No Bookings Yet
    </h2>

    {/* Description */}
    <p className="text-gray-500 text-base leading-relaxed mb-8">
      Looks like you haven’t added any bookings yet.
      Start booking your spaces and let you amazing study rooms.
    </p>

    {/* Action Button */}
    <Link href="/rooms"><button className="px-6 py-3 rounded-2xl bg-[#586235] hover:bg-olive-600 transition-all duration-300 text-white font-semibold shadow-lg hover:scale-105">
      Book Your First Room
    </button></Link>
  </div>
</div>}
        </div>
    );
};

export default  MyBookingPage;