"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/store";
import { QuickActions } from "@/components/explore/quick-actions";
import ProfileActions from "@/components/globals/profile-actions";

const Navbar = () => {
  const { data } = useAppSelector((state) => state.auth);
  return (
    <nav className="sticky top-0 z-[50] w-full p-4 bg-white shadow-lg">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link
            href="https://esamudaay.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/esamudaay-logo.svg"
              alt="eSamudaay Logo"
              width={200}
              height={50}
              priority
              className="hover:opacity-80 transition duration-300"
            />
          </Link>
          <QuickActions />
        </div>
        <div className="flex items-center space-x-4">
          {data ? (
            <ProfileActions />
          ) : (
            <>
              <Link
                href="/sign-in"
                className="text-[#5f3a9e] hover:text-[#4b2f79] transition duration-300"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="bg-[#5f3a9e] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#4b2f79] transition duration-300"
              >
                Join the Community
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
