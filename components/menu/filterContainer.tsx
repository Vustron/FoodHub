"use client";

import Box from "@/components/shared/box";
import { cn } from "@/lib/helpers/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const FilterContainer = ({ children, className }: Props) => {
  return <Box className={cn("flex-col gap-4", className)}>{children}</Box>;
};

export default FilterContainer;
