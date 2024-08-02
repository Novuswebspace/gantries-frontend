import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import AppProvider from "@/providers";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gantries by eSamudaay",
  description:
    "The community where young entrepreneurs are building great businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <NextTopLoader color="hsl(var(--primary))" height={5} />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
