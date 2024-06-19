import OrdersContent from "@/components/orders/ordersContent";
import { auth } from "@clerk/nextjs/server";

export default function OrdersPage() {
  // get user id
  const { userId } = auth();
  return (
    <>
      <OrdersContent userId={userId} />
    </>
  );
}
