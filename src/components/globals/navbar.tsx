"use client";

import Image from "next/image";
import Link from "next/link";
import { User2 } from "lucide-react";
import { useAppSelector } from "@/store";

const Navbar = () => {
  const { data } = useAppSelector((state) => state.auth);
  return (
    <header className="p-4 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
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
        </div>
        <div className="flex items-center space-x-4">
          {data ? (
            <Link href="/">
              <User2 className="rounded-full" size={"1.3rem"} />
            </Link>
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
    </header>
  );
};

export default Navbar;
