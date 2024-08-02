"use client";

import { Fragment, ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store";
import { useAxios } from "@/hooks/use-axios";
import { User } from "@/types";
import { ROUTES } from "@/routes";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const { fetch } = useAxios();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace(ROUTES.HOME);
    } else {
      const getMeUser = async () => {
        const { error } = await fetch<User>("/auth/me");
        if (error) {
          router.replace(ROUTES.SIGNIN);
        }
      };
      getMeUser();
    }
  }, [fetch, isAuthenticated, router]);

  return <Fragment>{children}</Fragment>;
}
