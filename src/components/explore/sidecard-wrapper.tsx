import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type SidecardWrapperProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

const SidecardWrapper = ({
  title,
  children,
  className,
}: SidecardWrapperProps) => {
  return (
    <Card className="rounded-xl shadow-md border border-gray-300">
      <CardHeader className="relative w-full h-[7ch] p-0">
        <Image
          src="/images/network.jpg"
          alt="network image"
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-t-xl bg-black/10"
        />
        <CardTitle className="absolute text-white text-2xl font-bold inset-0 flex items-center justify-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className={cn("px-3 py-2" , className)}>{children}</CardContent>
    </Card>
  );
};

export default SidecardWrapper;
