import { baseURL } from "@/lib/axios";
import { Comment, Community, PaginationResponse, Post, Tag } from "@/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE = "_jwt___";

/**
 * @description Utility to fetch data in server components (In client components, use 'use-axios' hook instead)
 * @param endpoint API endpoint to hit
 * @param T A generic return type
 * */
export const fetchServer = async <T>(endpoint: string) => {
  const cookie = cookies().get(COOKIE);
  const cookieHeader = `${cookie?.name}=${cookie?.value}`;
  try {
    const response = await fetch(baseURL + endpoint, {
      /**
       * send auth cookie header, So that we can get data based on user authentication.
       * If authenticated, responds back with user specific info or else returns the public info
       */
      headers: {
        Cookie: cookieHeader,
      },
    });
    const data = await response.json();
    return data.data as T;
  } catch (error: any) {
    console.log(error);
    console.error("❌ Failed to fetch:", error.message);
  }
  return null;
};

/** Fetches all the tags */
export const getAllTags = async () => await fetchServer<Tag[]>("/tag");

/** Fetches all the communities */
export const getAllCommunities = async () =>
  await fetchServer<Community[]>("/community");

/** Fetches all the posts */
export const getAllPosts = async () =>
  await fetchServer<PaginationResponse<Post>>(`/post`);

/** Fetches all the posts by community id */
export const getAllPostsByCommunityID = async (communityId: string) =>
  await fetchServer<PaginationResponse<Post>>(`/post/community/${communityId}`);

/** Fetches all the posts by community name */
export const getAllPostsByCommunityName = async (communityName: string) =>
  await fetchServer<Post[]>(`/post/community/name/${communityName}`);

/** Fetches all the posts by community name */
export const getAllCommentsByPostsId = async (postId: string) =>
  await fetchServer<Comment[]>(`/comment/${postId}`);

/** Fetches community by community name */
export const getCommunityByName = async (communityName: string) =>
  await fetchServer<Community>(`/community/name/${communityName}`);

/** Fetches community by community name */
export const getPostByID = async (postId: string) =>
  await fetchServer<Post>(`/post/${postId}`);
