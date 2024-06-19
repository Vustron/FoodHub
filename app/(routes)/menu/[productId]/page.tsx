"use client";

import {
  PRODUCT_ID_URL,
  PRODUCT_STORE,
  PRODUCT_URL,
} from "@/lib/helpers/utils";

import { useGetById } from "@/lib/hooks/api/useGetById";
import Container from "@/components/shared/container";
import { ChevronRight, Home } from "lucide-react";
import Gallery from "@/components/menu/gallery";
import { useGet } from "@/lib/hooks/api/useGet";
import { Product } from "@/lib/helpers/types";
import Box from "@/components/shared/box";
import Link from "next/link";
import Info from "@/components/menu/info";
import SuggestedList from "@/components/menu/suggestedList";

interface Props {
  params: {
    productId: string;
  };
}

export default function ProductId({ params }: Props) {
  const { productId } = params;

  // Set query props
  const props = {
    STORE: PRODUCT_STORE,
    URL: PRODUCT_ID_URL,
    queryKey: "products",
    id: productId,
    getById: true,
  };

  // Get product
  const {
    data: product,
    isLoading: loadingProduct,
    error: productError,
  } = useGetById<Product>(props);

  // set query
  const productQuery = {
    category: product?.category,
  };
  // set query props
  const productProps = {
    STORE: PRODUCT_STORE,
    URL: PRODUCT_URL,
    queryKey: "products",
  };
  // get suggested products by category
  const {
    data: products = [],
    isLoading: loadingProducts,
    error: productsError,
  } = useGet<Product>(productQuery, productProps);

  // loading state
  const loading = loadingProduct || loadingProducts;

  // error state
  const error = productError || productsError;

  return (
    <div>
      {loading ? (
        <span>...loading product</span>
      ) : error ? (
        <span>Something went wrong: {error.message}</span>
      ) : (
        <div>
          <Container className="my-4 rounded-lg bg-white px-4">
            <Box className="mt-12 items-center text-sm text-neutral-700">
              <Link href={"/"} className="flex items-center gap-2">
                <Home className="size-4" />
                Main page
              </Link>

              <ChevronRight className="size-5 text-muted-foreground" />
              <Link href={"/menu"} className="flex items-center gap-2">
                Products
              </Link>
            </Box>

            <div className="space-y-10 px-4 py-10 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                {/* gallery */}
                <Gallery images={product!.images} />

                <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                  {/* info */}
                  <Info product={product} />
                </div>
              </div>

              <SuggestedList products={products} />
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}
