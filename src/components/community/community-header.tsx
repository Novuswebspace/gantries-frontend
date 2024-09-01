import { Users } from "lucide-react";
import { Community } from "@/types";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AvatarLogo from "@/components/globals/avatar-logo";
import CommunitySubscribeButton from "@/components/community/community-subscribe-button";

/** A server component that renders community details */
const CommunityHeader = ({ community }: { community: Community }) => {
  return (
    <section>
      <Card className="relative h-fit lg:h-[20ch] py-2 bg-gradient-primary flex items-center px-6 text-white">
        <div className="flex flex-col lg:flex-row items-center gap-4 max-w-md">
          <AvatarLogo
            src={community.picture || "/images/nature.jpg"}
            alt={community.name || "community logo"}
            className="w-32 h-32 rounded-full object-cover border border-gray-600 shadow-lg"
            fallback={<Users className="text-primary p-2" />}
          />
          <div className="space-y-2">
            <CardTitle className="text-3xl font-bold capitalize text-center lg:text-start">
              {community.name}
            </CardTitle>
            <div className="text-white text-sm capitalize space-y-2">
              <div>
                {community.description}{" "}
                <Badge
                  role="button"
                  variant={"outline"}
                  className="text-white text-xs"
                >
                  more
                </Badge>
              </div>
              <p className="flex items-center gap-2">
                <span>Posts {community.postsCount}</span>
                <span>•</span>
                <span>Subscribers {community.subscribersCount}</span>
                <span>•</span>
                <span>Members {community.membersCount}</span>
              </p>
            </div>
            <CommunitySubscribeButton community={community} />
          </div>
        </div>

        <h3 className="absolute right-4 bottom-2 font-semibold text-xs">
          Created By, {community.createdBy.username}
        </h3>
      </Card>
    </section>
  );
};

export default CommunityHeader;
