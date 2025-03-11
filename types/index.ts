export interface Task {
  id: number;
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
