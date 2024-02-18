import { db } from "./db";
import { auth } from "@clerk/nextjs";
export async function CurrentProfile() {
  const { userId } = auth();
  if (!userId) {
    return null;
  }
  const currentProfile = await db.profile.findUnique({
    where: { userId: userId },
  });
  return currentProfile;
}
