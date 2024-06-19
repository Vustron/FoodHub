"use client";

import { Product } from "@/lib/helpers/types";
import { useParams } from "next/navigation";
import PopularContent from "../home/popularContent";

interface Props {
  products: Product[];
}

const SuggestedList = ({ products }: Props) => {
  // get params
  const { productId } = useParams();

  return (
    <>
      <h2 className="text-3xl font-semibold text-neutral-600">
        Related Products
      </h2>

      <div className="my-6 grid grid-cols-2 gap-6 gap-y-20 py-12 md:grid-cols-3 md:gap-x-4 md:gap-y-24 lg:grid-cols-4">
        {products
          .filter((item) => item.id !== productId)
          .map((item) => (
            <PopularContent key={item.id} data={item} />
          ))}
      </div>
    </>
  );
};

export default SuggestedList;
