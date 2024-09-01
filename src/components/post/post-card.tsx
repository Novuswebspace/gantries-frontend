"use client";

import Link from "next/link";
import moment from "moment";
import Markdown from "react-markdown";
import { useState } from "react";
import { toast } from "sonner";
import { Heart, Users } from "lucide-react";
import { Post } from "@/types";
import { ROUTES } from "@/routes";
import { useAxios } from "@/hooks/use-axios";
import { getMarkdown } from "@/util/markdown";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AvatarLogo from "@/components/globals/avatar-logo";
import ImageGrid from "@/components/post/image-grid";
import SharePost from "@/components/post/share-post";

type PostCardProps = {
  readMore?: boolean;
  maxContentLength?: number | "full";
  post: Post;
};

const PostCard = ({
  readMore = false,
  maxContentLength = 250,
  post,
}: PostCardProps) => {
  post.content =
    maxContentLength === "full"
      ? post.content
      : post.content.substring(0, maxContentLength);

  const { loading, mutate } = useAxios();

  const [likeCount, setLikeCount] = useState(post.likeCount);
  const [isLiked, setIsLiked] = useState(post.isLiked);

  const handleLikePost = async () => {
    const prevValue = isLiked;
    setIsLiked(!isLiked); //for optimistic update
    const { error, data } = await mutate<Post & { hasLiked: boolean }>(
      "post",
      `/post/${post._id}/like`
    );
    if (error) {
      toast.error(error);
      setIsLiked(prevValue);
    } else if (data) {
      toast.success(data.message);
      setIsLiked(data.data.isLiked);
      setLikeCount(data.data.likeCount);
    }
  };

  if (!post) {
    return null;
  }
  return (
    <Card className="p-4 flex gap-2.5 md:gap-8 border border-gray-300 shadow-lg rounded-xl">
      <div>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 p-0 text-sm mb-5">
          <div className="flex items-center gap-2">
            {/* Community Logo */}
            <AvatarLogo
              src={post.community?.picture || "/images/nature.jpg"}
              alt="Community Logo"
              className="w-8 h-8"
              fallback={<Users className="p-2 bg-primary text-white" />}
            />
            <Link
              href={ROUTES.COMMUNITY(post.community?.name)}
              className="font-bold hover:underline text-primary text-lg capitalize"
            >
              {post.community?.name}
            </Link>
          </div>
          <div className="flex gap-2 items-center capitalize">
            <p className="flex items-center gap-1">
              •&nbsp;By
              <Link
                href={`/user/${post.createdBy._id}/profile`}
                className="hover:underline"
              >
                {post.createdBy?.username}
              </Link>
              &nbsp;•
            </p>
            <p className="text-gray-500">
              Posted {moment(post?.createdAt).fromNow()}
            </p>
          </div>
        </div>
        {/* Content */}
        <CardContent className="space-y-4 p-0">
          {post.images?.length > 0 && <ImageGrid imgs={post.images} />}
          <div className="space-y-3">
            <Link
              href={ROUTES.POST_PAGE(post.community?.name, post._id)}
              className="hover:underline"
            >
              <CardTitle className="capitalize">{post?.title}</CardTitle>
            </Link>
            <div className="text-black text-justify w-full pr-12 leading-loose">
              <span>
                <Markdown components={{ p: "span" }}>
                  {getMarkdown(post.content)}
                </Markdown>
              </span>
              {readMore && (
                <>
                  <span>....&nbsp;</span>
                  <Link
                    href={ROUTES.POST_PAGE(post.community?.name, post._id)}
                    className="hover:underline text-primary"
                  >
                    Read more
                  </Link>
                </>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {post.tags?.map((tag) => (
                <Link href={ROUTES.TAG(tag.name)} key={tag._id}>
                  <Badge className="capitalize">{tag.name}</Badge>
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="mt-4 w-full flex justify-start gap-6 p-0">
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={handleLikePost}
            className="flex items-center gap-1 text-primary border border-gray-200 "
          >
            <Heart
              size={"1.1rem"}
              color="red"
              fill={isLiked ? "red" : "white"}
            />{" "}
            Like
          </Button>
          <SharePost post={post} />
          {/* <Button
            variant={"ghost"}
            size={"sm"}
            className="flex items-center gap-1 text-destructive border border-gray-200"
          >
            <Trash size={"1.1rem"} /> Delete
          </Button> */}
        </CardFooter>
      </div>
    </Card>
  );
};

export default PostCard;
