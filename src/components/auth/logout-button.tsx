"use client";

import { LogOut } from "lucide-react";
import { useAxios } from "@/hooks/use-axios";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/store";
import { logout } from "@/store/features/auth-slice";
import { ReactNode } from "react";
import Spinner from "@/components/globals/spinner";
import { useRouter } from "next/navigation";

type LogoutButtonProps = {
  children?: ReactNode;
  className?: string;
  redirectPath?: string;
};

const LogoutButton = ({
  children,
  redirectPath,
  className,
}: LogoutButtonProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { mutate, loading } = useAxios();
  const handleClick = async () => {
    dispatch(logout());
    const { data } = await mutate("post", "/auth/logout");
    if (data) {
      toast.info(data.message);
    }
    if (redirectPath) {
      router.replace(redirectPath);
    }
  };
  return (
    <button disabled={loading} className={cn(className)} onClick={handleClick}>
      {loading ? (
        <Spinner />
      ) : (
        children ?? (
          <div className="flex items-center gap-3">
            <LogOut size={"1.1rem"} />
            Logout
          </div>
        )
      )}
    </button>
  );
};

export default LogoutButton;
