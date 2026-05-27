//  import ListingTable from '@/component/BookingTable';
import MyListingsTable from "@/component/MyListingsTable";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const MyListingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  // console.log(user);

  const res = await fetch(`http://localhost:7000/my-listings/${user?.id}`);
  const data = await res.json();
  console.log("DATA", data);
  return (
    <div className="max-w-7xl mx-auto mt-15 ">
      <h2 className="text-2xl font-bold ">My Listings</h2>

      {data.length > 0 && <MyListingsTable data={data} />}
      {data.length === 0 && <div className="min-h-[70vh] flex items-center justify-center px-4">
  <div className="w-full max-w-xl rounded-3xl border border-default-200 bg-white/70 backdrop-blur-md shadow-2xl p-10 text-center">
    
    {/* Icon */}
    <div className="flex justify-center mb-6">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-100 to-amber-200 flex items-center justify-center shadow-md">
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
      No Listings Yet
    </h2>

    {/* Description */}
    <p className="text-gray-500 text-base leading-relaxed mb-8">
      Looks like you haven’t added any property listings yet.
      Start sharing your spaces and connect with potential guests.
    </p>

    {/* Action Button */}
    <Link href="/add-room"><button className="px-6 py-3 rounded-2xl bg-[#586235] hover:bg-olive-600 transition-all duration-300 text-white font-semibold shadow-lg hover:scale-105">
      Create Your First Listing
    </button></Link>
  </div>
</div>}
    </div>
  );
};

export default MyListingPage;
