import { AsciiBox } from "@/components/ascii/ascii-box";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { ComponentDoc } from "./types";

const slides = [
  { title: "build", note: "compiling 42 modules" },
  { title: "test", note: "312 passed, 0 failed" },
  { title: "lint", note: "no issues found" },
  { title: "deploy", note: "shipped to staging" },
  { title: "verify", note: "health check ok" },
];

export const doc: ComponentDoc = {
  title: "Carousel",
  description: "A horizontal, swipeable slide track.",
  sections: [
    {
      title: "default",
      code: `<Carousel className="w-full max-w-xl">
  <div className="flex items-center justify-end gap-[1ch]">
    <CarouselPrevious />
    <CarouselNext />
  </div>
  <CarouselContent>
    {slides.map((slide) => (
      <CarouselItem key={slide.title}>
        <AsciiBox width={22} tone="primary" title={slide.title} padY={0}>
          <p>{slide.note}</p>
        </AsciiBox>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>`,
      preview: (
        <Carousel className="w-full max-w-xl">
          <div className="flex items-center justify-end gap-[1ch]">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.title}>
                <AsciiBox
                  padY={0}
                  title={slide.title}
                  tone="primary"
                  width={22}
                >
                  <p className="text-ascii-soft">{slide.note}</p>
                </AsciiBox>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ),
    },
  ],
};
