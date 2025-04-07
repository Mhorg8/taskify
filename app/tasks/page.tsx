"use client";
import AddNewMemberModal from "@/components/cards/AddNewMemberModal";
import Loader from "@/components/Loader";
import NewTaskModal from "@/components/NewTaskModal";
import TaskView from "@/components/TaskView";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setTasks } from "@/lib/redux/tasksSlice";
import { toggleAddNewMemberModal, toggleAddNewTask } from "@/lib/redux/theme";
import axios from "axios";
import React, { useEffect, useCallback, useState } from "react";
import { toast } from "sonner";

const TaskPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks);

  const { addNewTaskModal, addNewMemberModal } = useAppSelector(
    (state) => state.theme
  );
  const fetchTasks = async () => {
    const response = await axios.get("/api/addNewCard");
    if (!response.data.isSucess) {
      toast.error(response.data.message);
    }
    dispatch(setTasks(response.data.tasks));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);

    fetchTasks();
  }, [addNewTaskModal]);

  const handleCloseModalWithKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch(toggleAddNewTask(false));

        dispatch(toggleAddNewMemberModal(false));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleCloseModalWithKey);

    return () => {
      window.removeEventListener("keydown", handleCloseModalWithKey);
    };
  }, [handleCloseModalWithKey]);

  return (
    <div className="w-full h-full ">
      {/* hero section */}
      <div className="w-full h-[100dvh]  md:h-[calc(100dvh-70px)] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
          Assign task to each project you have.
        </h2>
        <p className="text-xl mt-6">
          Let&apos;s work together by assigning tasks to each project. This will
          help us better manage our projects and support the team as a whole.
        </p>
      </div>

      {/* cards list */}
      <div className="px-10 relative ">
        <h3 className="mb-10 text-4xl font-bold ">Card's list</h3>
        <div className="w-full h-full">
          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {tasks?.length < 1 || !tasks ? (
                <div className="w-full col-span-12">
                  <h1 className="text-5xl uppercase">You not have card.</h1>
                </div>
              ) : loading ? (
                <Loader />
              ) : (
                tasks.map((task) => <TaskView key={task.id} task={task} />)
              )}
            </div>
          )}
        </div>

        {/* add new Task modal */}
        {addNewTaskModal && <NewTaskModal />}
        {addNewMemberModal && <AddNewMemberModal />}
      </div>
    </div>
  );
};

export default TaskPage;
