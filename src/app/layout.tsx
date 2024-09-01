import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import AppProvider from "@/providers";
import NextTopLoader from "nextjs-toploader";
import { APP } from "@/util/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: APP.TITLE,
    template: `%s | ${APP.TITLE}`, //this will be inherited by every child
  },
  description: APP.DESCRIPTION,
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
