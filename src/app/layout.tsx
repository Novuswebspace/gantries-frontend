import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import AppProvider from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gantries by eSamudaay",
  description: "The community where young entrepreneurs are building great businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
