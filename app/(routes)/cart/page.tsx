import CartContent from "@/components/cart/cartContent";
import Container from "@/components/shared/container";
import { ChevronRight, Home } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import Box from "@/components/shared/box";
import Link from "next/link";

export default function CartPage() {
  // get id
  const { userId } = auth();

  return (
    <div className="h-auto">
      <Container className="my-4 h-full bg-white py-12">
        <div className="size-full space-y-7 px-4 md:px-12">
          <Box className="items-center text-sm text-neutral-700">
            <Link
              href={"/"}
              className="flex items-center gap-2 transition hover:scale-110 hover:text-hero"
            >
              <Home className="size-4" />
              Main page
            </Link>

            <ChevronRight className="size-5 text-muted-foreground" />
            <Link
              href={"/menu"}
              className="flex items-center gap-2 transition hover:scale-110 hover:text-hero"
            >
              Products
            </Link>

            <ChevronRight className="size-5 text-muted-foreground" />
            <span className="flex cursor-pointer items-center gap-2 font-semibold text-hero text-muted-foreground transition hover:scale-110">
              Cart
            </span>
          </Box>

          <CartContent userId={userId} />
        </div>
      </Container>
    </div>
  );
}
