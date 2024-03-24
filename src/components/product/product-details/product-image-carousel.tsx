"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { lightGrayBlurData } from "@/lib/utils/rgb-data-url";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface ProductImageCarouselProps {
  images: string[];
  containerClass?: string;
  enableCarouselNav?: boolean;
}

const ProductImageCarousel = ({
  images,
  containerClass,
  enableCarouselNav = true,
}: ProductImageCarouselProps) => {
  const [emblaApi, setEmblaApi] = useState<CarouselApi>();
  const { selectedIndex, onItemSelect } = useEmblaState(emblaApi);

  return (
    <div className={cn("w-full max-w-[400px] mx-auto", containerClass)}>
      <Carousel setApi={setEmblaApi}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-[4px]">
                <Card className="w-full min-w-auto p-[2px]">
                  <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                    <Image
                      alt="Product image"
                      src={image}
                      placeholder="blur"
                      blurDataURL={lightGrayBlurData}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fill
                      className="object-cover rounded-[10px]"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {enableCarouselNav && (
          <>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </>
        )}
      </Carousel>
      <ScrollArea className="w-full">
        <div className="flex justify-center space-x-[8px] mt-[12px] items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "relative w-[45px] h-[45px] cursor-pointer border rounded-[4px]",
                selectedIndex === index && "border-primary border-[2px]"
              )}
              tabIndex={0}
              onClick={() => onItemSelect(index)}
              onKeyDown={(e) =>
                e.target === e.currentTarget &&
                e.key === "Enter" &&
                onItemSelect(index)
              }
            >
              <Image
                alt="Product image"
                src={image}
                fill
                placeholder="blur"
                blurDataURL={lightGrayBlurData}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-[2px]"
              />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="h-[6px]" />
      </ScrollArea>
    </div>
  );
};

export default ProductImageCarousel;

type UseEmblaStateType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onItemSelect: (index: number) => void;
};

export const useEmblaState = (emblaApi: CarouselApi): UseEmblaStateType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onItemSelect = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: CarouselApi) => {
    emblaApi && setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: CarouselApi) => {
    emblaApi && setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onItemSelect,
  };
};
