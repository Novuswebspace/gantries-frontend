"use client";

import { Fragment, ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/store";
import { useAxios } from "@/hooks/use-axios";
import { User } from "@/types";
import { ROUTES } from "@/routes";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const { fetch } = useAxios();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace(ROUTES.HOME);
    } else {
      const getMeUser = async () => {
        const { error } = await fetch<User>("/auth/me");
        if (error) {
          // localStorage.removeItem(STORAGE_KEY);
          router.replace(
            ROUTES.SIGNIN +
              `?callback=${
                !pathname.includes(
                  ROUTES.SIGNIN ||
                    ROUTES.VERIFY ||
                    ROUTES.SIGNUP ||
                    ROUTES.BASIC_INFO
                )
                  ? pathname
                  : null
              }`
          );
        }
      };
      getMeUser();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Fragment>{children}</Fragment>;
}
