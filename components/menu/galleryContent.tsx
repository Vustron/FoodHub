"use client";

import Image from "next/image";

interface Props {
  url: string;
}

const GalleryContent = ({ url }: Props) => {
  return (
    <div className="relative aspect-square w-full overflow-hidden sm:rounded-lg">
      <Image
        src={url}
        alt={url}
        className="object-contain transition hover:scale-110"
        fill
        sizes="100vw"
        loading="lazy"
      />
    </div>
  );
};

export default GalleryContent;
