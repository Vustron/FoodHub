import ToastProvider from "@/components/providers/toast_provider";
import QueryProvider from "@/components/providers/query_provider";
import Header from "@/components/shared/header";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Urbanist } from "next/font/google";
import { cn } from "@/lib/helpers/utils";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/shared/footer";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });

export const metadata: Metadata = {
  title: "FoodHub",
  description: "Have foods and share love",
};

export const revalidate = 0;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // get userId
  const { userId } = auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo.svg" sizes="any" />
        </head>
        <body className={cn("bg-background antialiased", urbanist.variable)}>
          <QueryProvider>
            <ToastProvider />

            {/* Hero */}
            <img
              src={"/hero.svg"}
              alt="hero"
              className="absolute right-0 top-0 -z-10 w-full md:w-[60%]"
            />

            {/* Header */}
            <Header userId={userId} />
            {children}

            {/* Footer */}
            <Footer />
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
