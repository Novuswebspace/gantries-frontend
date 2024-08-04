"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Sample data for communitiesList
const communitiesList = [
  { name: "Test", members: 23 },
  { name: "MarufCircus", members: 19 },
  { name: "Clowns", members: 13 },
  { name: "Fedora", members: 11 },
  { name: "Hahahaah", members: 8 },
];
// Define the type for a community
interface Community {
  name: string;
  members: number;
}
export default function communities(){
  return (
    <div className="container mx-auto p-4">
      {/* Header section */}
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-purple-600">Circus</h1>
        <Input className="w-1/2" placeholder="Search" />
        <Avatar className="ml-4" />
      </header>

      {/* Main content */}
      <div className="flex">
        <div className="w-2/3">
          {/* Community list */}
          {communitiesList.map((community) => (
            <Card
              key={community.name}
              className="flex justify-between items-center mb-2 p-4 border border-purple-200"
            >
              <div className="flex items-center">
                <Avatar className="mr-4 bg-purple-600 text-white" />
                <div>
                  <h2 className="text-xl font-bold text-purple-600">{community.name}</h2>
                  <p>{community.members} members</p>
                </div>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Subscribe
              </Button>
            </Card>
          ))}
          <Button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white" variant="secondary">
            View More
          </Button>
        </div>

        {/* Sidebar section */}
        <div className="w-1/3 ml-4">
          <Card className="p-4 border border-purple-200">
            <h2 className="text-2xl font-bold text-purple-600">Home</h2>
            <p className="mt-2 text-purple-600">
              Home page personalized based on your subscribed communities.
            </p>
            <Button  className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white">
              Create Post
            </Button>
            <Button variant="secondary" className="mt-2 w-full bg-purple-500 hover:bg-purple-600 text-white">
              Create Community
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

