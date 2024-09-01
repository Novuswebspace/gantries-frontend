"use client";

import Link from "next/link";
import { LogIn } from "lucide-react";

import { useAppSelector } from "@/store";
import { QuickActions } from "@/components/explore/quick-actions";
import { Button } from "@/components/ui/button";
import NavItem from "@/components/globals/nav-item";
import ProfileActions from "@/components/globals/profile-actions";
import SidebarMobile from "@/components/globals/sidebar-mobile";
import Logo from "./logo";

const Navbar = () => {
  const { data } = useAppSelector((state) => state.auth);
  return (
    <nav className="sticky top-0 z-[50] w-full p-4 shadow-lg bg-gradient-to-r from-indigo-50 to-purple-200 h-16">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <SidebarMobile />
          <Link href="/">
            <Logo className="transform -translate-y-1.5" />
          </Link>
          <QuickActions />
        </div>
        <div className="flex items-center space-x-4">
          {data ? (
            <ProfileActions />
          ) : (
            <>
              <Button>
                <NavItem
                  Icon={LogIn}
                  href="/sign-in"
                  label="Sign In"
                  className="p-0"
                />
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
