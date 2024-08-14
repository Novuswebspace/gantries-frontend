import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

const Spinner = ({
  size = "1.1rem",
  className,
}: {
  size?: string;
  className?: string;
}) => {
  return <Loader size={size} className={cn("animate-spin", className)} />;
};

export default Spinner;
