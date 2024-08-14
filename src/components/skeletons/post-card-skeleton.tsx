import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const PostCardSkeleton = () => {
  return (
    <Card className="p-4 flex gap-2.5 md:gap-8 border border-gray-300 shadow-lg rounded-xl">
      <div className="flex flex-col gap-5 items-center">
        <div className="flex flex-col gap-5 items-center">
          <Skeleton className="w-6 h-6" />
          <Skeleton className="w-8 h-4" />
          <Skeleton className="w-6 h-6" />
        </div>
      </div>
      <div>
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 p-0 text-sm mb-5">
          <div className="flex items-center gap-2">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-24 h-6" />
          </div>
          <div className="flex gap-2 items-center">
            <Skeleton className="w-40 h-6" />
          </div>
        </div>
        {/* Content Skeleton */}
        <CardContent className="space-y-4 p-0">
          <Skeleton className="w-full h-64 rounded-xl max-w-2xl" />
          <div className="space-y-3">
            <Skeleton className="w-full h-6" />
            <Skeleton className="w-full h-20" />
          </div>
        </CardContent>
        <CardFooter className="mt-4 w-full flex justify-start gap-6 p-0">
          <Skeleton className="w-16 h-8 rounded-md" />
          <Skeleton className="w-16 h-8 rounded-md" />
        </CardFooter>
      </div>
    </Card>
  );
};

export default PostCardSkeleton;
