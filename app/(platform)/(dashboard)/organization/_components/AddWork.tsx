"use client";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "@/lib/db";
import { Plus } from "lucide-react";
import { CurrentProfile } from "@/lib/current-profile";
import { auth, redirectToSignIn, useAuth } from "@clerk/nextjs";
import ActionToolTip from "@/components/ActionToolTip";
import { revalidatePath } from "next/cache";
import { useModalHook } from "@/hooks/use-modal";

const AddWork = () => {
  const { orgId } = useAuth();

  // const handleSubmit = async (formData: FormData) => {
  //   "use server";
  //   const name = formData.get("name");
  //   await db.board.create({
  //     data: {
  //       name: name as string,
  //       profileId: currentProfile.userId,
  //       organizationId: organizationId.orgId as string,
  //     },
  //   });
  //   revalidatePath(`/organization/${organizationId.orgId}`);
  // };
  const { data, type, onClose, onOpen } = useModalHook();
  return (
    <div
      onClick={() => onOpen("add-board")}
      className="w-[210px] h-[114px]    cursor-pointer shadow-md hover:bg-[#F4E0C5FF]  flex items-center justify-center  bg-[#F4EDE3FF] rounded-md p-5  transition"
    >
      <Plus className="w-10 h-10" />
    </div>
  );
};
{
}
export default AddWork;
