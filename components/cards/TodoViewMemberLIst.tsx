import { Task } from "@/types";
import React from "react";

interface Props {
  item: Task;
  openAddingMemberModal: (id: string) => void;
}

const TodoViewMemberLIst = ({ openAddingMemberModal, item }: Props) => {
  return (
    <div className="absolute top-full left-5 bg-black/70 max-w-[330px] text-white h-fit min-w-60  flex flex-col items-center justify-between rounded-sm -mt-2 dark:bg-white dark:text-black z-10">
      {item.users?.map((user) => {
        return (
          <div
            key={user.id}
            className="flex items-start gap-2 justify-between w-full hover:bg-black/10 p-2"
          >
            <div className="h-12 w-12 rounded-full bg-red"></div>
            <div className="flex-1">
              <h4 className="font-bold text-lg">{user.Username}</h4>
              <p className="truncate">{user.Email}</p>
            </div>
          </div>
        );
      })}
      {/* Adding new member button */}
      <button
        className="w-full mt-2 cursor-pointer py-2 dark:bg-zinc-300 bg-black/50 rounded-b-sm font-semibold"
        onClick={() => openAddingMemberModal(item.id)}
      >
        Add new member
      </button>
    </div>
  );
};

export default TodoViewMemberLIst;
