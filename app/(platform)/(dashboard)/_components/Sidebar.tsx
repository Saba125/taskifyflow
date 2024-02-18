"use client";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";
import NavItem, { Organization } from "./nav-item";
import { useLocalStorage } from "usehooks-ts";
interface SidebarProps {
  storageKey?: string;
}
const SideBar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );

  const { organization: activeOrganization } = useOrganization();
  const { userMemberships, isLoaded } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  if (!isLoaded || userMemberships.isLoading) {
    return (
      <>
        <Skeleton />
      </>
    );
  }
  return (
    <div>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">Workspaces</span>
        <Button
          asChild
          type="button"
          size="icon"
          variant="ghost"
          className="ml-auto"
        >
          <Link href="/select-org">
            <Plus />
          </Link>
        </Button>
      </div>
      <Accordion type="multiple" className="space-y-2">
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={activeOrganization?.id === organization.id}
            organization={organization as Organization}
            isExpanded={expanded[organization.id]}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default SideBar;
