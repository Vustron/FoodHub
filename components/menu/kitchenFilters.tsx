"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Kitchen } from "@/lib/helpers/types";
import Box from "@/components/shared/box";
import { cn } from "@/lib/helpers/utils";
import { Check } from "lucide-react";
import qs from "query-string";

interface Props {
  kitchens: Kitchen[];
}

export const revalidate = 0;

const KitchenFilters = ({ kitchens }: Props) => {
  // init search params
  const searchParams = useSearchParams();
  // init router
  const router = useRouter();

  // search params handler
  const searchParamsHandler = (kitchen: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    if (currentParams.kitchen === kitchen) {
      delete currentParams.kitchen;
    } else {
      currentParams.kitchen = kitchen;
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
        Kitchen
      </h2>

      <Box className="mt-2 flex-col gap-2">
        {kitchens?.map((kitchen) => (
          <div
            onClick={() => searchParamsHandler(kitchen.name)}
            key={kitchen.id}
            className={cn(
              "flex text-sm font-semibold text-neutral-500",
              kitchen.name === searchParams.get("kitchen") && "text-hero",
            )}
          >
            <span
              className={cn(
                "transition hover:scale-110 hover:text-hero",
                kitchen.name === searchParams.get("kitchen") && "underline",
              )}
            >
              {kitchen.name}
            </span>

            {kitchen.name === searchParams.get("kitchen") && (
              <Check className="ml-2 mt-[3px] size-4 text-hero" />
            )}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default KitchenFilters;
