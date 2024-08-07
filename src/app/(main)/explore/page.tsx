import { getAllCommunities } from "@/service/api-service";
import CommunityCard from "@/components/explore/community-card";
import PostCard from "@/components/explore/post-card";
import SidecardWrapper from "@/components/explore/sidecard-wrapper";
import TagsSlider from "@/components/explore/tags-slider";

const ExplorePage = async () => {
  const communities = await getAllCommunities();
  return (
    <div className="w-full flex flex-col md:flex-row p-4 gap-4">
      <div className="w-full md:w-[70%] space-y-4">
        <div className="w-full h-fit flex justify-center items-center gap-4 border border-gray-300 rounded-xl shadow-md bg-white overflow-x-auto px-2">
          <TagsSlider />
        </div>
        <PostCard />
      </div>
      <div className="w-full md:w-[30%]">
        <SidecardWrapper title="Top Communities">
          {communities?.map((community) => (
            <CommunityCard key={community._id} community={community} />
          ))}
        </SidecardWrapper>
      </div>
    </div>
  );
};

export default ExplorePage;
