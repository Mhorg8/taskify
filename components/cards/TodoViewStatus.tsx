"use client";
import { updateCardStatus } from "@/hooks";
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

  function handleChangeStatus() {
    if (item.status === "created") {
      updateCardStatus("inprogress", item.id);
      dispatch(changeToInprogress(item.id));
    } else if (item.status === "inprogress") {
      updateCardStatus("finished", item.id);
      dispatch(changeToFinished(item.id));
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button className="cursor-pointer">
        <LuTrash onClick={() => DeleteTask(item.id)} size={22} />
      </button>
      {item.status === "created" ? (
        <button className="cursor-pointer" onClick={handleChangeStatus}>
          <LuCheck size={24} />
        </button>
      ) : item.status === "inprogress" ? (
        <button className="cursor-pointer" onClick={handleChangeStatus}>
          <LucideCheckCheck size={24} />
        </button>
      ) : null}
    </div>
  );
};

export default TodoViewStatus;
