"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Activity, CreditCard, Layout, Settings } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};
interface NavItemProps {
  isActive: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
  isExpanded: boolean;
}
const NavItem = ({
  isActive,
  organization,
  onExpand,
  isExpanded,
}: NavItemProps) => {
  const routes = [
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/settings`,
    },

    {
      label: "Boards",
      icon: <Layout className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}`,
    },
  ];
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = (href: string) => {
    router.push(href);
  };
  return (
    <AccordionItem className="border-none" value={organization.id}>
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
          isActive && "bg-sky-500/10 text-sky-700"
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image
              fill
              src={organization.imageUrl}
              alt="org-image"
              className="rounded-sm object-cover"
            />
          </div>
          <span className="font-medium text-sm">{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {routes.map((route) => (
          <Button
            className={cn(
              "w-full font-normal justify-start pl-10 mb-1",
              pathname === route.href && "bg-sky-500/10 text-sky-700"
            )}
            onClick={() => handleClick(route.href)}
            variant="ghost"
            key={route.href}
            size="sm"
          >
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default NavItem;
