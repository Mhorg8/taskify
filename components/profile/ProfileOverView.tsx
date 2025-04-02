"use client";

import { useState } from "react";
import { LuPencilLine } from "react-icons/lu";

const ProfileOverView = () => {
  const [newName, setNewName] = useState<string>("");
  const [editNameFlag, setEditNameFlag] = useState<boolean>(false);
  const [editImageFlag, setEditImageFlag] = useState<boolean>(false);

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3 w-full h-full ">
      <div className="flex flex-col items-center justify-center gap-4 py-6 border-b border-b-gray">
        <div className="w-40 h-40 rounded-full bg-yellow"></div>
        <div className="flex items-center gap-1">
          {editNameFlag ? (
            <input
              value={newName}
              onChange={(e) => setNewName(e.currentTarget.value)}
              type="text"
              className="bg-zinc-200 border-none p-1 rounded-sm focus:shadow-md focus:outline-none px-2"
            />
          ) : (
            <h3 className="text-2xl text-black font-bold">Mohammad hosein</h3>
          )}
          <button
            onClick={() => setEditNameFlag(!editNameFlag)}
            className="cursor-pointer"
          >
            <LuPencilLine size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverView;
