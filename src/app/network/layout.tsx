"use client";

import { PropsWithChildren, Suspense } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/routes";
import dynamic from "next/dynamic";
import Footer from "@/components/globals/footer";
import LoadingScreen from "@/components/globals/loading-screen";
import NavbarSkeleton from "@/components/skeletons/navbar-skeleton";
import SidebarSkeleton from "@/components/skeletons/sidebar-skeleton";

const Navbar = dynamic(() => import("@/components/globals/navbar"), {
  ssr: false,
  loading: () => <NavbarSkeleton />,
});
const Sidebar = dynamic(() => import("@/components/globals/sidebar"), {
  ssr: true,
  loading: () => <SidebarSkeleton />,
});

const NetworkLayout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const isHome = pathname === ROUTES.HOME;
  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Do not show sidebar in /network landing page */}
        {!isHome && <Sidebar className="hidden lg:flex lg:w-[20%]" />}
        <div className={cn("w-full", !isHome && "lg:w-[80%] mx-auto")}>
          <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NetworkLayout;
