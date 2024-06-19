"use client";

import { useGetOrders } from "@/lib/hooks/api/useGetOrders";
import { ChevronRight, Home, Loader2 } from "lucide-react";
import OrderItems from "@/components/orders/orderItems";
import Container from "@/components/shared/container";
import Box from "@/components/shared/box";
import Link from "next/link";

interface Props {
  userId: string | null;
}

const OrdersContent = ({ userId }: Props) => {
  // get orders
  const {
    data: orders = [],
    isLoading: loading,
    error: error,
  } = useGetOrders(`${process.env.NEXT_PUBLIC_STOREID!}`);

  const formattedData = orders.filter((item) => item.userId === userId);

  return (
    <Container className="my-12 min-h-[100vh] bg-white px-4 py-12 md:px-12">
      <Box className="mt-12 items-center text-sm text-neutral-700">
        <Link
          href={"/"}
          className="flex items-center gap-2 transition hover:scale-110"
        >
          <Home className="size-4" />
          Main page
        </Link>

        <ChevronRight className="size-5 text-muted-foreground" />
        <span className="flex cursor-pointer items-center gap-2 font-semibold text-hero transition hover:scale-110">
          My Orders
        </span>
      </Box>

      <h2 className="my-4 text-xl font-semibold text-neutral-700">My Orders</h2>
      {loading ? (
        <Box className="flex-start flex">
          <Loader2 className="h-6 animate-spin" />
        </Box>
      ) : error ? (
        <span>Something went wrong {error.message}</span>
      ) : (
        <OrderItems orders={formattedData} />
      )}
    </Container>
  );
};

export default OrdersContent;
