"use client";
import axios from "axios";
import CustomChart from "./CustomChart";
import { useEffect, useState } from "react";
import { CardTask, Task } from "@/types";

const ProfileCharts = () => {
  const [createdCard, setcreatedCard] = useState<Task[]>([]);
  const [inProgressCards, setInProgressCards] = useState<Task[]>([]);
  const [compeltedTask, setCompelteTask] = useState<CardTask[]>([]);
  const [inProgressTask, setInProgressTask] = useState<CardTask[]>([]);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const getCards = async () => {
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
    const fetchCards = async () => {
      const cards: Task[] = await getCards();

      const tasks: CardTask[] = cards.reduce((prev, curr) => {
        return [...prev, ...curr.tasks];
      }, []);

      setCompelteTask(tasks.filter((task) => task.status === true));
      setInProgressTask(tasks.filter((task) => task.status === false));
      setcreatedCard(cards.filter((card) => card.status === "created"));
      setInProgressCards(cards.filter((card) => card.status === "in-progress"));
    };
    fetchCards();
  }, []);

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-9 w-full h-full bg-zinc-200 dark:bg-zinc-600/70 flex items-start py-7 justify-start container">
      <div className="flex items-center gap-8 flex-wrap w-full">
        <CustomChart type1={createdCard} type2={inProgressCards} /> 
        <CustomChart type1={compeltedTask} type2={inProgressTask} />
      </div>
    </div>
  );
};

export default ProfileCharts;
