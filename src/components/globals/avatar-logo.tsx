import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AvatarLogoProps = {
  src?: string;
  alt?: string;
  className?: string;
  fallback?: string | JSX.Element;
};

const AvatarLogo = ({ src, alt, fallback, className }: AvatarLogoProps) => {
  return (
    <Avatar className={cn("w-6 h-6 rounded-full object-cover", className)}>
      <AvatarImage
        src={src}
        alt={alt || "alt"}
        className={"w-full h-full rounded-full object-cover"}
        loading="lazy"
      />
      <AvatarFallback
        asChild={typeof fallback !== "string"}
        className="w-full h-full rounded-full border border-gray-400"
      >
        {fallback}
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarLogo;
