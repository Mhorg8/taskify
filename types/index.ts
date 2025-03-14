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

