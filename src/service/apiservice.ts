import axios from "@/lib/axios";
import { ApiResponse, Community, PaginationResponse, Post, Student, Tag, User } from "@/types";
import { AxiosRequestConfig } from "axios";

export const fetch = async <T>(
  endpoint: string,
  config?: AxiosRequestConfig
) => {
  try {
    const response = await axios.get<ApiResponse<T>>(endpoint, config);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error?.response?.data.message);
  }
};

export const mutate = async <T>(
  method: "post" | "put" | "delete",
  endpoint: string,
  body: unknown,
  config?: AxiosRequestConfig
) => {
  try {
    const response = await axios[method]<ApiResponse<T>>(
      endpoint,
      body,
      config
    );
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error?.response?.data.message);
  }
};

export const getAllPosts = async () => await fetch<Post[]>("/post");
export const getAllPostsByCommunityId = async (communityId: string) =>
  await fetch<PaginationResponse<Post>>(`/post/community/${communityId}`);
export const getAllCommunities = async () =>
  await fetch<Community[]>("/community");
export const getAllTags = async () => await fetch<Tag[]>("/tag");
export const getCommunityByName = async (communityName: string) =>
  fetch<Community>(`/community/name/${communityName}`);
export const getPostById = async (postId: string) =>
  fetch<Post>(`/post/${postId}`);
export const getUserByID = async (userId: string) =>
  await fetch<User & { student: Student }>(`/user/${userId}`);
