import  { Button, Table } from "@heroui/react";
import Link from "next/link";

const BookingTable = async ({data}) => {
//     const { id } = await params;
//   const res = await fetch(`http://localhost:7000/rooms/${id}`);
//   const room = await res.json();
//     console.log(data);
//     console.log(room);
    return (
        <div>
            <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
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
                  <Table.Cell>{user.userName}</Table.Cell>
                  <Table.Cell>{user.date}</Table.Cell>
                  <Table.Cell>{user.startTime}</Table.Cell>
                  <Table.Cell>{user.endTime}</Table.Cell>
                  
                  <Table.Cell>{user.userEmail}</Table.Cell>
                  <Table.Cell>
                    <Link href={'/rooms'}>
                      <Button variant="outline" >Details</Button>
                    </Link>
                    <Link href={``}>
                      <Button variant="outline"
                       style={{ marginLeft: "10px" , marginRight: "10px"}}>Edit</Button>
                    </Link>
                   
                      <Button variant="danger">Delete</Button>
                    
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