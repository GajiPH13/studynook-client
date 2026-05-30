"use client";

import React, { useState } from "react";
import {
  Surface,
  Button,
  Input,
  Label,
  TextArea,
  TextField,
  Modal,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const EditRoom = ({ room }) => {
  // console.log(room);
  const [formData, setFormData] = useState({
    _id: room?._id || "",
    name: room?.name || "",
    description: room?.description || "",
    image: room?.image || "",
    floor: room?.floor || "",
    capacity: room?.capacity || "",
    price: room?.price || "",
    amenities: room?.amenities || [],
  });

  console.log("FORMDATA", formData._id);

  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  // const { data: tokenData } = await authClient.token();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { _id, ...roomData } = formData;

    try {
      const { data: tokenData } = await authClient.token();
      const res = await fetch(`http://localhost:7000/rooms/${formData._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(roomData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText);
      }

      const data = await res.json();

      console.log(data);
      alert("Room updated successfully");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <Modal>
      <Button>Edit</Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog>
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading variant="outline" className="bg-[#5B6B2F] text-white">Edit Room</Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <form onSubmit={handleSubmit}>
                <Surface className="flex w-full flex-col gap-4 p-6">
                  {/* Room Name */}
                  <TextField variant="secondary">
                    <Label>Room Name</Label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                  </TextField>

                  {/* Description */}
                  <TextField variant="secondary">
                    <Label>Description</Label>
                    <TextArea
                      rows={4}
                      value={formData.description}
                      onChange={(e) =>
                        handleChange("description", e.target.value)
                      }
                    />
                  </TextField>

                  {/* Image */}
                  <TextField variant="secondary">
                    <Label>Image URL</Label>
                    <Input
                      value={formData.image}
                      onChange={(e) => handleChange("image", e.target.value)}
                    />
                  </TextField>

                  {/* <div className="flex flex-col sm:flex-row gap-4">

                    <TextField className="w-full">
                      <Label>Floor</Label>
                      <Input
                        value={formData.floor}
                        onChange={(e) =>
                          handleChange("floor", e.target.value)
                        }
                      />
                    </TextField>

                    <TextField className="w-full">
                      <Label>Capacity</Label>
                      <Input
                        type="number"
                        value={formData.capacity}
                        onChange={(e) =>
                          handleChange(
                            "capacity",
                            Number(e.target.value)
                          )
                        }
                      />
                    </TextField>

                    <TextField className="w-full">
                      <Label>Hourly Rate ($)</Label>
                      <Input
                        type="number"
                        value={formData.price}
                        onChange={(e) =>
                          handleChange(
                            "price",
                            Number(e.target.value)
                          )
                        }
                      />
                    </TextField>

                  </div> */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <TextField className="w-full">
                      <Label>Floor</Label>
                      <Input
                        value={formData.floor}
                        onChange={(e) => handleChange("floor", e.target.value)}
                        placeholder="e.g. 3rd Floor"
                      />
                    </TextField>

                    <TextField className="w-full">
                      <Label>Capacity</Label>
                      <Input
                        type="number"
                        value={formData.capacity}
                        onChange={(e) =>
                          handleChange("capacity", Number(e.target.value))
                        }
                        placeholder="10"
                      />
                    </TextField>

                    <TextField className="w-full">
                      <Label>Hourly Rate ($)</Label>
                      <Input
                        type="number"
                        value={formData.price}
                        onChange={(e) =>
                          handleChange("price", Number(e.target.value))
                        }
                        placeholder="25"
                      />
                    </TextField>
                  </div>

                  {/* Amenities */}
                  <div>
                    <Label>Amenities</Label>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.amenities?.map((amenity) => (
                        <span key={amenity} className="badge badge-outline">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-[#5F6F3E]"
                  >
                    {loading ? "Updating..." : "Update Room"}
                  </Button>
                </Surface>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditRoom;
