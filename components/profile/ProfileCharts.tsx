"use client";
import axios from "axios";
import CustomChart from "./CustomChart";
import { useEffect, useState } from "react";
import { Task } from "@/types";

const ProfileCharts = () => {
  const [createdTasks, setCreatedTasks] = useState<Task[]>([]);
  const [inProgressTasks, setInProgressTasks] = useState<Task[]>([]);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const getTasks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/addNewCard",
        config
      );
      return response.data.tasks;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks: Task[] = await getTasks();

      console.log(tasks);

      setCreatedTasks(tasks.filter((task) => task.status === "created"));
      setInProgressTasks(tasks.filter((task) => task.status === "in-progress"));
    };

    fetchTasks();
  }, []);

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-9 w-full h-full bg-zinc-200 dark:bg-zinc-600/70 flex items-start py-7 justify-start container">
      <div>
        <CustomChart type1={createdTasks} type2={inProgressTasks} />
      </div>
    </div>
  );
};

export default ProfileCharts;
