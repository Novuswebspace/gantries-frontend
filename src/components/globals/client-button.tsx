"use client";

import { ReactNode } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type ClientButtonProps = {
  children: ReactNode;
  actionFn: () => void;
  className?:string
};

/** A Client side rendered button can be used in server component for any interactivity
 * @param children A react node
 * @param actionFn A callback function to execute in client
 * @param className classname for styles
 */
const ClientButton = ({ children, actionFn ,className }: ClientButtonProps) => {
  return <Button onClick={actionFn} className={cn(className)}>{children}</Button>;
};

export default ClientButton;
