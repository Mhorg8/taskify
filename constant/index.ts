import { Column, Task } from "@/types";

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

