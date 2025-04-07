"use client";
import { TbSubtask } from "react-icons/tb";
import CustomTooltip from "./CustomTooltip";
import { LuUserPlus } from "react-icons/lu";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { toggleAddNewMemberModal, toggleAddNewTask } from "@/lib/redux/theme";
import { useRouter } from "next/navigation";

const TaskViewAction = ({ taskId }: { taskId: string }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);
  const newTaskModalStatus = useAppSelector(
    (state) => state.theme.addNewTaskModal
  );

  function handleOpenNewTaskModal() {
    searchParams.set("ID", taskId);
    router.push(`?${searchParams}`);
    dispatch(toggleAddNewTask(true));
  }
  function handleOpenNewTaskMember() {
    dispatch(toggleAddNewMemberModal(true));
  }

  return (
    <div className="flex items-center mt-3 gap-2">
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
  );
};

export default TaskViewAction;
