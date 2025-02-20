import { TailwindClass } from "@/types/tailwind";
import React, { PropsWithChildren } from "react";

type StackProps = PropsWithChildren<{
  className?: TailwindClass;
}>;

export default function Stack({ children, className = "" }: StackProps) {
  // Ensure exactly two children are passed
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length > 2) {
    throw new Error("Stack component requires exactly two children.");
  }

  return (
    <div
      className={`grid grid-rows-[auto_1fr] justify-between gap-6 md:grid-cols-2 md:grid-rows-1 ${className}`}
    >
      {/* Render the first and second children separately, gives the flexibility of styling each child individually */}
      {childrenArray[0]}
      {childrenArray[1]}
    </div>
  );
}
