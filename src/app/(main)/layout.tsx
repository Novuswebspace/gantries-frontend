import { ReactNode } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/globals/footer";

const Navbar = dynamic(() => import("@/components/globals/navbar"), {
  ssr: false,
});

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col bg-purple-50">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
