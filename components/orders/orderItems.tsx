"use client";

import { Order } from "@/lib/helpers/types";
import Item from "@/components/orders/item";

interface Props {
  orders: Order[];
}

const OrderItems = ({ orders }: Props) => {
  if (orders.length === 0) {
    return (
      <div className="flex w-full flex-col rounded-lg border border-gray-100 p-4">
        No Orders found
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col items-center rounded-lg p-4">
      {orders.map((order) => (
        <Item key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderItems;
