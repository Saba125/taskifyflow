import { CurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  {
    params: { taskId },
  }: {
    params: {
      taskId: string;
    };
  }
) {
  const currentProfile = await CurrentProfile();
  if (!currentProfile) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const body = await req.json();
  const { title, content } = body;
  console.log(title, content);
  const editedTask = await db.task.update({
    where: {
      id: taskId as string,
    },
    data: {
      taskTitle: title,
      taskContent: content,
    },
  });
  return NextResponse.json(editedTask);
  try {
  } catch (error) {
    return NextResponse.json("[EDIT_TASK ERROR]");
  }
}

export async function POST(
  req: Request,
  {
    params: { taskId: boardId },
  }: {
    params: {
      taskId: string;
    };
  }
) {
  try {
    const currentProfile = await CurrentProfile();
    if (!currentProfile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const body = await req.json();
    const { title, content } = body;
    console.log(title, content);
    const createTask = await db.task.create({
      data: {
        profileId: currentProfile.userId,
        boardId: boardId,
        taskTitle: title,
        taskContent: content,
        completed: false,
      },
    });
    return NextResponse.json(createTask);
  } catch (error) {
    return NextResponse.json("[EDIT_TASK ERROR]");
  }
}
