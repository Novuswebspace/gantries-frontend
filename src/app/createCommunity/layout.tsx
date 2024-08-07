import { ReactNode } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/globals/footer";

const Navbar = dynamic(() => import("@/components/globals/navbar"), {
  ssr: false,
});

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen bg-gray-100/50">
      <Navbar />
      <div className="flex-grow max-w-screen-xl mx-auto w-full">{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
