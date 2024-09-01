import { Skeleton } from "@/components/ui/skeleton";

export default function SidebarSkeleton() {
  return (
    <Skeleton className="sticky top-16 h-screen flex flex-col items-start gap-3 border-r border-r-gray-300 p-2 w-full lg:w-[20%] bg-gray-200">
      {/* Skeletons for the top nav items */}
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton key={index} className="h-8 w-full rounded bg-gray-400" />
      ))}

      <div className="border-b border-b-gray-300 w-full my-2" />

      {/* Skeletons for the bottom nav items */}
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index + 5} className="h-8 w-full rounded bg-gray-400" />
      ))}
    </Skeleton>
  );
}
