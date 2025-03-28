import { Column, Feature, FooterLink, Notification, SocialIcon } from "@/types";
import {
  FaInstagram,
  FaPinterest,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const HeaderLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 4, name: "Cards", link: "/cards" },
  { id: 2, name: "Tasks", link: "/tasks" },
  { id: 3, name: "Chat", link: "/chat" },
];

export const features: Feature[] = [
  {
    id: 1,
    title: "Manage your time.",
    text: "You can add new tasks and set time to manage your time efficiently.",
  },
  {
    id: 2,
    title: "Track your progress.",
    text: "Monitor your task completion and see how much progress you are making.",
  },
  {
    id: 3,
    title: "Organize by priority.",
    text: "Set priorities for your tasks so you know what to focus on first.",
  },
  {
    id: 4,
    title: "Collaborate with others.",
    text: "Share tasks with teammates and collaborate on projects.",
  },
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

export const socialIcons: SocialIcon[] = [
  {
    id: 1,
    href: "https://www.instagram.com",
    Icon: FaInstagram,
    name: "instagram",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    Icon: FaTwitter,
    name: "twitter",
  },
  {
    id: 3,
    href: "https://www.youtube.com",
    Icon: FaYoutube,
    name: "youtube",
  },
  {
    id: 4,
    href: "https://www.telegram.com",
    Icon: FaTelegram,
    name: "telegram",
  },
  {
    id: 5,
    href: "https://www.pintrestcom",
    Icon: FaPinterest,
    name: "pintrest",
  },
];

export const footerLInk: FooterLink[] = [
  {
    id: 1,
    title: "About us",
    sublinks: [
      { title: "Projects", href: "/projects" },
      { title: "Team", href: "/team" },
      { title: "Centers", href: "/center" },
      { title: "Jobs", href: "/jobs" },
    ],
  },
  {
    id: 2,
    title: "Contact us",
    sublinks: [
      { title: "Phone Number", href: "/phoneNumber" },
      { title: "Locations", href: "/locations" },
      { title: "Email", href: "/email" },
    ],
  },
  {
    id: 3,
    title: "Pages",
    sublinks: [
      { title: "Tasks", href: "/tasks" },
      { title: "Cards", href: "/cards" },
      { title: "Chat", href: "/chat" },
      { title: "Register", href: "/register" },
    ],
  },
];

export const notifications: Notification[] = [
  {
    id: 1,
    thumnail: null,
    senderName: "mohamamd",
    message: "new message",
    time: new Date().toLocaleTimeString(),
  },
  {
    id: 2,
    thumnail: null,
    senderName: "alireza",
    message: "add new task",
    time: new Date().toLocaleTimeString(),
  },
  {
    id: 3,
    thumnail: null,
    senderName: "mahdi",
    message: "join into card",
    time: new Date().toLocaleTimeString(),
  },
];
