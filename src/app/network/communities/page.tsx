"use client";

import CommunitySubscribeButton from "@/components/community/community-subscribe-button";
import { useAxios } from "@/hooks/use-axios";
import axios from "@/lib/axios";
import { getAllCommunities, getAllTags } from "@/service/api-service";
import { ApiResponse, Tag } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Community = {
  _id: string;
  name: string;
  description: string;
  picture?: string;
  createdBy: {
    _id: string;
    username: string;
    email: string;
  };
  subscribersCount: number;
  membersCount: number;
  postsCount: number;
  isSubscribed: boolean;
};

export default function CommunitiesPage() {
  const [selectedtag, setSelectedtag] = useState<Tag | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCommunities, setFilteredCommunities] = useState<Community[]>(
    []
  );
  const [communities, setCommunities] = useState<Community[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const { loading, fetch } = useAxios();

  useEffect(() => {
    fetch<Community[]>("/community")
      .then((res) => setCommunities(res.data?.data || []))
      .catch((err) => err);
    fetch<Tag[]>("/tag")
      .then((res) => setTags(res.data?.data || []))
      .catch((err) => err);
  }, [fetch]);

  const featuredCommunities = communities.slice(0, 2);

  const handletagFilter = (tag: Tag) => {
    setSelectedtag(tag);

    const filtered = filteredCommunities.filter((community) =>
      community.name.toLowerCase().includes(tag.name.toLowerCase())
    );
    setFilteredCommunities(filtered);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = filteredCommunities.filter((community) =>
      community.name.toLowerCase().includes(query)
    );
    setFilteredCommunities(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-[#4b2f79] mb-10">
        Explore Communities
      </h1>

      {/* Featured Communities */}
      <div className="mb-10">
        {/* <h2 className="text-3xl font-semibold text-center text-[#4b2f79] mb-6">
          Featured Communities
        </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCommunities.map((community) => (
            <div
              key={community._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {community.picture && (
                <Image
                  src={community.picture}
                  alt={community.name}
                  width={400}
                  height={250}
                  className="w-full h-64 object-contain"
                />
              )}
              <div className="p-6 capitalize">
                <h2 className="text-2xl font-semibold text-[#4b2f79]">
                  {community.name}
                </h2>
                <p className="text-gray-600 my-2">{community.description}</p>
                <div className="flex items-center justify-between my-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      {community.subscribersCount} Subscribers
                    </p>
                    <p className="text-sm text-gray-500">
                      {community.postsCount} Posts
                    </p>
                  </div>
                  <CommunitySubscribeButton community={community} />
                </div>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  Created by
                  <Link
                    href={`/user/${community.createdBy._id}/profile`}
                    className="underline capitalize"
                  >
                    {community.createdBy.username}
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      {/* <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search communities..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full max-w-lg p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2f79]"
        />
      </div> */}

      {/* tag Filters */}
      {/* <div className="flex justify-center space-x-4 mb-6">
        {tags.map((tag) => (
          <button
            key={tag._id}
            onClick={() => handletagFilter(tag)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedtag === tag
                ? "bg-[#4b2f79] text-white"
                : "bg-gray-200 text-[#4b2f79]"
            }`}
          >
            {tag.name}
          </button>
        ))}
      </div> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCommunities.map((community) => (
          <div
            key={community._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {community.picture && (
              <Image
                src={community.picture}
                alt={community.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#4b2f79]">
                {community.name}
              </h2>
              <p className="text-gray-600 my-2">{community.description}</p>
              <div className="flex items-center justify-between my-4">
                <div>
                  <p className="text-sm text-gray-500">
                    {community.subscribersCount} Subscribers
                  </p>
                  <p className="text-sm text-gray-500">
                    {community.membersCount} Members
                  </p>
                  <p className="text-sm text-gray-500">
                    {community.postsCount} Posts
                  </p>
                </div>
                <CommunitySubscribeButton community={community} />
              </div>
              <p className="text-sm text-gray-400">
                Created by {community.createdBy.username}
              </p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
