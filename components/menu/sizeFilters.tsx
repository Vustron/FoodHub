"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Size } from "@/lib/helpers/types";
import Box from "@/components/shared/box";
import { cn } from "@/lib/helpers/utils";
import { Check } from "lucide-react";
import qs from "query-string";

interface Props {
  sizes: Size[];
}

export const revalidate = 0;

const SizeFilters = ({ sizes }: Props) => {
  // init search params
  const searchParams = useSearchParams();
  // init router
  const router = useRouter();

  // search params handler
  const searchParamsHandler = (size: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    if (currentParams.size === size) {
      delete currentParams.size;
    } else {
      currentParams.size = size;
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
        Size
      </h2>

      <Box className="mt-2 flex-col gap-2">
        {sizes?.map((size) => (
          <div
            onClick={() => searchParamsHandler(size.name)}
            key={size.id}
            className={cn(
              "flex text-sm font-semibold text-neutral-500",
              size.name === searchParams.get("size") && "text-hero",
            )}
          >
            <span
              className={cn(
                "transition hover:scale-110 hover:text-hero",
                size.name === searchParams.get("size") && "underline",
              )}
            >
              {size.name}
            </span>

            {size.name === searchParams.get("size") && (
              <Check className="ml-2 mt-[3px] size-4 text-hero" />
            )}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default SizeFilters;
