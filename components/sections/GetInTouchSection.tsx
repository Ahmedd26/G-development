"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function GetInTouchSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Animate the left column (heading) from top left offscreen into place
    gsap.from(leftRef.current, {
      x: -100,
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Animate the right column (button) from bottom right offscreen into place
    gsap.from(rightRef.current, {
      x: 100,
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mx-auto flex max-w-container flex-col items-start gap-6 px-4 py-10 sm:py-12 md:flex-row md:items-center md:justify-between md:py-16 lg:py-20"
    >
      <h2
        ref={leftRef}
        className="max-w-[25ch] text-[28px] font-medium leading-9 sm:text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px]"
      >
        Are you interested in a property or have any other inquiries?
      </h2>
      <div ref={rightRef}>
        <Button
          variant="primary"
          className="flex items-center gap-1"
          theme="dark"
          size="lg"
        >
          <span>Get In Touch</span>
          <span>&rarr;</span>
        </Button>
      </div>
    </div>
  );
}
