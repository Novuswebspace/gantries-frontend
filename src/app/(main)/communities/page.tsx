"use client"

import Image from "next/image";
import { useState } from "react";

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

const categories = ["Technology", "Art", "Science", "Music"];

const dummyCommunities: Community[] = [
  {
    _id: "1",
    name: "Tech Enthusiasts",
    description: "A community for people who love technology.",
    picture: "/images/tech.jpg", // Replace with actual images or URLs
    createdBy: {
      _id: "u1",
      username: "techguru",
      email: "techguru@example.com",
    },
    subscribersCount: 1500,
    membersCount: 300,
    postsCount: 120,
    isSubscribed: true,
  },
  {
    _id: "2",
    name: "Art & Design",
    description: "Explore the world of art and design.",
    picture: "/images/art.jpg",
    createdBy: {
      _id: "u2",
      username: "artist",
      email: "artist@example.com",
    },
    subscribersCount: 2300,
    membersCount: 500,
    postsCount: 80,
    isSubscribed: false,
  },
  // Add more dummy communities here
];

// Example for featured communities
const featuredCommunities = dummyCommunities.slice(0, 2); // Taking the first two as featured

export default function CommunitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCommunities, setFilteredCommunities] =
    useState<Community[]>(dummyCommunities);

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);

    const filtered = dummyCommunities.filter((community) =>
      community.name.toLowerCase().includes(category.toLowerCase())
    );
    setFilteredCommunities(filtered);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = dummyCommunities.filter((community) =>
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
        <h2 className="text-3xl font-semibold text-center text-[#4b2f79] mb-6">
          Featured Communities
        </h2>
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
                  <button
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      community.isSubscribed
                        ? "bg-[#4b2f79] text-white"
                        : "bg-gray-200 text-[#4b2f79]"
                    }`}
                  >
                    {community.isSubscribed ? "Subscribed" : "Subscribe"}
                  </button>
                </div>
                <p className="text-sm text-gray-400">
                  Created by {community.createdBy.username}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search communities..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full max-w-lg p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2f79]"
        />
      </div>

      {/* Category Filters */}
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryFilter(category)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedCategory === category
                ? "bg-[#4b2f79] text-white"
                : "bg-gray-200 text-[#4b2f79]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    community.isSubscribed
                      ? "bg-[#4b2f79] text-white"
                      : "bg-gray-200 text-[#4b2f79]"
                  }`}
                >
                  {community.isSubscribed ? "Subscribed" : "Subscribe"}
                </button>
              </div>
              <p className="text-sm text-gray-400">
                Created by {community.createdBy.username}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
