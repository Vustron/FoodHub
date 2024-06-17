import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// products
export const PRODUCT_STORE = `${process.env.NEXT_PUBLIC_STOREID}`;
export const PRODUCT_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/stores/${PRODUCT_STORE}/products`;
