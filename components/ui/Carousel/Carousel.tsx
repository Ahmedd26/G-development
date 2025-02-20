"use client";
import CarouselCard from "@/components/ui/Carousel/CarouselCard";
import CarouselNavigator from "@/components/ui/Carousel/CarouselNavigator";
import CarouselProgressBar from "@/components/ui/Carousel/CarouselProgressBar";
import { StaticImageData } from "next/image";
import { useRef, useState } from "react";

interface CarouselProps {
  data: { image: StaticImageData; name: string; role: string }[];
}

export default function Carousel({ data }: CarouselProps) {
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
      <CarouselNavigator nextItem={nextItem} previousItem={previousItem} />
      <div
        ref={carouselRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth"
      >
        {data.map((item) => (
          <div
            key={item.name}
            className="w-auto shrink-0 snap-center sm:snap-start"
          >
            <CarouselCard
              image={item.image}
              name={item.name}
              role={item.role}
            />
          </div>
        ))}
      </div>
      <CarouselProgressBar
        className="lg:mt-12"
        currentItem={currentItem}
        totalItems={data.length}
      />
    </div>
  );
}
