"use client";

import { cn } from "@/lib/helpers/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: Props) => {
  return (
    <div
      className={cn("mx-auto flex w-full items-start justify-start", className)}
    >
      {children}
    </div>
  );
};

export default Box;
