"use client";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "@/lib/db";
import { Plus } from "lucide-react";
import { CurrentProfile } from "@/lib/current-profile";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import ActionToolTip from "@/components/ActionToolTip";
import { useModalHook } from "@/hooks/use-modal";
interface AddTaskProps {
  boardId: string;
}
const AddTask = ({ boardId }: AddTaskProps) => {
  const { onOpen, onClose, data } = useModalHook();
  return (
    <ActionToolTip label="Add task">
      <div
        onClick={() => onOpen("add-task", { boardId })}
        className="w-[210px] h-[114px]  cursor-pointer shadow-md hover:bg-[#F4E0C5FF]  flex items-center justify-center  bg-[#F4EDE3FF] rounded-md p-5  transition"
      >
        <Plus className="w-10 h-10" />
      </div>
    </ActionToolTip>
  );
};

export default AddTask;
// const currentProfile = await CurrentProfile();
// if (!boardId) {
//   throw new Error("Board id is missing");
// }
// async function handleTaskCreate(formData: FormData) {
//   "use server";
//   const title = formData.get("title");
//   const desc = formData.get("desc");
//   // TODO: ZOD VALIDATION FOR TITLE AND CONTENT
//   await db.task.create({
//     data: {
//       profileId: currentProfile?.userId || "defualtUserId",
//       boardId,
//       taskContent: desc as string,
//       taskTitle: title as string,
//       completed: false,
//     },
//   });
// }
