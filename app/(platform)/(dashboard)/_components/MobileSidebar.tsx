"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-sidebar";
import { Menu } from "lucide-react";
import SideBar from "./Sidebar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const MobileSidebar = () => {
  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Button
        onClick={onOpen}
        variant="ghost"
        size="sm"
        className="mr-2 block md:hidden  "
      >
        <Menu className="w-4 h-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-4 pt-12">
          <SideBar />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSidebar;
