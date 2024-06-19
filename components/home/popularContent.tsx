"use client";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Heart, HeartCrack, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/helpers/types";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useCart from "@/lib/hooks/cart/useCart";

interface Props {
  data: Product;
}

const PopularContent = ({ data }: Props) => {
  // add to wishlist state
  const [isLiked, setIsLiked] = useState(false);

  // wishlist handler
  const likeHandler = () => {
    if (!isLiked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };

  // cart handler
  const cart = useCart();

  const addToCart = (data: Product) => {
    cart.addItem({ ...data, qty: 1 });
  };

  return (
    <Card className="relative flex max-h-[340px] flex-col items-center justify-center rounded-md border-none bg-white py-6 pt-24 shadow-lg md:pt-28">
      <div className="absolute -top-[4%] flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-hero p-1 md:-top-[20%] md:h-40 md:w-40 md:p-2">
        <div className="relative size-full rounded-full bg-white">
          <Image
            className="size-full object-contain transition hover:scale-110"
            fill
            alt={data.name}
            src={data.images[0].url}
            loading="lazy"
            blurDataURL="data:image/jpeg..."
            placeholder="blur"
            sizes="(min-width: 808px) 50vw, 100vw"
          />
        </div>
      </div>

      <Link href={`/menu/${data.id}`} className="w-full px-2 text-center">
        <CardTitle className="w-full truncate text-neutral-700 hover:text-hero hover:underline">
          {data.name}
        </CardTitle>
      </Link>

      <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-2 px-1">
        {data.cuisine && (
          <div className="rounded-md bg-emerald-500/10 px-2 py-[2px] text-[10px] font-semibold capitalize text-emerald-500">
            {data.cuisine}
          </div>
        )}
        {data.category && (
          <div className="rounded-md bg-blue-500/10 px-2 py-[2px] text-[10px] font-semibold capitalize text-blue-500">
            {data.category}
          </div>
        )}
        {data.kitchen && (
          <div className="rounded-md bg-red-500/20 px-2 py-[2px] text-[10px] font-semibold capitalize text-red-500">
            {data.kitchen}
          </div>
        )}
        {data.size && (
          <div className="rounded-md bg-yellow-500/10 px-2 py-[2px] text-[10px] font-semibold capitalize text-yellow-500">
            {data.size}
          </div>
        )}
      </div>

      <CardDescription className="my-2 px-2 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nobis
        saepe molestias id in animi aperiam minus vero autem assumenda officia.
      </CardDescription>

      <div className="mb-4 mt-4 flex w-full items-center gap-3 px-2">
        <Button
          variant="outline"
          className="rounded-full text-lg font-bold text-muted-foreground transition hover:scale-110 hover:font-bold"
        >
          ₱ {data.price}
        </Button>

        <Link href={`/menu/${data.id}`} className="w-full">
          <Button className="w-full rounded-full bg-hero transition hover:scale-110 hover:font-bold">
            Buy now
          </Button>
        </Link>
      </div>

      {/* add to cart */}
      <Button
        onClick={() => addToCart(data)}
        className="absolute right-0 top-0 rounded-br-none rounded-tl-none rounded-tr-lg p-2 px-3 transition hover:scale-110 hover:bg-hero"
      >
        <ShoppingCart className="size-4" />
      </Button>

      {/* add to wishlist */}
      <Button
        variant="ghost"
        className="absolute left-0 top-0 transition hover:scale-110 hover:bg-transparent"
        onClick={likeHandler}
      >
        {isLiked ? (
          <>
            <Heart className="size-6 text-red-500" />
          </>
        ) : (
          <>
            <HeartCrack className="size-6" />
          </>
        )}
      </Button>
    </Card>
  );
};
export default PopularContent;
