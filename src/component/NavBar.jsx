"use client";
import { authClient } from "@/lib/auth-client";

import { FaBookOpen } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import router from "next/router";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import ThemeToggle from "./ThemeToggle";
// import { DropDownPage } from "./DropDownPage";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import { IoIosLogOut } from "react-icons/io";
const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // console.log(userData);
  // const signOutMsg = async() => {
  //  await authClient.signOut();
  //   router.push("/signin");
  //   setIsOpen(false);
  //   if (user) {
  //     toast.success("Sign out successful!");
  //   }
  // }
  return (
    <div className="border-b border-zinc-200 px-2  shadow-xl sticky top-0 overflow-hidden bg-white z-50">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link href="/">
          {/* <div className="flex gap-2 items-center">
            <Image src="/NavBarLogo.png" alt="logo" width={30} height={30} />
            <h3 className="font-black text-lg">BookNest</h3>
          </div> */}
          <div className="flex gap-4 items-center">
            <div className="bg-[#4F5A2A] p-2 rounded-2xl">
              <FaBookOpen size={20} className="text-[#E8EDE0]" />
            </div>
            <p className="text-xl font-bold">StudyNook</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/rooms">Rooms</Link>
          </li>
          {!user && (
            <>
              <li>
                <Link href="/signin">Add Rooms</Link>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <Link href="/add-room">Add Rooms</Link>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <Link href="/my-bookings">My Bookings</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
            </>
          )}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {!user && (
            <ul className="hidden md:flex items-center gap-4 text-sm">
              <li>
                <Link href="/signup">SignUp</Link>
              </li>
              <li>
                <Link href="/signin">SignIn</Link>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          )}

          {user && (
            <div className="hidden md:flex items-center gap-2">
              <Dropdown>
                <Button aria-label="Menu" variant="secondary">
                  <Avatar>
                    <Avatar.Image
                      alt={user.name}
                      src={user.image}
                      // for google login to show the avatar
                      referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                  </Avatar>
                  <p>{user.name}</p>
                </Button>
                <Dropdown.Popover>
                  <Dropdown.Menu
                    onAction={(key) => console.log(`Selected: ${key}`)}
                  >
                    <Dropdown.Item
                      id="new-file"
                      textValue="New file"
                      className="flex flex-col"
                    >
                      <Label>{user.name}</Label>
                      <Label>{user.email}</Label>
                    </Dropdown.Item>
                    <Dropdown.Item id="copy-link" textValue="Copy link">
                      <Label>My Listings</Label>
                    </Dropdown.Item>
                    <Dropdown.Item id="edit-file" textValue="Edit file">
                      <Label>My Bookings</Label>
                    </Dropdown.Item>
                    <Dropdown.Item
                      id="delete-file"
                      textValue="Delete file"
                      variant="danger"
                    >
                      <IoIosLogOut className="text-danger size-5" />
                      <Button
                        variant="outline"
                        className="text-danger border-none rounded-md"
                        onClick={async () => {
                          await authClient.signOut();
                          window.location.href = "/";
                        }}
                      >
                        Sign Out
                      </Button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
              {/* <DropDownPage user={user} /> */}
              {/* <Avatar>
                <Avatar.Image
                  alt={user.name}
                  src={user.image}
                  // for google login to show the avatar
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
              </Avatar> */}
              {/* <p>{user.name}</p> */}
            </div>
          )}

          {/* Hamburger */}

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h3 className="font-bold">Menu</h3>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <div className="flex flex-col gap-4 p-4 text-sm">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/rooms" onClick={() => setIsOpen(false)}>
            Rooms
          </Link>
          <Link href="/add-room" onClick={() => setIsOpen(false)}>
            Add Room
          </Link>

          {user && (
            <>
              <Link href="/my-bookings" onClick={() => setIsOpen(false)}>
                My Booking
              </Link>
              <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
              <Link href="/profile" onClick={() => setIsOpen(false)}>
                Profile
              </Link>
            </>
          )}

          {!user && (
            <>
              <Link href="/signup" onClick={() => setIsOpen(false)}>
                SignUp
              </Link>
              <Link href="/signin" onClick={() => setIsOpen(false)}>
                SignIn
              </Link>
            </>
          )}

          {user && (
            <>
              <div className="flex items-center gap-2 mt-2">
                <Avatar>
                  <Avatar.Image
                    alt={user.name}
                    src={user.image}
                    // for google login to show the avatar
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                </Avatar>
                <p>{user.name}</p>
              </div>
             <div className="flex items-center gap-2 ">
               <IoIosLogOut className="text-danger size-5" />
              <Button
                variant="outline"
                className="text-danger border-none rounded-md"
                onClick={async () => {
                  await authClient.signOut();
                  window.location.href = "/";
                }}
              >
                Sign Out
              </Button>
             </div>
            </>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
