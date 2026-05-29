// import Image from "next/image";
// import Link from "next/link";
// import { Button, Table } from "@heroui/react";

// import DeleteMyListing from "./DeleteMyListing";

// // import EditModalPage from "./EditModalPage";

// const MyListingsTable = ({ data }) => {
//   // console.log("TableData",data);
//   return (
//     <div>
//       <Table>
//         <Table.ScrollContainer>
//           <Table.Content aria-label="Booking table" className="min-w-150">
//             <Table.Header>
//               <Table.Column isRowHeader>Name</Table.Column>
//               <Table.Column>Room Image</Table.Column>
//               {/* <Table.Column>Booking Date</Table.Column>
//               <Table.Column>Start Time</Table.Column>
//               <Table.Column>End Time</Table.Column>
//               <Table.Column>Email</Table.Column> */}
//               <Table.Column>Actions</Table.Column>
//             </Table.Header>

//             <Table.Body emptyContent="No bookings found">
//               {data.map((room) => {
//                 const {
//                   _id,
//                   userId,
//                   name,
//                   image,
//                   //   date,
//                   //   startTime,
//                   //   endTime,
//                   //   userEmail,
//                 } = room;

//                 return (
//                   <Table.Row key={_id}>
//                     <Table.Cell>{name}</Table.Cell>

//                     <Table.Cell>
//                       {/* <Image
//                         src={image || "/placeholder.png"}
//                         alt={name || "Room"}
//                         width={100}
//                         height={100}
//                         className="rounded object-cover"
//                         priority
//                       /> */}
//                       <Image
//                         src={image || "/placeholder.png"}
//                         alt={name || "Room"}
//                         width={50}
//                         height={50}
//                         className="rounded object-cover w-full h-auto"
//                         priority
//                       />
//                     </Table.Cell>

//                     {/* <Table.Cell>{date}</Table.Cell>
//                     <Table.Cell>{startTime}</Table.Cell>
//                     <Table.Cell>{endTime}</Table.Cell>
//                     <Table.Cell>{userEmail}</Table.Cell> */}

//                     <Table.Cell>
//                       <div className="flex gap-3">
//                         <Link href={`/rooms/${_id}`}>
//                           <Button variant="outline">Details</Button>
//                         </Link>

//                         {/* <EditModalPage user={user} /> */}

//                         <DeleteMyListing id={_id} />
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

// export default MyListingsTable;
import Image from "next/image";
import Link from "next/link";
import { Button, Table } from "@heroui/react";

import DeleteMyListing from "./DeleteMyListing";

const MyListingsTable = ({ data = [] }) => {
  return (
    <div className="w-full">

      {/* ================= MOBILE CARD VIEW ================= */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {data.map((room) => {
          const { _id, name, image } = room;

          return (
            <div
              key={_id}
              className="bg-white shadow-md rounded-2xl p-4 space-y-3 border border-neutral-200"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <Image
                  src={image || "/placeholder.png"}
                  alt={name || "Room"}
                  width={56}
                  height={56}
                  className="rounded object-cover w-14 h-14"
                  priority
                />

                <div>
                  <h3 className="font-bold text-base">{name}</h3>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Link href={`/rooms/${_id}`} className="flex-1">
                  <Button variant="outline" className="w-full">
                    Details
                  </Button>
                </Link>

                <DeleteMyListing id={_id} />
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
              className="min-w-[700px] lg:min-w-[900px]"
            >
              <Table.Header>
                <Table.Column isRowHeader>Name</Table.Column>
                <Table.Column>Room Image</Table.Column>
                <Table.Column>Actions</Table.Column>
              </Table.Header>

              <Table.Body emptyContent="No bookings found">
                {data.map((room) => {
                  const { _id, name, image } = room;

                  return (
                    <Table.Row key={_id}>
                      <Table.Cell className="whitespace-nowrap">
                        {name}
                      </Table.Cell>

                      <Table.Cell>
                        <Image
                          src={image || "/placeholder.png"}
                          alt={name || "Room"}
                          width={60}
                          height={60}
                          className="rounded object-cover w-14 h-14"
                          priority
                        />
                      </Table.Cell>

                      <Table.Cell>
                        <div className="flex gap-3">
                          <Link href={`/rooms/${_id}`}>
                            <Button variant="outline">
                              Details
                            </Button>
                          </Link>

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

    </div>
  );
};

export default MyListingsTable;