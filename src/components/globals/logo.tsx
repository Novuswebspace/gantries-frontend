import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  width?: number | `${number}`;
  height?: number | `${number}`;
  className?: string;
};

const Logo = ({ width = 150, height = 150, className }: LogoProps) => {
  return (
    <Image
      src={"/logo.png"}
      alt="logo"
      width={width}
      height={height}
      className={cn("object-contain", className)}
      quality={95}
    />
  );
};

export default Logo;
