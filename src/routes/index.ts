//add routes here

import { stringToSlug } from "@/util/slug";

export const ROUTES = {
  //Auth Routes
  SIGNIN: "/sign-in",
  SIGNUP: "/sign-up",
  VERIFY: "/verify",

  HOME: "/",
  EXPLORE: "/explore",
  COMMUNITIES: "/communities",

  //Dynamic Routes
  /** @param communityName - community name */
  COMMUNITY: (communityName: string) =>
    `/community/${stringToSlug(communityName)}` as const,

  /** @param tagName - Tag name */
  TAG: (tagName: string) => `/tag/${stringToSlug(tagName)}`,
} as const;
