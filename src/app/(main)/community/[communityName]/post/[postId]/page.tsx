import {
  getAllCommentsByPostsId,
  getCommunityByName,
  getPostByID,
} from "@/service/api-service";
import { slugToString } from "@/util/slug";
import PostCard from "@/components/post/post-card";
import CommentSection from "@/components/post/comment-section";

type PostPageProps = {
  params: { communityName: string; postId: string };
};

/** Server component */
export default async function PostPage({ params }: PostPageProps) {
  const communityName = slugToString(params.communityName);
  const community = await getCommunityByName(communityName);
  const post = await getPostByID(params.postId);

  if (!community) throw new Error("Community not found");
  if (!post) throw new Error("Post not found");

  const comments = await getAllCommentsByPostsId(post._id);
  return (
    <div className="flex gap-4 p-4 flex-wrap lg:flex-nowrap">
      <div className="w-full lg:w-3/4">
        {/* Use the PostCard component */}
        <PostCard readMore={false} maxContentLength={"full"} post={post} />
        <CommentSection postId={post._id as string} comments={comments || []} />
      </div>
      <div className="w-full lg:w-1/4">
        <div className="w-full h-full bg-gray-200">
          <h1>Sidebar</h1>
        </div>
      </div>
    </div>
  );
}
