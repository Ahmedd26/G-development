"use client";
import CarouselNavigator from "@/components/ui/Carousel/CarouselNavigator";
import CarouselProgressBar from "@/components/ui/Carousel/CarouselProgressBar";
import { useRef, useState } from "react";

interface CarouselProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

export default function Carousel<T>({ data, renderItem }: CarouselProps<T>) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentItem, setCurrentItem] = useState(1);

  const nextItem = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
      if (currentItem === data.length) return;
      setCurrentItem((prev) => prev + 1);
    }
  };

  const previousItem = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
      if (currentItem === 1) return;
      setCurrentItem((prev) => prev - 1);
    }
  };

  return (
    <div className="relative py-10">
      <CarouselNavigator
        className="hidden sm:flex"
        nextItem={nextItem}
        previousItem={previousItem}
      />
      <div
        ref={carouselRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="w-auto shrink-0 snap-center sm:snap-start"
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
      <CarouselProgressBar
        className="mt-12"
        currentItem={currentItem}
        totalItems={data.length}
      />
    </div>
  );
}
