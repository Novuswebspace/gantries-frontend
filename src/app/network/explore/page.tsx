import { getAllCommunities, getAllPosts } from "@/service/api-service";
import CommunityCard from "@/components/community/community-card";
import PostCard from "@/components/post/post-card";
import SidecardWrapper from "@/components/explore/sidecard-wrapper";
import TagsSlider from "@/components/explore/tags-slider";
import Sidebar from "@/components/globals/sidebar";

export default async function ExplorePage() {
  const communities = await getAllCommunities();
  const posts = await getAllPosts();
  return (
    <div className="w-full flex flex-col md:flex-row p-4 gap-4">
      {/* <div className="hidden lg:block w-[20%]">
        <Sidebar className="w-full" />
      </div> */}
      <div className="w-full space-y-4">
        <div className="w-full h-fit flex justify-center items-center gap-4 border border-gray-300 rounded-xl shadow-md bg-white overflow-x-auto px-2">
          <TagsSlider />
        </div>
        <h2 className="text-2xl font-bold text-primary my-5">Recent Posts</h2>
        {posts?.data && posts.data.length > 0 ? (
          posts.data.map((post) => <PostCard key={post._id} post={post} />)
        ) : (
          <p className="text-center font-semibold my-4">No Posts!!</p>
        )}
      </div>
      <div className="w-full md:max-w-[30%]">
        <div className="sticky top-20">
          <SidecardWrapper title="Top Communities">
            {communities?.map((community) => (
              <CommunityCard key={community._id} community={community} />
            ))}
          </SidecardWrapper>
        </div>
      </div>
    </div>
  );
}
