import { Bell, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import AvatarLogo from "../globals/avatar-logo";
import Link from "next/link";
import { Community } from "@/types";
import { ROUTES } from "@/routes";

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
        <Button
          size={"sm"}
          className="bg-gradient-primary flex items-center gap-1 rounded-full"
        >
          <span className="hidden lg:block">Subscribe</span>{" "}
          <Bell size={"0.9rem"} />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CommunityCard;
