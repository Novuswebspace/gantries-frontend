import { getCommunityByName } from "@/service/api-service";
import { slugToString } from "@/util/slug";

type CommunityPageProps = {
  params: { communityName: string };
};

export default async function CommunityPage({ params }: CommunityPageProps) {
  const communityName = slugToString(params.communityName);
  const community = await getCommunityByName(communityName);
  console.log("community", community);
}
