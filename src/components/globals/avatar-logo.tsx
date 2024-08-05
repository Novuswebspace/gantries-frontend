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
    <Avatar className="flex items-center justify-center">
      <AvatarImage
        src={src}
        alt={alt || "alt"}
        className={cn("w-6 h-6 rounded-full object-cover", className)}
      />
      <AvatarFallback
        asChild={typeof fallback !== "string"}
        className="h-7 w-7 bg-primary text-white rounded-full border border-gray-400"
      >
        {fallback}
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarLogo;
