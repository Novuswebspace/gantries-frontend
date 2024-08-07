import { Skeleton } from "@/components/ui/skeleton";

const NavbarSkeleton = () => {
  return (
    <div className="bg-gray-200 w-full p-4">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-9 w-60 rounded-xl bg-gray-400" />
          <Skeleton className="h-9 w-20 rounded-xl bg-gray-400" />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-9 w-20 rounded-xl bg-gray-400" />
          <Skeleton className="h-9 w-20 rounded-xl bg-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default NavbarSkeleton
