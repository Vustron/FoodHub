"use client";

import useMounted from "@/lib/hooks/misc/useMounted";
import { Button } from "@/components/ui/button";
import useCart from "@/lib/hooks/cart/useCart";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";

const CartActionButton = () => {
  // hydration fix
  const isMounted = useMounted();

  const cart = useCart();
  const router = useRouter();

  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-4 flex items-center justify-center gap-x-4">
      <Button
        className="rounded-full transition hover:scale-110"
        onClick={() => router.replace("/cart")}
      >
        <ShoppingBag className="size-4 text-white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default CartActionButton;
