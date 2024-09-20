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

export function PreviewCarousel() {
  const { files } = useContext(FileContext);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {files.svg &&
          files.svg.map((file: any, index: number) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div
                      dangerouslySetInnerHTML={{ __html: file }}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
