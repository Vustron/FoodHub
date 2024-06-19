"use client";

import Image from "next/image";

interface Props {
  url: string;
}

const GalleryTab = ({ url }: Props) => {
  return (
    <div className="relative aspect-square size-24 rounded-md">
      <Image
        src={url}
        alt={url}
        className="size-full object-contain transition hover:scale-110"
        fill
        sizes="100vw"
        loading="lazy"
      />
    </div>
  );
};

export default GalleryTab;
