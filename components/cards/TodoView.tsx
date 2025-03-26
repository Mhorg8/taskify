"use client";
import React, { useState } from "react";
import {
  LuCheck,
  LuCheckCheck,
  LuChevronDown,
  LuChevronUp,
  LuTrash,
} from "react-icons/lu";
import { Task } from "@/types";
import { useAppDispatch } from "@/lib/redux/hooks";
import {
  changeToFinished,
  changeToInprogress,
  handleDeleteTask,
  setActiveTask,
} from "@/lib/redux/tasksSlice";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { toggleAddNewMemberModal } from "@/lib/redux/theme";
import Image from "next/image";
import CustomButton from "../CustomButton";
import TodoViewStatus from "./TodoViewStatus";
import TodoViewMemberLIst from "./TodoViewMemberLIst";

interface Props {
  item: Task;
}

const TodoView = ({ item }: Props) => {
  const { task, description, createdAt } = item;
  const [showCardMembers, setShowCardMembers] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const router = useRouter();

  // Handle opening/closing the dropdown for the current card
  const handleOpenCardMembers = (id: string) => {
    setShowCardMembers((prevId) => (prevId === id ? null : id));
  };

  // Drag function to set the active task
  const handleDragStart = () => {
    dispatch(setActiveTask(item));
    setShowCardMembers(null);
  };

  function openAddingMemberModal(cardId: string) {
    router.push("/cards?Id=" + cardId);
    setShowCardMembers(null);
    dispatch(toggleAddNewMemberModal());
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={`border-r-2 ${
        item.status === "created"
          ? "border-r-red"
          : item.status === "inprogress"
          ? "border-r-blue-400"
          : "border-r-green-500"
      }  w-full h-[200px] mt-3 border border-zinc-200 flex flex-col items-start justify-between
       hover:bg-zinc-200/80 dark:hover:bg-zinc-200/10 hoverEffect py-5 px-4 cursor-grab relative`}
    >
      <div className="flex items-center justify-between w-full">
        <h3 className="line-clamp-1 text-lg md:text-lg lg:text-2xl font-bold flex-1">
          {task}
        </h3>
        <TodoViewStatus item={item} />
      </div>
      <p className="mb-3 lg:mb-0 text-start line-clamp-2 text-sm md:text-base mt-1 dark:text-zinc-300 text-gray-700">
        {description}
      </p>
      <div className="flex items-center justify-between w-full">
        <div className="flex-1 flex items-center justify-start relative ml-3">
          {/* Add colors or avatars for task owners */}
          {item.users &&
            item.users.map((user) => {
              return (
                <div
                  key={user.id}
                  className="w-8 h-8 lg:w-12 lg:h-12 rounded-full -ml-3 hover:z-20 relative cursor-pointer hover:scale-110 hoverEffect"
                >
                  <Image
                    src={user.ProfileImage ? user.ProfileImage : "/profile.jpg"}
                    alt=""
                    className="rounded-full w-full h-full"
                    fill
                    sizes="fill"
                  />
                </div>
              );
            })}
          {item.users ? (
            <button
              className="mx-3 cursor-pointer"
              onClick={() => handleOpenCardMembers(item.id)}
            >
              {showCardMembers === item.id ? (
                <LuChevronUp size={20} />
              ) : (
                <LuChevronDown size={20} />
              )}
            </button>
          ) : (
            <CustomButton
              click={() => openAddingMemberModal(item.id)}
              text="New member"
              className="text-sm text-black bg-white hover:text-white cursor-pointer"
            />
          )}
        </div>
        <p className="text-sm text-gray-600 dark:text-zinc-300">
          {createdAt.toString()}
        </p>
      </div>

      {/* Card member list */}
      {showCardMembers === item.id && (
        <TodoViewMemberLIst
          item={item}
          openAddingMemberModal={openAddingMemberModal}
        />
      )}
    </div>
  );
};

export default TodoView;
