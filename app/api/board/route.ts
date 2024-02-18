import { CurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { orgId } = await auth();
    const currentProfile = await CurrentProfile();
    if (!currentProfile) {
      return redirect("/sign-up");
    }
    if (!orgId) {
      return new NextResponse("Organization not found");
    }
    const body = await req.json();
    const { name } = body;
    const board = await db.board.create({
      data: {
        name,
        organizationId: orgId,
        profileId: currentProfile.userId,
      },
    });
    return NextResponse.json(board);
  } catch (error) {
    return new NextResponse("[BOARD_CREATION ERROR]");
  }
}
