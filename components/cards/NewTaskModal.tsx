"use client";
import React, { FormEvent } from "react";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import { IoClose } from "react-icons/io5";
import { useAppDispatch } from "@/lib/redux/hooks";
import { toggleOpenNewTaskModal } from "@/lib/redux/theme";
import { getTime } from "@/constant";
import { Task } from "@/types";
import { addNewTask } from "@/lib/redux/tasksSlice";
import { uid } from "uid";
const NewTaskModal = () => {
  const dispatch = useAppDispatch();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formDate = new FormData(e.currentTarget);
    const data = Object.fromEntries(formDate.entries());

    const newTask: Task = {
      id: uid(12),
      title: data.task as string,
      desc: data.description as string,
      time: getTime(),
      status: "created",
    };

    dispatch(addNewTask(newTask));
    dispatch(toggleOpenNewTaskModal());
  }
  return (
    <div className="absolute top-0 left-0 w-full h-[100dvh] bg-black/30 shadow-sm dark:shadow-white  flex items-center justify-center">
      <div className="w-[400px] min-h-[400px] dark:text-black bg-white rounded-xl px-4 py-3 relative">
        <h2 className="text-center text-xl font-bold">Create new Task</h2>
        <form onSubmit={handleSubmit} className="mt-3 space-y-3">
          <CustomInput
            label="Task"
            name="task"
            type="string"
            placeholder="something ..."
            autoFocus
          />
          <CustomInput
            label="Description"
            name="description"
            type="string"
            placeholder="something ..."
          />
          <button className="text-base font-light hover:text-zinc-500 underline cursor-pointer">
            Add new Member
          </button>

          <CustomButton text="Add" className="w-full py-4 mt-3 dark:bg-black dark:text-white"></CustomButton>
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

export default NewTaskModal;
