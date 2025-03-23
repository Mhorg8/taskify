"use client";
import { useAppDispatch } from "@/lib/redux/hooks";
import {
  changeToFinished,
  changeToInprogress,
  handleDeleteTask,
} from "@/lib/redux/tasksSlice";
import { Task } from "@/types";
import axios from "axios";
import { LucideCheckCheck } from "lucide-react";
import React from "react";
import { LuCheck, LuTrash } from "react-icons/lu";
import { toast } from "sonner";

interface Props {
  item: Task;
}

const TodoViewStatus = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  async function DeleteTask(id: string) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post("/api/deleteCard", { id }, config);

    if (!response.data.isSucess) {
      toast.error(response.data.message);
    }
    dispatch(handleDeleteTask(id));
    toast.success(response.data.message);
  }

  return (
    <div className="flex items-center gap-2">
      <button>
        <LuTrash onClick={() => DeleteTask(item.id)} size={22} />
      </button>
      {item.status === "created" ? (
        <button
          className="cursor-pointer"
          onClick={() => dispatch(changeToInprogress(item.id))}
        >
          <LuCheck size={24} />
        </button>
      ) : item.status === "inprogress" ? (
        <button
          className="cursor-pointer"
          onClick={() => dispatch(changeToFinished(item.id))}
        >
          <LucideCheckCheck size={24} />
        </button>
      ) : (
        <button
          className="cursor-pointer"
          onClick={() => dispatch(handleDeleteTask(item.id))}
        >
          <LuTrash size={24} />
        </button>
      )}
    </div>
  );
};

export default TodoViewStatus;
