"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@radix-ui/react-dropdown-menu";
import { Radio } from "lucide-react";
import React, { useState } from "react";

export default function createCommunity() {
  const [communityName, setCommunityName] = useState("");
  const [communityType, setCommunityType] = useState("public");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateCommunity = () => {
    // Handle community creation logic here
    console.log({
      name: communityName,
      type: communityType,
    });
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button
        className="bg-purple-800 hover:bg-purple-600 text-white"
        onClick={() => setIsModalOpen(true)}
      >
        Create Community
      </Button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Create Community</h2>

            {/* Community Name Input */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <Input
                value={communityName}
                onChange={(e) => setCommunityName(e.target.value)}
                placeholder="Community Name"
                maxLength={25}
              />
              <p className="text-gray-500 text-sm mt-1">
                {25 - communityName.length} Characters remaining
              </p>
            </div>

            {/* Community Type Selection */}
            <div className="mb-4">
              <label className="block text-black mb-2">Community Type</label>
              <RadioGroup value={communityType}>
                <Radio className="mb-2">
                  Public{" "}
                  <span className="text-gray-500 text-sm">
                    Everyone can view and post
                  </span>
                </Radio>
                <Radio className="mb-2">
                  Restricted{" "}
                  <span className="text-gray-500 text-sm">
                    Everyone can view but only subscribers can post
                  </span>
                </Radio>
                <Radio>
                  Private{" "}
                  <span className="text-gray-500 text-sm">
                    Only subscribers can view and post
                  </span>
                </Radio>
              </RadioGroup>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end">
              <Button
                variant="secondary"
                className="mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className="bg-purple-800 hover:bg-purple-600 text-white"
                onClick={handleCreateCommunity}
              >
                Create Community
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

