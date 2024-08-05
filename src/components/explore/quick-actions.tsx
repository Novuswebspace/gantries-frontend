"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Home, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CreateCommunityModal from "@/components/explore/create-community-modal";

export function QuickActions() {
  const pathname = usePathname();
  const { label, Icon } = useMemo(() => {
    if (pathname.includes("explore")) {
      return { label: "Explore", Icon: Sparkles };
    }
    return { label: "Home", Icon: Home };
  }, [pathname]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size={"sm"}
          className="flex items-center gap-1 border border-transparent hover:border-gray-300"
        >
          <Icon size={"1.1rem"} />
          <span className="hidden md:block">{label}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-6" align="start">
        <DropdownMenuGroup className="space-y-3 pt-2">
          <DropdownMenuItem asChild>
            <CreateCommunityModal />
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <button className="flex items-center gap-3">
              <Users size={"1.1rem"} /> All Communities
            </button>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Subscribed Communities */}
        <DropdownMenuLabel>Subscribed</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>Team 1</DropdownMenuItem>
          <DropdownMenuItem>Team 2</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
