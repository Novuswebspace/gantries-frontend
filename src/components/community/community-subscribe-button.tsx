"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Bell } from "lucide-react";
import { Community } from "@/types";
import { useAppSelector } from "@/store";
import { useAxios } from "@/hooks/use-axios";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/globals/spinner";
import { useQueryClient } from "@tanstack/react-query";

type CommunitySubscribeButtonProps = {
  community: Community;
  className?: string;
};

/** A Client component which can interact with server */
const CommunitySubscribeButton = ({
  className,
  community,
}: CommunitySubscribeButtonProps) => {
  const { loading, mutate } = useAxios();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const [isSubscribed, setIsSubscribed] = useState(community.isSubscribed);

  const queryClient = useQueryClient();

  const handleSubscribe = async () => {
    const { error, data } = await mutate(
      "post",
      `/community/${community._id}/subscribe`
    );
    if (error) {
      toast.error(error);
      return;
    } else if (data) {
      queryClient.invalidateQueries({
        queryKey: ["community", community.name],
      });
      toast.info(data.message);
      setIsSubscribed(!isSubscribed);
    }
  };
  return (
    <Button
      disabled={loading}
      size={"sm"}
      className={cn(
        "flex justify-center items-center gap-2 rounded-full text-sm",
        className
      )}
      onClick={handleSubscribe}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          <span className="lg:hidden">{isSubscribed ? "Unsubscribe" : "Subscribe"}</span>{" "}
          <Bell size={"1rem"} />
        </>
      )}
    </Button>
  );
};

export default CommunitySubscribeButton;
