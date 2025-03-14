"use client";

import { FormEvent } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { IoClose } from "react-icons/io5";
import { toggleAddNewTask } from "@/lib/redux/theme";
import { useAppDispatch } from "@/lib/redux/hooks";

const NewTaskModal = () => {
  const dispatch = useAppDispatch();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-screen bg-black/30 flex items-center justify-center w-full">
      <div className="w-[400px] min-h-[400px] dark:text-black bg-white rounded-xl px-4 py-3 relative">
        <h2 className="text-center text-xl font-bold">Create new Task</h2>
        <form onSubmit={handleSubmit} className="mt-3 space-y-3">
          <CustomInput
            label="Task"
            type="text"
            name="Task"
            placeholder="something..."
          />
          <CustomInput
            label="Description"
            type="text"
            name="description"
            placeholder="something..."
          />

          <button className="text-base font-light hover:text-zinc-500 underline cursor-pointer">
            Add New Member
          </button>

          <button className="w-full py-4 mt-3 dark:bg-black dark:text-white bg-black hover:bg-black/80  cursor-pointer hoverEffect">
            Add
          </button>
        </form>

        <button
          className="cursor-pointer absolute top-2 right-4  bg-white hover:bg-zinc-300 rounded-full flex items-center justify-center p-2 hoverEffect"
          onClick={() => dispatch(toggleAddNewTask(false))}
        >
          <IoClose size={24} />
        </button>
      </div>
    </div>
  );
};

export default NewTaskModal;
