import axios from "@/lib/axios";
import { ApiResponse, Community, Post, Tag } from "@/types";

/**
 * @description Utility to fetch data in server components (In client components, use 'use-axios' hook instead)
 * @param endpoint API endpoint to hit
 * @param T A generic return type
 * */
export const fetchServer = async <T>(endpoint: string) => {
  try {
    const response = await axios.get<ApiResponse<T>>(endpoint);
    return response.data.data;
  } catch (error: any) {
    console.error("❌ Failed to fetch:", error.message);
  }
  return null;
};

/** Fetches all the tags */
export const getAllTags = async () => await fetchServer<Tag[]>("/tag");

/** Fetches all the communities */
export const getAllCommunities = async () =>
  await fetchServer<Community[]>("/community");

/** Fetches all the posts by community id */
export const getAllPostsByCommunityID = async (communityId: string) =>
  await fetchServer<Post[]>(`/post/community/${communityId}`);

/** Fetches all the posts by community name */
export const getAllPostsByCommunityName = async (communityName: string) =>
  await fetchServer<Post[]>(`/post/community/name/${communityName}`);

/** Fetches community by community name */
export const getCommunityByName = async (communityName: string) =>
  await fetchServer<Community>(`/community/name/${communityName}`);
