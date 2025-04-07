"use client";
import { TbSubtask } from "react-icons/tb";
import CustomTooltip from "./CustomTooltip";
import { LuChevronDown, LuChevronUp, LuUserPlus } from "react-icons/lu";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  toggleAddNewMemberModal,
  toggleAddNewTask,
  toogleOpenTaskView,
} from "@/lib/redux/theme";
import { useRouter } from "next/navigation";

const TaskViewAction = ({ taskId }: { taskId: string }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);
  const taskViewIsOpen = useAppSelector((state) => state.theme.taskViewIsOpen);

  function handleOpenNewTaskModal() {
    searchParams.set("ID", taskId);
    router.push(`?${searchParams}`);
    dispatch(toggleAddNewTask(true));
  }
  function handleOpenNewTaskMember() {
    dispatch(toggleAddNewMemberModal(true));
  }
  function handleOpenDropdown(taskId: string) {
    if (taskId === taskViewIsOpen) {
      dispatch(toogleOpenTaskView(null));
    } else {
      dispatch(toogleOpenTaskView(taskId));
    }
  }

  return (
    <div className="flex items-center justify-between mt-3 gap-2 w-full">
      <div className="flex gap-3 items-center ">
        <CustomTooltip
          click={handleOpenNewTaskMember}
          Icon={LuUserPlus}
          content="Add new member"
        />
        <CustomTooltip
          click={handleOpenNewTaskModal}
          Icon={TbSubtask}
          content="Add new Task"
        />
      </div>
      <button onClick={() => handleOpenDropdown(taskId)}>
        {taskViewIsOpen ? <LuChevronUp /> : <LuChevronDown />}
      </button>
    </div>
  );
};

export default TaskViewAction;
