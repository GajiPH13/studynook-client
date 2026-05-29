import Image from "next/image";
import Link from "next/link";
import { Button, Table } from "@heroui/react";

import DeleteModalPage from "./DeleteModalPage";
import EditModalPage from "./EditModalPage";

const BookingTable = ({ data = [] }) => {
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
              <Table.Column>Booking Date</Table.Column>
              <Table.Column>Start Time</Table.Column>
              <Table.Column>End Time</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>

            <Table.Body
              emptyContent="No bookings found"
            >
              {data.map((user) => {
                const {
                  _id,
                  roomId,
                  roomName,
                  roomImage,
                  date,
                  startTime,
                  endTime,
                  userEmail,
                } = user;

                return (
                  <Table.Row key={_id}>
                    <Table.Cell>{roomName}</Table.Cell>

                    <Table.Cell>
                      <Image
                        src={roomImage || "/placeholder.png"}
                        alt={roomName || "Room"}
                        width={100}
                        height={100}
                        className="rounded object-cover"
                        priority
                      />
                    </Table.Cell>

                    <Table.Cell>{date}</Table.Cell>
                    <Table.Cell>{startTime}</Table.Cell>
                    <Table.Cell>{endTime}</Table.Cell>
                    <Table.Cell>{userEmail}</Table.Cell>

                    <Table.Cell>
                      <div className="flex gap-3">
                        <Link href={`/rooms/${roomId}`}>
                          <Button variant="outline">
                            Details
                          </Button>
                        </Link>

                        <EditModalPage user={user} />

                        <DeleteModalPage id={_id} />
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

export default BookingTable;