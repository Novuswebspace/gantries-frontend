import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const CreatePostSkeleton: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <Skeleton className="h-8 w-40 rounded bg-gray-400" /> {/* Title skeleton */}
      
      {/* Title Input Skeleton */}
      <div>
        <Skeleton className="h-6 w-20 mb-2 rounded bg-gray-400" /> {/* Label */}
        <Skeleton className="h-10 w-full rounded bg-gray-300" /> {/* Input */}
      </div>
      
      {/* Content Editor Skeleton */}
      <div>
        <Skeleton className="h-6 w-20 mb-2 rounded bg-gray-400" /> {/* Label */}
        <Skeleton className="h-48 w-full rounded bg-gray-300" /> {/* Editor */}
      </div>

      {/* Image Upload Skeleton */}
      <div>
        <Skeleton className="h-6 w-32 mb-2 rounded bg-gray-400" /> {/* Label */}
        <Skeleton className="h-10 w-full rounded bg-gray-300" /> {/* Input */}
        <div className="mt-2 flex space-x-2">
          <Skeleton className="h-20 w-20 rounded-md bg-gray-300" />
          <Skeleton className="h-20 w-20 rounded-md bg-gray-300" />
          <Skeleton className="h-20 w-20 rounded-md bg-gray-300" />
        </div>
      </div>

      {/* Tags Input Skeleton */}
      <div>
        <Skeleton className="h-6 w-20 mb-2 rounded bg-gray-400" /> {/* Label */}
        <div className="flex items-center space-x-2 mt-1">
          <Skeleton className="h-10 w-full rounded bg-gray-300" /> {/* Input */}
          <Skeleton className="h-10 w-20 rounded bg-gray-400" /> {/* Button */}
        </div>
        <div className="mt-2 flex space-x-2">
          <Skeleton className="h-8 w-20 rounded-full bg-gray-300" />
          <Skeleton className="h-8 w-20 rounded-full bg-gray-300" />
          <Skeleton className="h-8 w-20 rounded-full bg-gray-300" />
        </div>
      </div>

      {/* Submit Button Skeleton */}
      <div>
        <Skeleton className="h-10 w-32 rounded bg-gray-400" /> {/* Button */}
      </div>
    </div>
  );
};

export default CreatePostSkeleton;
