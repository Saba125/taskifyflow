import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed flex items-center top-0 left-0 shadow-sm border-b h-14 w-full px-4 bg-white ">
      <div className="flex flex-row w-full items-center justify-between">
        <Logo />
        <div className="flex justify-between w-full md:block md:w-auto space-x-3">
          <Button variant="outline" asChild size="sm">
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/sign-in">Get taskify for free</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
