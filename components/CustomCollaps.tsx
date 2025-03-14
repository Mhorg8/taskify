"use client";
import React, { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { Checkbox } from "./ui/checkbox";

const CustomCollaps = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="px-7 mt-5 text-black">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-lg font-medium">Totall task ( 5 )</p>
        <button className="px-3 py-1 hover:bg-stone-300 hoverEffect">New</button>
      </div>
      <div className="flex items-center justify-between w-full border border-zinc-600 p-2">
        <p className="text-lg ">Go gym with ali.</p>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <LuChevronUp /> : <LuChevronDown />}
        </button>
      </div>

      {isOpen && (
        <ul className="mt-3 space-y-2">
          <li className="flex items-center justify-between w-full border border-zinc-600 p-2 hover:bg-zinc-300 dark:hover:bg-white/80">
            <p className="text-lg ">Go gym with ali.</p>
            <Checkbox className="bg-white p-2" />
          </li>
        </ul>
      )}
    </div>
  );
};

export default CustomCollaps;
