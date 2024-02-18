import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "./db";
import { redirect } from "next/navigation";
export async function CreateProfile() {
  const user = await currentUser();
  if (!user) {
    return redirect("/sign-in");
  }
  const existingProfile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  });
  if (existingProfile) {
    return existingProfile;
  }
  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0].emailAddress,
      imageUrl: user.imageUrl,
    },
  });
  return newProfile;
}
