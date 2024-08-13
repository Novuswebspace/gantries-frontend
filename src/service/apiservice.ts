export const ENDPOINTS = {
  //Tag endpoints
  ALL_TAGS: "/tag",

  //community endpoints
  ALL_COMMUNITIES: "/community",
  ALL_COMMENTS_BY_POST_ID: (postId: string) => `/comment/${postId}`,
  COMMUNITY_BY_COMMUNITY_NAME: (communityName: string) =>
    `/community/name/${communityName}`,

  //post endpoints
  ALL_POSTS: "/post",
  ALL_POSTS_BY_COMMUNITY_ID: (communityId: string) =>
    `/post/community/${communityId}`,
  ALL_POSTS_BY_COMMUNITY_NAME: (communityName: string) =>
    `/post/community/name/${communityName}`,
  POST_BY_POST_ID: (postId: string) => `/post/${postId}`,
};
