import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CreateProfile } from "@/lib/create-profile";
const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const MarketingPage = async () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={cn(
          "flex flex-col items-center  gap-4",
          headingFont.className
        )}
      >
        {/* Medal */}
        <div className="flex uppercase border shadow-sm  p-4 bg-amber-100 rounded-full  flex-row items-center gap-1.5">
          <Medal />
          <p className="uppercase text-amber-700 ">No 1 management</p>
        </div>
        <h1 className="text-3xl md:text-6xl text-neutral-800">
          Taskify helps team move.
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work forward.
        </div>
        <p
          className={cn(
            "text-center text-sm md:text-xl text-neutral-400 max-w-xs  md:max-w-2xl",
            textFont.className
          )}
        >
          Collaborate, manage projects, and reach new productivity peaks. From
          high rises to the home office, the way your team works is unique -
          accomplish it all with Taskify.
        </p>
        <Button size="lg" asChild>
          <Link href="/sign-up">Get taskify for free</Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketingPage;
