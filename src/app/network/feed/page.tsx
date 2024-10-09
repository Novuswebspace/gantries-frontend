import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Image,
  Paperclip,
  Smile,
  Heart,
  MessageCircle,
  Send,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-4">
          {/* Post Creation */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="User"
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <Input
                  placeholder="Tell people about the new skill..."
                  className="flex-grow"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    {/* <Image className="h-5 w-5" /> */}
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Smile className="h-5 w-5" />
                  </Button>
                </div>
                <Button className="bg-purple-600 text-white hover:bg-purple-700">
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* New to you */}
          <Card>
            <CardHeader>
              <CardTitle>New to you</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {["Aryan", "Shreya"].map((name, index) => (
                <div
                  key={index}
                  className="border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center space-x-4 mb-2">
                    <Avatar>
                      <AvatarImage
                        src={`/placeholder.svg?height=40&width=40`}
                        alt={name}
                      />
                      <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{name}</span>
                  </div>
                  <p className="mb-2">
                    I'm happy to announce that I participated in XYZ competition
                    and won a silver medal...
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="bg-green-100 h-20 rounded"></div>
                    <div className="bg-green-100 h-20 rounded"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-blue-100 h-10 rounded"></div>
                    <div className="bg-blue-100 h-10 rounded"></div>
                    <div className="bg-blue-100 h-10 rounded"></div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <Button variant="ghost" size="sm">
                      <Heart className="h-4 w-4 mr-2" />
                      Like
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      21 Comments
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Send className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Your Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Completed Projects</span>
                  <span>25%</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Questions Solved</span>
                  <span>40%</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Your Communities */}
          <Card>
            <CardHeader>
              <CardTitle>Your Communities</CardTitle>
            </CardHeader>
            <CardContent>
              {[
                "JSSTU Student Community",
                "Mysore Student Community",
                "IEEE Student Community",
              ].map((community, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 mb-4 last:mb-0"
                >
                  <Avatar>
                    <AvatarImage
                      src={`/placeholder.svg?height=40&width=40`}
                      alt={community}
                    />
                    <AvatarFallback>{community[0]}</AvatarFallback>
                  </Avatar>
                  <span>{community}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* You may also Like */}
          <Card>
            <CardHeader>
              <CardTitle>You may also Like</CardTitle>
            </CardHeader>
            <CardContent>
              {["VVCE Student Community", "NIE Student Community"].map(
                (community, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between mb-4 last:mb-0"
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage
                          src={`/placeholder.svg?height=40&width=40`}
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
