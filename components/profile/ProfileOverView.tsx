"use client";

import { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import { IoImageOutline } from "react-icons/io5";

const ProfileOverView = () => {
  const [newName, setNewName] = useState<string>("");
  const [editNameFlag, setEditNameFlag] = useState<boolean>(false);
  const [editImageFlag, setEditImageFlag] = useState<boolean>(false);

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3 w-full h-full ">
      {/* profile image and usernames */}
      <div className="flex flex-col items-center justify-center gap-4 py-6 border-b border-b-gray">
        <div
          onClick={() => setEditImageFlag(true)}
          className="w-40 h-40 rounded-full bg-yellow relative"
        >
          {editImageFlag && (
            <IoImageOutline size={24} className="absolute top-1/3 left-1/3 mt-4 ml-3 -translate-x-1/2 -translate-y-1/2" />
          )}
        </div>
        <div className="flex items-center gap-1">
          {editNameFlag ? (
            <input
              value={newName}
              onChange={(e) => setNewName(e.currentTarget.value)}
              type="text"
              className="bg-zinc-200 border-none p-1 rounded-sm focus:shadow-md focus:outline-none px-2"
            />
          ) : (
            <h3 className="text-2xl text-black font-bold dark:text-white">
              Mohammad hosein
            </h3>
          )}
          <button
            onClick={() => setEditNameFlag(!editNameFlag)}
            className="cursor-pointer"
          >
            <LuPencilLine size={20} />
          </button>
        </div>
      </div>
      {/* profile more detail */}
      <div className="px-4">
        <div className="flex items-center gap-3 py-4 border-b border-b-gray">
          <p className="font-medium">Email:</p>
          <p>mohammadalirezaie081@gmail.com</p>
        </div>
        <div className="flex items-center gap-3 border-b border-b-gray py-4">
          <p className="font-medium">Username:</p>
          <p>Mhorg2</p>
        </div>
        <div className="flex flex-col items-start gap-3 ">
          <p className="pt-4 font-medium ">Cards:</p>
          <ul className="grid grid-cols-2 w-full gap-2">
            <li className="profile-card-item">Go gym</li>
            <li className="profile-card-item">Go gym</li>
            <li className="profile-card-item">Go gym</li>
            <li className="profile-card-item">Go gym</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverView;
