import { notFound } from "next/navigation";
import { Users } from "lucide-react";
import { slugToString } from "@/util/slug";
import {
  getAllCommunities,
  getAllTags,
  getCommunityByName,
} from "@/service/api-service";
import { Card, CardTitle } from "@/components/ui/card";
import CommunityCard from "@/components/explore/community-card";
import SidecardWrapper from "@/components/explore/sidecard-wrapper";
import AvatarLogo from "@/components/globals/avatar-logo";
import PostCard from "@/components/explore/post-card";
import TagBadge from "@/components/explore/tag-badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ROUTES } from "@/routes";
import { Badge } from "@/components/ui/badge";

type CommunityPageProps = {
  params: { communityName: string };
};

const CommunityPage = async ({ params }: CommunityPageProps) => {
  const communityName = slugToString(params.communityName);
  const community = await getCommunityByName(communityName);
  const communities = await getAllCommunities();
  const tags = await getAllTags();

  if (!community) {
    return notFound();
  }
  return (
    <div className="w-full flex flex-col md:flex-row p-4 gap-4">
      <div className="w-full md:w-[70%] space-y-4">
        <section>
          <Card className="relative h-[25ch] bg-gradient-primary flex flex-col items-center justify-center gap-2 text-white">
            <div className="flex flex-col items-center gap-2">
              <AvatarLogo
                src={community.picture || "/images/nature.jpg"}
                alt={community.name || "community logo"}
                className="w-20 h-20 rounded-full object-cover"
                fallback={<Users className="text-primary p-2" />}
              />
              <CardTitle className="text-white text-4xl font-bold capitalize">
                {communityName}
              </CardTitle>
            </div>
            <div className="text-sm text-white capitalize space-y-2 text-center">
              {community.description}
              <div className="flex items-center gap-2">
                <p>Posts {community.members.length}</p>
                <span>•</span>
                <p>Subscribers {community.subscribers.length}</p>
              </div>
            </div>
            <h3 className="absolute right-4 bottom-2 font-semibold text-xs">
              Created By, {community.createdBy.username}
            </h3>
          </Card>
        </section>
        <section className="">
          <h4 className="text-2xl font-semibold text-primary my-5 pb-3 border-b border-b-primary">
            Top Posts
          </h4>
          <div className="space-y-4">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </section>
      </div>
      <div className="w-full md:w-[30%]">
        <div className="sticky top-[5.5rem] space-y-4">
          <SidecardWrapper title="Top Communities">
            {communities
              ?.filter((community) => community.name !== communityName)
              .slice(0, 5)
              .map((community) => (
                <CommunityCard key={community._id} community={community} />
              ))}
            <div className="w-full flex justify-center">
              <Badge variant={"outline"}>
                <Link href={ROUTES.COMMUNITIES}>View More</Link>
              </Badge>
            </div>
          </SidecardWrapper>
          <SidecardWrapper
            title="Top Topics"
            className="py-4 flex gap-3 justify-around flex-wrap"
          >
            {tags?.slice(0, 10).map((tag) => (
              <TagBadge key={tag._id} tag={tag} />
            ))}
          </SidecardWrapper>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
