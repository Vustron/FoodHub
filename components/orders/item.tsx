"use client";

import { Badge } from "@/components/ui/badges";
import { Order } from "@/lib/helpers/types";
import Box from "@/components/shared/box";
import Image from "next/image";

interface Props {
  order: Order;
}

const getBadgeVariant = (status: string) => {
  switch (status) {
    case "Processing":
      return "warning";
    case "Delivering":
      return "primary";
    case "Delivered":
      return "success";
    case "Canceled":
      return "destructive";
    default:
      return "default";
  }
};

const Item = ({ order }: Props) => {
  const status = order.order_status;

  return (
    <Box>
      <div className="grid w-full grid-cols-2 gap-x-4 gap-y-6 rounded-md border border-gray-200 px-4 py-2 md:grid-cols-4">
        <div className="row flex items-center gap-2">
          {order.orderItems.map((item) => (
            <>
              <div
                key={item.id}
                className="relative aspect-square size-16 min-h-16 min-w-16 overflow-hidden rounded-md bg-gray-100"
              >
                <Image
                  src={item.images[0].url}
                  alt={item.name}
                  fill
                  loading="lazy"
                  sizes="100vh"
                  className="size-fill object-contain"
                />
              </div>
            </>
          ))}
        </div>

        <span className="mt-5 text-lg font-semibold text-muted-foreground">
          {order.orderItems.map((item) => item.name).join(", ")}
        </span>

        <Badge
          variant={getBadgeVariant(status)}
          className="mt-5 h-[30px] w-[100px] text-lg font-medium"
        >
          {order.order_status}
        </Badge>

        <Badge
          variant={order.isPaid ? "success" : "destructive"}
          className="mt-5 h-[30px] w-[60px] text-lg font-medium"
        >
          {order.isPaid ? "Paid" : "Not Paid"}
        </Badge>
      </div>
    </Box>
  );
};

export default Item;
