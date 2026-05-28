"use client";
// export const metadata = {
//   title: "StudyNook-Add Room",
//   description: "A Library Room Booking System for Students",
// };
import Amenities from "@/component/Amenities";
import { authClient } from "@/lib/auth-client";

import {
  Description,
  Surface,
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
  Card,
} from "@heroui/react";
import { ToastContainer, toast } from "react-toastify";

const AddRoomPage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  // console.log(user);
  // const { id } = user;
  // console.log(user);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const room = Object.fromEntries(formData);
    const amenities = formData.getAll("amenities");

    const myBookings = {
      ...room,
      userId: user?.id,
      amenities,
      capacity: room.capacity ? Number(room.capacity) : 0,
      price: room.price ? Number(room.price) : 0,
    };
    // room.amenities = amenities;
    // room.capacity = room.capacity ? Number(room.capacity) : 0;
    // room.price = room.price ? Number(room.price) : 0;
    const { data: tokenData } = await authClient.token();
    console.log(tokenData);
    try {
      const res = await fetch("http://localhost:7000/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(myBookings),
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "Request failed");
      }

      const data = await res.json();
      toast.success("Room added successfully!");
      console.log("Room added:", data);
      e.target.reset();
    } catch (error) {
      console.error("Add room failed:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-15 ">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-[#4F5A2A] ">Add a New Room</h1>
        <p>
          Share your study space with the world. You can always change it later.
        </p>
      </div>

      <form onSubmit={onSubmit}>
        <div className="  shadow-md ">
          <Surface className="flex w-full min-w-85 flex-col gap-4 rounded-3xl p-6">
            <TextField name="name" variant="secondary">
              <Label>Room name</Label>
              <Input className="w-full" />
            </TextField>
            <TextField name="description" variant="secondary">
              <Label>Description</Label>
              <TextArea className="w-full" rows={4} />
            </TextField>
            <TextField name="image" type="url" variant="secondary">
              <Label>Image URL</Label>
              <Input className="w-full" placeholder="https://..." />
            </TextField>
            <div className="flex gap-4">
              <TextField name="floor" type="text" variant="secondary">
                <Label>Floor</Label>
                <Input className="w-50" placeholder="e.g 3rd Floor" />
              </TextField>
              <TextField name="capacity" type="number" variant="secondary">
                <Label htmlFor="input-type-number">Capacity</Label>
                <Input
                  id="input-type-number"
                  min={0}
                  placeholder="1"
                  type="number"
                />
              </TextField>
              <TextField name="price" type="number" variant="secondary">
                <Label>Hourly Rate ($)</Label>
                <Input className="w-50" placeholder="e.g 3rd Floor" />
              </TextField>
            </div>
            <div>
              <Label>Amenities</Label>
              <Amenities />
              <div></div>
            </div>
            <Button type="submit" className={"bg-[#5F6F3E]"}>
              Add Room
            </Button>
          </Surface>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddRoomPage;
