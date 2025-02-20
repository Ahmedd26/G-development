import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface AccordionItemProps {
  index: number;
  heading: string;
  content: string;
  isOpen: boolean;
  toggleItem: () => void;
}

export default function AccordionItem({
  index,
  heading,
  content,
  isOpen,
  toggleItem,
}: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const contentInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && contentInnerRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          height: contentInnerRef.current.offsetHeight,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-300">
      <button
        className="flex w-full items-center justify-between py-6"
        onClick={toggleItem}
      >
        <div className="flex items-center">
          <span className="me-4 text-xl font-medium">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-xl font-medium">{heading}</h3>
        </div>
        <span className="ms-6 flex-shrink-0 text-2xl">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0 }}>
        <div ref={contentInnerRef} className="pb-6 pt-4">
          <p className="text-base font-light">{content}</p>
        </div>
      </div>
    </div>
  );
}
