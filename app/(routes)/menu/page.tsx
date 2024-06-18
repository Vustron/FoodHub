"use client";

import {
  PRODUCT_STORE,
  PRODUCT_URL,
  CATEGORY_URL,
  SIZES_URL,
  KITCHENS_URL,
  CUISINES_URL,
} from "@/lib/helpers/utils";

import { Category, Cuisine, Kitchen, Product, Size } from "@/lib/helpers/types";
import FilterContainer from "@/components/menu/filterContainer";
import CategoryFilters from "@/components/menu/categoryFilters";
import ProductContent from "@/components/menu/productContent";
import CuisineFilters from "@/components/menu/cuisineFilters";
import KitchenFilters from "@/components/menu/kitchenFilters";
import SizeFilters from "@/components/menu/sizeFilters";
import Container from "@/components/shared/container";
import { useGet } from "@/lib/hooks/api/useGet";
import Box from "@/components/shared/box";

interface Props {
  searchParams: {
    size?: string;
    isFeatured?: boolean;
    cuisine?: string;
    category?: string;
    kitchen?: string;
  };
}

export default function MenuPage({ searchParams }: Props) {
  // set query
  const categoryQuery = {};
  // set query props
  const categoryProps = {
    STORE: PRODUCT_STORE,
    URL: CATEGORY_URL,
    queryKey: "categories",
  };
  // get products
  const {
    data: categories = [],
    isLoading: loadingCategory,
    error: categoryError,
  } = useGet<Category>(categoryQuery, categoryProps);

  // set query
  const sizeQuery = {};
  // set query props
  const sizeProps = {
    STORE: PRODUCT_STORE,
    URL: SIZES_URL,
    queryKey: "sizes",
  };
  // get sizes
  const {
    data: size = [],
    isLoading: loadingSize,
    error: sizeError,
  } = useGet<Size>(sizeQuery, sizeProps);

  // set query
  const kitchenQuery = {};
  // set query props
  const kitchenProps = {
    STORE: PRODUCT_STORE,
    URL: KITCHENS_URL,
    queryKey: "kitchens",
  };
  // get kitchens
  const {
    data: kitchen = [],
    isLoading: loadingKitchen,
    error: kitchenError,
  } = useGet<Kitchen>(kitchenQuery, kitchenProps);

  // set query
  const cuisineQuery = {};
  // set query props
  const cuisineProps = {
    STORE: PRODUCT_STORE,
    URL: CUISINES_URL,
    queryKey: "cuisines",
  };
  // get kitchens
  const {
    data: cuisine = [],
    isLoading: loadingCuisine,
    error: cuisineError,
  } = useGet<Cuisine>(cuisineQuery, cuisineProps);

  // set query
  const productQuery = {
    size: searchParams?.size,
    isFeatured: searchParams?.isFeatured,
    cuisine: searchParams?.cuisine,
    category: searchParams?.category,
    kitchen: searchParams?.kitchen,
  };
  // set query props
  const productProps = {
    STORE: PRODUCT_STORE,
    URL: PRODUCT_URL,
    queryKey: "products",
  };
  // get products
  const {
    data: product = [],
    isLoading: loadingProduct,
    error: productError,
  } = useGet<Product>(productQuery, productProps);

  // loading state
  const loading =
    loadingCategory ||
    loadingSize ||
    loadingKitchen ||
    loadingCuisine ||
    loadingProduct;

  // error state
  const error =
    categoryError || sizeError || kitchenError || cuisineError || productError;

  return (
    <Container className="px-4 md:px-12">
      <div className="grid grid-cols-1 gap-2 py-12 md:grid-cols-12">
        <div className="col-span-2 hidden border-r border-gray-100 md:block">
          <FilterContainer>
            {loading ? (
              <span>...loading filters</span>
            ) : error ? (
              <span>Something went wrong: {error.message}</span>
            ) : (
              <>
                <CategoryFilters categories={categories} />
                <SizeFilters sizes={size} />
                <KitchenFilters kitchens={kitchen} />
                <CuisineFilters cuisines={cuisine} />
              </>
            )}
          </FilterContainer>
        </div>

        <Box className="col-span-12 flex-col items-start justify-start md:col-span-10">
          {loading ? (
            <span>...loading products</span>
          ) : error ? (
            <span>Something went wrong: {error.message}</span>
          ) : (
            <ProductContent products={product} />
          )}
        </Box>
      </div>
    </Container>
  );
}
