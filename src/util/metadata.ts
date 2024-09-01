import { Metadata } from "next";
import { APP } from "@/util/constants";

export const addMetadata = (metadata: Metadata): Metadata => {
  return {
    ...metadata,
    description: metadata.description ?? APP.DESCRIPTION,
  };
};
