"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import InfoCard from "@/components/ui/InfoCard";

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "restart pause reverse pause",
      },
    });
  }, []);

  return (
    <section id="our-story" ref={sectionRef}>
      <div ref={cardRef}>
        <InfoCard
          className="px-4 py-10"
          title="Our Story"
          content="We are a family-owned real estate development company based in Egypt.
            Since 1955, we have been committed to delivering timeless, quality
            developments that epitomize comfort and functionality."
        />
      </div>
    </section>
  );
}
