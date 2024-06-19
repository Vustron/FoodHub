"use client";

import { UserButton, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import CartActionButton from "@/components/cart/cartAction";
import Container from "@/components/shared/container";
import MainNav from "@/components/shared/mainNav";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/helpers/utils";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  userId: string | null;
}

const Header = ({ userId }: Props) => {
  // scroll state
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "z-50 w-full transition",
        scrolled ? "fixed left-0 top-0 bg-white shadow-lg" : "bg-transparent",
      )}
    >
      <Container>
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-12">
          <Image
            src="/logo.svg"
            alt="logo"
            priority
            width={40}
            height={40}
            className="size-[40px] object-contain"
          />

          <Link
            href={"/"}
            className="ml-1 flex gap-x-2 text-lg font-bold uppercase text-neutral-700 md:text-xl"
          >
            <span className="text-hero transition hover:scale-110">
              FoodHub
            </span>
          </Link>

          {/* Main Nav */}
          <MainNav scrolled={scrolled} />

          {/* user */}
          {userId ? (
            <div className="ml-4 flex items-center space-x-4">
              <ClerkLoaded>
                <UserButton afterSignOutUrl="/" />
              </ClerkLoaded>

              <ClerkLoading>
                <Loader2 className="animate-spin text-slate-400" />
              </ClerkLoading>
            </div>
          ) : (
            <div className="ml-4 flex items-center space-x-2">
              <Link href={"/sign-in"}>
                <Button variant="outline">Sign-in</Button>
              </Link>
              <Link href={"/sign-in"}>
                <Button
                  variant="outline"
                  className="bg-green-400 text-black hover:bg-green-500"
                >
                  Sign-up
                </Button>
              </Link>
            </div>
          )}

          {userId && <CartActionButton />}
        </div>
      </Container>
    </header>
  );
};

export default Header;
