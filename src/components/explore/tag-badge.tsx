import Link from "next/link";
import { cn } from "@/lib/utils";
import { Tag } from "@/types";
import { ROUTES } from "@/routes";

type TagBadgeProps = {
  tag: Tag;
  className?: string;
};

const TagBadge = ({ tag, className }: TagBadgeProps) => {
  return (
    <Link href={ROUTES.TAG(tag.name)}>
      <button
        className={cn(
          "rounded-full py-1 px-5 bg-primary/10 border border-primary/30 shadow-md hover:bg-primary hover:text-white transition-all duration-300 ease-in-out capitalize",
          className
        )}
      >
        {tag.name}
      </button>
    </Link>
  );
};

export default TagBadge;
