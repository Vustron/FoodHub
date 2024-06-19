import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// store
export const PRODUCT_STORE = `${process.env.NEXT_PUBLIC_STOREID}`;

// products
export const PRODUCT_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/stores/${PRODUCT_STORE}/products`;

// categories
export const CATEGORY_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/stores/${PRODUCT_STORE}/categories`;

// sizes
export const SIZES_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/stores/${PRODUCT_STORE}/sizes`;

// kitchens
export const KITCHENS_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/stores/${PRODUCT_STORE}/kitchens`;

// cuisines
export const CUISINES_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/stores/${PRODUCT_STORE}/cuisines`;

// product id
export const PRODUCT_ID_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/stores/${PRODUCT_STORE}/products/`;
