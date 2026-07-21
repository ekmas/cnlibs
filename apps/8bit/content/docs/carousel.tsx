import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { DocVariant } from "@/content/docs/registry";

export const title = "Carousel";
export const description =
  "A carousel with motion and swipe built using Embla.";

export const links = {
  shadcn: "https://ui.shadcn.com/docs/components/carousel",
};

const slides = [1, 2, 3, 4, 5];

export const variants: DocVariant[] = [
  {
    code: `import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [1, 2, 3, 4, 5];

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="font-semibold text-4xl">{slide}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}`,
    description: "Swipe or use the arrow buttons to move between slides.",
    id: "default",
    preview: (
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="font-semibold text-4xl">{slide}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    ),
    title: "Default",
  },
];
