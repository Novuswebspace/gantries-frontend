"use client";

import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Community } from "@/types";
import { ROUTES } from "@/routes";
import { useAppSelector } from "@/store";
import { Button } from "@/components/ui/button";

type CreatePostButtonProps = {
  community: Community;
  className?: string;
};

const CreatePostButton = ({ community, className }: CreatePostButtonProps) => {
  const router = useRouter();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const handleClick = () => {
    if (!isAuthenticated) {
      toast.error("You must be logged in to create a post");
      return router.replace(
        `${ROUTES.SIGNIN}?callback=${ROUTES.CREATE_POST(community.name)}`
      );
    }
    if (community.isSubscribed) {
      router.push(ROUTES.CREATE_POST(community.name));
    } else {
      toast.info("Subscribe to create a post");
    }
  };

  return (
    <Button
      size={"sm"}
      className={cn("flex items-center gap-1", className)}
      onClick={handleClick}
    >
      Create Post <Plus size={"1.1rem"} />
    </Button>
  );
};

export default CreatePostButton;
