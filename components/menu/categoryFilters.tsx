"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Category } from "@/lib/helpers/types";
import Box from "@/components/shared/box";
import { cn } from "@/lib/helpers/utils";
import { Check } from "lucide-react";
import qs from "query-string";

interface Props {
  categories: Category[];
}

export const revalidate = 0;

const CategoryFilters = ({ categories }: Props) => {
  // init search params
  const searchParams = useSearchParams();
  // init router
  const router = useRouter();

  // search params handler
  const searchParamsHandler = (category: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    if (currentParams.category === category) {
      delete currentParams.category;
    } else {
      currentParams.category = category;
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
        Category
      </h2>

      <Box className="mt-2 flex-col gap-2">
        {categories?.map((category) => (
          <div
            onClick={() => searchParamsHandler(category.name)}
            key={category.id}
            className={cn(
              "flex text-sm font-semibold text-neutral-500",
              category.name === searchParams.get("category") && "text-hero",
            )}
          >
            <span
              className={cn(
                "transition hover:scale-110 hover:text-hero",
                category.name === searchParams.get("category") && "underline",
              )}
            >
              {category.name}
            </span>

            {category.name === searchParams.get("category") && (
              <Check className="ml-2 mt-[3px] size-4 text-hero" />
            )}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default CategoryFilters;
