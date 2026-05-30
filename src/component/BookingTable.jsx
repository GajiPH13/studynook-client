// import Image from "next/image";
// import Link from "next/link";
// import { Button, Table } from "@heroui/react";

// import DeleteModalPage from "./DeleteModalPage";
// import EditModalPage from "./EditModalPage";

// const BookingTable = ({ data = [] }) => {
//   return (
//     <div>
//       <Table>
//         <Table.ScrollContainer>
//           <Table.Content aria-label="Booking table" className="min-w-150">
//             <Table.Header>
//               <Table.Column isRowHeader>Name</Table.Column>
//               <Table.Column>Room Image</Table.Column>
//               <Table.Column>Booking Date</Table.Column>
//               <Table.Column>Start Time</Table.Column>
//               <Table.Column>End Time</Table.Column>
//               <Table.Column>Email</Table.Column>
//               <Table.Column>Actions</Table.Column>
//             </Table.Header>

//             <Table.Body emptyContent="No bookings found">
//               {data.map((user) => {
//                 const {
//                   _id,
//                   roomId,
//                   roomName,
//                   roomImage,
//                   date,
//                   startTime,
//                   endTime,
//                   userEmail,
//                 } = user;

//                 return (
//                   <Table.Row key={_id}>
//                     <Table.Cell>{roomName}</Table.Cell>

//                     <Table.Cell>
//                       {/* <Image
//                         src={roomImage || "/placeholder.png"}
//                         alt={roomName || "Room"}
//                         width={100}
//                         height={100}
//                         className="rounded object-cover"
//                         priority
//                       /> */}
//                       <Image
//                         src={roomImage || "/placeholder.png"}
//                         alt={roomName || "Room"}
//                         width={50}
//                         height={50}
//                         className="rounded object-cover w-full h-auto"
//                         priority
//                       />
//                     </Table.Cell>

//                     <Table.Cell>{date}</Table.Cell>
//                     <Table.Cell>{startTime}</Table.Cell>
//                     <Table.Cell>{endTime}</Table.Cell>
//                     <Table.Cell>{userEmail}</Table.Cell>

//                     <Table.Cell>
//                       <div className="flex gap-3">
//                         <Link href={`/rooms/${roomId}`}>
//                           <Button variant="outline">Details</Button>
//                         </Link>

//                         <EditModalPage user={user} />

//                         <DeleteModalPage id={_id} />
//                       </div>
//                     </Table.Cell>
//                   </Table.Row>
//                 );
//               })}
//             </Table.Body>
//           </Table.Content>
//         </Table.ScrollContainer>
//       </Table>
//     </div>
    
//   );
// };

// export default BookingTable;
import Image from "next/image";
import Link from "next/link";
import { Button, Table } from "@heroui/react";

import DeleteModalPage from "./DeleteBookingPage";
import EditModalPage from "./EditModalPage";

const BookingTable = ({ data = [] }) => {
  return (
    <div className="w-full">

      {/* ================= MOBILE CARD VIEW ================= */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
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
            <div
              key={_id}
              className="bg-white shadow-md rounded-2xl p-4 space-y-3 border border-neutral-200"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <Image
                  src={roomImage || "/placeholder.png"}
                  alt={roomName || "Room"}
                  width={56}
                  height={56}
                  className="rounded object-cover w-14 h-14"
                  priority
                />

                <div>
                  <h3 className="font-bold text-base">{roomName}</h3>
                  <p className="text-xs text-neutral-500">{userEmail}</p>
                </div>
              </div>

              {/* Info */}
              <div className="text-sm text-neutral-700 space-y-1">
                <p><span className="font-semibold">Date:</span> {date}</p>
                <p><span className="font-semibold">Start:</span> {startTime}</p>
                <p><span className="font-semibold">End:</span> {endTime}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Link href={`/rooms/${roomId}`} className="flex-1">
                  <Button variant="outline" className="w-full">
                    Details
                  </Button>
                </Link>

                <EditModalPage user={user} />
                <DeleteModalPage id={_id} />
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= DESKTOP TABLE VIEW ================= */}
      <div className="hidden md:block overflow-x-auto">
        <Table>
          <Table.ScrollContainer className="w-full">
            <Table.Content
              aria-label="Booking table"
              className="min-w-[900px] lg:min-w-[1100px]"
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

              <Table.Body emptyContent="No bookings found">
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
                      <Table.Cell className="whitespace-nowrap">
                        {roomName}
                      </Table.Cell>

                      <Table.Cell>
                        <Image
                          src={roomImage || "/placeholder.png"}
                          alt={roomName || "Room"}
                          width={60}
                          height={60}
                          className="rounded object-cover w-14 h-14"
                          priority
                        />
                      </Table.Cell>

                      <Table.Cell className="whitespace-nowrap">
                        {date}
                      </Table.Cell>

                      <Table.Cell className="whitespace-nowrap">
                        {startTime}
                      </Table.Cell>

                      <Table.Cell className="whitespace-nowrap">
                        {endTime}
                      </Table.Cell>

                      <Table.Cell className="whitespace-nowrap">
                        {userEmail}
                      </Table.Cell>

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

    </div>
  );
};

export default BookingTable;