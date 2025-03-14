import { Column } from "@/types";

export const HeaderLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 4, name: "Cards", link: "/cards" },
  { id: 2, name: "Tasks", link: "/tasks" },
  { id: 3, name: "Chat", link: "/chat" },
];

export const getTime = () => {
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

export const tempTasks = [
  {
    id: 1,
    title: "Go gym",
    tasks: [
      { id: 100, task: "Push up" },
      { id: 101, task: "Push down" },
      { id: 102, task: "Pull up" },
      { id: 103, task: "Lat" },
    ],
  },
  {
    id: 2,
    title: "Go uni",
    tasks: [
      { id: 100, task: "Push up" },
      { id: 101, task: "Push down" },
      { id: 102, task: "Pull up" },
      { id: 103, task: "Lat" },
    ],
  },
  {
    id: 3,
    title: "Go shopping center",
    tasks: [
      { id: 100, task: "Push up" },
      { id: 101, task: "Push down" },
      { id: 102, task: "Pull up" },
      { id: 103, task: "Lat" },
    ],
  },
  {
    id: 4,
    title: "Go shopping center",
    tasks: [
      { id: 100, task: "Push up" },
      { id: 101, task: "Push down" },
      { id: 102, task: "Pull up" },
      { id: 103, task: "Lat" },
    ],
  },
];
