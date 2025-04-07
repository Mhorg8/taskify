import { IconType } from "react-icons/lib";

export interface Task {
  id: string;
  task: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  users: User[];
  tasks: CardTask[];
}

export interface CardTask {
  cardId: string;
  id: string;
  task: string;
  status: boolean;
}

export interface Column {
  id: number;
  title: string;
  status: string;
  borderColor?: string;
}

export interface TaskStatus {
  activeTab: "created" | "inprogress" | "finished";
}

export interface Feature {
  id: number;
  title: string;
  text: string;
}

export interface SocialIcon {
  id: number;
  href: string;
  name: string;
  Icon: IconType;
}

export interface FooterLink {
  id: number;
  title: string;
  sublinks: { title: string; href: string }[];
}
export interface User {
  id: string;
  Username: string;
  Password: string;
  Email: string;
  ProfileImage?: string | null;
  CreatedAt: Date;
  UpdatedAt: Date;
  cards: Task[];
}

export interface Notification {
  id: number;
  senderName: string;
  message: string;
  time: string;
  thumnail: string | null;
}
