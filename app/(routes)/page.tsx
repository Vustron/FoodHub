"use client";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import ProductSkeleton from "@/components/shared/productSkeleton";
import { PRODUCT_STORE, PRODUCT_URL } from "@/lib/helpers/utils";
import PopularContent from "@/components/home/popularContent";
import { FileHeart, Salad, Truck } from "lucide-react";
import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { useGet } from "@/lib/hooks/api/useGet";
import { Product } from "@/lib/helpers/types";
import Box from "@/components/shared/box";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  // set query
  const query = {
    isFeatured: true,
  };
  // set query props
  const props = {
    STORE: PRODUCT_STORE,
    URL: PRODUCT_URL,
    queryKey: "products",
  };
  // get products
  const { data = [], isLoading, error } = useGet<Product>(query, props);

  return (
    <>
      <Container className="px-4 md:px-12">
        <section className="grid grid-cols-1 py-12 pt-16 md:grid-cols-2">
          <div className="flex flex-col items-start justify-start gap-4">
            <span className="rounded-full border border-gray-300 px-6 py-1 text-neutral-500">
              Hungry?
            </span>

            <h2 className="my-4 text-5xl font-bold uppercase tracking-wider text-neutral-700">
              Just come to <span className="block text-hero">foodhub</span>&
              Order
            </h2>

            <span className="my-4 text-center text-base text-neutral-500 md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sit
              esse iste, voluptatem autem vitae laboriosam veniam rerum, nostrum
              molestiae, mollitia commodi est hic suscipit asperiores inventore
              odio ad temporibus?
            </span>

            <div className="my-4 flex w-full justify-center gap-6 text-center md:w-auto">
              <Link href="/menu">
                <Button className="rounded-full bg-hero px-8 py-4 font-semibold transition hover:scale-110 hover:font-bold md:px-16 md:py-6">
                  Order now
                </Button>
              </Link>

              <Link href="/">
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-4 font-semibold transition hover:scale-110 hover:font-bold md:px-16 md:py-6"
                >
                  Explore more
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative flex h-[560px] w-full items-center justify-center">
            <Image
              fill
              alt="hero"
              priority
              src="/Food.png"
              className="absolute h-full w-full object-contain"
              sizes="(min-width: 808px) 50vw, 100vw"
            />
          </div>
        </section>

        {/* popular section */}
        <section className="my-4 grid grid-cols-1 gap-6 gap-y-20 py-12 md:grid-cols-4 md:gap-12">
          {isLoading ? (
            <Box className="col-span-12 flex-row items-start justify-start gap-8 md:col-span-10">
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </Box>
          ) : error ? (
            <span>Something went wrong {error.message}</span>
          ) : (
            data
              .slice(0, 4)
              .map((item) => <PopularContent key={item.id} data={item} />)
          )}
        </section>

        {/* why choose us */}

        <section className="my-4 flex flex-col items-center justify-center py-12">
          <h2 className="my-4 text-5xl font-bold uppercase tracking-wider text-neutral-700 md:text-5xl">
            Why choose us?
          </h2>

          <span className="my-2 w-full text-center text-base text-neutral-500 md:w-[560px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum omnis
            delectus velit numquam fuga explicabo saepe unde aspernatur corrupti
            hic nulla dolorum possimus maxime quod quisquam soluta, ea tenetur
            neque.
          </span>

          <div className="my-6 mt-20 grid w-full grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="flex flex-col items-center justify-center gap-4 rounded-md border-none p-4 py-12 shadow-lg">
              <Salad className="size-8 text-hero" />

              <CardTitle className="text-neutral-600">
                Serve Healthy Food
              </CardTitle>

              <CardDescription className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardDescription>
            </Card>

            <Card className="flex flex-col items-center justify-center gap-4 rounded-md border-none p-4 py-12 shadow-lg">
              <FileHeart className="size-8 text-hero" />

              <CardTitle className="text-neutral-600">Best Quality</CardTitle>

              <CardDescription className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardDescription>
            </Card>

            <Card className="flex flex-col items-center justify-center gap-4 rounded-md border-none p-4 py-12 shadow-lg">
              <Truck className="size-8 text-hero" />

              <CardTitle className="text-neutral-600">Fast Delivery</CardTitle>

              <CardDescription className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardDescription>
            </Card>
          </div>
        </section>

        {/* chef section */}
        <section className="my-4 flex flex-col items-center justify-center py-12">
          <h2 className="my-4 text-5xl font-bold uppercase tracking-wider text-neutral-700 md:text-5xl">
            Our special chefs
          </h2>

          <span className="my-2 w-full text-center text-base text-neutral-500 md:w-[560px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum omnis
            delectus velit numquam fuga explicabo saepe unde aspernatur corrupti
            hic nulla dolorum possimus maxime quod quisquam soluta, ea tenetur
            neque.
          </span>

          <div className="my-6 mt-20 grid w-full grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="relative flex h-96 flex-col items-center justify-end rounded-md border-none bg-hero/30 shadow-lg md:h-[520px]">
              <Image
                src="/chef1.png"
                alt="Chef one"
                fill
                loading="lazy"
                className="size-full object-contain"
                sizes="100vw"
              />
            </Card>

            <Card className="relative mt-20 flex h-96 flex-col items-center justify-end rounded-md border-none bg-hero/30 shadow-lg md:h-[520px]">
              <Image
                src="/chef3.png"
                alt="Chef one"
                fill
                loading="lazy"
                className="size-full object-contain"
                sizes="100vw"
              />
            </Card>

            <Card className="relative flex h-96 flex-col items-center justify-end rounded-md border-none bg-hero/30 shadow-lg md:h-[520px]">
              <Image
                src="/chef2.png"
                alt="Chef one"
                fill
                loading="lazy"
                className="size-full object-contain"
                sizes="100vw"
              />
            </Card>
          </div>
        </section>
      </Container>
    </>
  );
}
