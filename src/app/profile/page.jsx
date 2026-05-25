"use client";
// export const metadata = {
//   title: "StudyNook-Profile",
//   description: "A Library Room Booking System for Students",
// };
import { Card } from "@heroui/react";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { UpdateUserForm } from "@/component/Profile-modal/Profile";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);
  return (
    // <div>
    //   <h1>Profile Page</h1>
    //   <Card className=" flex flex-col items-center border mx-auto w-125 py-10 mt-5">
    //     <Avatar className="h-20 w-20">
    //       <Avatar.Image
    //         alt={user?.name}
    //         src={user?.image}
    //         // for google login to show the avatar
    //         referrerPolicy="no-referrer"
    //       />
    //       <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
    //     </Avatar>
    //     <h2>{user?.name}</h2>
    //     <p className="text-muted">{user?.email}</p>
    //     <UpdateUserForm />
    //   </Card>
    // </div>
    <div className="px-4 sm:px-6">
  <h1 className="text-center text-xl sm:text-2xl font-semibold">
    Profile Page
  </h1>

  <Card className="flex flex-col items-center border border-blue-300 mx-auto w-full max-w-md py-8 sm:py-10 mt-5 shadow-md">
    <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
      <Avatar.Image
        alt={user?.name}
        src={user?.image}
        referrerPolicy="no-referrer"
      />
      <Avatar.Fallback>
        {user?.name?.[0]}
      </Avatar.Fallback>
    </Avatar>

    <h2 className="mt-3 text-lg sm:text-xl font-medium text-center">
      {user?.name}
    </h2>

    <p className="text-muted text-sm sm:text-base text-center">
      {user?.email}
    </p>

    <div className="w-full mt-4">
      <UpdateUserForm />
    </div>
  </Card>
</div>
  );
};

export default ProfilePage;
