"use client";

import { CHECKOUT_URL, PRODUCT_STORE } from "@/lib/helpers/utils";
import { ScrollArea } from "@/components/ui/scrollArea";
import { Separator } from "@/components/ui/separator";
import { usePost } from "@/lib/hooks/api/usePost";
import { useSearchParams } from "next/navigation";
import CartItem from "@/components/cart/cartItem";
import { Button } from "@/components/ui/button";
import useCart from "@/lib/hooks/cart/useCart";
import Box from "@/components/shared/box";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useEffect } from "react";

interface Props {
  userId: string | null;
}

const CartContent = ({ userId }: Props) => {
  // init cart
  const cart = useCart();

  // init searchParams
  const searchParams = useSearchParams();

  // get total price
  const totalPrice = cart.items.reduce((total, item) => {
    return total + Number(item.price * item.qty!);
  }, 0);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed");
      cart.removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong try again later");
    }
  }, [searchParams]);

  // checkout
  const props = {
    STORE: PRODUCT_STORE,
    URL: CHECKOUT_URL,
    queryKey: "checkout",
    values: cart.items,
    userId: userId,
  };
  const checkout = usePost(props);

  // checkout handler
  const onCheckout = async () => {
    checkout.mutateAsync();
  };
  return (
    <>
      <div className="flex h-auto w-full items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold text-neutral-700">Cart Items</h2>

        {cart.items.length > 0 && (
          <Button
            onClick={cart.removeAll}
            variant="destructive"
            className="transition hover:scale-110 hover:font-bold"
          >
            Clear Cart <Trash2 className="ml-2 size-4" />
          </Button>
        )}
      </div>

      <div className="h-auto w-full lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8">
        <div className="col-span-8">
          <ScrollArea className="h-72 w-full">
            {cart.items.length === 0 && (
              <div className="flex w-full items-center justify-center">
                <span className="mt-20 text-3xl font-semibold text-neutral-600">
                  No items on the cart
                </span>
              </div>
            )}

            <div className="w-full space-y-4">
              {cart.items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="col-span-4 space-y-8">
          <Box className="flex-col items-start gap-2 rounded-lg bg-slate-50 p-3 shadow-lg">
            <h2 className="text-lg font-semibold text-neutral-700">
              Order Summary
            </h2>

            <Separator />

            <Box className="flex-col space-y-2">
              <div className="flex w-full items-center justify-between whitespace-nowrap px-4 text-muted-foreground">
                <p className="text-base font-bold text-black">Total</p>
                <p className="text-2xl font-semibold text-black">
                  ₱ {totalPrice}
                </p>
              </div>
            </Box>

            <Box className="flex-col items-start justify-start gap-2 space-y-2 rounded-lg bg-slate-50 p-3 shadow-lg">
              <h2 className="text-lg font-semibold text-neutral-700">
                Payment
              </h2>

              <Separator />

              <Button
                className="w-full transition hover:scale-110 hover:bg-hero hover:font-bold"
                onClick={onCheckout}
              >
                Checkout
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default CartContent;
