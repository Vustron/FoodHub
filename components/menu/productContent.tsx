"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Product } from "@/lib/helpers/types";
import Box from "@/components/shared/box";
import qs from "query-string";
import Link from "next/link";
import { ChevronRight, Home, X } from "lucide-react";
import PopularContent from "../home/popularContent";

interface Props {
  products: Product[];
}

export const revalidate = 0;

const ProductContent = ({ products }: Props) => {
  // init search params
  const searchParams = useSearchParams();
  // init router
  const router = useRouter();
  // current params
  const currentParams = Object.fromEntries(searchParams.entries());

  // search params handler
  const searchParamsHandler = (param: string) => {
    if (currentParams.hasOwnProperty(param)) {
      const newParams = { ...currentParams };
      delete newParams[param];

      const href = qs.stringifyUrl({
        url: "/menu",
        query: newParams,
      });
      router.replace(href);
  
    }
  };

  return (
    <>
      <Box className="flex-col items-start pb-24 pt-4">
        <Box className="items-center text-sm text-neutral-700">
          <Link href={"/"} className="flex items-center gap-2">
            <Home className="size-4" />
            Main page
          </Link>

          <ChevronRight className="size-5 text-muted-foreground" />
          <Link href={"/menu"} className="flex items-center gap-2">
            Products
          </Link>

          {searchParams.get("category") && (
            <>
              <ChevronRight className="size-5 text-muted-foreground" />
              <Link href={"/menu"} className="flex items-center gap-2">
                <span className="font-bold text-hero">
                  {searchParams.get("category")}
                </span>
              </Link>
            </>
          )}
        </Box>

        <Box className="mt-8 flex-col items-start">
          {searchParams.get("category") && (
            <h2 className="flex items-center gap-2 text-3xl font-semibold text-neutral-700">
              <span className="font-bold">{searchParams.get("category")}</span>
            </h2>
          )}

          <Box className="my-4 gap-3">
            {currentParams &&
              Object.entries(currentParams).map(([key, value]) => (
                <div
                  key={key}
                  onClick={() => searchParamsHandler(key)}
                  className="flex cursor-pointer items-center gap-1 rounded-md bg-emerald-500/10 px-4 py-1 text-emerald-500 hover:shadow-md"
                >
                  {value}
                  <X className="size-4" />
                </div>
              ))}
          </Box>
        </Box>
      </Box>

      <div className="grid size-full grid-cols-2 gap-4 gap-y-24 lg:grid-cols-3">
        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <PopularContent data={product} key={product.id} />
            ))}
          </>
        ) : (
          <>
            <Box className="col-span-10 items-center justify-center py-12 text-3xl font-bold text-muted-foreground">
              No Products Available
            </Box>
          </>
        )}
      </div>
    </>
  );
};

export default ProductContent;
