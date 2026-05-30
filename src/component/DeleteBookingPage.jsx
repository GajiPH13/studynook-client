
"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const DeleteModalPage = ({ id }) => {
  // console.log(id);
  const router = useRouter();

  const handelDelete = async () => {
    const {data:tokenData} = await authClient.token()
    console.log(tokenData);
    try {
      const res = await fetch(`http://localhost:7000/bookings/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
      });

      const result = await res.json();

      // console.log(result);

      if (result.deletedCount > 0) {
        router.push("/my-bookings");
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
                  Delete Booking permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Body>
                <p>
                  This will permanently delete <strong>Booking</strong>
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
                  Delete Booking
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteModalPage;
