"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Stack from "@/components/ui/Stack";
import Image, { StaticImageData } from "next/image";
import { TailwindClass } from "@/types/tailwind";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

interface OverviewCardProps {
  image: StaticImageData;
  stat: number | string;
  title: string;
  overview: string;
  className?: TailwindClass;
  stackClassName?: TailwindClass;
}

export default function OverviewCard({
  image,
  stat,
  title,
  overview,
  className = "",
  stackClassName = "",
}: OverviewCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(imageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "restart pause reverse pause",
      },
    });

    // Animate the text column from the right
    gsap.from(textRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "restart pause reverse pause",
      },
    });
  }, []);

  return (
    <div className={`${className} mx-auto max-w-container px-4`}>
      <Stack
        ref={containerRef}
        className={`${stackClassName} border-t border-design-gray py-10`}
      >
        <div ref={imageRef} className="relative">
          <Image
            src={image}
            alt={`${title} image`}
            className="aspect-[2/1] max-w-[200px] object-cover sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
          />
        </div>
        <div ref={textRef}>
          <h3 className="mb-1 text-[28px] font-medium leading-9 sm:mb-1.5 md:mb-2 lg:mb-3 lg:text-[40px] lg:leading-[50px]">
            {stat.toLocaleString()}
          </h3>
          <h2 className="mb-3 text-2xl font-medium text-design-gray sm:mb-6 sm:text-xl md:mb-8 md:text-2xl lg:mb-14 lg:text-3xl">
            {title}
          </h2>
          <p className="text-sm text-black sm:text-base md:text-lg">
            {overview}
          </p>
        </div>
      </Stack>
    </div>
  );
}
