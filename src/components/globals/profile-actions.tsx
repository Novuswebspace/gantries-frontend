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
import LogoutButton from "@/components/auth/logout-button";

const ProfileActions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size={"sm"}
          className="flex items-center gap-1 border border-transparent hover:border-gray-300 py-2"
        >
          <AvatarLogo
            src="/images/nature.jpg"
            alt="User Logo"
            className="w-8 h-8"
            fallback={"harsha".charAt(0).toUpperCase()}
          />
          <h3 className="font-semibold hidden md:block">Harsha</h3>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-40 mt-6 shadow-md border border-gray-300"
        align="end"
      >
        <DropdownMenuGroup className="space-y-1.5">
          <Link href="/user">
            <DropdownMenuItem asChild>
              <button className="flex items-center gap-3">
                <User size={"1.1rem"} /> Profile
              </button>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="border border-b-gray-200" />

        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileActions;
