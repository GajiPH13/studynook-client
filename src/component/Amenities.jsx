import { Checkbox } from "@heroui/react";
import {Description, Input, Label, Surface, TextArea, TextField} from "@heroui/react";
const amenities = [
  "Whiteboard",
  "Projector",
  "Wi-Fi",
  "Power Outlets",
  "Quiet Zone",
  "Air Conditioning",
];

export default function Amenities() {
  return (
   
     <div className="flex flex-wrap gap-3">
      {amenities.map((item) => (
        <Checkbox
          key={item}
          name="amenities"
          value={item}
          classNames={{
            base: "m-0",
            wrapper: "hidden",
          }}
        >
          {({ isSelected }) => (
            <div
              className={`
                cursor-pointer select-none rounded-full border px-4 py-2 text-sm transition
                ${
                  isSelected 
                    ? "bg-black text-white border-black"
                    : "bg-[#ebebec] text-neutral-800 border-neutral-300 hover:bg-neutral-200"
                }
              `}
            >
              {item}
            </div>
          )}
        </Checkbox>
      ))}
    </div>
  );
}