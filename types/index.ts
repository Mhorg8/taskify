export interface Task {
  id: string;
  title: string;
  desc: string;
  status: string;
  time: string;
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

export interface User {
  id: string;
  Username: string;
  Password: string;
  Email: string;
  ProfileImage?: string | null;
  CreatedAt: Date;
  UpdatedAt: Date;
}
