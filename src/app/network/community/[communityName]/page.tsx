import Link from "next/link";
import dynamic from "next/dynamic";
import { slugToString } from "@/util/slug";
import { ROUTES } from "@/routes";
import {
  getAllCommunities,
  getAllPostsByCommunityID,
  getAllTags,
  getCommunityByName,
} from "@/service/api-service";
import { Badge } from "@/components/ui/badge";
import CommunityCard from "@/components/community/community-card";
import SidecardWrapper from "@/components/explore/sidecard-wrapper";
import TagBadge from "@/components/explore/tag-badge";
import CommunityHeader from "@/components/community/community-header";
import PostCardSkeleton from "@/components/skeletons/post-card-skeleton";
import CreatePostButton from "@/components/post/create-post-button";

const PostCard = dynamic(() => import("@/components/post/post-card"), {
  ssr: false,
  loading: () => <PostCardSkeleton />,
});

type CommunityPageProps = {
  params: { communityName: string };
};

//server component
export default async function CommunityPage({ params }: CommunityPageProps) {
  const communityName = slugToString(params.communityName);
  const community = await getCommunityByName(communityName);

  if (!community) {
    throw new Error("Community not found!!");
  }

  const tags = await getAllTags(); //fetch all tags
  const communities = await getAllCommunities(); //fetch all communities
  const posts = await getAllPostsByCommunityID(community._id); //fetch all posts associated with the community

  const displayCommunities = communities
    ?.filter((community) => community.name !== communityName)
    .slice(0, 5);

  return (
    <div className="w-full flex flex-col md:flex-row p-4 gap-4">
      <div className="w-full md:w-[70%] space-y-4">
        {/* Community Header */}
        <CommunityHeader community={community} />
        <section className="">
          <div className="flex items-center justify-between border-b border-b-primary">
            <h4 className="text-2xl font-semibold text-primary my-5">
              Top Posts
            </h4>
            <CreatePostButton community={community} />
          </div>
          <div className="space-y-4 mt-4">
            {posts?.data && posts.data.length > 0 ? (
              posts.data.map((post) => (
                <PostCard
                  key={post._id}
                  post={post}
                  readMore={post.content.length > 300}
                />
              ))
            ) : (
              <p className="text-center font-semibold my-4">No posts!!</p>
            )}
          </div>
        </section>
      </div>
      <div className="w-full md:w-[30%]">
        <div className="sticky top-[5.5rem] space-y-4">
          <SidecardWrapper title="Top Communities">
            {displayCommunities?.map((community) => (
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
}
