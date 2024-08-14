//add routes here

import { stringToSlug } from "@/util/slug";

export const ROUTES = {
  //Auth Routes
  SIGNIN: "/sign-in",
  SIGNUP: "/sign-up",
  VERIFY: "/verify",
  BASIC_INFO: "/basic-info",

  HOME: "/",
  EXPLORE: "/explore",
  COMMUNITIES: "/communities",

  //Dynamic Routes
  /** @param communityName - community name */
  COMMUNITY: (communityName: string) =>
    `/community/${stringToSlug(communityName)}` as const,

  /** @param tagName - Tag name */
  TAG: (tagName: string) => `/tag/${stringToSlug(tagName)}`,

  /**
   * @param  communityName - community name
   * @param postId - post ID
   */
  POST_PAGE: (communityName: string, postId: string) =>
    `/community/${stringToSlug(communityName)}/post/${postId}` as const,

  /** @param communityName - community name */
  CREATE_POST: (communityName: string) =>
    `/community/${stringToSlug(communityName)}/post/create` as const,
} as const;
