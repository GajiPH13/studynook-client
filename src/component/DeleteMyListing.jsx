
"use client";

// import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const DeleteMyListing = ({ id }) => {
  //  console.log("ID As Props",id);
//   const _id = id;
//   const userData = authClient.useSession();
    // const user = userData.data?.user;
    // console.log("Current User",user);
  const router = useRouter();

  const handelDelete = async () => {
    try {
      const res = await fetch(`http://localhost:7000/rooms/${id}`, {
        
        method: "DELETE",
      });
      // console.log("DELETED_id",res);

      const result = await res.json();

      // console.log("DELETED",result);

      if (result.deletedCount > 0) {
        router.push("/my-listings");
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
                  Delete Listing permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Body>
                <p>
                  This will permanently delete <strong>Listing</strong>
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
                  Delete Listing
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteMyListing;
