"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TailwindClass } from "@/types/tailwind";
import Image, { StaticImageData } from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface CarouselCardProps {
  image: StaticImageData;
  name: string;
  role: string;
  className?: TailwindClass;
  delay?: number;
}

export default function CarouselCard({
  image,
  name,
  role,
  className = "",
  delay = 0,
}: CarouselCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        toggleActions: "restart pause reverse pause",
      },
    });

    tl.from(cardRef.current, {
      x: -50,
      y: -50,
      opacity: 0,
      duration: 0.3,
      ease: "power1.out",
      delay,
    }).to(cardRef.current, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "elastic.out(1, 2)",
    });
  }, [delay]);

  return (
    <article
      ref={cardRef}
      className={`relative aspect-square w-full min-w-80 bg-[#F6F6F6] sm:w-80 lg:w-[517px] ${className}`}
    >
      <Image src={image} alt="person" className="object-cover" fill />
      <div className="absolute bottom-0 left-0 right-0 m-4 bg-white p-7">
        <h3 className="text-2xl font-medium sm:text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px]">
          {name}
        </h3>
        <h4 className="text-lg font-medium sm:text-xl">{role}</h4>
      </div>
    </article>
  );
}
