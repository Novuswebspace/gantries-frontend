import dynamic from "next/dynamic";
import { slugToString } from "@/util/slug";
import { getAllTags, getCommunityByName } from "@/service/api-service";
import CreatePostSkeleton from "@/components/skeletons/create-post-skeleton";
import { notFound } from "next/navigation";

type CreatePostPageProps = {
  params: { communityName: string };
};

const CreatePostForm = dynamic(
  () => import("@/components/post/create-post-form"),
  { ssr: false, loading: () => <CreatePostSkeleton /> }
);

export default async function CreatePostPage({ params }: CreatePostPageProps) {
  const communityName = slugToString(params.communityName);
  const community = await getCommunityByName(communityName);
  const tags = await getAllTags()
  if(!community){
    return notFound()
  }
  return (
    <div>
      <CreatePostForm communityId={community._id} tags={tags!} />
    </div>
  );
}
