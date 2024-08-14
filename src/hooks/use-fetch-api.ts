import { Community, Post } from "@/types";
import { useAxios } from "./use-axios";

const useFetchApi = () => {
  const { loading, fetch } = useAxios();

  const fetchAllPosts = async () => await fetch<Post>("/post");
  const fetchAllCommunities = async () =>
    await fetch<Community[]>("/community");
  const fetchPostById = async (postId:string) => await fetch<Post>(`/post/${postId}`)

  return {
    loading,
    fetchAllPosts,
    fetchAllCommunities,
    fetchPostById
  };
};

export default useFetchApi;
