"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Category, Cuisine } from "@/lib/helpers/types";
import Box from "@/components/shared/box";
import { cn } from "@/lib/helpers/utils";
import { Check } from "lucide-react";
import qs from "query-string";

interface Props {
  cuisines: Cuisine[];
}

export const revalidate = 0;

const CuisineFilters = ({ cuisines }: Props) => {
  // init search params
  const searchParams = useSearchParams();
  // init router
  const router = useRouter();

  // search params handler
  const searchParamsHandler = (cuisine: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    if (currentParams.cuisine === cuisine) {
      delete currentParams.cuisine;
    } else {
      currentParams.cuisine = cuisine;
    }

    const href = qs.stringifyUrl({
      url: "/menu",
      query: currentParams,
    });

    router.replace(href);

  };

  return (
    <Box className="cursor-pointer flex-col gap-2 border-b pb-4">
      <h2 className="text-xl font-semibold text-neutral-700 transition hover:scale-110 hover:text-hero">
        Cuisine
      </h2>

      <Box className="mt-2 flex-col gap-2">
        {cuisines?.map((cuisine) => (
          <div
            onClick={() => searchParamsHandler(cuisine.name)}
            key={cuisine.id}
            className={cn(
              "flex text-sm font-semibold text-neutral-500",
              cuisine.name === searchParams.get("cuisine") && "text-hero",
            )}
          >
            <span
              className={cn(
                "transition hover:scale-110 hover:text-hero",
                cuisine.name === searchParams.get("cuisine") && "underline",
              )}
            >
              {cuisine.name}
            </span>

            {cuisine.name === searchParams.get("cuisine") && (
              <Check className="ml-2 mt-[3px] size-4 text-hero" />
            )}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default CuisineFilters;
