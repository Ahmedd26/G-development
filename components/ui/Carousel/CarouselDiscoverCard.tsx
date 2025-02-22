"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image, { StaticImageData } from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface CarouselDiscoverCardProps {
  image: StaticImageData;
  category: string;
  date: string;
  title: string;
  content: string;
}

export default function CarouselDiscoverCard({
  image,
  category,
  date,
  title,
  content,
}: CarouselDiscoverCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      x: -500,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <article
      ref={cardRef}
      className="relative w-full max-w-[320px] sm:max-w-md md:max-w-xl lg:max-w-[690px]"
    >
      <Image
        src={image}
        alt="image"
        className="aspect-[16/7] object-cover object-center"
      />
      <div className="w-full space-y-1 bg-white p-5 md:space-y-1.5 md:p-6 lg:space-y-2 lg:p-7">
        <h3 className="text-sm font-normal capitalize text-design-gray lg:text-base lg:font-medium">
          {category} - {date}
        </h3>
        <h2 className="max-w-[24ch] text-2xl font-medium leading-9 text-black md:text-3xl lg:text-[40px] lg:leading-[50px]">
          {title}
        </h2>
        <p className="text-base font-medium text-black lg:text-xl">{content}</p>
      </div>
    </article>
  );
}
