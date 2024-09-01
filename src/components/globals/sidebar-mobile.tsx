import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

export default function SidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <Menu className="w-5 h-5 lg:hidden" />
        </button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0">
        <Sidebar className="border-none" />
      </SheetContent>
    </Sheet>
  );
}
