"use client";

import { authClient } from "@/lib/auth-client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

import { BiEdit, BiUser } from "react-icons/bi";

export function UpdateUserForm() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    // console.log({name, image});
    // const { data, error } =  updateUser({name, image});
    await authClient.updateUser({ name, image });
  };
  return (
    // <Modal className="border-2 border-olive-200 flex items-center justify-center">
    //   <Button className={"border-2 border-olive-200 bg-[#5B6B2F] "}>
    //     <BiEdit /> Update Profile
    //   </Button>
    //   <Modal.Backdrop>
    //     <Modal.Container placement="auto">
    //       <Modal.Dialog className="sm:max-w-md">
    //         <Modal.CloseTrigger />
    //         <Modal.Header>
    //           <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
    //             <BiUser className="size-5" />
    //           </Modal.Icon>
    //           <Modal.Heading> Update Profile</Modal.Heading>
    //         </Modal.Header>
    //         <Modal.Body className="p-6">
    //           <Surface variant="default">
    //             <form onSubmit={onSubmit} className="flex flex-col gap-4">
    //               <TextField className="w-full" name="name" type="text">
    //                 <Label>Name</Label>
    //                 <Input placeholder="Enter your name" />
    //               </TextField>
    //               <TextField className="w-full" name="image" type="url">
    //                 <Label>Image URL</Label>
    //                 <Input placeholder="Image url" />
    //               </TextField>
    //               <Modal.Footer>
    //                 <Button slot="close" variant="secondary">
    //                   Cancel
    //                 </Button>
    //                 <Button type="submit" slot="close">
    //                   Save
    //                 </Button>
    //               </Modal.Footer>
    //             </form>
    //           </Surface>
    //         </Modal.Body>
    //       </Modal.Dialog>
    //     </Modal.Container>
    //   </Modal.Backdrop>
    // </Modal>
    <div className="flex w-full items-center justify-center p-4">
      <Modal>
        {/* Trigger Button - Centered and modernized */}
        <Modal.Trigger>
          <Button className="inline-flex items-center gap-2 rounded-xl bg-olive-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-olive-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-offset-2">
            <BiEdit className="size-4" />
            <span>Update Profile</span>
          </Button>
        </Modal.Trigger>

        <Modal.Backdrop className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity">
          <Modal.Container
            placement="center"
            className="flex min-h-screen items-center justify-center p-4"
          >
            {/* Main Dialog Panel */}
            <Modal.Dialog className="w-full max-w-md overflow-hidden rounded-2xl bg-olive-50 p-6 shadow-2xl">
              {/* Close Button Trigger */}
              <Modal.CloseTrigger className="absolute right-4 top-4 rounded-lg p-1.5 text-olive-600 hover:bg-olive-100 transition-colors" />

              {/* Header section */}
              <Modal.Header className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
                <Modal.Icon className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-olive-100 text-olive-800 shadow-sm">
                  <BiUser className="size-6" />
                </Modal.Icon>
                <div className="space-y-1">
                  <Modal.Heading className="text-xl font-semibold tracking-tight text-olive-900">
                    Update Profile
                  </Modal.Heading>
                  <p className="text-sm text-olive-600/80">
                    Update your personal information and profile picture.
                  </p>
                </div>
              </Modal.Header>

              {/* Form & Body */}
              <Modal.Body className="mt-6">
                <form onSubmit={onSubmit} className="space-y-5">
                  {/* Name Input Field */}
                  <TextField
                    className="flex flex-col gap-2"
                    name="name"
                    type="text"
                  >
                    <Label className="text-sm font-medium tracking-wide text-olive-800">
                      Full Name
                    </Label>
                    <Input className="w-full rounded-xl bg-white px-3.5 py-2.5 text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-olive-100" />
                  </TextField>

                  {/* Image URL Input Field */}
                  <TextField
                    className="flex flex-col gap-2"
                    name="image"
                    type="url"
                  >
                    <Label className="text-sm font-medium tracking-wide text-olive-800">
                      Image URL
                    </Label>
                    <Input className="w-full rounded-xl bg-white px-3.5 py-2.5 text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-olive-100" />
                  </TextField>

                  {/* Footer Action Buttons */}
                  <Modal.Footer className="mt-8 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                    {/* <Button 
                      slot="close" 
                      variant="ghost"
                      className="w-full rounded-xl bg-transparent px-4 py-2.5 text-sm font-medium text-olive-700 transition-colors hover:bg-olive-100/70 sm:w-auto"
                    >
                      Cancel
                    </Button> */}
                    <Button
                      type="submit"
                      slot="close"
                      className="w-full rounded-xl bg-olive-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-olive-800 sm:w-auto"
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </form>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
}
