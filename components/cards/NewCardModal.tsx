"use client";
import React, { FormEvent } from "react";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import { IoClose } from "react-icons/io5";
import { useAppDispatch } from "@/lib/redux/hooks";
import { toggleOpenNewTaskModal } from "@/lib/redux/theme";
import { Task } from "@/types";
import { addNewTask } from "@/lib/redux/tasksSlice";
import axios from "axios";
import { toast } from "sonner";

const NewCardModal = () => {
  const dispatch = useAppDispatch();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formDate = new FormData(e.currentTarget);
    const data = Object.fromEntries(formDate.entries());
    const confiq = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post("/api/addNewCard", data, confiq);
    if (!response.data.isSucess === false) {
      toast.error(response.data.message);
    }

    toast.success(response.data.message);
    let newTask: Task = response.data.task;

    newTask.createdAt = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    dispatch(addNewTask(newTask));
    dispatch(toggleOpenNewTaskModal());
  }
  return (
    <div className="absolute top-0 left-0 w-full h-[100dvh] bg-black/30 shadow-sm dark:shadow-white  flex items-center justify-center">
      <div className="w-[400px] min-h-[400px] dark:text-black bg-white rounded-xl px-4 py-3 relative">
        <h2 className="text-center text-xl font-bold">Create new Card</h2>
        <form onSubmit={handleSubmit} className="mt-3 space-y-3">
          <CustomInput
            label="Name"
            name="name"
            type="text"
            placeholder="something ..."
            autoFocus
          />
          <CustomInput
            label="Description"
            name="description"
            type="text"
            placeholder="something ..."
          />
          <button className="text-base font-light hover:text-zinc-500 underline cursor-pointer">
            Add new Member
          </button>

          <CustomButton
            type="submit"
            text="Add"
            className="w-full py-4 mt-3 dark:bg-black dark:text-white bg-black"
          ></CustomButton>
        </form>

        {/* button for closing modal */}
        <button
          className="cursor-pointer absolute top-2 right-4  bg-white hover:bg-zinc-300 rounded-full flex items-center justify-center p-2 hoverEffect"
          onClick={() => dispatch(toggleOpenNewTaskModal())}
        >
          <IoClose size={24} />
        </button>
      </div>
    </div>
  );
};

export default NewCardModal;
