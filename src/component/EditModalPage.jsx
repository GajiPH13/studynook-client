// "use client";

// import {
//   Calendar,
//   DateField,
//   DatePicker,
//   Description,
//   Label,
//   TimeField,
// } from "@heroui/react";
// import { Button, Modal, Surface, TextArea } from "@heroui/react";
// import { Time, parseDate } from "@internationalized/date";

// const EditModalPage = ({ user }) => {
//   console.log(user);

//   const res = fetch(`http://localhost:7000/bookings/${user._id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   });

//   // Destructure properties safely
//   const { roomName, roomPrice, date: bookingDate, startTime, endTime, note } = user ;

//   // Helper safely parsing dates (Expected format: "YYYY-MM-DD")
//   const getDefaultDate = (dateStr) => {
//     try {
//       return dateStr ? parseDate(dateStr) : undefined;
//     } catch (e) {
//       console.error("Invalid date format. Expected YYYY-MM-DD.", e);
//       return undefined;
//     }
//   };

//   // Helper safely parsing time strings (Expected format: "HH:MM" or "HH:MM:SS")
//   const getDefaultTime = (timeStr) => {
//     if (!timeStr) return undefined;
//     const parts = timeStr.split(":");
//     const hours = parseInt(parts[0], 10) || 0;
//     const minutes = parseInt(parts[1], 10) || 0;
//     return new Time(hours, minutes);
//   };

//   return (
//     <div>
//       <Modal>
//         <Button variant="outline" className="font-medium">
//           Edit
//         </Button>
//         <Modal.Backdrop>
//           <Modal.Container placement="auto">
//             <Modal.Dialog className="sm:max-w-md overflow-hidden rounded-xl border border-neutral-200 shadow-xl">
//               <Modal.CloseTrigger />

//               <Modal.Header className="pb-4 pt-6 px-6 border-b border-neutral-100">
//                 <div className="space-y-1">
//                   <h2 className="text-xl font-bold text-neutral-900 tracking-tight">
//                     Edit Room Booking
//                   </h2>
//                   <p className="text-sm font-medium text-[#4F5A2A]">
//                     {roomName}
//                   </p>
//                   <p className="text-xs text-neutral-500">
//                     Fill out the form below to update your booking parameters.
//                   </p>
//                 </div>
//               </Modal.Header>

//               <Modal.Body className="p-6">
//                 <Surface variant="default" className="bg-transparent border-0 p-0 shadow-none">
//                   <form onSubmit={(e) => e.preventDefault()} className="space-y-5">

//                     {/* Date Picker Section */}
//                     <div className="w-full">
//                       <DatePicker
//                         className="w-full"
//                         name="date"
//                         defaultValue={getDefaultDate(bookingDate)}
//                       >
//                         <Label className="text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5 block">
//                           Date
//                         </Label>
//                         <DateField.Group fullWidth className="bg-white border border-neutral-300 rounded-lg shadow-sm focus-within:border-[#4F5A2A] transition-colors">
//                           <DateField.Input className="px-3 py-2 text-sm text-neutral-800">
//                             {(segment) => <DateField.Segment segment={segment} />}
//                           </DateField.Input>
//                           <DateField.Suffix className="pr-2">
//                             <DatePicker.Trigger>
//                               <DatePicker.TriggerIndicator className="text-neutral-500 hover:text-neutral-800" />
//                             </DatePicker.Trigger>
//                           </DateField.Suffix>
//                         </DateField.Group>
//                         <DatePicker.Popover>
//                           <Calendar aria-label="Event date" className="p-3 bg-white rounded-xl shadow-lg border border-neutral-200">
//                             <Calendar.Header className="flex items-center justify-between pb-2">
//                               <Calendar.YearPickerTrigger className="flex items-center gap-1 text-sm font-semibold text-neutral-700">
//                                 <Calendar.YearPickerTriggerHeading />
//                                 <Calendar.YearPickerTriggerIndicator />
//                               </Calendar.YearPickerTrigger>
//                               <div className="flex gap-1">
//                                 <Calendar.NavButton slot="previous" className="p-1 rounded hover:bg-neutral-100" />
//                                 <Calendar.NavButton slot="next" className="p-1 rounded hover:bg-neutral-100" />
//                               </div>
//                             </Calendar.Header>
//                             <Calendar.Grid className="w-full text-sm">
//                               <Calendar.GridHeader className="text-neutral-400 font-medium">
//                                 {(day) => (
//                                   <Calendar.HeaderCell className="w-8 h-8 text-center text-xs">
//                                     {day}
//                                   </Calendar.HeaderCell>
//                                 )}
//                               </Calendar.GridHeader>
//                               <Calendar.GridBody>
//                                 {(date) => <Calendar.Cell date={date} className="w-8 h-8 text-center rounded-md hover:bg-neutral-100" />}
//                               </Calendar.GridBody>
//                             </Calendar.Grid>
//                           </Calendar>
//                         </DatePicker.Popover>
//                       </DatePicker>
//                     </div>

