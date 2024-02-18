import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import MobileSidebar from "./MobileSidebar";
const Navbar = () => {
  return (
    <nav className="fixed flex items-center top-0 left-0 shadow-sm border-b h-14 w-full px-4 bg-white ">
      <MobileSidebar />
      <div className="flex flex-row w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
          <Button size="sm" asChild>
            <Link href="/select-org">Create</Link>
          </Button>
        </div>
        <div className="flex justify-center  items-center gap-2">
          <OrganizationSwitcher
            hidePersonal
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 40,
                  width: 40,
                },
              },
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
