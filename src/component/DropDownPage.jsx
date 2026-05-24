"use client";

import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import { IoIosLogOut } from "react-icons/io";

export function DropDownPage({ user }) {
  // console.log(user);
  return (
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
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
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
            <Label
              onClick={async () => {
                await authClient.signOut();
                window.location.href = "/";
              }}
            >
              Sign Out
            </Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