//                     {/* Time Fields Grid Layout */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       {/* Start Time Field */}
//                       <div className="w-full">
//                         <TimeField
//                           className="w-full"
//                           name="time"
//                           defaultValue={getDefaultTime(startTime)}
//                         >
//                           <Label className="text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5 block">
//                             Start time
//                           </Label>
//                           <TimeField.Group className="bg-white border border-neutral-300 rounded-lg shadow-sm focus-within:border-[#4F5A2A] transition-colors px-3 py-2">
//                             <TimeField.Input className="text-sm text-neutral-800">
//                               {(segment) => <TimeField.Segment segment={segment} />}
//                             </TimeField.Input>
//                           </TimeField.Group>
//                           <Description className="text-xs text-neutral-400 mt-1 block">
//                             Enter the start time
//                           </Description>
//                         </TimeField>
//                       </div>

//                       {/* End Time Field */}
//                       <div className="w-full">
//                         <TimeField
//                           className="w-full"
//                           name="end-time"
//                           defaultValue={getDefaultTime(endTime)}
//                         >
//                           <Label className="text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5 block">
//                             End time
//                           </Label>
//                           <TimeField.Group className="bg-white border border-neutral-300 rounded-lg shadow-sm focus-within:border-[#4F5A2A] transition-colors px-3 py-2">
//                             <TimeField.Input className="text-sm text-neutral-800">
//                               {(segment) => <TimeField.Segment segment={segment} />}
//                             </TimeField.Input>
//                           </TimeField.Group>
//                           <Description className="text-xs text-neutral-400 mt-1 block">
//                             Enter the end time
//                           </Description>
//                         </TimeField>
//                       </div>
//                     </div>

//                     {/* Note / Textarea Field */}
//                     <div className="w-full">
//                       <TextArea
//                         className="w-full rounded-lg text-sm"
//                         name="note"
//                         label="Special note"
//                         placeholder="Any setup needed? (e.g. Projector, Whiteboard)"
//                         rows={3}
//                         defaultValue={note || ""}
//                       />
//                     </div>

//                     {/* Total Cost Presentation Container */}
//                     <div className="flex justify-between items-center p-4 bg-neutral-50 rounded-xl border border-neutral-100 mt-2 shadow-sm">
//                       <span className="font-medium text-sm text-neutral-600">Total room cost</span>
//                       <span className="text-2xl font-black text-neutral-900 tracking-tight">
//                         ${roomPrice || "0.00"}
//                       </span>
//                     </div>

//                     {/* Submit Button */}
//                     <Button
//                       type="submit"
//                       className="w-full bg-[#4F5A2A] hover:bg-opacity-90 active:scale-[0.99] text-white py-3 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
//                     >
//                       Update Booking
//                     </Button>
//                   </form>
//                 </Surface>
//               </Modal.Body>
//             </Modal.Dialog>
//           </Modal.Container>
//         </Modal.Backdrop>
//       </Modal>
//     </div>
//   );
// };

// export default EditModalPage;
"use client";

import { useState } from "react";

import {
  Calendar,
  DateField,
  DatePicker,
  Description,
  Label,
  TimeField,
} from "@heroui/react";

import { Button, Modal, Surface, TextArea } from "@heroui/react";

