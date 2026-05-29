import Image from "next/image";
import Link from "next/link";
import { Button, Table } from "@heroui/react";


import DeleteMyListing from "./DeleteMyListing";

// import EditModalPage from "./EditModalPage";

const MyListingsTable = ({ data  }) => {
    console.log("TableData",data);
  return (
    <div>
      <Table>
        <Table.ScrollContainer>
          <Table.Content
            aria-label="Booking table"
            className="min-w-150"
          >
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column>Room Image</Table.Column>
              {/* <Table.Column>Booking Date</Table.Column>
              <Table.Column>Start Time</Table.Column>
              <Table.Column>End Time</Table.Column>
              <Table.Column>Email</Table.Column> */}
              <Table.Column>Actions</Table.Column>
            </Table.Header>

            <Table.Body
              emptyContent="No bookings found"
            >
              {data.map((room) => {
                const {
                  _id,
                  userId,
                  name,
                  image,
                //   date,
                //   startTime,
                //   endTime,
                //   userEmail,
                } = room;

                return (
                  <Table.Row key={_id}>
                    <Table.Cell>{name}</Table.Cell>

                    <Table.Cell>
                      <Image
                        src={image || "/placeholder.png"}
                        alt={name || "Room"}
                        width={100}
                        height={100}
                        className="rounded object-cover"
                        priority
                      />
                    </Table.Cell>

                    {/* <Table.Cell>{date}</Table.Cell>
                    <Table.Cell>{startTime}</Table.Cell>
                    <Table.Cell>{endTime}</Table.Cell>
                    <Table.Cell>{userEmail}</Table.Cell> */}

                    <Table.Cell>
                      <div className="flex gap-3">
                        <Link href={`/rooms/${_id}`}>
                          <Button variant="outline">
                            Details
                          </Button>
                        </Link>
                        

                        {/* <EditModalPage user={user} /> */}

                        <DeleteMyListing id={_id} />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default MyListingsTable;