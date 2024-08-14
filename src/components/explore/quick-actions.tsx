"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Home, Sparkles, Users } from "lucide-react";
import { ROUTES } from "@/routes";
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
import CreateCommunityModal from "@/components/community/create-community-modal";

export function QuickActions() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const { label, Icon } = useMemo(() => {
    if (pathname.includes("explore")) {
      return { label: "Explore", Icon: Sparkles };
    }
    if (pathname.includes("community")) {
      return { label: "Community", Icon: Users };
    }
    return { label: "Home", Icon: Home };
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
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
          <DropdownMenuItem>
            <Link href={ROUTES.COMMUNITIES} className="flex items-center gap-2">
              <Users size={"1.1rem"} /> All Communities
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Quick Links */}
        <DropdownMenuLabel>Quick Links</DropdownMenuLabel>
        <DropdownMenuGroup className="space-y-1.5">
          <DropdownMenuItem>
            <Link href={ROUTES.HOME} className="flex items-center gap-2">
              <Home size={"1.1rem"} /> Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={ROUTES.EXPLORE} className="flex items-center gap-2">
              <Sparkles size={"1.1rem"} /> Explore
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
