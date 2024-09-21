import { useContext } from "react";
import { FileContext } from "@/context/FileContext";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function PreviewCarousel({ className }: any) {
  const { inputFiles } = useContext(FileContext);

  return (
    <Carousel
      opts={{
        align: "center",
      }}
      orientation="vertical"
      className={className}
    >
      <CarouselContent>
        {inputFiles.svgFiles?.length > 0 &&
          inputFiles.svgFiles.map((file: any, index: number) => (
            <CarouselItem key={index} className="md:basis-1/10 lg:basis-1/10">
              <Card>
                <CardContent
                  dangerouslySetInnerHTML={{ __html: file }}
                  className="flex aspect-square items-center justify-center w-full h-full"
                />
              </Card>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
