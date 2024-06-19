"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GalleryContent from "@/components/menu/galleryContent";
import GalleryTab from "@/components/menu/galleryTab";

interface Props {
  images: {
    url: string;
  }[];
}

const Gallery = ({ images }: Props) => {
  return (
    <Tabs defaultValue={images[0].url} className="w-full">
      {images.map((tab) => (
        <TabsContent key={tab.url} value={tab.url.toString()}>
          <GalleryContent url={tab.url} />
        </TabsContent>
      ))}

      <TabsList className="w-full bg-transparent">
        {images.map((tab) => (
          <TabsTrigger key={tab.url} value={tab.url.toString()}>
            <GalleryTab url={tab.url} />
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
export default Gallery;
