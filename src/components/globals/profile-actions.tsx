"use client";

import Link from "next/link";
import { ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AvatarLogo from "@/components/globals/avatar-logo";
import LogoutModal from "@/components/auth/logout-modal";
import { useAppSelector } from "@/store";

const ProfileActions = () => {
  const { data } = useAppSelector((state) => state.auth);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size={"sm"}
          className="bg-transparent hover:bg-transparent flex items-center gap-1 border border-transparent hover:border-gray-300 py-2"
        >
          <AvatarLogo
            src="/images/nature.jpg"
            alt="User Logo"
            className="w-8 h-8"
            fallback={"harsha".charAt(0).toUpperCase()}
          />
          <h3 className="font-semibold hidden md:block">{data?.username}</h3>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-40 mt-6 shadow-md border border-gray-300"
        align="end"
      >
        <DropdownMenuGroup className="space-y-1.5">
          <DropdownMenuItem>
            <Link
              href={`/user/${data?._id}/profile`}
              className="flex items-center gap-3"
            >
              <User size={"1.1rem"} /> Profile
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="border border-b-gray-200" />

        <DropdownMenuItem asChild>
          <LogoutModal />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileActions;
