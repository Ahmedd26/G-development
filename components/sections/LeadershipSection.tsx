"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import InfoCard from "@/components/ui/InfoCard";

gsap.registerPlugin(ScrollTrigger);

export default function LeadershipSection() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: -50,
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
    <section id="leadership" ref={sectionRef}>
      <div ref={cardRef}>
        <InfoCard
          className="px-4 py-10"
          title="Leadership"
          content="We aim to innovate and listen closely to our customers to provide them with the best customer experience in every aspect."
        />
      </div>
    </section>
  );
}
