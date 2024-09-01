import Link from "next/link";
import { Users } from "lucide-react";
import { Community } from "@/types";
import { ROUTES } from "@/routes";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import AvatarLogo from "@/components/globals/avatar-logo";
import CommunitySubscribeButton from "@/components/community/community-subscribe-button";

type CommunityCardProps = { showAbout?: boolean; community: Community };

const CommunityCard = ({ community, showAbout }: CommunityCardProps) => {
  return (
    <Card className="rounded-xl border border-gray-300 shadow-md p-2 my-2">
      <CardContent className="flex items-center justify-between gap-2 p-0">
        <div className="space-y-2">
          <Link
            href={ROUTES.COMMUNITY(community.name)}
            className="flex items-center gap-2"
          >
              <AvatarLogo
                src={community.picture}
                alt={community.name || "Community Logo"}
                className="w-8 h-8 border border-gray-200"
                fallback={<Users className="p-1.5 bg-primary text-white" />}
              />
              <CardTitle className="text-base hover:underline capitalize">
                {community.name}
              </CardTitle>
          </Link>
          {showAbout && (
            <CardDescription>{community.description}</CardDescription>
          )}
          </div>
        {/* Subscribe button */}
        <CommunitySubscribeButton
          community={community}
          className="bg-gradient-primary"
        />
      </CardContent>
    </Card>
  );
};

export default CommunityCard;
