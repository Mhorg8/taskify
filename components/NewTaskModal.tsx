"use client";

import { FormEvent } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { IoClose } from "react-icons/io5";
import { toggleAddNewTask } from "@/lib/redux/theme";
import { useAppDispatch } from "@/lib/redux/hooks";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";

const NewTaskModal = () => {
  const dispatch = useAppDispatch();
  const searchParams = new URLSearchParams(window.location.search);
  const taskId: string | null = searchParams.get("ID");
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const form = new FormData(e.currentTarget);
    if (taskId) {
      const task = form.get("task")?.toString().trim();
      const data = { id: taskId, task };
      console.log(data);

      const response = await axios.post(
        "http://localhost:3000/api/addNewTask",
        data,
        config
      );

      if (response.data.isSucess) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
      dispatch(toggleAddNewTask(false));
    }
  }

  const fadeIn = {
    animate: {
      opacity: 1,
      scale: 1,
    },

    initial: {
      opacity: 0,
      sclae: 0,
    },
    exit: {
      opacity: 0,
      sclae: 0,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={fadeIn}
        animate="animate"
        initial="initial"
        exit="exit"
        transition={{ duration: 1 }}
        className="absolute -top-full left-0 h-screen bg-black/30 flex items-center justify-center w-full"
      >
        <div className="w-[400px]  dark:text-black bg-white rounded-xl px-4 py-3 relative">
          <h2 className="text-center text-xl font-bold">Create new Task</h2>
          <form onSubmit={handleSubmit} className="mt-3 space-y-3">
            <CustomInput
              autoFocus
              label="Task"
              type="text"
              name="task"
              placeholder="something..."
            />

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
      </motion.div>
    </AnimatePresence>
  );
};

export default NewTaskModal;
