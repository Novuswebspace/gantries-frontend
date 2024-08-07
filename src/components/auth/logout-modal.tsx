import { LogOut } from "lucide-react";
import { toast } from "sonner";
import { useAppDispatch } from "@/store";
import { logout } from "@/store/features/auth-slice";
import { useAxios } from "@/hooks/use-axios";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const LogoutModal = () => {
  const { mutate } = useAxios();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    const { data } = await mutate("post", "/auth/logout");
    toast.info(data?.message || "Logged out successfully!");
    dispatch(logout());
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="flex items-center gap-3 p-2 text-sm">
          <LogOut size={"1.1rem"} />
          <span>Logout</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-sm">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Are you sure want to logout?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="w-full flex justify-center items-center gap-6">
            <AlertDialogCancel>No</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button size={"sm"} onClick={handleLogout}>
                Yes
              </Button>
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutModal;
