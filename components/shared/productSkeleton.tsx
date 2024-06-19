import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductSkeleton = () => {
  return (
    <Card className="relative flex max-h-[340px] flex-col items-center justify-center rounded-md border-none bg-white py-6 pt-24 shadow-lg md:pt-28">
      <div className="absolute -top-[4%] flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-hero p-1 md:-top-[20%] md:h-40 md:w-40 md:p-2">
        <div className="relative h-full w-full animate-pulse rounded-full bg-gray-200" />
      </div>

      <div className="w-full px-2 text-center">
        <CardTitle className="mb-2 h-6 w-full animate-pulse truncate bg-gray-200" />
      </div>

      <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-2 px-1">
        <div className="h-4 w-16 animate-pulse rounded-md bg-gray-200 px-2 py-[2px]" />
        <div className="h-4 w-16 animate-pulse rounded-md bg-gray-200 px-2 py-[2px]" />
        <div className="h-4 w-16 animate-pulse rounded-md bg-gray-200 px-2 py-[2px]" />
        <div className="h-4 w-16 animate-pulse rounded-md bg-gray-200 px-2 py-[2px]" />
      </div>

      <CardDescription className="my-2 h-4 w-full animate-pulse bg-gray-200 px-2 text-center" />

      <div className="mb-4 mt-4 flex w-full items-center gap-3 px-2">
        <Button
          variant="outline"
          className="h-10 w-16 animate-pulse rounded-full bg-gray-200"
        />

        <div className="w-full">
          <Button className="h-10 w-full animate-pulse rounded-full bg-gray-200" />
        </div>
      </div>
    </Card>
  );
};

export default ProductSkeleton;
