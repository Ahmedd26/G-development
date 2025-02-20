import { TailwindClass } from "@/types/tailwind";
import { PropsWithChildren } from "react";

type SectionTitleProps = PropsWithChildren<{ className?: TailwindClass }>;

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <h2
      className={`${className} text-base font-medium capitalize leading-5 text-design-gray sm:text-xl md:text-2xl lg:text-3xl`}
    >
      {children}
    </h2>
  );
}
