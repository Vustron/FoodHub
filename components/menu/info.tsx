"use client";

import {
  CookingPot,
  ShoppingCart,
  Soup,
  SquareActivity,
  Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/helpers/types";
import { cn } from "@/lib/helpers/utils";
import { useState } from "react";

interface Props {
  product: Product | undefined;
}

const Info = ({ product }: Props) => {
  // init quantity state
  const [qty, setQty] = useState(1);

  // qty handler
  const handleQty = (num: number) => {
    setQty(num);
  };

  return (
    <div>
      <h1 className="cursor-pointer text-3xl font-bold text-neutral-800 transition hover:scale-110 hover:text-hero">
        {product?.name}
      </h1>

      <div className="my-2 text-left text-base text-neutral-600">
        <span className="text-left text-base text-neutral-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
          sed. Natus ipsa nulla, reprehenderit sunt dicta ipsam nisi, tempore,
          quae possimus dignissimos quis vero delectus dolores aut atque numquam
          architecto!
        </span>
      </div>

      <div className="my-6 flex w-full flex-wrap items-center justify-start gap-2 px-2">
        {product?.cuisine && (
          <div className="flex cursor-pointer flex-row rounded-md bg-emerald-500/10 px-3 py-2 font-semibold text-emerald-500 transition hover:scale-110">
            <CookingPot className="mr-2 size-5" />
            {product?.cuisine}
          </div>
        )}
        {product?.category && (
          <div className="flex cursor-pointer flex-row rounded-md bg-blue-500/10 px-3 py-2 font-semibold text-blue-500 transition hover:scale-110">
            <Soup className="mr-2 size-5" />
            {product?.category}
          </div>
        )}
        {product?.kitchen && (
          <div className="flex cursor-pointer flex-row rounded-md bg-red-500/10 px-3 py-2 font-semibold text-red-500 transition hover:scale-110">
            <Utensils className="mr-2 size-5" />
            {product?.kitchen}
          </div>
        )}
        {product?.size && (
          <div className="flex cursor-pointer flex-row rounded-md bg-yellow-500/10 px-3 py-2 font-semibold text-yellow-500 transition hover:scale-110">
            <SquareActivity className="mr-2 size-5" />
            {product?.size}
          </div>
        )}
      </div>

      <div className="my-12 grid w-full grid-cols-4">
        <div className="col-span-1 space-y-8">
          <p className="text-lg font-semibold text-neutral-700">Price</p>
          <p className="text-lg font-semibold text-neutral-700">Serves</p>
        </div>

        <div className="col-span-3 space-y-8">
          <p className="text-xl font-bold text-black">₱ {product?.price}</p>

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
        </div>
      </div>

      <Button className="flex w-full items-center justify-center gap-3 py-6 text-xl font-semibold transition hover:scale-110 hover:bg-hero hover:text-white">
        Add to Cart <ShoppingCart className="size-5" />
      </Button>
    </div>
  );
};

export default Info;