import { Time, parseDate } from "@internationalized/date";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const EditModalPage = ({ user }) => {
  // ---------------------------
  // Helpers
  // ---------------------------
const router = useRouter();
  const getDefaultDate = (dateStr) => {
    try {
      return dateStr ? parseDate(dateStr) : undefined;
    } catch (e) {
      console.error("Invalid date format:", e);
      return undefined;
    }
  };

  const getDefaultTime = (timeStr) => {
    if (!timeStr) return undefined;

    const parts = timeStr.split(":");

    const hours = parseInt(parts[0], 10) || 0;
    const minutes = parseInt(parts[1], 10) || 0;

    return new Time(hours, minutes);
  };

  // Convert Time object -> total minutes
  const timeToMinutes = (timeObj) => {
    if (!timeObj) return 0;
    return timeObj.hour * 60 + timeObj.minute;
  };

  // ---------------------------
  // Initial values
  // ---------------------------

  const {
    _id,
    roomName,
    roomPrice,
    date: bookingDate,
    startTime,
    endTime,
    note,
  } = user;

  // ---------------------------
  // State
  // ---------------------------

  const [selectedDate, setSelectedDate] = useState(getDefaultDate(bookingDate));

  const [start, setStart] = useState(getDefaultTime(startTime));

  const [end, setEnd] = useState(getDefaultTime(endTime));

  const [specialNote, setSpecialNote] = useState(note || "");

  const [loading, setLoading] = useState(false);

  // ---------------------------
  // Cost Calculation
  // roomPrice = hourly rate
  // ---------------------------

  const startMinutes = timeToMinutes(start);
  const endMinutes = timeToMinutes(end);

  const durationInHours =
    endMinutes > startMinutes ? (endMinutes - startMinutes) / 60 : 0;

  const totalCost = (durationInHours * Number(roomPrice || 0)).toFixed(2);

  // ---------------------------
  // Submit Handler
  // ---------------------------

  const handleUpdateBooking = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const updatedBooking = {
        roomName,
        roomPrice,
        date: selectedDate?.toString(),
        startTime: `${String(start.hour).padStart(2, "0")}:${String(
          start.minute,
        ).padStart(2, "0")}`,
        endTime: `${String(end.hour).padStart(2, "0")}:${String(
          end.minute,
        ).padStart(2, "0")}`,
        note: specialNote,
        totalCost,
      };

      const { data: tokenData } = await authClient.token();
      console.log(tokenData);
      const res = await fetch(`http://localhost:7000/bookings/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(updatedBooking),
      });

      const data = await res.json();
      
      if (res.ok) {
        toast.success("Booking updated successfully!");
        router.push("/my-bookings");
        router.refresh();
        // console.log(data);
      } else {
        alert(data.message || "Failed to update booking");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Modal>
        <Button variant="outline" className="font-medium">
          Edit
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md overflow-hidden rounded-xl border border-neutral-200 shadow-xl">
              <Modal.CloseTrigger />

              {/* Header */}
              <Modal.Header className="pb-4 pt-6 px-6 border-b border-neutral-100">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-neutral-900 tracking-tight">
                    Edit Room Booking
                  </h2>

                  <p className="text-sm font-medium text-[#4F5A2A]">
                    {roomName}
                  </p>

                  <p className="text-xs text-neutral-500">
                    Update your booking details.
                  </p>
                </div>
              </Modal.Header>

              {/* Body */}
              <Modal.Body className="p-6">
                <Surface
                  variant="default"
                  className="bg-transparent border-0 p-0 shadow-none"
                >
                  <form onSubmit={handleUpdateBooking} className="space-y-5">
                    {/* Date Picker */}
                    <div className="w-full">
                      <DatePicker
                        className="w-full"
                        value={selectedDate}
                        onChange={setSelectedDate}
                      >
                        <Label className="text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5 block">
                          Date
                        </Label>

                        <DateField.Group
                          fullWidth
                          className="bg-white border border-neutral-300 rounded-lg shadow-sm"
                        >
                          <DateField.Input className="px-3 py-2 text-sm text-neutral-800">
                            {(segment) => (
                              <DateField.Segment segment={segment} />
                            )}
                          </DateField.Input>

                          <DateField.Suffix className="pr-2">
                            <DatePicker.Trigger>
                              <DatePicker.TriggerIndicator />
                            </DatePicker.Trigger>
                          </DateField.Suffix>
                        </DateField.Group>

                        <DatePicker.Popover>
                          <Calendar className="p-3 bg-white rounded-xl shadow-lg border border-neutral-200">
                            <Calendar.Header className="flex items-center justify-between pb-2">
                              <Calendar.YearPickerTrigger className="flex items-center gap-1 text-sm font-semibold text-neutral-700">
                                <Calendar.YearPickerTriggerHeading />
                                <Calendar.YearPickerTriggerIndicator />
                              </Calendar.YearPickerTrigger>

                              <div className="flex gap-1">
                                <Calendar.NavButton slot="previous" />
                                <Calendar.NavButton slot="next" />
                              </div>
                            </Calendar.Header>

                            <Calendar.Grid className="w-full text-sm">
                              <Calendar.GridHeader>
                                {(day) => (
                                  <Calendar.HeaderCell className="w-8 h-8 text-center text-xs">
                                    {day}
                                  </Calendar.HeaderCell>
                                )}
                              </Calendar.GridHeader>

                              <Calendar.GridBody>
                                {(date) => (
                                  <Calendar.Cell
                                    date={date}
                                    className="w-8 h-8 text-center rounded-md hover:bg-neutral-100"
                                  />
                                )}
                              </Calendar.GridBody>
                            </Calendar.Grid>
                          </Calendar>
                        </DatePicker.Popover>
                      </DatePicker>
                    </div>

                    {/* Time Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Start Time */}
                      <div className="w-full">
                        <TimeField
                          className="w-full"
                          value={start}
                          onChange={setStart}
                        >
                          <Label className="text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5 block">
                            Start time
                          </Label>

                          <TimeField.Group className="bg-white border border-neutral-300 rounded-lg shadow-sm px-3 py-2">
                            <TimeField.Input className="text-sm text-neutral-800">
                              {(segment) => (
                                <TimeField.Segment segment={segment} />
                              )}
                            </TimeField.Input>
                          </TimeField.Group>

                          <Description className="text-xs text-neutral-400 mt-1 block">
                            Enter start time
                          </Description>
                        </TimeField>
                      </div>

                      {/* End Time */}
                      <div className="w-full">
                        <TimeField
                          className="w-full"
                          value={end}
                          onChange={setEnd}
                        >
                          <Label className="text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5 block">
                            End time
                          </Label>

                          <TimeField.Group className="bg-white border border-neutral-300 rounded-lg shadow-sm px-3 py-2">
                            <TimeField.Input className="text-sm text-neutral-800">
                              {(segment) => (
                                <TimeField.Segment segment={segment} />
                              )}
                            </TimeField.Input>
                          </TimeField.Group>

                          <Description className="text-xs text-neutral-400 mt-1 block">
                            Enter end time
                          </Description>
                        </TimeField>
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="w-full">
                      <TextArea
                        className="w-full rounded-lg text-sm"
                        label="Special note"
                        placeholder="Any setup needed?"
                        rows={3}
                        value={specialNote}
                        onChange={(e) => setSpecialNote(e.target.value)}
                      />
                    </div>

                    {/* Booking Summary */}
                    <div className="space-y-3 p-4 bg-neutral-50 rounded-xl border border-neutral-100 shadow-sm">
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-600">Hourly Rate</span>

                        <span className="font-semibold">${roomPrice}</span>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-600">Duration</span>

                        <span className="font-semibold">
                          {durationInHours} hour(s)
                        </span>
                      </div>

                      <div className="border-t pt-3 flex justify-between items-center">
                        <span className="font-medium text-sm text-neutral-600">
                          Total Cost
                        </span>

                        <span className="text-2xl font-black text-neutral-900 tracking-tight">
                          ${totalCost}
                        </span>
                      </div>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#4F5A2A] text-white py-3 font-semibold rounded-lg shadow-md"
                    >
                      {loading ? "Updating..." : "Update Booking"}
                    </Button>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditModalPage;
