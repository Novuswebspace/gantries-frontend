import { HomeIcon, Sparkles, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/routes";
import NavItem from "@/components/globals/nav-item";

type SidebarProps = {
  className?: string;
};

export default async function Sidebar({ className }: SidebarProps) {
  const commonRoutes = [
    {
      label: "Home",
      href: "/",
      Icon: HomeIcon,
    },
    {
      label: "Explore",
      href: ROUTES.EXPLORE,
      Icon: Sparkles,
    },
    {
      label: "All Communities",
      href: ROUTES.COMMUNITIES,
      Icon: Users,
    },
  ];
  return (
    <aside
      className={cn(
        "sticky top-16 h-screen flex flex-grow flex-col items-start gap-3 border-r border-r-gray-300 p-2 w-full lg:w-[20%]",
        className
      )}
    >
      {commonRoutes.map((route) => (
        <NavItem
          key={route.label}
          label={route.label}
          href={route.href}
          Icon={route.Icon}
        />
      ))}
      <div className="border-b border-b-gray-300 w-full" />
    </aside>
  );
}
