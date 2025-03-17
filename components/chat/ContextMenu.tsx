import React from "react";
import { LuClipboardCopy, LuTrash } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";

const ContextMenu = () => {
  return (
    <div className="bg-stone-200 dark:bg-zinc-500/80  rounded-sm absolute top-0 left-full ml-2 z-50">
      <div className="flex px-3 py-1 hover:rounded-t-sm items-center gap-2 justify-between border-b border-b-gray-700 hover:bg-stone-300 hoverEffect">
        <span className="text-sm">Copy</span>
        <LuClipboardCopy size={18} />
      </div>
      <div className="flex px-3 py-1 items-center gap-2 justify-between border-b border-b-gray-700 hover:bg-stone-300 hoverEffect">
        <span className="text-sm">Edit</span>
        <FaRegEdit size={18} />
      </div>
      <div className="flex px-3 py-1 hover:rounded-b-sm   items-center gap-2 justify-between hover:bg-stone-300 hoverEffect">
        <span className="text-sm">Delete</span>
        <LuTrash size={18} />
      </div>
    </div>
  );
};

export default ContextMenu;
