"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import heroImg from "@/public/hero-image.png";

export default function HeroSection() {
  const headerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.fromTo(headerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });

    tl.from(headingRef.current, { y: 50, opacity: 0, duration: 1 }, "-=0.5");

    tl.from(paragraphRef.current, { y: 50, opacity: 0, duration: 1 }, "-=0.75");
  }, []);

  return (
    <header
      id="hero-section"
      ref={headerRef}
      className="relative min-h-dvh shadow-inner shadow-black"
    >
      <Image
        src={heroImg}
        fill
        className="-z-10 object-cover"
        alt="Our headquarter image"
      />
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <div className="mx-auto mb-[100px] max-w-container px-4">
          <h1
            ref={headingRef}
            className="mb-6 text-[40px] font-medium leading-[50px] text-white md:text-[120px] md:leading-[150px]"
          >
            About us
          </h1>
          <p
            ref={paragraphRef}
            className="text-2xl font-medium text-white md:max-w-[40%] md:text-[28px]"
          >
            Real Estate developer blending timeless design with comfortable
            living.
          </p>
        </div>
      </div>
    </header>
  );
}
