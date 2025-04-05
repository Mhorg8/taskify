"use client";
import MoblieTabs from "@/components/cards/MoblieTabs";
import React, { useEffect } from "react";
import StatusColumn from "@/components/cards/StatusColumn";
import { columns } from "@/constant";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import NewCardModal from "@/components/cards/NewCardModal";
import { toast } from "sonner";
import { addNewTask, setTasks } from "@/lib/redux/tasksSlice";
import axios from "axios";
import AddNewMemberModal from "@/components/cards/AddNewMemberModal";

const CardsPage = () => {
  const dispath = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const addingNewMeberModalStatus = useAppSelector(
    (state) => state.theme.addNewMemberModal
  );
  const fetchTasks = async () => {
    const response = await axios.get("/api/addNewCard");
    if (!response.data.isSucess) {
      toast.error(response.data.message);
    }
    dispath(setTasks(response.data.tasks));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const newCardModalStatus = useAppSelector(
    (state) => state.theme.newCardModal
  );

  return (
    <div className="h-[calc(100dvh-80px)] overflow-hidden relative ">
      <MoblieTabs />
      {/* large screen container */}
      <div className="hidden lg:grid grid-cols-3 h-full">
        {columns.map((column) => {
          return <StatusColumn tasks={tasks} key={column.id} column={column} />;
        })}
      </div>

      {newCardModalStatus && <NewCardModal />}
      {addingNewMeberModalStatus && <AddNewMemberModal />}
    </div>
  );
};

export default CardsPage;
