"use client";

import { Fragment, ReactNode, useEffect } from "react";
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
      // router.replace(ROUTES.HOME);
    } else {
      const getMeUser = async () => {
        const { error, data } = await fetch<User>("/auth/me");
        if (error) {
          // localStorage.removeItem(STORAGE_KEY);
          const pulicRoutes = pathname.includes(
            ROUTES.SIGNIN || ROUTES.VERIFY || ROUTES.SIGNUP || ROUTES.BASIC_INFO
          );
          router.replace(
            `${ROUTES.SIGNIN}${!pulicRoutes ? `?callback=${pathname}` : ""}`
          );
        } else if (data) {
          router.replace(ROUTES.EXPLORE);
        }
      };
      // getMeUser();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Fragment>{children}</Fragment>;
}
