// import { CurrentProfile } from "@/lib/current-profile";
// import { db } from "@/lib/db";
// import { auth } from "@clerk/nextjs";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const currentProfile = await CurrentProfile();
//     const body = await req.json();
//     const { title, content } = body;
//     if (!currentProfile) {
//       return new NextResponse("User not found", { status: 404 });
//     }
//     const { orgId } = await auth();
//     if (!orgId) {
//       return new NextResponse("Organization not found", { status: 400 });
//     }
//     const createdTask = await db.task.create({
//       data: {
//         profileId: currentProfile.userId,
//         taskTitle: title,
//         taskContent: content,
//       },
//     });
//   } catch (error) {
//     return new NextResponse("[TASK_CREATEION_ERROR]");
//   }
// }
