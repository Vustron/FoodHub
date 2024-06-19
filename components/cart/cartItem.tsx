"use client";

import useCart from "@/lib/hooks/cart/useCart";
import { Product } from "@/lib/helpers/types";
import Box from "@/components/shared/box";
import { cn } from "@/lib/helpers/utils";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

interface Props {
  item: Product;
}

const CartItem = ({ item }: Props) => {
  // qty state
  const [qty, setQty] = useState(item.qty ?? 1);

  // cart state
  const cart = useCart();

  const handleQty = (num: number) => {
    setQty(num);
    cart.updateItemQuantity(item?.id, num);
  };

  return (
    <Box className="flex items-center gap-4 rounded-lg border border-gray-200 p-3">
      <div className="relative flex aspect-square size-24 min-h-24 min-w-24 items-center justify-center overflow-hidden rounded-md bg-gray-100">
        <Image
          src={item.images[0].url}
          alt={item.name}
          fill
          className="size-full object-contain transition hover:scale-110"
          priority
          sizes="100vh"
        />
      </div>

      <div>
        <h2 className="w-full min-w-44 truncate whitespace-nowrap text-2xl font-semibold text-neutral-700">
          {item.name}
        </h2>

        <div className="mt-4 flex w-full flex-wrap items-center justify-start gap-2">
          {item.cuisine && (
            <div className="rounded-md bg-emerald-500/10 px-2 py-[2px] text-[10px] font-semibold capitalize text-emerald-500">
              {item.cuisine}
            </div>
          )}
          {item.category && (
            <div className="rounded-md bg-blue-500/10 px-2 py-[2px] text-[10px] font-semibold capitalize text-blue-500">
              {item.category}
            </div>
          )}
          {item.kitchen && (
            <div className="rounded-md bg-red-500/20 px-2 py-[2px] text-[10px] font-semibold capitalize text-red-500">
              {item.kitchen}
            </div>
          )}
          {item.size && (
            <div className="rounded-md bg-yellow-500/10 px-2 py-[2px] text-[10px] font-semibold capitalize text-yellow-500">
              {item.size}
            </div>
          )}
        </div>
      </div>

      <Box className="flex h-full items-center">
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              onClick={() => handleQty(num)}
              className={cn(
                "flex size-8 cursor-pointer items-center justify-center rounded-full border border-hero transition hover:scale-110",
                qty === num
                  ? "bg-hero text-white shadow-md"
                  : "bg-transparent shadow-none",
              )}
            >
              {num}
            </div>
          ))}
        </div>
      </Box>

      <Box className="flex h-full items-center justify-center">
        <h2>₱ {item.price * item.qty!}</h2>
      </Box>

      <Button
        size="sm"
        variant="ghost"
        onClick={() => cart.removeItem(item.id)}
        className="cursor-pointer rounded-lg text-muted-foreground transition hover:scale-110 hover:border hover:border-red-500 hover:text-red-500"
      >
        <Trash2 className="size-4" />
      </Button>
    </Box>
  );
};

export default CartItem;
