"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CarouselContextValue = {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  scrollByItem: (direction: 1 | -1) => void;
};

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("Carousel parts must be used within <Carousel>");
  }
  return context;
}

function Carousel({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollByItem = React.useCallback((direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const item = el.querySelector<HTMLElement>('[data-slot="carousel-item"]');
    const gap = Number.parseFloat(getComputedStyle(el).columnGap || "0");
    const amount = item
      ? item.getBoundingClientRect().width + gap
      : el.clientWidth;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }, []);

  return (
    <CarouselContext.Provider value={{ scrollRef, scrollByItem }}>
      <div
        data-slot="carousel"
        className={cn("relative flex flex-col", className)}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { scrollRef } = useCarousel();
  return (
    <div
      ref={scrollRef}
      data-slot="carousel-content"
      className={cn(
        "flex snap-x snap-mandatory gap-[2ch] overflow-x-auto scroll-smooth pb-[1lh] outline-none",
        className
      )}
      {...props}
    />
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="carousel-item"
      className={cn("shrink-0 snap-start", className)}
      {...props}
    />
  );
}

function CarouselPrevious({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollByItem } = useCarousel();
  return (
    <Button
      data-slot="carousel-previous"
      aria-label="Previous slide"
      variant="ghost"
      size="icon"
      onClick={() => scrollByItem(-1)}
      className={className}
      {...props}
    >
      {"<"}
    </Button>
  );
}

function CarouselNext({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollByItem } = useCarousel();
  return (
    <Button
      data-slot="carousel-next"
      aria-label="Next slide"
      variant="ghost"
      size="icon"
      onClick={() => scrollByItem(1)}
      className={className}
      {...props}
    >
      {">"}
    </Button>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
};
