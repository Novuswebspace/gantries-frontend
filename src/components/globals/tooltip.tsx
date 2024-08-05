import { ReactNode } from "react";
import {
  Tooltip as TooltipUI,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type TooltipProps = {
  content: string;
  children: ReactNode;
  align?: "center" | "end" | "start";
  className?: string;
};

export default function Tooltip({
  children,
  content,
  align,
  className,
}: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipUI>
        <TooltipTrigger asChild className={cn(className)}>{children}</TooltipTrigger>
        <TooltipContent align={align}>
          {content}
        </TooltipContent>
      </TooltipUI>
    </TooltipProvider>
  );
}
