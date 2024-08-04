"use client";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Navbar, Text } from "@nextui-org/react";

export default function dashboard() {
  return (
    <main className="min-h-screen flex flex-col bg-purple-50">
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
          <nav className="flex items-center space-x-4">
            <Link
              href="/sign-in"
              className="text-[#5f3a9e] hover:text-[#4b2f79] transition duration-300"
            >
              Sign In
            </Link>
            {/* <Navbar variant="sticky" className="bg-white shadow-md">
              <Navbar.Brand>
                <Text b color="inherit" className="text-lg font-semibold">
                  Circus
                </Text>
              </Navbar.Brand>
              <Navbar.Content>
                <Navbar.Item>Home</Navbar.Item>
                <Navbar.Item>Search</Navbar.Item>
              </Navbar.Content>
            </Navbar> */}

            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </header>

      <div className="border rounded-lg shadow-sm p-2 flex items-center space-x-2">
        <div className="bg-gray-300 p-2 rounded-full cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Create Post"
          className="flex-grow bg-gray-100 p-2 rounded-lg focus:outline-none"
        />
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 6.268a2.268 2.268 0 11-3.2 3.2L4.5 17.999H3v-1.5l7.536-7.536a2.268 2.268 0 013.2-3.2l1.496 1.496z"
              />
            </svg>
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 13.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM7.5 15a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM6 6.75a.75.75 0 000 1.5h12a.75.75 0 000-1.5H6zm1.8 7.5h.45a2.25 2.25 0 011.8-.5h4.5a2.25 2.25 0 011.8.5h.45M15 17.25v.75a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v-.75"
              />
            </svg>
          </button>
        </div>
      </div>
      <Card className="max-w-lg mx-auto my-4 shadow-sm border">
        <CardHeader className="flex items-center space-x-4 p-4">
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/100000?v=4"
              alt="User avatar"
            />
            <AvatarFallback>MC</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">MarufCircus</div>
            <div className="text-sm text-gray-500">
              By ahmedtalal962 a year ago
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="mb-2 font-bold text-lg">Ahmed here</div>
          <div className="mb-4 text-gray-700">BANGER OF A WEBSITE LOVE IT</div>
          <img
            src="https://example.com/soccer-image.jpg"
            alt="Soccer player"
            className="rounded-lg"
          />
        </CardContent>
        <CardFooter className="flex justify-between p-4">
          <Button variant="ghost" className="text-sm">
            Share
          </Button>
          <Button variant="ghost" className="text-sm">
            Save
          </Button>
        </CardFooter>
      </Card>
      <footer className="py-4 bg-white">
        <div className="container mx-auto text-center text-[#5f3a9e] text-sm">
          © 2024 Gantries by eSamudaay. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
