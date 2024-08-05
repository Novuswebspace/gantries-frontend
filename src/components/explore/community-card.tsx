import { Bell, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import AvatarLogo from "../globals/avatar-logo";
import Link from "next/link";

type CommunityCardProps = { showAbout?: boolean };

const CommunityCard = ({ showAbout }: CommunityCardProps) => {
  return (
    <Card className="rounded-xl border border-gray-300 shadow-md p-2 my-2">
      <CardContent className="flex items-center justify-between gap-2 p-0">
        <div className="space-y-2">
          <Link href="/" className="flex items-center gap-2">
            <AvatarLogo
              src="/images/natre.jpg"
              alt="Community Logo"
              className="w-8 h-8"
              fallback={<Users className="p-1.5 bg-primary text-white" />}
            />
            <CardTitle className="text-base hover:underline">Test</CardTitle>
          </Link>
          {showAbout && (
            <CardDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur vero fugit reprehenderit laudantium mollitia.
            </CardDescription>
          )}
        </div>
        <Button
          size={"sm"}
          className="bg-gradient-primary flex items-center gap-1 rounded-full"
        >
          Subscribe <Bell size={"0.9rem"} />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CommunityCard;
