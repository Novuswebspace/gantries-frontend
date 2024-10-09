import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Phone, Video, Image, Paperclip } from "lucide-react";

export default function MessagingPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top Search Bar */}
      <div className="bg-white p-4 shadow-sm">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-10" placeholder="Search" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 max-w-6xl mx-auto w-full bg-white shadow-lg">
        {/* Left Sidebar */}
        <div className="w-1/3 border-r">
          <div className="p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input className="pl-10" placeholder="Search in messages" />
            </div>
            <ScrollArea className="h-[calc(100vh-180px)]">
              {[
                { name: "Shreya", message: "Yes" },
                {
                  name: "Aryan",
                  message: "Hello I'm studying in Xyz University....",
                },
                { name: "Deepika", message: "Ok", isRead: true },
              ].map((chat, index) => (
                <div key={index} className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage
                      src={`/placeholder.svg?height=40&width=40`}
                      alt={chat.name}
                    />
                    <AvatarFallback>{chat.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">{chat.name}</p>
                    <p className="text-sm text-gray-500 truncate">
                      {chat.isRead && <span className="mr-1">✓</span>}
                      {chat.message}
                    </p>
                  </div>
                </div>
              ))}
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">
                  Message your other friends!
                </p>
                <div className="flex space-x-2">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="text-center">
                      <Avatar>
                        <AvatarImage
                          src={`/placeholder.svg?height=40&width=40`}
                          alt="Bhavik"
                        />
                        <AvatarFallback>B</AvatarFallback>
                      </Avatar>
                      <p className="text-xs mt-1">Bhavik</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage
                  src={`/placeholder.svg?height=40&width=40`}
                  alt="Deepika"
                />
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
              <span className="font-medium">Deepika</span>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Chat Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              <div className="flex justify-end">
                <Card className="bg-purple-100 max-w-[70%]">
                  <CardContent className="p-3">
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipiscing eli
                      mattis sit phasellus mollis sit aliquam sit nullam neque
                      ultrices.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-start">
                <Card className="bg-gray-100 max-w-[70%]">
                  <CardContent className="p-3">
                    <p className="text-sm">Yes</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Image className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Input className="flex-1" placeholder="Type a message..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
