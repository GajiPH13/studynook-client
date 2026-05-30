"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import  { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const DeleteRoom = ({ id }) => {
   console.log(id);
  const router = useRouter();

  const handelDelete = async () => {
    const {data:tokenData} = await authClient.token()
    console.log(tokenData);
    try {
      const res = await fetch(`http://localhost:7000/rooms/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
      });

      const result = await res.json();

      // console.log(result);

      if (result.deletedCount > 0) {
        toast.success("Room Deleted Successfully!");
        router.push("/rooms");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <AlertDialog>
        <Button variant="danger">Delete</Button>

        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />

              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />

                <AlertDialog.Heading>
                  Delete Room permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Body>
                <p>
                  This will permanently delete <strong>Room </strong>
                  and all of its data.
                </p>
              </AlertDialog.Body>

              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>

                <Button
                  onClick={handelDelete}
                  slot="close"
                  variant="danger"
                >
                  Delete Room
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteRoom;
