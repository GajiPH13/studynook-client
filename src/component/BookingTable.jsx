
import Image from "next/image";
import Link from "next/link";
import {AlertDialog, Button, Table} from "@heroui/react";
import DeleteModalPage from "./DeleteModalPage";

const BookingTable = async ({ data }) => {
  


  return (
    <div>
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column isRowHeader>Room Image</Table.Column>
              <Table.Column>Booking Date</Table.Column>
              {/* <Table.Column>Booking Date</Table.Column> */}
              <Table.Column>Start Time</Table.Column>
              <Table.Column>End Time</Table.Column>

              <Table.Column>Email</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>
            <Table.Body>
              {data.map((user) => (
                // console.log(user),
                // console.log(user._id),
                <Table.Row key={user._id}>
                  <Table.Cell>{user.roomName}</Table.Cell>
                  <Table.Cell>
                    <Image
                      src={user.roomImage}
                      alt="Room"
                      width={100}
                      height={100}
                      className="rounded object-cover"
                    />
                  </Table.Cell>
                  <Table.Cell>{user.date}</Table.Cell>
                  <Table.Cell>{user.startTime}</Table.Cell>
                  <Table.Cell>{user.endTime}</Table.Cell>

                  <Table.Cell>{user.userEmail}</Table.Cell>
                  <Table.Cell>
                    <Link href={`/rooms/${user.roomId}`}>
                      <Button variant="outline">Details</Button>
                    </Link>
                    <Link href={``}>
                      <Button
                        variant="outline"
                        style={{ marginLeft: "10px", marginRight: "10px" }}
                      >
                        Edit
                      </Button>
                    </Link>
                    {/* Delete Alart */}
                    <DeleteModalPage  id={user._id}/>
                    {/* <Button  variant="danger">Delete</Button> */}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default BookingTable;
