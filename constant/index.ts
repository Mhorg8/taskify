import { Column, Task } from "@/types";

export const HeaderLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 4, name: "Cards", link: "/cards" },
  { id: 2, name: "Tasks", link: "/tasks" },
  { id: 3, name: "Activities", link: "/activities" },
];

const getTime = () => {
  const date = new Date().toDateString();
  return date;
};
export const columns: Column[] = [
  { id: 1, status: "created", title: "Created", borderColor: "border-red" },
  {
    id: 2,
    status: "inprogress",
    title: "In Progress",
    borderColor: "border-blue-500",
  },
  {
    id: 3,
    status: "finished",
    title: "Finished",
    borderColor: "border-green-500",
  },
];

export const staticTasks: Task[] = [
  {
    id: 1,
    title: "mohammad",
    desc: "this is a test",
    status: "created",
    time: getTime(),
  },
  {
    id: 2,
    title: "go to gym ",
    desc: "this is a test for going gym",
    status: "inprogress",
    time: getTime(),
  },
  {
    id: 3,
    title: "go to work",
    desc: "this is a test for going to work",
    status: "finished",
    time: getTime(),
  },
  {
    id: 4,
    title: "mohammad",
    desc: "this is a test for going home",
    status: "created",
    time: getTime(),
  },
];
