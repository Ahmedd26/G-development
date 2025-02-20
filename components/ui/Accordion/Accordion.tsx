"use client";
import { useState } from "react";
import AccordionItem from "@/components/ui/Accordion/AccordionItem";

export interface AccordionData {
  heading: string;
  content: string;
}

interface AccordionProps {
  data: AccordionData[];
}

export default function Accordion({ data }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          heading={item.heading}
          content={item.content}
          isOpen={openIndex === index}
          toggleItem={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}
