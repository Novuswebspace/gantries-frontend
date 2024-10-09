"use client";
import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";


export default function FriendsPage() {
    const friends = [
      { name: "Shreya", message: "Hi, I'm starting a position at..." },
      { name: "Aryan", message: "Hello!" },
      { name: "Bhavik", message: "Hi, I'm starting a position at..." },
    ];
    const communities = [
      { name: "JSSTU Student Community", joined: false },
      { name: "Mysore Student Community", joined: false },
      { name: "IEEE Student Community", joined: false },
    ];

    const suggestedCommunities = [
      { name: "VVCE Student Community", joined: false },
      { name: "NIE Student Community", joined: false },
    ];
    return (
      <div className="flex h-screen bg-gray-100">
        
        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Top Bar */}
          <div className="mb-8">
            <Input className="w-full" placeholder="Search" />
          </div>

          {/* Status Updates */}
          <div className="grid grid-cols-4 gap-2 mb-8">
            <Card>
              <CardContent className="p-4">
                <Input placeholder="Post your Note" />
                <Button className="mt-2" size="sm">
                  Post
                </Button>
              </CardContent>
            </Card>
            {["Shreya", "Aryan", "Bhavik"].map((name, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage
                      src={`/placeholder.svg?height=40&width=40`}
                      alt={name}
                    />
                    <AvatarFallback>{name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{name}</p>
                    <p className="text-sm text-gray-500">
                      Hi, I'm starting a position at...
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Friends and Communities */}
          <div className="grid grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Your Friends</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  {["Shreya", "Aryan", "Bhavik", "Rahul", "Sneha"].map(
                    (friend, index) => (
                      <div key={index} className="flex items-center mb-4">
                        <Avatar className="h-8 w-8 mr-3">
                          <AvatarImage
                            src={`/placeholder.svg?height=32&width=32`}
                            alt={friend}
                          />
                          <AvatarFallback>{friend[0]}</AvatarFallback>
                        </Avatar>
                        <span>{friend}</span>
                      </div>
                    )
                  )}
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Connect with</h4>
                    {["Priya", "Hari"].map((person, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between mb-2"
                      >
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-3">
                            <AvatarImage
                              src={`/placeholder.svg?height=32&width=32`}
                              alt={person}
                            />
                            <AvatarFallback>{person[0]}</AvatarFallback>
                          </Avatar>
                          <span>{person}</span>
                        </div>
                        <Button size="sm">Connect</Button>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Your Communities</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  {[
                    "JSSTU Student Community",
                    "Mysore Student Community",
                    "IEEE Student Community",
                  ].map((community, index) => (
                    <div key={index} className="flex items-center mb-4">
                      <Avatar className="h-8 w-8 mr-3">
                        <AvatarImage
                          src={`/placeholder.svg?height=32&width=32`}
                          alt={community}
                        />
                        <AvatarFallback>{community[0]}</AvatarFallback>
                      </Avatar>
                      <span>{community}</span>
                    </div>
                  ))}
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">You may also Like</h4>
                    {["VVCE Student Community", "NIE Student Community"].map(
                      (community, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between mb-2"
                        >
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-3">
                              <AvatarImage
                                src={`/placeholder.svg?height=32&width=32`}
                                alt={community}
                              />
                              <AvatarFallback>{community[0]}</AvatarFallback>
                            </Avatar>
                            <span>{community}</span>
                          </div>
                          <Button size="sm">Join</Button>
                        </div>
                      )
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
}
